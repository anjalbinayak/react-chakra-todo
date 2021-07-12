import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/layout";
import Task from "./Task";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Do HomeWork", status: "incomplete", date: Date.now() },
    { id: 2, name: "Wash Dishes", status: "incomplete", date: Date.now() },
    { id: 3, name: "Copulate with dogs", status: "complete", date: Date.now() },
    { id: 4, name: "Read ", status: "complete", date: Date.now() },
  ]);

  useEffect(() => {
    // const tasks = [{ name: "Anjal" }];
  }, []);

  return (
    <Flex direction="column">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Flex>
  );
};

export default Tasks;
