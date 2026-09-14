import 'dart:async';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() => runApp(const StudySprintApp());

class StudySprintApp extends StatelessWidget {
  const StudySprintApp({super.key});
  @override
  Widget build(BuildContext context) => MaterialApp(
    debugShowCheckedModeBanner: false,
    title: 'StudySprint',
    theme: ThemeData(useMaterial3: true, colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF5B4BDB)), scaffoldBackgroundColor: const Color(0xFFF7F7FC)),
    home: const StudyHome(),
  );
}

class StudyHome extends StatefulWidget {
  const StudyHome({super.key});
  @override State<StudyHome> createState() => _StudyHomeState();
}

class _StudyHomeState extends State<StudyHome> {
  final task = TextEditingController();
  List<String> tasks = [];
  int completed = 0;
  int seconds = 25 * 60;
  Timer? timer;
  bool running = false;

  @override void initState() { super.initState(); load(); }
  Future<void> load() async {
    final p = await SharedPreferences.getInstance();
    setState(() { tasks = p.getStringList('tasks') ?? []; completed = p.getInt('completed') ?? 0; });
  }
  Future<void> save() async {
    final p = await SharedPreferences.getInstance();
    await p.setStringList('tasks', tasks);
    await p.setInt('completed', completed);
  }
  void addTask() {
    final value = task.text.trim();
    if (value.isEmpty) return;
    setState(() { tasks.insert(0, value); task.clear(); });
    save();
  }
  void finishTask(int index) {
    setState(() { tasks.removeAt(index); completed++; });
    save();
  }
  void toggleTimer() {
    if (running) { timer?.cancel(); setState(() => running = false); return; }
    setState(() => running = true);
    timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (seconds <= 1) { timer?.cancel(); setState(() { seconds = 25 * 60; running = false; }); }
      else { setState(() => seconds--); }
    });
  }
  void resetTimer() { timer?.cancel(); setState(() { seconds = 25 * 60; running = false; }); }
  String clock() => '${(seconds ~/ 60).toString().padLeft(2, '0')}:${(seconds % 60).toString().padLeft(2, '0')}';
  @override void dispose() { timer?.cancel(); task.dispose(); super.dispose(); }

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text('StudySprint', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 23)), Text('One focused session at a time', style: TextStyle(fontSize: 12, color: Colors.black54))]), actions: [IconButton(onPressed: () => showAboutDialog(context: context, applicationName: 'StudySprint', applicationVersion: '1.0.0', children: const [Text('Offline-first study planner and focus timer.')]), icon: const Icon(Icons.info_outline))]),
    body: ListView(padding: const EdgeInsets.fromLTRB(20, 10, 20, 32), children: [
      Container(padding: const EdgeInsets.all(22), decoration: BoxDecoration(gradient: const LinearGradient(colors: [Color(0xFF4338CA), Color(0xFF7C3AED)]), borderRadius: BorderRadius.circular(28)), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [Container(width: 52, height: 52, decoration: BoxDecoration(color: Colors.white.withOpacity(.15), borderRadius: BorderRadius.circular(17)), child: const Icon(Icons.bolt_rounded, color: Colors.white, size: 29)), const SizedBox(width: 14), const Expanded(child: Text('Make the next 25 minutes count.', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900, height: 1.1)))]),
        const SizedBox(height: 18), Text('$completed sessions completed', style: const TextStyle(color: Colors.white70, fontSize: 12)),
      ]),
      const SizedBox(height: 16),
      Card(elevation: 0, color: Colors.white, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)), child: Padding(padding: const EdgeInsets.all(20), child: Column(children: [const Text('FOCUS TIMER', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.8, color: Colors.black45)), const SizedBox(height: 6), Text(clock(), style: const TextStyle(fontSize: 52, fontWeight: FontWeight.w900, letterSpacing: -3)), const SizedBox(height: 4), Text(running ? 'Stay with the task.' : 'Ready when you are.', style: const TextStyle(color: Colors.black54)), const SizedBox(height: 14), Row(mainAxisAlignment: MainAxisAlignment.center, children: [FilledButton.icon(onPressed: toggleTimer, icon: Icon(running ? Icons.pause : Icons.play_arrow), label: Text(running ? 'Pause' : 'Start')), const SizedBox(width: 10), OutlinedButton(onPressed: resetTimer, child: const Text('Reset'))])]))),
      const SizedBox(height: 20),
      Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('Today’s sprint', style: TextStyle(fontSize: 19, fontWeight: FontWeight.w900)), Text('${tasks.length} left', style: const TextStyle(fontSize: 12, color: Colors.black45, fontWeight: FontWeight.w700))]),
      const SizedBox(height: 10),
      Row(children: [Expanded(child: TextField(controller: task, onSubmitted: (_) => addTask(), decoration: InputDecoration(hintText: 'Add a study task', filled: true, fillColor: Colors.white, prefixIcon: const Icon(Icons.check_circle_outline), border: OutlineInputBorder(borderRadius: BorderRadius.circular(17), borderSide: BorderSide.none)))), const SizedBox(width: 8), IconButton.filled(onPressed: addTask, icon: const Icon(Icons.add))]),
      const SizedBox(height: 10),
      if (tasks.isEmpty) Padding(padding: const EdgeInsets.symmetric(vertical: 34), child: Column(children: const [Icon(Icons.auto_awesome_outlined, size: 42, color: Colors.black26), SizedBox(height: 10), Text('Your sprint is clear', style: TextStyle(fontWeight: FontWeight.w800)), SizedBox(height: 5), Text('Add one small task and start a focused session.', textAlign: TextAlign.center, style: TextStyle(color: Colors.black45, fontSize: 12))]))
      else ...tasks.asMap().entries.map((entry) => Card(elevation: 0, color: Colors.white, margin: const EdgeInsets.only(bottom: 9), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)), child: ListTile(contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4), leading: const CircleAvatar(backgroundColor: Color(0xFFEDE9FE), child: Icon(Icons.menu_book_rounded, color: Color(0xFF5B4BDB), size: 19)), title: Text(entry.value, style: const TextStyle(fontWeight: FontWeight.w700)), subtitle: const Text('Ready to focus', style: TextStyle(fontSize: 11)), trailing: IconButton(onPressed: () => finishTask(entry.key), icon: const Icon(Icons.check_circle_outline, color: Color(0xFF5B4BDB))))),
    ]),
  );
}
