import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/layout";
import Task from "./Task";
import { getTasks } from "../utils/storage";
const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // setTasks(getTasks());
  });

  //this will be changed

  return (
    <Flex direction="column">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Flex>
  );
};

export default Tasks;
