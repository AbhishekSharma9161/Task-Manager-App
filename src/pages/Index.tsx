import Header from "@/components/Layout/Header";
import TaskInput from "@/components/tasks/TaskInput";
import TaskFilters from "@/components/tasks/TaskFilters";
import TaskList from "@/components/tasks/TaskList";
import { Button } from "@/components/ui/button";
import { useTasks } from "@/context/TasksContext";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

export default function Index() {
  const { clearAll } = useTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      <Header />
      <main className="container pb-20">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl mt-6 md:mt-10 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60 border rounded-2xl p-4 md:p-6 shadow-sm overflow-hidden"
        >
          <div className="flex flex-col gap-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
            >
              Your Tasks
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <TaskInput />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center justify-between flex-wrap gap-2 sm:gap-3"
            >
              <TaskFilters />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={clearAll}
                  className="h-7 sm:h-8 px-2 sm:px-3 text-xs sm:text-sm whitespace-nowrap gap-1.5 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20 transition-all duration-200"
                >
                  <Trash2 className="w-3 h-3" />
                  Clear All
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <TaskList />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-2 text-xs md:text-sm text-muted-foreground text-center"
            >
              💡 Drag tasks to reorder • Click to complete • Hover to delete
            </motion.p>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
