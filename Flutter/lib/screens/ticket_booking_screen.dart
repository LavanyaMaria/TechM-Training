import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class TicketBookingScreen extends StatefulWidget {
  const TicketBookingScreen({Key? key}) : super(key: key);

  @override
  _TicketBookingScreenState createState() => _TicketBookingScreenState();
}

class _TicketBookingScreenState extends State<TicketBookingScreen> {
  String selectedEvent = "Zoo Safari"; // Default event
  int ticketCount = 1;
  DateTime selectedDate = DateTime.now();
  TimeOfDay selectedTime = TimeOfDay.now();
  final TextEditingController nameController = TextEditingController();
  final TextEditingController emailController = TextEditingController();

  // Pick a date
  Future<void> _selectDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: selectedDate,
      firstDate: DateTime.now(),
      lastDate: DateTime(2026),
    );
    if (picked != null) setState(() => selectedDate = picked);
  }

  // Pick a time
  Future<void> _selectTime() async {
    final picked = await showTimePicker(
      context: context,
      initialTime: selectedTime,
    );
    if (picked != null) setState(() => selectedTime = picked);
  }

  // Booking Confirmation
  void _confirmBooking() async {
    if (nameController.text.isEmpty || emailController.text.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("Please enter your details")),
      );
      return;
    }

    // Booking details
    Map<String, dynamic> bookingData = {
      "event": selectedEvent,
      "tickets": ticketCount,
      "date": selectedDate.toLocal().toString().split(' ')[0],
      "time": selectedTime.format(context),
      "name": nameController.text,
      "email": emailController.text,
      "timestamp": FieldValue.serverTimestamp(), // Auto-generated timestamp
    };

    try {
      await FirebaseFirestore.instance.collection("bookings").add(bookingData);

      // Show confirmation dialog
      showDialog(
        context: context,
        builder:
            (context) => AlertDialog(
              title: const Text("Booking Confirmed"),
              content: Text("""
        Event: ${bookingData["event"]}
        Tickets: ${bookingData["tickets"]}
        Date: ${bookingData["date"]}
        Time: ${bookingData["time"]}
        Name: ${bookingData["name"]}
        Email: ${bookingData["email"]}
        """),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: const Text("OK"),
                ),
              ],
            ),
      );
    } catch (e) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(SnackBar(content: Text("Error: ${e.toString()}")));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Book Your Ticket")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          children: [
            // Event Selection
            const Text(
              "Select Event:",
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8.0),
              child: DropdownButton<String>(
                value: selectedEvent,
                isExpanded: true,
                onChanged:
                    (newValue) => setState(() => selectedEvent = newValue!),
                items:
                    ["Zoo Safari", "Night Tour", "Animal Feeding"]
                        .map(
                          (event) => DropdownMenuItem(
                            value: event,
                            child: Text(event),
                          ),
                        )
                        .toList(),
              ),
            ),

            // Ticket Counter
            const SizedBox(height: 20),
            const Text(
              "Number of Tickets:",
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            Row(
              children: [
                IconButton(
                  icon: const Icon(Icons.remove),
                  onPressed:
                      ticketCount > 1
                          ? () => setState(() => ticketCount--)
                          : null,
                ),
                Text("$ticketCount", style: const TextStyle(fontSize: 18)),
                IconButton(
                  icon: const Icon(Icons.add),
                  onPressed: () => setState(() => ticketCount++),
                ),
              ],
            ),

            // Date Picker
            const SizedBox(height: 20),
            const Text(
              "Select Date:",
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            ListTile(
              title: Text("${selectedDate.toLocal()}".split(' ')[0]),
              trailing: ElevatedButton(
                onPressed: _selectDate,
                child: const Text("Pick Date"),
              ),
            ),

            // Time Picker
            const SizedBox(height: 20),
            const Text(
              "Select Time:",
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            ListTile(
              title: Text(selectedTime.format(context)),
              trailing: ElevatedButton(
                onPressed: _selectTime,
                child: const Text("Pick Time"),
              ),
            ),

            // User Details Input
            const SizedBox(height: 20),
            const Text(
              "Your Details:",
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8.0),
              child: TextField(
                controller: nameController,
                decoration: const InputDecoration(labelText: "Full Name"),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8.0),
              child: TextField(
                controller: emailController,
                decoration: const InputDecoration(labelText: "Email"),
                keyboardType: TextInputType.emailAddress,
              ),
            ),

            // Confirm Button
            const SizedBox(height: 20),
            Center(
              child: ElevatedButton(
                onPressed: _confirmBooking,
                child: const Text("Confirm Booking"),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
