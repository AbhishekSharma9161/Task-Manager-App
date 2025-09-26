import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { useCallback, useEffect, useState } from "react";
import { useTasks } from "@/context/TasksContext";
import TaskItem from "./TaskItem";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function TaskList() {
  const { filteredTasks, filter, reorder } = useTasks();
  const [enabled, setEnabled] = useState(false);

  // Enable drag and drop after component mounts to avoid SSR issues
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;
      
      if (!destination) return;
      if (filter !== "all") return;
      if (source.index === destination.index) return;
      
      reorder(source.index, destination.index);
    },
    [reorder, filter],
  );

  if (!enabled) {
    return (
      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {filteredTasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <TaskItem
                id={task.id}
                text={task.text}
                completed={task.completed}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="task-list">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`space-y-2 ${
              snapshot.isDraggingOver ? 'bg-muted/20 rounded-lg p-2' : ''
            }`}
          >
            <AnimatePresence initial={false}>
              {filteredTasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id}
                  index={index}
                  isDragDisabled={filter !== "all" || task.completed}
                >
                  {(provided, snapshot) => {
                    const child = (
                      <TaskItem
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        handleProps={provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                      />
                    );

                    if (snapshot.isDragging) {
                      return createPortal(
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          style={{
                            ...provided.draggableProps.style,
                          }}
                        >
                          {child}
                        </div>,
                        document.body
                      );
                    }

                    return (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={provided.draggableProps.style}
                      >
                        {child}
                      </motion.div>
                    );
                  }}
                </Draggable>
              ))}
            </AnimatePresence>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
