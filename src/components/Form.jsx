import React from "react";
import { Flex } from "@chakra-ui/layout";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Form = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

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
          onAdd(taskName);
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
