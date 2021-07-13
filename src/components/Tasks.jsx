import React from "react";
import { Flex } from "@chakra-ui/layout";
import Task from "./Task";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  const bgColor = useColorModeValue("gray.50", "black.900");

  return (
    <Flex direction="column" background={bgColor}>
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
