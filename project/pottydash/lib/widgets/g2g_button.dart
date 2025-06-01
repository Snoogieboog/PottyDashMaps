import 'package:flutter/material.dart';

class G2GButton extends StatelessWidget {
  final Widget child;

  const G2GButton({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        // Implement G2G button logic here
      },
      child: child,
    );
  }
}
