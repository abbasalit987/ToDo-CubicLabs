# 📝 To Do - Cubic Labs

A fast, responsive, user-focused Task Management web application built with **React**, powered by the **Vercel AI Cloud**, and designed for rapid MVP delivery using modern tools like **Vite**, **Material UI**, and **localStorage** for data persistence.

## 🚀 Platform & Deployment

- **Type**: Web Application
- **Deployment**: [Vercel](https://vercel.com)
- **Live URL**: _[Coming Soon / Replace with your link]_

## ⚙️ Core Technology Stack

| Technology           | Purpose                                      |
|----------------------|----------------------------------------------|
| **React.js**         | Functional components, hooks-based UI logic |
| **Vite**             | Fast development build tooling               |
| **Material UI (MUI)**| Standard UI components, theming, icons      |
| **CSS Flexbox**      | Responsive and adaptive layout management    |
| **localStorage API** | Data persistence across browser reloads     |

## 📋 Technical Architecture

### Component Overview

- `TaskItem`: Handles individual task display and toggle logic
- `TasksDisplay`: Lists and filters all tasks
- `AddNewTask`: Input and submission for new tasks
- `TaskInfoDisplay`: (Future scope) Task details in modal
- `SideBarNav` & `SideBarNavItem`: Task category navigation

### State Management

- Uses `React.useReducer()` for scalable and predictable state logic
- Coupled with `useEffect()` for syncing to **localStorage**

## 🧠 Key Features (MVP)

| Feature              | Description                                                                  |
|----------------------|------------------------------------------------------------------------------|
| ✅ Add Tasks          | Rapid task entry via the **AddNewTask** component                           |
| 📋 Display Tasks      | Filterable, scrollable list using `TasksDisplay`                            |
| ✔️ Complete Tasks     | Completion toggle with MUI icons, strikethrough visual feedback             |
| 💾 Data Persistence   | Task state saved in `localStorage`, maintained across refresh/browser exit  |
| 📱 Responsive UI      | CSS Flexbox layout ensures mobile and desktop compatibility                 |
| 📂 Navigation         | Filter tasks by category (My Day, Completed, Important, All Tasks)          |
| 🎨 Cohesive Design    | Global theme + Material UI icons/components for a unified look              |

## ✅ Technical Design Decisions

| Area                      | Rationale                                                                 |
|---------------------------|---------------------------------------------------------------------------|
| **React Functional Components** | Promotes reusability and separation of concerns               |
| **Hooks + useReducer**    | Scalable state management with clear reducer logic                     |
| **Material UI (MUI)**     | Design consistency with rapid prototyping capabilities                 |
| **localStorage**          | Lightweight solution suitable for MVP without backend complexity        |
| **CSS Flexbox**           | Simple, powerful layout for multi-device support                        |

## 🧪 Challenges & Solutions

| Problem                           | Solution                                                                 |
|-----------------------------------|--------------------------------------------------------------------------|
| State sync with localStorage      | Used `useEffect` to update storage on every reducer state change         |
| Layout handling for long task lists | Enabled vertical scrolling with cross-browser styling                    |
| Edit bugs & layout issues         | Ensured clean transitions, newline preservation, auto-focus handling     |
| UI consistency across components  | Used centralized styles, MUI theming, modular CSS                        |
| Scrollbar mismatch in dark theme  | Styled scrollbars to match the UI aesthetic                              |

## 🛠️ Development Strategy

1. Initialize project with Vite and React.
2. Scaffold core components and application structure.
3. Implement global state management with hooks and reducer.
4. Add localStorage syncing via useEffect.
5. Style components using Material UI and Flexbox.
6. Deliver MVP: Add Task, Display List, Complete Task, Persistence.

## 🔮 Future Improvements

| Feature           | Description                                                       |
|-------------------|-------------------------------------------------------------------|
| 🖊️ Edit Tasks      | Inline or modal editing for task title/details                   |
| 🗑️ Delete Tasks     | Add delete option with confirmation and undo/snackbar           |
| 🔍 Search & Filter | Sort by date, priority, text query across categories             |
| 🧑‍💼 Authentication | User accounts and per-user task boards                          |
| ☁️ Backend         | Sync to Firebase/Supabase/Express backend for cross-device use   |
| 📲 Mobile Version   | Rapid conversion to React Native for native mobile application  |
| 🌐 PWA Support      | Offline functionality, installable on desktop/home              |
| ♿ Accessibility     | ARIA roles, full keyboard support, improved contrast & labels   |

## ✅ Conclusion

This project delivers a clean, functional, and extendable MVP for a task management system. Persistence is reliable, and the UI offers a seamless experience for desktop and mobile users. All technical decisions focused on speed of delivery, modularity, and future scalability.

---

## 📦 Getting Started Locally

Clone the repository:
git clone https://github.com/abbasalit987/ToDo-CubicLabs.git
cd task-manager-app

Install dependencies:
npm install

Start development server:
npm run dev


---

## 👨‍💻 Author

Built with ❤️ by [Your Name](https://github.com/your-username)

---

## 📄 License

This project is open-source and available under the [MIT License](./LICENSE).


