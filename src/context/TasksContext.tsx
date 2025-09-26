import { createContext, useCallback, useContext, useMemo } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export type Task = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
};

export type TaskFilter = "all" | "completed" | "pending";

type TasksContextType = {
  tasks: Task[];
  filteredTasks: Task[];
  filter: TaskFilter;
  setFilter: (f: TaskFilter) => void;
  addTask: (text: string) => boolean;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  reorder: (startIndex: number, endIndex: number) => void;
  clearCompleted: () => void;
  clearAll: () => void;
};

const TasksContext = createContext<TasksContextType | null>(null);

export function useTasks() {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error("useTasks must be used within TasksProvider");
  return ctx;
}

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [filter, setFilter] = useLocalStorage<TaskFilter>("tasks_filter", "all");

  const addTask = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return false;
      const newTask: Task = {
        id: crypto.randomUUID(),
        text: trimmed,
        completed: false,
        createdAt: Date.now(),
      };
      setTasks((prev) => [newTask, ...prev]);
      return true;
    },
    [setTasks],
  );

  const toggleTask = useCallback(
    (id: string) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
      );
    },
    [setTasks],
  );

  const deleteTask = useCallback(
    (id: string) => {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    },
    [setTasks],
  );

  const clearCompleted = useCallback(() => {
    setTasks((prev) => prev.filter((t) => !t.completed));
  }, [setTasks]);

  const clearAll = useCallback(() => {
    setTasks([]);
  }, [setTasks]);

  const reorder = useCallback(
    (startIndex: number, endIndex: number) => {
      setTasks((prev) => {
        const pending = prev.filter((t) => !t.completed);
        const completed = prev.filter((t) => t.completed);
        const nextPending = [...pending];
        const [removed] = nextPending.splice(startIndex, 1);
        nextPending.splice(endIndex, 0, removed);
        return [...nextPending, ...completed];
      });
    },
    [setTasks],
  );

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter((t) => t.completed);
      case "pending":
        return tasks.filter((t) => !t.completed);
      default:
        // Show only active tasks in "All" per requirement
        return tasks.filter((t) => !t.completed);
    }
  }, [tasks, filter]);

  const value: TasksContextType = {
    tasks,
    filteredTasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
    reorder,
    clearCompleted,
    clearAll,
  };

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
}
