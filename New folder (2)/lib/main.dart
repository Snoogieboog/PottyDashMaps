// PottyDash App
// Flutter 3.32+ | V2 Embedding | Supabase + Google Maps + Ratings + Status + Submissions

import 'dart:math';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:location/location.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Supabase.initialize(
    url: 'https://pottydash-1a8ff.supabase.co',
    anonKey: 'AIzaSyAqOcv5KhzPgk6BskYD7HZS8l57PGzuQzQ',
  );
  runApp(const PottyDashApp());
}

class PottyDashApp extends StatelessWidget {
  const PottyDashApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'PottyDash',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
      ),
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  late GoogleMapController _mapController;
  final LatLng _defaultCenter = const LatLng(47.6062, -122.3321);
  Set<Marker> _markers = {};
  LocationData? _currentLocation;

  @override
  void initState() {
    super.initState();
    _fetchUserLocation();
    _fetchRestrooms();
  }

  Future<void> _fetchUserLocation() async {
    final location = Location();
    final hasPermission = await location.hasPermission();
    if (hasPermission == PermissionStatus.denied) {
      await location.requestPermission();
    }
    final current = await location.getLocation();
    setState(() => _currentLocation = current);
  }

  void _onMapCreated(GoogleMapController controller) {
    _mapController = controller;
  }

  Future<void> _fetchRestrooms() async {
    try {
      final response = await Supabase.instance.client.from('restrooms').select();
      final markers = response.map<Marker>((restroom) {
        final rating = restroom['rating'] ?? 0.0;
        final status = restroom['status'] ?? 'Unknown';
        return Marker(
          markerId: MarkerId(restroom['id'].toString()),
          position: LatLng(restroom['latitude'], restroom['longitude']),
          infoWindow: InfoWindow(
            title: restroom['name'],
            snippet: '⭐ $rating | Status: $status',
            onTap: () => _showDetailsDialog(restroom),
          ),
        );
      }).toSet();
      setState(() => _markers = markers);
    } catch (e) {
      debugPrint('❌ Error fetching restrooms: $e');
    }
  }

  void _showDetailsDialog(dynamic restroom) {
    showDialog(
      context: context,
      builder: (_) => AlertDialog(
        title: Text(restroom['name']),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('Status: ${restroom['status']}'),
            Text('Rating: ⭐ ${restroom['rating']}'),
            const SizedBox(height: 10),
            ElevatedButton(
              onPressed: () => Navigator.of(context).pop(),
              child: const Text('Close'),
            )
          ],
        ),
      ),
    );
  }

  void _goToNearest() {
    if (_markers.isEmpty || _currentLocation == null) return;

    Marker? closest;
    double shortestDistance = double.infinity;

    for (var marker in _markers) {
      final distance = _calculateDistance(
        _currentLocation!.latitude!,
        _currentLocation!.longitude!,
        marker.position.latitude,
        marker.position.longitude,
      );
      if (distance < shortestDistance) {
        shortestDistance = distance;
        closest = marker;
      }
    }

    if (closest != null) {
      _mapController.animateCamera(CameraUpdate.newLatLngZoom(closest.position, 16));
    }
  }

  double _calculateDistance(double lat1, double lon1, double lat2, double lon2) {
    const p = 0.0174533;
    final a = 0.5 - cos((lat2 - lat1) * p)/2 +
      cos(lat1 * p) * cos(lat2 * p) * (1 - cos((lon2 - lon1) * p)) / 2;
    return 12742 * asin(sqrt(a));
  }

  void _submitRestroom() {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (_) => const SubmitRestroomScreen(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('PottyDash Map'),
        centerTitle: true,
        actions: [
          IconButton(
            onPressed: _goToNearest,
            icon: const Icon(Icons.my_location),
            tooltip: 'Go to Nearest Toilet',
          ),
          IconButton(
            onPressed: _submitRestroom,
            icon: const Icon(Icons.add_location_alt),
            tooltip: 'Submit New Restroom',
          )
        ],
      ),
      body: GoogleMap(
        initialCameraPosition: CameraPosition(target: _defaultCenter, zoom: 12),
        onMapCreated: _onMapCreated,
        markers: _markers,
        myLocationEnabled: true,
        myLocationButtonEnabled: false,
      ),
    );
  }
}

class SubmitRestroomScreen extends StatefulWidget {
  const SubmitRestroomScreen({super.key});

  @override
  State<SubmitRestroomScreen> createState() => _SubmitRestroomScreenState();
}

class _SubmitRestroomScreenState extends State<SubmitRestroomScreen> {
  final TextEditingController nameController = TextEditingController();
  final TextEditingController statusController = TextEditingController();
  double latitude = 0.0;
  double longitude = 0.0;

  void _getLocation() async {
    final location = Location();
    final current = await location.getLocation();
    setState(() {
      latitude = current.latitude ?? 0.0;
      longitude = current.longitude ?? 0.0;
    });
  }

  void _submit() async {
    if (nameController.text.isEmpty || statusController.text.isEmpty || latitude == 0.0 || longitude == 0.0) return;

    await Supabase.instance.client.from('restrooms').insert({
      'name': nameController.text,
      'status': statusController.text,
      'rating': 0.0,
      'latitude': latitude,
      'longitude': longitude,
    });

    Navigator.of(context).pop();
  }

  @override
  void initState() {
    super.initState();
    _getLocation();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Submit Restroom')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(controller: nameController, decoration: const InputDecoration(labelText: 'Restroom Name')),
            TextField(controller: statusController, decoration: const InputDecoration(labelText: 'Status (Open/Closed)')),
            const SizedBox(height: 20),
            ElevatedButton(onPressed: _submit, child: const Text('Submit')),
          ],
        ),
      ),
    );
  }
}
