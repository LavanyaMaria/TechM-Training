import 'dart:convert';
import 'package:flutter/services.dart';

class ApiService {
  Future<List<dynamic>> fetchAnimals() async {
    try {
      final String response = await rootBundle.loadString(
        'assets/zoo_animals.json',
      );
      final dynamic jsonData = json.decode(response);

      if (jsonData is List) {
        return jsonData; // ✅ Return as a list (correct format)
      } else if (jsonData is Map<String, dynamic>) {
        return jsonData['animals'] ?? []; // Adjust if the API has a nested list
      } else {
        return []; // Return empty if format is incorrect
      }
    } catch (e) {
      print("Error loading local JSON: $e");
      return [];
    }
  }
}
