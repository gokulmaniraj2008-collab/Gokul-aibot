import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() => runApp(const QueueLensApp());

class QueueLensApp extends StatelessWidget {
  const QueueLensApp({super.key});
  @override
  Widget build(BuildContext context) => MaterialApp(
    debugShowCheckedModeBanner: false,
    title: 'QueueLens',
    theme: ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF7C3AED)), useMaterial3: true),
    home: const HomePage(),
  );
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});
  @override State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int reports = 0;
  final locations = const [
    ('RVS Campus Clinic', '18 people', '22 min', 'Moderate'),
    ('City Service Counter', '6 people', '8 min', 'Low'),
    ('Student Help Desk', '31 people', '35 min', 'High'),
  ];

  Future<void> report() async {
    final p = await SharedPreferences.getInstance();
    final next = (p.getInt('reports') ?? 0) + 1;
    await p.setInt('reports', next);
    setState(() => reports = next);
    if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Queue report saved offline.')));
  }

  @override
  void initState() { super.initState(); _load(); }
  Future<void> _load() async { final p = await SharedPreferences.getInstance(); setState(() => reports = p.getInt('reports') ?? 0); }

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('QueueLens', style: TextStyle(fontWeight: FontWeight.w800)), actions: [Padding(padding: const EdgeInsets.only(right: 16), child: Center(child: Text('Reports $reports')))]),
    body: ListView(padding: const EdgeInsets.all(18), children: [
      Container(padding: const EdgeInsets.all(20), decoration: BoxDecoration(borderRadius: BorderRadius.circular(24), gradient: const LinearGradient(colors: [Color(0xFF7C3AED), Color(0xFFA855F7)])), child: const Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text('KNOW BEFORE YOU GO', style: TextStyle(color: Colors.white70, fontSize: 11, fontWeight: FontWeight.w700)), SizedBox(height: 8), Text('See the queue before you travel.', style: TextStyle(color: Colors.white, fontSize: 25, fontWeight: FontWeight.w800)), SizedBox(height: 8), Text('Community reports turn waiting time into useful local intelligence.', style: TextStyle(color: Colors.white70))]),
      const SizedBox(height: 24),
      const Text('Nearby queues', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w800)),
      const SizedBox(height: 10),
      ...locations.map((x) => Card(margin: const EdgeInsets.only(bottom: 10), child: ListTile(contentPadding: const EdgeInsets.all(14), title: Text(x.$1, style: const TextStyle(fontWeight: FontWeight.w700)), subtitle: Text('${x.$2} · estimated ${x.$3}'), trailing: Chip(label: Text(x.$4)),))),
      const SizedBox(height: 10),
      FilledButton.icon(onPressed: report, icon: const Icon(Icons.campaign_outlined), label: const Padding(padding: EdgeInsets.symmetric(vertical: 13), child: Text('Report the queue I see'))),
      const SizedBox(height: 14),
      const Text('Reports are stored on-device so the app remains useful when connectivity is unavailable.', style: TextStyle(color: Colors.grey, height: 1.5)),
    ],
  );
}
