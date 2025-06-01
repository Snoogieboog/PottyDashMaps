import 'package:flutter/material.dart';
import 'screens/splash_screen.dart';

void main() {
  runApp(PottyDashApp());
}

class PottyDashApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'PottyDash',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: Color(0xFF005EA8),
        scaffoldBackgroundColor: Color(0xFFF5EDE1),
        fontFamily: 'Roboto',
      ),
      home: SplashScreen(),
    );
  }
}
