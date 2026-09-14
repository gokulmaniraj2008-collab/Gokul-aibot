import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() => runApp(const FieldNoteApp());

class FieldNoteApp extends StatelessWidget {
  const FieldNoteApp({super.key});
  @override
  Widget build(BuildContext context) => MaterialApp(
    debugShowCheckedModeBanner: false,
    title: 'FieldNote',
    theme: ThemeData(useMaterial3: true, colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF4D7C57)), scaffoldBackgroundColor: const Color(0xFFF6F7F2)),
    home: const FieldNoteHome(),
  );
}

class FieldNoteHome extends StatefulWidget {
  const FieldNoteHome({super.key});
  @override State<FieldNoteHome> createState() => _FieldNoteHomeState();
}

class _FieldNoteHomeState extends State<FieldNoteHome> {
  final note = TextEditingController();
  final crop = TextEditingController(text: 'Rice');
  final field = TextEditingController(text: 'Field 01');
  final search = TextEditingController();
  List<Entry> entries = [];
  bool loading = true;
  bool composer = false;

  @override void initState() { super.initState(); load(); }
  Future<void> load() async {
    final p = await SharedPreferences.getInstance();
    final raw = p.getStringList('entries') ?? [];
    setState(() { entries = raw.map(Entry.decode).whereType<Entry>().toList(); loading = false; });
  }
  Future<void> persist() async { final p = await SharedPreferences.getInstance(); await p.setStringList('entries', entries.map((e) => e.encode()).toList()); }
  Future<void> add() async {
    if (note.text.trim().isEmpty) return;
    setState(() { entries.insert(0, Entry(DateTime.now().microsecondsSinceEpoch.toString(), crop.text.trim().isEmpty ? 'General' : crop.text.trim(), field.text.trim().isEmpty ? 'Field 01' : field.text.trim(), note.text.trim(), DateTime.now())); note.clear(); composer = false; });
    await persist();
  }
  Future<void> remove(String id) async { setState(() => entries.removeWhere((e) => e.id == id)); await persist(); }
  List<Entry> get filtered { final q = search.text.trim().toLowerCase(); return q.isEmpty ? entries : entries.where((e) => '${e.crop} ${e.field} ${e.note}'.toLowerCase().contains(q)).toList(); }
  @override void dispose() { note.dispose(); crop.dispose(); field.dispose(); search.dispose(); super.dispose(); }

