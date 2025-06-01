import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  late GoogleMapController mapController;
  final LatLng _center = const LatLng(47.6062, -122.3321);
  Set<Marker> _markers = {};

  void _onMapCreated(GoogleMapController controller) {
    mapController = controller;
    _loadMarkers();
  }

  Future<void> _loadMarkers() async {
    try {
      final snapshot = await FirebaseFirestore.instance.collection('restrooms').get();
      final markers = snapshot.docs.map((doc) {
        final data = doc.data();
        return Marker(
          markerId: MarkerId(doc.id),
          position: LatLng(data['latitude'], data['longitude']),
          infoWindow: InfoWindow(title: data['name']),
        );
      }).toSet();

      setState(() {
        _markers = markers;
      });
    } catch (e) {
      print('❌ Error loading markers: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('PottyDash Map'),
      ),
      body: GoogleMap(
        onMapCreated: _onMapCreated,
        initialCameraPosition: CameraPosition(target: _center, zoom: 12),
        markers: _markers,
      ),
    );
  }
}
