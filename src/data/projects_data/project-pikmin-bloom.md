---
title: "Pikmin Bloom 飾品追蹤紀錄簿"
description: "Pikmin Bloom Decor Tracker"
technologies: ["HTML","CSS","JavaScript","API","Firebase"]
status: "Completed"
date: "2025/12"
image: "images/projects/pikmin_bloom_home.png"
link: "https://maggie62755.github.io/Pikmin-Bloom-Decor-Tracker"
sourceCode: "https://github.com/maggie62755/Pikmin-Bloom-Decor-Tracker"
---
### 🌸Introduction

**Pikmin Bloom Decor Tracker** is a modern web application tailored for *Pikmin Bloom* players. It is designed to help players intuitively and efficiently manage their extensive decor Pikmin collection, making the journey to a complete collection much easier!

---



## Core Features

1. **Dual Views for Flexible Browsing**

   - **Grid View (Tracker)**: A visual-first mode that groups decor images by category, perfect for a quick overview.
   - **List View (Collection)**: A data-driven mode featuring a compact table layout with multi-column sorting to easily spot missing decors.
2. **Authentic 4-Stage Status Tracking**
   Moving beyond a simple "have/don't have" toggle, this app introduces a unique 4-stage tracking system:
   `Not Encountered` ➔ `🌱 Seedling` ➔ `❤️ Growing (Building Friendship)` ➔ `✅ Collected`
   Simply click or long-press a card to cycle through the statuses, perfectly mirroring the actual in-game experience.
3. **Garden-Themed Analytics Dashboard**
   A beautiful built-in dashboard provides real-time charts on your overall completion rate. You can analyze your progress by "Color" or "Category" to clearly understand your collection's strengths and weaknesses.
4. **Privacy-First Cloud Sync (Google Integration)**
   Say goodbye to tedious registrations! With one-click Google Login, the system securely saves your progress directly into your personal Google Sheets. This allows for seamless cross-device synchronization while keeping your data entirely in your own hands.

---

## Tech Stack & Development Highlights

My focus was on delivering a **seamless mobile experience** and a **zero-maintenance architecture**:

- **Modern Frontend**: Built with **React 19**, **Vite 7**, and **Tailwind CSS v4** for lightning-fast performance and smooth interactions.
- **Mobile-First Design**: Optimized for players on the go, featuring a touch-friendly UI (like long-press toggles) tailored for mobile devices.
- **Serverless Backend**: Integrates **Google OAuth 2.0** and **Google Sheets API** to use the user's own Google Drive as a database, ensuring zero server costs and maximum privacy.
- **Data Visualization**: Uses **Recharts** to transform raw collection data into engaging and beautiful progress charts.

---



### Prototype

![home page of the Pikmin Bloom Decor Tracker](images/projects/pikmin_bloom_home.png)

![how to use the Pikmin Bloom Decor Tracker](images/projects/pikmin_bloom_how_to.png)

![Card view of the Pikmin Bloom Decor Tracker](images/projects/pikmin_bloom_tracker_card.png)

![List view of the Pikmin Bloom Decor Tracker](images/projects/pikmin_bloom_tracker_list.png)
