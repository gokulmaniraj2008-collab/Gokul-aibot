import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

const productionUrl = String.fromEnvironment(
  'GOKUL_AI_URL',
  defaultValue: 'https://gokul-aibot.vercel.app',
);

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const GokulAiApp());
}

class GokulAiApp extends StatefulWidget {
  const GokulAiApp({super.key});

  @override
  State<GokulAiApp> createState() => _GokulAiAppState();
}

class _GokulAiAppState extends State<GokulAiApp> {
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

  Future<bool> handleBack() async {
    if (await controller.canGoBack()) {
      await controller.goBack();
      return false;
    }
    return true;
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Gokul AI',
      theme: ThemeData.dark(useMaterial3: true),
      home: PopScope(
        canPop: false,
        onPopInvokedWithResult: (_, __) async {
          if (await controller.canGoBack()) {
            await controller.goBack();
          }
        },
        child: Scaffold(
          backgroundColor: const Color(0xFF06040B),
          body: SafeArea(
            child: Stack(
              children: [
                WebViewWidget(controller: controller),
                if (loading)
                  const Align(
                    alignment: Alignment.topCenter,
                    child: LinearProgressIndicator(minHeight: 2),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
