import 'package:flutter/material.dart';
import 'package:task/localization/app_localizations.dart';

class HomeScreen extends StatelessWidget {
  final Function(Locale) onLanguageChanged;

  const HomeScreen({required this.onLanguageChanged, super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white, // ✅ AppBar background for visibility
        elevation: 2, // ✅ Adds a slight shadow to separate it
        title: Text(
          AppLocalizations.of(context)?.translate("welcome") ?? "Welcome",
          style: const TextStyle(
            color: Colors.black, // ✅ Ensures text is visible
            fontWeight: FontWeight.bold,
          ),
        ),
        centerTitle: true, // ✅ Centers the title for better alignment
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 16.0),
            child: _LanguageDropdown(onLanguageChanged: onLanguageChanged),
          ),
        ],
      ),
      backgroundColor: const Color(0xFFDFFFD6), // Soft green background
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(
              width: 200,
              child: Image.asset(
                'assets/zoo_logo.png',
                errorBuilder:
                    (context, error, stackTrace) => const Icon(
                      Icons.broken_image,
                      size: 100,
                      color: Colors.red,
                    ),
              ),
            ),
            const SizedBox(height: 20),
            _HomeButton(
              label:
                  AppLocalizations.of(context)?.translate("book_tickets") ??
                  "Book Tickets",
              route: '/bookTickets',
            ),
            const SizedBox(height: 10),
            _HomeButton(
              label:
                  AppLocalizations.of(context)?.translate("explore_animals") ??
                  "Explore Animals",
              route: '/exploreAnimals',
            ),
          ],
        ),
      ),
    );
  }
}

class _HomeButton extends StatelessWidget {
  final String label;
  final String route;

  const _HomeButton({required this.label, required this.route, super.key});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => Navigator.pushNamed(context, route),
      child: Text(label),
    );
  }
}

// 🔹 Improved Language Dropdown
class _LanguageDropdown extends StatelessWidget {
  final Function(Locale) onLanguageChanged;

  const _LanguageDropdown({required this.onLanguageChanged, super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: 8,
        vertical: 4,
      ), // ✅ Padding for better spacing
      decoration: BoxDecoration(
        color: Colors.white, // ✅ Ensures visibility on AppBar
        borderRadius: BorderRadius.circular(8),
        border: Border.all(
          color: Colors.black12,
        ), // ✅ Light border for distinction
      ),
      child: DropdownButtonHideUnderline(
        child: DropdownButton<Locale>(
          icon: const Icon(
            Icons.language,
            color: Colors.black,
          ), // ✅ Dark icon for contrast
          style: const TextStyle(
            color: Colors.black,
            fontSize: 16,
          ), // ✅ Text clearly visible
          dropdownColor: Colors.white, // ✅ Dropdown menu background
          onChanged: (Locale? newLocale) {
            if (newLocale != null) {
              onLanguageChanged(newLocale);
            }
          },
          items: const [
            DropdownMenuItem(
              value: Locale('en', 'US'),
              child: Text('🇺🇸 English'),
            ),
            DropdownMenuItem(
              value: Locale('es', 'ES'),
              child: Text('🇪🇸 Español'),
            ),
            DropdownMenuItem(
              value: Locale('fr', 'FR'),
              child: Text('🇫🇷 Français'),
            ),
          ],
        ),
      ),
    );
  }
}
