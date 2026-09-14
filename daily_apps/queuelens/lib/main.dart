import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() => runApp(const QueueLensApp());

class QueueLensApp extends StatelessWidget {
  const QueueLensApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'QueueLens',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF7C3AED),
        ),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class QueueLocation {
  const QueueLocation({
    required this.name,
    required this.people,
    required this.wait,
    required this.level,
  });

  final String name;
  final String people;
  final String wait;
  final String level;
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int reports = 0;

  static const locations = <QueueLocation>[
    QueueLocation(
      name: 'RVS Campus Clinic',
      people: '18 people',
      wait: '22 min',
      level: 'Moderate',
    ),
    QueueLocation(
      name: 'City Service Counter',
      people: '6 people',
      wait: '8 min',
      level: 'Low',
    ),
    QueueLocation(
      name: 'Student Help Desk',
      people: '31 people',
      wait: '35 min',
      level: 'High',
    ),
  ];

  @override
  void initState() {
    super.initState();
    _loadReports();
  }

  Future<void> _loadReports() async {
    final prefs = await SharedPreferences.getInstance();
    if (!mounted) return;
    setState(() => reports = prefs.getInt('reports') ?? 0);
  }

  Future<void> _reportQueue() async {
    final prefs = await SharedPreferences.getInstance();
    final next = (prefs.getInt('reports') ?? 0) + 1;
    await prefs.setInt('reports', next);
    if (!mounted) return;
    setState(() => reports = next);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Queue report saved offline.')),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'QueueLens',
          style: TextStyle(fontWeight: FontWeight.w800),
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 16),
            child: Center(child: Text('Reports $reports')),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(18),
        children: [
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(24),
              gradient: const LinearGradient(
                colors: [Color(0xFF7C3AED), Color(0xFFA855F7)],
              ),
            ),
            child: const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'KNOW BEFORE YOU GO',
                  style: TextStyle(
                    color: Colors.white70,
                    fontSize: 11,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                SizedBox(height: 8),
                Text(
                  'See the queue before you travel.',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 25,
                    fontWeight: FontWeight.w800,
                  ),
                ),
                SizedBox(height: 8),
                Text(
                  'Community reports turn waiting time into useful local intelligence.',
                  style: TextStyle(color: Colors.white70),
                ),
              ],
            ),
          ),
          const SizedBox(height: 24),
          const Text(
            'Nearby queues',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 10),
          ...locations.map(
            (location) => Card(
              margin: const EdgeInsets.only(bottom: 10),
              child: ListTile(
                contentPadding: const EdgeInsets.all(14),
                title: Text(
                  location.name,
                  style: const TextStyle(fontWeight: FontWeight.w700),
                ),
                subtitle: Text(
                  '${location.people} · estimated ${location.wait}',
                ),
                trailing: Chip(label: Text(location.level)),
              ),
            ),
          ),
          const SizedBox(height: 10),
          FilledButton.icon(
            onPressed: _reportQueue,
            icon: const Icon(Icons.campaign_outlined),
            label: const Padding(
              padding: EdgeInsets.symmetric(vertical: 13),
              child: Text('Report the queue I see'),
            ),
          ),
          const SizedBox(height: 14),
          const Text(
            'Reports are stored on-device so the app remains useful when connectivity is unavailable.',
            style: TextStyle(color: Colors.grey, height: 1.5),
          ),
        ],
      ),
    );
  }
}
