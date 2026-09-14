# Gokul AI Bot

Personal AI portfolio and assistant built with Next.js, TypeScript, Supabase and Vercel.

## 🚀 Daily Apps

Small, useful apps built as part of the Daily App series.

### Day 01 — FieldNote
**Status: IN BUILD → RELEASE CANDIDATE**

FieldNote v1.0.0 is the first real Daily App: an offline-first Android field observation app for quickly recording crop and field notes.

**v1.0.0 features**
- Crop + field tagging
- Quick observation notes
- Offline local persistence
- Search observations
- Swipe/delete notes
- Material 3 mobile UI
- Android release workflow

**Release target:** `FieldNote-v1.0.0.apk`

> Day 01 will be marked **RELEASED + Download APK** only after the GitHub Actions APK build and release are successfully verified.

## 📅 Daily Task System

Each Daily App follows this workflow:

1. Plan the app
2. Build the real app
3. Test the Android build
4. Run GitHub Actions release build
5. Verify the APK
6. Publish the release
7. Update this README
8. Update the portfolio Day card with the APK download

### Current Daily Task
- [x] FieldNote project created
- [x] FieldNote v1.0.0 source added
- [x] Android release workflow added
- [ ] Run/verify FieldNote APK build
- [ ] Publish FieldNote v1.0.0 release
- [ ] Change Day 01 card to RELEASED
- [ ] Add direct Download APK button

## Vision
A personal website that works as a portfolio and an AI-powered assistant, while documenting useful apps and daily development progress.

## Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- Flutter / Android
- Supabase
- Vercel
- GitHub Actions

## Repository Structure
- `fieldnote/` — FieldNote Daily App
- `mobile_app/` — mobile application source
- `.github/workflows/fieldnote-release.yml` — FieldNote Android release automation
- `.github/workflows/android-release.yml` — existing Gokul AI Android release workflow
