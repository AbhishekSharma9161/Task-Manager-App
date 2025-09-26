import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTasks } from "@/context/TasksContext";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function TaskInput() {
  const { addTask } = useTasks();
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const canSubmit = useMemo(() => text.trim().length > 0, [text]);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!canSubmit) {
        setError("Please enter a task description.");
        return;
      }
      const ok = addTask(text);
      if (ok) {
        setText("");
        setError("");
      }
    },
    [addTask, canSubmit, text],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={onSubmit} className="flex gap-2 w-full">
        <motion.div 
          className="flex-1"
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <Input
            aria-label="Add a new task"
            placeholder="Add a new task..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (error) setError("");
            }}
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <Button 
            type="submit" 
            disabled={!canSubmit} 
            className="px-4 gap-2 transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </Button>
        </motion.div>
      </form>
      
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2"
          >
            <span className="text-sm text-destructive" role="alert">
              {error}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
