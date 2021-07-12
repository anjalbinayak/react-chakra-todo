import React from "react";

import { Flex } from "@chakra-ui/layout";
import { Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { addTask } from "../utils/storage";

const Form = () => {
  const [taskName, setTaskName] = useState("");
  const toast = useToast();

  function handleCreateTask() {
    addTask(taskName);
    toast({
      title: "Success",
      description: "New Task Created",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Flex>
      <Input
        placeholder="Do Homework"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        type="text"
        vairant="filled"
        mb={3}
        mr={2}
      />

      <Button
        colorScheme="teal"
        onClick={handleCreateTask}
        disabled={taskName.length === 0}
        type="submit"
      >
        Add
      </Button>
    </Flex>
  );
};

export default Form;
