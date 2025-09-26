import { memo, useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { GripVertical, Trash2 } from "lucide-react";
import { useTasks } from "@/context/TasksContext";

function TaskItemBase({ id, text, completed, handleProps, isDragging = false }: {
  id: string;
  text: string;
  completed: boolean;
  handleProps?: React.HTMLAttributes<HTMLSpanElement>;
  isDragging?: boolean;
}) {
  const { toggleTask, deleteTask } = useTasks();

  const onToggle = useCallback(() => toggleTask(id), [toggleTask, id]);
  const onDelete = useCallback(() => deleteTask(id), [deleteTask, id]);

  return (
    <div
      className={`group flex items-center gap-3 bg-card border rounded-lg p-3 transition-all duration-200 ${
        isDragging 
          ? 'border-primary shadow-xl bg-card/95 backdrop-blur-sm rotate-1 scale-105' 
          : 'border-border hover:border-border/80 hover:shadow-md hover:scale-[1.01]'
      } ${completed ? 'opacity-75' : ''}`}
    >
      <span 
        {...handleProps} 
        className={`shrink-0 transition-all duration-200 ${
          completed 
            ? 'cursor-not-allowed text-muted-foreground/50' 
            : 'cursor-grab active:cursor-grabbing text-muted-foreground/70 hover:text-muted-foreground hover:scale-110'
        }`}
      >
        <GripVertical className="w-4 h-4" />
      </span>
      
      <Checkbox 
        checked={completed} 
        onCheckedChange={onToggle}
        className="transition-transform hover:scale-110 active:scale-95"
      />
      
      <p
        className={`flex-1 text-sm md:text-base transition-all duration-300 ${
          completed ? "line-through text-muted-foreground" : ""
        }`}
      >
        {text}
      </p>
      
      <Button
        variant="ghost"
        size="icon"
        aria-label="Delete task"
        onClick={onDelete}
        className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}

const TaskItem = memo(TaskItemBase);
export default TaskItem;
