import 'package:flutter/material.dart';

class AnimalDetailScreen extends StatelessWidget {
  final dynamic animal;

  const AnimalDetailScreen({super.key, required this.animal});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(animal['name'])),
      body: Column(
        children: [
          Image.network(animal['image_link'], height: 200, fit: BoxFit.cover),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("Habitat: ${animal['habitat']}", style: TextStyle(fontSize: 18)),
                Text("Diet: ${animal['diet']}", style: TextStyle(fontSize: 18)),
                Text("Lifespan: ${animal['lifespan']} years", style: TextStyle(fontSize: 18)),
                Text("Fun Fact: ${animal['fun_fact']}", style: TextStyle(fontSize: 16, fontStyle: FontStyle.italic)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
