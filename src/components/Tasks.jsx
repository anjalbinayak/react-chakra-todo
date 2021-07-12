import React from "react";
import { Flex } from "@chakra-ui/layout";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, onEdit }) => {
  return (
    <Flex direction="column">
      {tasks.map((task) => (
        <Task
          onDelete={onDelete}
          key={task.id}
          onToggle={onToggle}
          task={task}
        />
      ))}
    </Flex>
  );
};

export default Tasks;
