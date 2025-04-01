import 'package:flutter/material.dart';
import 'package:task/services/api_service.dart';
import 'animal_detail_screen.dart';

class AnimalListScreen extends StatefulWidget {
  const AnimalListScreen({super.key});

  @override
  _AnimalListScreenState createState() => _AnimalListScreenState();
}

class _AnimalListScreenState extends State<AnimalListScreen> {
  final ApiService _apiService = ApiService();
  late Future<List<dynamic>> _animals;

  @override
  void initState() {
    super.initState();
    _animals = _apiService.fetchAnimals();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Zoo Animals')),
      body: FutureBuilder<List<dynamic>>(
        future: _animals,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return const Center(child: Text("Error fetching animals"));
          } else {
            final animals = snapshot.data!;
            return GridView.builder(
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                childAspectRatio: 0.8,
              ),
              itemCount: animals.length,
              itemBuilder: (context, index) {
                final animal = animals[index];
                return GestureDetector(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => AnimalDetailScreen(animal: animal),
                      ),
                    );
                  },
                  child: Card(
                    child: Column(
                      children: [
                        Image.network(animal['image_link'], height: 100, fit: BoxFit.cover),
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text(animal['name'], style: TextStyle(fontSize: 16)),
                        ),
                      ],
                    ),
                  ),
                );
              },
            );
          }
        },
      ),
    );
  }
}
