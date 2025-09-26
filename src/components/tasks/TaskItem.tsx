import { memo, useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { GripVertical, Trash2 } from "lucide-react";
import { useTasks } from "@/context/TasksContext";
import { motion } from "framer-motion";

function TaskItemBase({ id, text, completed, handleProps }: {
  id: string;
  text: string;
  completed: boolean;
  handleProps?: React.HTMLAttributes<HTMLSpanElement>;
}) {
  const { toggleTask, deleteTask } = useTasks();

  const onToggle = useCallback(() => toggleTask(id), [toggleTask, id]);
  const onDelete = useCallback(() => deleteTask(id), [deleteTask, id]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
      className="group flex items-center gap-3 bg-card border border-border rounded-lg p-3 transition-transform"
    >
      <span {...handleProps} className="cursor-grab active:cursor-grabbing">
        <GripVertical className="text-muted-foreground/70 shrink-0" />
      </span>
      <Checkbox checked={completed} onCheckedChange={onToggle} />
      <p
        className={`flex-1 text-sm md:text-base ${completed ? "line-through text-muted-foreground" : ""}`}
      >
        {text}
      </p>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Delete task"
        onClick={onDelete}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 className="text-destructive" />
      </Button>
    </motion.div>
  );
}

const TaskItem = memo(TaskItemBase);
export default TaskItem;
