# Task Manager App

A modern, responsive task management application built with React, TypeScript, and TailwindCSS. Features drag-and-drop functionality, task filtering, and a clean, intuitive interface.
<img width="1878" height="870" alt="Image" src="https://github.com/user-attachments/assets/3133515c-a54c-41f4-b82c-2438bb0b65f7" />

## ✨ Features

- **Drag & Drop**: Intuitive task reordering with react-beautiful-dnd
- **Task Management**: Create, edit, delete, and organize tasks
- **Status Tracking**: Todo, In Progress, and Completed task states
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes with next-themes
- **Modern UI**: Built with Radix UI components and TailwindCSS
- **Type Safety**: Full TypeScript support throughout the application
- **Local Storage**: Persistent task storage in browser
- **Animations**: Smooth transitions with Framer Motion

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS 3 + Radix UI
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Icons**: Lucide React
- **Drag & Drop**: react-beautiful-dnd
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest + React Testing Library
- **State Management**: React Context API
- **Routing**: React Router 6

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd task-manager-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🛠️ Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm test         # Run tests
pnpm typecheck    # Run TypeScript type checking
pnpm format.fix   # Format code with Prettier
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/           # Layout components
│   ├── tasks/           # Task-related components
│   └── ui/              # Reusable UI components (Radix UI)
├── context/
│   └── TasksContext.tsx # Task state management
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Route components
│   ├── Index.tsx        # Main task manager page
│   └── NotFound.tsx     # 404 page
├── App.tsx              # Main app component with routing
├── global.css           # Global styles and TailwindCSS
└── vite-env.d.ts        # Vite type definitions
```

## 🎯 Key Components

- **TasksContext**: Manages global task state and operations
- **TaskList**: Main task display with drag-and-drop functionality
- **TaskCard**: Individual task component with actions
- **TaskForm**: Create and edit task form with validation
- **Layout**: Application shell with navigation and theme toggle

## 🔧 Configuration

### TailwindCSS
The project uses a custom TailwindCSS configuration with:
- Custom color palette
- Dark mode support
- Animation utilities
- Typography plugin

### TypeScript
Strict TypeScript configuration for better code quality and developer experience.

### Vite
Optimized build configuration with:
- Fast HMR (Hot Module Replacement)
- SWC for faster compilation
- Optimized production builds

## 🎨 UI Components

Built with Radix UI primitives for accessibility and customization:
- Dialogs and Modals
- Dropdown Menus
- Tooltips
- Form Controls
- Navigation Components

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🧪 Testing

The project includes:
- Unit tests with Vitest
- Component testing with React Testing Library
- Type checking with TypeScript

Run tests with:
```bash
pnpm test
```

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `pnpm build`
3. Set output directory: `dist`
4. Deploy!

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS
- [Lucide](https://lucide.dev/) for beautiful icons
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd) for drag and drop functionality

---

Made with ❤️ by [Your Name]
