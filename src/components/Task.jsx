import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/layout";
import { FaTrash, FaPen, FaCheckCircle } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <Flex
      direction="column"
      bgGradient="linear(to-r,gray.100,gray.200,gray.300)"
      rounded={5}
      m={1}
    >
      <Box width="100%" d="flex" p={2}>
        <Text as={task.status === "complete" ? "s" : ""}> {task.name} </Text>
        <span>
          <Button
            colorScheme="teal"
            onClick={() => onToggle(task.id)}
            ml={1}
            rounded={50}
            size="xs"
          >
            <FaCheckCircle />
          </Button>
          <Button
            colorScheme="red"
            onClick={() => onDelete(task.id)}
            rounded={50}
            ml={1}
            size="xs"
          >
            <FaTrash />
          </Button>
        </span>
      </Box>
    </Flex>
  );
};

export default Task;
