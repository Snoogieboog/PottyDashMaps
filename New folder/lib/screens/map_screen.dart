import 'package:flutter/material.dart';

class MapScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Find a Restroom')),
      body: Center(
        child: Text(
          'Map Coming Soon...',
          style: TextStyle(fontSize: 20),
        ),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          // To be linked with G2G logic
        },
        icon: Icon(Icons.directions_run),
        label: Text('G2G'),
        backgroundColor: Theme.of(context).primaryColor,
      ),
    );
  }
}
