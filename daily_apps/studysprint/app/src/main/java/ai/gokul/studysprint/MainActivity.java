package ai.gokul.studysprint;

import android.app.Activity;
import android.content.res.ColorStateList;
import android.graphics.Color;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;

public class MainActivity extends Activity {
    private final int blue = Color.rgb(37, 99, 235);
    private final int ink = Color.rgb(17, 24, 39);
    private final int muted = Color.rgb(107, 114, 128);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setStatusBarColor(Color.WHITE);
        getWindow().setNavigationBarColor(Color.WHITE);
        getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);

        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(24, 24, 24, 24);
        root.setBackgroundColor(Color.WHITE);

        TextView header = new TextView(this);
        header.setText("STUDYSPRINT  ·  TEST BUILD");
        header.setTextSize(12);
        header.setTextColor(blue);
        header.setTypeface(null, 1);
        root.addView(header, new LinearLayout.LayoutParams(-1, -2));

        TextView title = new TextView(this);
        title.setText("Study smarter.\nOne sprint at a time.");
        title.setTextSize(30);
        title.setTextColor(ink);
        title.setTypeface(null, 1);
        title.setPadding(0, 18, 0, 10);
        root.addView(title, new LinearLayout.LayoutParams(-1, -2));

        TextView subtitle = new TextView(this);
        subtitle.setText("A lightweight Day 02 Android test for the Daily Innovation workflow.");
        subtitle.setTextSize(15);
        subtitle.setTextColor(muted);
        subtitle.setPadding(0, 0, 0, 24);
        root.addView(subtitle, new LinearLayout.LayoutParams(-1, -2));

        addCard(root, "TODAY'S FOCUS", "Complete your mathematics revision · 45 min");
        addCard(root, "NEXT SPRINT", "Review tomorrow's assignment · 25 min");

        ProgressBar progress = new ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal);
        progress.setMax(100);
        progress.setProgress(62);
        progress.setProgressTintList(ColorStateList.valueOf(blue));
        LinearLayout.LayoutParams progressParams = new LinearLayout.LayoutParams(-1, 10);
        progressParams.topMargin = 22;
        root.addView(progress, progressParams);

        TextView status = new TextView(this);
        status.setText("62% of today's plan");
        status.setTextSize(13);
        status.setTextColor(muted);
        status.setPadding(0, 8, 0, 18);
        root.addView(status, new LinearLayout.LayoutParams(-1, -2));

        Button sprint = new Button(this);
        sprint.setText("START 25-MIN SPRINT");
        sprint.setTextColor(Color.WHITE);
        sprint.setBackgroundColor(blue);
        sprint.setOnClickListener(v -> {
            sprint.setText("SPRINT RUNNING · 25:00");
            status.setText("Focus mode started. Keep going.");
        });
        root.addView(sprint, new LinearLayout.LayoutParams(-1, 52));

        TextView footer = new TextView(this);
        footer.setText("v0.1 TEST  ·  GOKUL.AI");
        footer.setTextSize(11);
        footer.setTextColor(muted);
        footer.setGravity(Gravity.CENTER);
        footer.setPadding(0, 28, 0, 0);
        root.addView(footer, new LinearLayout.LayoutParams(-1, -2));

        setContentView(root);
    }

    private void addCard(LinearLayout root, String label, String value) {
        LinearLayout card = new LinearLayout(this);
        card.setOrientation(LinearLayout.VERTICAL);
        card.setPadding(18, 18, 18, 18);
        card.setBackgroundColor(Color.rgb(248, 250, 252));

        TextView labelView = new TextView(this);
        labelView.setText(label);
        labelView.setTextSize(11);
        labelView.setTextColor(blue);
        labelView.setTypeface(null, 1);

        TextView valueView = new TextView(this);
        valueView.setText(value);
        valueView.setTextSize(15);
        valueView.setTextColor(ink);
        valueView.setPadding(0, 7, 0, 0);

        card.addView(labelView);
        card.addView(valueView);
        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(-1, -2);
        params.bottomMargin = 12;
        root.addView(card, params);
    }
}
