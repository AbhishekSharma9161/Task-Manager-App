import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTasks } from "@/context/TasksContext";

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
    <form onSubmit={onSubmit} className="flex gap-2 w-full">
      <Input
        aria-label="Add a new task"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" disabled={!canSubmit} className="px-5">
        Add
      </Button>
      {error && (
        <span className="sr-only" role="alert">
          {error}
        </span>
      )}
    </form>
  );
}
