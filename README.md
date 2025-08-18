# 📊 User & Post Dashboard

A React application that fetches and displays users along with their posts using the JSONPlaceholder API (https://jsonplaceholder.typicode.com/).  
This project demonstrates **API integration, search functionality, and modal-based UI design**.

---

## Project Setup
- npm init : `Package manager for installing dependencies`
- npm install react  : `a JavaScript library for building User Interfaces`
- npm install react-dom : `JavaScript library that allows React to interact with the DOM`
- npm install -D parcel : `Bundler that bundles your application that helps you to minify, clean, and make your code compact`
- npm install tailwindcss @tailwindcss/postcss : `CSS framework for styling`

---

## Features
- 📋 **User List** – Displays users in a responsive card grid.
- 🔍 **Search** – Filter users by name in real-time.
- 🖱️ **Interactive Modal** – Click on a user to open a popup modal displaying their posts.

---

## Code Quality
- Modular - Each component is Reusable, maintainble and testable.
- Use of Custom Hooks - Extracted the data Fetching logic into a separate Custom hook following Single Responsibilty Principle.

---



## 🛠️ Tech Stack
- **React** (Functional Components + Hooks)
- **Tailwind CSS** (Styling & Layout)
- **JSONPlaceholder API** (Dummy REST API)


---


## 🎯 How It Works
1. Fetches **users** from  
   ```
   https://jsonplaceholder.typicode.com/users
   ```
2. Displays them in a **card layout**.
3. Clicking on a user triggers a modal.
4. The modal fetches and displays **posts of that user** from  
   ```
   https://jsonplaceholder.typicode.com/posts?userId={id}
   ```
5. Users can **close the modal** and select another user.

---