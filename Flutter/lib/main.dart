import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:task/screens/ticket_booking_screen.dart';
import 'package:task/screens/animal_list_screen.dart';
import 'package:task/localization/app_localizations.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:task/screens/home_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const ZooExplorerApp());
}

class ZooExplorerApp extends StatefulWidget {
  const ZooExplorerApp({super.key});

  @override
  _ZooExplorerAppState createState() => _ZooExplorerAppState();
}

class _ZooExplorerAppState extends State<ZooExplorerApp> {
  Locale _currentLocale = const Locale('en', 'US'); // Default to English

  @override
  void initState() {
    super.initState();
    _loadSavedLocale();
  }

  Future<void> _loadSavedLocale() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String? localeCode = prefs.getString('language_code');

    if (localeCode != null) {
      setState(() {
        _currentLocale = Locale(localeCode);
      });
    }
  }

  Future<void> _changeLanguage(Locale newLocale) async {
    setState(() {
      _currentLocale = newLocale;
    });

    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString('language_code', newLocale.languageCode);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Zoo Explorer',
      theme: ThemeData(
        primarySwatch: Colors.green,
        scaffoldBackgroundColor: const Color(0xFFDFFFD6),
      ),
      locale: _currentLocale,
      supportedLocales: const [
        Locale('en', 'US'),
        Locale('es', 'ES'),
        Locale('fr', 'FR'),
      ],
      localizationsDelegates: const [
        AppLocalizations.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      localeResolutionCallback: (locale, supportedLocales) {
        return supportedLocales.firstWhere(
          (supportedLocale) =>
              supportedLocale.languageCode == locale?.languageCode,
          orElse: () => const Locale('en', 'US'),
        );
      },
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(onLanguageChanged: _changeLanguage),
        '/bookTickets': (context) => const TicketBookingScreen(),
        '/exploreAnimals': (context) => const AnimalListScreen(),
      },
    );
  }
}
