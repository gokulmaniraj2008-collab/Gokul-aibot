package ai.gokul.studysprint

import android.graphics.Color
import android.os.Bundle
import android.view.Gravity
import android.view.View
import android.widget.Button
import android.widget.LinearLayout
import android.widget.ProgressBar
import android.widget.TextView
import androidx.core.view.setPadding
import android.app.Activity

class MainActivity : Activity() {
    private val blue = Color.rgb(37, 99, 235)
    private val ink = Color.rgb(17, 24, 39)
    private val muted = Color.rgb(107, 114, 128)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window.statusBarColor = Color.WHITE
        window.navigationBarColor = Color.WHITE
        window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR

        val root = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(24)
            setBackgroundColor(Color.WHITE)
        }

        val header = TextView(this).apply {
            text = "STUDYSPRINT  ·  TEST BUILD"
            textSize = 12f
            setTextColor(blue)
            typeface = android.graphics.Typeface.DEFAULT_BOLD
        }
        root.addView(header, LinearLayout.LayoutParams(-1, -2))

        val title = TextView(this).apply {
            text = "Study smarter.\nOne sprint at a time."
            textSize = 30f
            setTextColor(ink)
            typeface = android.graphics.Typeface.DEFAULT_BOLD
            setPadding(0, 18, 0, 10)
        }
        root.addView(title, LinearLayout.LayoutParams(-1, -2))

        val subtitle = TextView(this).apply {
            text = "A lightweight Day 02 Android test for the Daily Innovation workflow."
            textSize = 15f
            setTextColor(muted)
            setPadding(0, 0, 0, 24)
        }
        root.addView(subtitle, LinearLayout.LayoutParams(-1, -2))

        addCard(root, "TODAY'S FOCUS", "Complete your mathematics revision · 45 min")
        addCard(root, "NEXT SPRINT", "Review tomorrow's assignment · 25 min")

        val progress = ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal).apply {
            max = 100
            progress = 62
            progressTintList = android.content.res.ColorStateList.valueOf(blue)
        }
        root.addView(progress, LinearLayout.LayoutParams(-1, 10).apply { topMargin = 22 })

        val status = TextView(this).apply {
            text = "62% of today's plan"
            textSize = 13f
            setTextColor(muted)
            setPadding(0, 8, 0, 18)
        }
        root.addView(status, LinearLayout.LayoutParams(-1, -2))

        val sprint = Button(this).apply {
            text = "START 25-MIN SPRINT"
            setTextColor(Color.WHITE)
            setBackgroundColor(blue)
            setOnClickListener {
                text = "SPRINT RUNNING · 25:00"
                status.text = "Focus mode started. Keep going."
            }
        }
        root.addView(sprint, LinearLayout.LayoutParams(-1, 52))

        val footer = TextView(this).apply {
            text = "v0.1 TEST  ·  GOKUL.AI"
            textSize = 11f
            setTextColor(muted)
            gravity = Gravity.CENTER
            setPadding(0, 28, 0, 0)
        }
        root.addView(footer, LinearLayout.LayoutParams(-1, -2))

        setContentView(root)
    }

    private fun addCard(root: LinearLayout, label: String, value: String) {
        val card = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(18)
            setBackgroundColor(Color.rgb(248, 250, 252))
        }
        val labelView = TextView(this).apply {
            text = label
            textSize = 11f
            setTextColor(blue)
            typeface = android.graphics.Typeface.DEFAULT_BOLD
        }
        val valueView = TextView(this).apply {
            text = value
            textSize = 15f
            setTextColor(ink)
            setPadding(0, 7, 0, 0)
        }
        card.addView(labelView)
        card.addView(valueView)
        root.addView(card, LinearLayout.LayoutParams(-1, -2).apply { bottomMargin = 12 })
    }
}
