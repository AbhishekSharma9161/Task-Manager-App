import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { useCallback } from "react";
import { useTasks } from "@/context/TasksContext";
import TaskItem from "./TaskItem";
import { AnimatePresence } from "framer-motion";

export default function TaskList() {
  const { filteredTasks, filter, reorder } = useTasks();

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) return;
      if (filter !== "all") return; // only allow reorder in All view (pending only)
      if (source.index === destination.index) return;
      reorder(source.index, destination.index);
    },
    [reorder, filter],
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasklist" type="TASK" direction="vertical">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-2 relative overflow-hidden min-h-[8px]"
          >
            <AnimatePresence initial={false}>
              {filteredTasks.map((t, index) => (
                <Draggable draggableId={t.id} index={index} key={t.id}>
                  {(providedDraggable) => (
                    <div ref={providedDraggable.innerRef} {...providedDraggable.draggableProps}>
                      <TaskItem
                        id={t.id}
                        text={t.text}
                        completed={t.completed}
                        handleProps={providedDraggable.dragHandleProps}
                      />
                    </div>
                  )}
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
