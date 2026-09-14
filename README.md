# Gokul AI Bot

Personal AI portfolio, assistant, and daily innovation lab built with Next.js, TypeScript, Supabase and Vercel.

## 🚀 Daily Innovation Series

The Daily Innovation Series builds **one original website + one matching Android app every day**.

The goal is not to clone existing products. Each project is designed as a potential startup/business product that solves a real problem, with a useful web experience, Android app, release pipeline, and direct APK distribution from this website.

### Product principles

- Original product concepts
- Real-world problem solving
- Website + Android app as one product
- Mobile-first UX
- Offline support where useful
- Original branding and app icon
- GitHub source and version history
- Automated Android release builds
- Direct APK download from the Gokul AI website
- Vercel deployment
- Runtime, build, release, and download verification
- No secrets or API keys committed to GitHub

---

# Day 01 — QueueLens

**QueueLens — Know the wait before you go.**

QueueLens is the first new Daily Innovation project in the restarted series. It is designed as a community-powered queue and waiting-time intelligence product for places where people regularly lose time waiting in line.

### Problem

People often travel to clinics, campus offices, government counters, service centres, and other busy locations without knowing how long they may need to wait.

QueueLens aims to turn real-world queue observations into useful waiting-time intelligence before people arrive.

### Product concept

QueueLens connects:

**People at a location → queue observations → useful waiting-time information → people planning their visit**

The same product is available as a website experience and as an Android app.

### Potential use cases

- Clinics and hospitals
- College and campus offices
- Government service counters
- Banks and service centres
- Ticket and registration counters
- Events and public facilities
- Any location where queues create unpredictable waiting time

### Core product direction

- Report the current queue situation
- Record useful waiting-time observations
- View queue information before visiting
- Keep useful observations available offline where appropriate
- Build a foundation for future location-level intelligence

---

## 📱 QueueLens Android App

**Day:** 01  
**App:** QueueLens  
**Platform:** Android  
**Release pipeline:** GitHub Actions

### Android build pipeline

The repository contains an automated workflow:

`.github/workflows/queuelens-release.yml`

The workflow is responsible for:

1. Checkout source
2. Set up Java 17
3. Set up Android SDK
4. Install Android SDK packages
5. Set up Flutter
6. Create/build the Android project
7. Analyze the application
8. Build the release APK
9. Validate the APK
10. Upload the APK artifact
11. Publish the GitHub Release

### APK distribution

After a successful verified release, the website will expose the APK through a direct same-domain download route:

`/download/queuelens`

The user should receive the APK directly rather than being redirected to a GitHub page.

---

## 🌐 Website Integration

QueueLens is part of the Gokul AI Daily Builds experience.

The Day 01 product card is intended to show:

- QueueLens name
- Product description
- Day 01 status
- App branding/logo
- Android app information
- Direct **Download APK** action
- Website/product experience

There should be no separate duplicate Android box when the app information is already presented inside the Day 01 product card.

---

## 🔗 Release Flow

The complete intended flow is:

```text
QueueLens source
      ↓
GitHub push
      ↓
GitHub Actions
      ↓
Android build
      ↓
APK validation
      ↓
GitHub Release
      ↓
Direct website download route
      ↓
User downloads APK directly
```

---

## 🧪 Verification & Error Handling

A project is **not considered complete merely because code was pushed or a workflow started**.

The required verification loop is:

**DETECT → DIAGNOSE → FIX → REBUILD → RETEST → VERIFY**

Checks include:

- Build/compile errors
- Dependency errors
- Android build failures
- GitHub Actions job/step failures
- Runtime errors
- Console errors
- Broken routes
- Broken buttons
- Mobile UI problems
- APK validation
- GitHub Release asset availability
- Website ↔ app connection
- Direct APK download behavior

### Long-running builds

For long Android builds, the workflow is checked at appropriate checkpoints instead of assuming that a running job has succeeded.

The verification process checks:

- Workflow status
- Job status
- Individual step status
- Failure logs when available
- Build artifacts
- Release assets
- Final deployment state

If a build fails, the first/root failing step is investigated before fixing and rebuilding.

---

## 📊 Day 01 Status

### QueueLens source
**VERIFIED — pushed to GitHub**

### Android release workflow
**VERIFIED — workflow created and started**

### Android build
**IN PROGRESS**

The current GitHub Actions run has reached Android SDK setup. The release APK has **not yet been marked verified** until the complete workflow finishes successfully and the APK/release asset can be checked.

### GitHub Release
**NOT VERIFIED YET**

### Direct APK download
**NOT VERIFIED YET**

The `/download/queuelens` route is the intended direct-download endpoint, but it must be verified against the actual published release APK before Day 01 is marked complete.

### Vercel deployment
**NOT VERIFIED YET**

The live website deployment must be checked after the source update before claiming the Day 01 website is fully live.

---

## 🛠️ Technology Stack

### Website

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

### Android

- Flutter
- Android SDK
- Java 17
- GitHub Actions

### Backend / Platform

- Supabase where backend services are required
- GitHub for source control and releases
- Vercel for website deployment

---

## 📁 Repository Structure

Important project areas include:

```text
Gokul-aibot/
├── app/                         # Next.js website
├── public/                      # Website assets
├── .github/
│   └── workflows/
│       └── queuelens-release.yml
├── QueueLens Android source/    # Day 01 Android project files
└── README.md
```

The exact source layout may evolve as the project is built and verified.

---

## 🔐 Security

- Do not commit API keys
- Do not commit passwords or private tokens
- Keep environment secrets outside the repository
- Review release/build changes before publishing

---

## 📅 Daily Build Process

Every new day follows this lifecycle:

1. Start with a new original problem/product idea
2. Design the website experience
3. Design the matching Android app
4. Create branding and app icon
5. Implement the core functionality
6. Push meaningful source changes to GitHub
7. Run the Android release workflow
8. Monitor long-running build status/logs
9. Fix failures and rebuild when necessary
10. Publish the APK release
11. Connect direct APK download to the website
12. Deploy the website
13. Verify mobile UI and important user flows
14. Verify website download behavior
15. Update the Day card and README
16. Mark the day complete only after verification

Then continue with **Day 02, Day 03, Day 04...** using a new original innovation each day.

---

## 🎯 Vision

**Build every day. Ship twice. Create original products.**

Gokul AI is not only a portfolio. It is a public development lab for turning useful ideas into working web products and Android apps, documenting the process, and gradually discovering products with real startup potential.