  @override Widget build(BuildContext context) {
    final list = filtered;
    return Scaffold(
      appBar: AppBar(title: const Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text('FieldNote', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 23)), Text('Your daily field companion', style: TextStyle(fontSize: 12, color: Colors.black54))]), actions: [IconButton(onPressed: () => showAboutDialog(context: context, applicationName: 'FieldNote', applicationVersion: '1.0.1', children: const [Text('Offline-first crop observation notes for everyday field work.')]), icon: const Icon(Icons.info_outline))]),
      floatingActionButton: FloatingActionButton.extended(onPressed: () => setState(() => composer = true), icon: const Icon(Icons.add), label: const Text('New note')),
      body: loading ? const Center(child: CircularProgressIndicator()) : RefreshIndicator(onRefresh: load, child: ListView(padding: const EdgeInsets.fromLTRB(20, 8, 20, 110), children: [
        Container(padding: const EdgeInsets.all(20), decoration: BoxDecoration(gradient: const LinearGradient(colors: [Color(0xFF315B3C), Color(0xFF6D956F)]), borderRadius: BorderRadius.circular(26)), child: Row(children: [Container(width: 52, height: 52, decoration: BoxDecoration(color: Colors.white.withOpacity(.16), borderRadius: BorderRadius.circular(16)), child: const Icon(Icons.eco, color: Colors.white, size: 28)), const SizedBox(width: 14), Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [const Text('Field signals, simplified.', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800)), const SizedBox(height: 5), Text('${entries.length} saved observations • works offline', style: const TextStyle(color: Colors.white70, fontSize: 12))]))])),
        const SizedBox(height: 16),
        TextField(controller: search, onChanged: (_) => setState(() {}), decoration: InputDecoration(hintText: 'Search crop, field or note', prefixIcon: const Icon(Icons.search), filled: true, fillColor: Colors.white, border: OutlineInputBorder(borderRadius: BorderRadius.circular(18), borderSide: BorderSide.none))),
        if (composer) ...[const SizedBox(height: 16), composerCard()],
        const SizedBox(height: 22),
        Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('Recent observations', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800)), Text('${list.length}', style: const TextStyle(color: Colors.black45, fontWeight: FontWeight.w700))]),
        const SizedBox(height: 10),
        if (list.isEmpty) const Padding(padding: EdgeInsets.symmetric(vertical: 45), child: Column(children: [Icon(Icons.note_add_outlined, size: 42, color: Colors.black26), SizedBox(height: 12), Text('No field notes yet', style: TextStyle(fontWeight: FontWeight.w800)), SizedBox(height: 5), Text('Tap “New note” to capture your first observation.', textAlign: TextAlign.center, style: TextStyle(color: Colors.black45, fontSize: 12))])) else ...list.map(card),
      ])),
    );
  }

  Widget composerCard() => Card(elevation: 0, color: Colors.white, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(22)), child: Padding(padding: const EdgeInsets.all(18), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [const Text('New field observation', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w800)), const SizedBox(height: 14), Row(children: [Expanded(child: TextField(controller: crop, decoration: const InputDecoration(labelText: 'Crop', prefixIcon: Icon(Icons.grass)))), const SizedBox(width: 10), Expanded(child: TextField(controller: field, decoration: const InputDecoration(labelText: 'Field', prefixIcon: Icon(Icons.place_outlined))))]), const SizedBox(height: 10), TextField(controller: note, maxLines: 4, decoration: const InputDecoration(labelText: 'Observation', hintText: 'What did you notice today?')), const SizedBox(height: 14), Row(mainAxisAlignment: MainAxisAlignment.end, children: [TextButton(onPressed: () => setState(() => composer = false), child: const Text('Cancel')), const SizedBox(width: 8), FilledButton.icon(onPressed: add, icon: const Icon(Icons.save_outlined), label: const Text('Save offline'))])])));

  Widget card(Entry e) => Dismissible(key: ValueKey(e.id), direction: DismissDirection.endToStart, onDismissed: (_) => remove(e.id), background: Container(margin: const EdgeInsets.only(bottom: 10), decoration: BoxDecoration(color: Colors.red.shade100, borderRadius: BorderRadius.circular(20)), alignment: Alignment.centerRight, padding: const EdgeInsets.only(right: 20), child: const Icon(Icons.delete_outline)), child: Card(elevation: 0, margin: const EdgeInsets.only(bottom: 10), color: Colors.white, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)), child: Padding(padding: const EdgeInsets.all(17), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Row(children: [Expanded(child: Text(e.crop, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800))), Text(dateLabel(e.date), style: const TextStyle(fontSize: 11, color: Colors.black45))]), const SizedBox(height: 4), Text(e.field, style: const TextStyle(fontSize: 12, color: Colors.black54)), const SizedBox(height: 11), Text(e.note, style: const TextStyle(fontSize: 14, height: 1.45)), const SizedBox(height: 13), Row(children: [Container(padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 6), decoration: BoxDecoration(color: const Color(0xFFF0F4EE), borderRadius: BorderRadius.circular(99)), child: const Row(mainAxisSize: MainAxisSize.min, children: [Icon(Icons.cloud_off_outlined, size: 14, color: Color(0xFF4D7C57)), SizedBox(width: 5), Text('Saved offline', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600))])), const Spacer(), IconButton(onPressed: () => remove(e.id), icon: const Icon(Icons.delete_outline, size: 19))])]))));
  String dateLabel(DateTime d) => DateUtils.isSameDay(d, DateTime.now()) ? 'Today' : '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}/${d.year}';
}

class Entry {
  final String id, crop, field, note; final DateTime date;
  Entry(this.id, this.crop, this.field, this.note, this.date);
  String encode() => [id, crop, field, note.replaceAll('|', ' '), date.toIso8601String()].join('|');
  static Entry? decode(String raw) { final p = raw.split('|'); if (p.length < 5) return null; return Entry(p[0], p[1], p[2], p[3], DateTime.tryParse(p[4]) ?? DateTime.now()); }
}
