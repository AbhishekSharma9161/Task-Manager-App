import { Button } from "@/components/ui/button";
import { useTasks } from "@/context/TasksContext";
import { useMemo } from "react";

export default function TaskFilters() {
  const { filter, setFilter, tasks } = useTasks();

  const counts = useMemo(() => {
    const completed = tasks.filter((t) => t.completed).length;
    const pending = tasks.length - completed;
    return { all: pending, completed, pending };
  }, [tasks]);

  return (
    <div className="flex flex-wrap gap-1 sm:gap-2">
      <FilterButton
        active={filter === "all"}
        onClick={() => setFilter("all")}
        label={`All (${counts.all})`}
      />
      <FilterButton
        active={filter === "pending"}
        onClick={() => setFilter("pending")}
        label={`Pending (${counts.pending})`}
      />
      <FilterButton
        active={filter === "completed"}
        onClick={() => setFilter("completed")}
        label={`Completed (${counts.completed})`}
      />
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <Button
      onClick={onClick}
      variant={active ? "default" : "outline"}
      size="sm"
      className="rounded-full h-7 sm:h-8 px-2 sm:px-3 text-xs sm:text-sm whitespace-nowrap"
    >
      {label}
    </Button>
  );
}
