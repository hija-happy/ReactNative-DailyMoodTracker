# MoodMap – A Mood Tracking App

MoodMap is an ongoing React Native app (built with Expo) that helps users track and reflect on their emotional wellbeing over time.

---

## ✨ Overview

MoodMap lets you quickly log how you feel each day and review your past entries in a simple, clean interface. The goal is to build a lightweight companion you can open in a few seconds, record your mood, and move on with your day – while still getting long‑term insights later.

> ⚠️ **Status:** Work in progress. Features, UI, and structure are still evolving.

---

## 🧩 Features (Current & Planned)

- **Home Screen**
  - Acts as the main landing page
  - Quick access to mood logging and history

- **Add Mood**
  - Record how you’re feeling
  - Choose from mood options (e.g., happy, sad, stressed, calm, etc.)
  - Optionally add notes (planned)

- **History**
  - View past mood entries
  - Daily list of moods with timestamps
  - Basic trends & summaries (planned)

- **Settings**
  - Basic app configuration
  - Theme / appearance (planned)
  - Reminder notifications (planned)

---

## 🛠 Tech Stack

- **Framework:** React Native
- **Runtime / Tooling:** Expo
- **Navigation:** Expo Router (tab-based navigation)
- **Language:** TypeScript

The app uses a **bottom tab navigator** so users can easily switch between:

- Home
- Add Mood
- History
- Settings

---

## 🗂 Project Structure (High-Level)

> This may change as the app evolves.

```bash
MoodMap/
├─ app/
│  ├─ (tabs)/
│  │  ├─ index.tsx          # Home screen
│  │  ├─ add-mood.tsx       # Add Mood screen
│  │  ├─ history.tsx        # Mood History screen
│  │  └─ settings.tsx       # Settings screen
│  └─ _layout.tsx           # Expo Router tab layout
├─ components/              # Reusable UI components
├─ hooks/                   # Custom hooks (if any)
├─ assets/                  # Images, icons, etc.
├─ package.json
├─ app.json / app.config.js
└─ tsconfig.json
```

---

## Getting Started

### 1. Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- Expo CLI (optional, but useful)
- Expo Go app on your Android/iOS device **or** an emulator/simulator

### 2. Clone the Repository

```bash
git clone https://github.com/hija-happy/ReactNative-DailyMoodTracker.git
cd ReactNative-DailyMoodTracker
```

### 3. Install Dependencies

```bash
npm install
# or
yarn install
```

### 4. Run the App

```bash
npx expo start
```

Then:

- Scan the QR code with the **Expo Go** app on your phone, or
- Press `a` to open on Android emulator, or `i` to open on iOS simulator (macOS only).

---

## 🤝 Contributing

This is an ongoing learning/project repo.

- Found a bug? **Open an issue.**
- Have an idea or improvement? **Create a feature request.**
- Want to contribute code? **Submit a pull request** with a clear description of your changes.

---

## 📸 Screenshots

> To be added once the UI stabilizes.

---

## 🧠 Why MoodMap?

Tracking your mood over time can:

- Help you notice emotional patterns
- Make it easier to talk about your mental health
- Give you context for your good and bad days

MoodMap aims to make this process simple, quick, and available in your pocket every day.

