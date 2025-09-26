import Header from "@/components/Layout/Header";
import TaskInput from "@/components/tasks/TaskInput";
import TaskFilters from "@/components/tasks/TaskFilters";
import TaskList from "@/components/tasks/TaskList";
import { Button } from "@/components/ui/button";
import { useTasks } from "@/context/TasksContext";

export default function Index() {
  const { clearAll } = useTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      <Header />
      <main className="container pb-20">
        <section className="mx-auto max-w-2xl mt-6 md:mt-10 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60 border rounded-2xl p-4 md:p-6 shadow-sm overflow-hidden">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Your Tasks</h1>
            <TaskInput />
            <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3">
              <TaskFilters />
              <Button 
                variant="outline" 
                size="sm"
                onClick={clearAll}
                className="h-7 sm:h-8 px-2 sm:px-3 text-xs sm:text-sm whitespace-nowrap"
              >
                Clear All
              </Button>
            </div>
            <TaskList />
            <p className="mt-2 text-xs md:text-sm text-muted-foreground">Drag to move tasks</p>
          </div>
        </section>
      </main>
    </div>
  );
}
