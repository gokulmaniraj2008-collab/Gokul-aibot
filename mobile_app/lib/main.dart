import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

const productionUrl = String.fromEnvironment(
  'GOKUL_AI_URL',
  defaultValue: 'https://gokul-aibot.vercel.app/days/day-01',
);

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const PocketRelayApp());
}

class PocketRelayApp extends StatefulWidget {
  const PocketRelayApp({super.key});

  @override
  State<PocketRelayApp> createState() => _PocketRelayAppState();
}

class _PocketRelayAppState extends State<PocketRelayApp> {
  late final WebViewController controller;
  bool loading = true;

  @override
  void initState() {
    super.initState();
    controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(
        NavigationDelegate(
          onPageStarted: (_) => setState(() => loading = true),
          onPageFinished: (_) => setState(() => loading = false),
          onWebResourceError: (_) => setState(() => loading = false),
        ),
      )
      ..loadRequest(Uri.parse(productionUrl));
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'PocketRelay',
      theme: ThemeData.light(useMaterial3: true),
      home: PopScope(
        canPop: false,
        onPopInvokedWithResult: (_, __) async {
          if (await controller.canGoBack()) await controller.goBack();
        },
        child: Scaffold(
          backgroundColor: const Color(0xFFFFFDF8),
          body: SafeArea(
            child: Stack(
              children: [
                WebViewWidget(controller: controller),
                if (loading) const Align(alignment: Alignment.topCenter, child: LinearProgressIndicator(minHeight: 2)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
