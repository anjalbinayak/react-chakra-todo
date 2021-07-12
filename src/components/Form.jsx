import React from "react";
import { Flex } from "@chakra-ui/layout";
import { Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Form = ({ onAdd, onEdit, tasks }) => {
  const [taskName, setTaskName] = useState("");

  const [id, setId] = useState(0);

  const editHandler = (taskId, name) => {
    setId(taskId);
    setTaskName(name);
  };

  return (
    <Flex>
      <Input
        placeholder="Do Homework"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        value={taskName}
        type="text"
        vairant="filled"
        mb={3}
        mr={2}
      />

      <Button
        colorScheme="teal"
        onClick={() => {
          if (id === 0) onAdd(taskName);
          else onEdit(id, taskName);
          setTaskName("");
        }}
        disabled={taskName.length === 0}
        type="submit"
      >
        Add
      </Button>
    </Flex>
  );
};

export default Form;
