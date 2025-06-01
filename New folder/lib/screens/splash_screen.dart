import 'package:flutter/material.dart';
import 'map_screen.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Future.delayed(Duration(seconds: 2), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => MapScreen()),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.wc, size: 100, color: Theme.of(context).primaryColor),
            SizedBox(height: 20),
            Text('PottyDash', style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold)),
            SizedBox(height: 10),
            Text('Know Before You Go', style: TextStyle(fontSize: 16)),
            SizedBox(height: 20),
            CircularProgressIndicator(),
          ],
        ),
      ),
    );
  }
}
