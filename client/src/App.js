import React from 'react';
import { useEffect, useState } from 'react';
import {
  Flex,
  Heading,
  useColorMode,
  Button,
  useToast,
} from '@chakra-ui/react';

import { FaMoon, FaSun } from 'react-icons/fa';
import axios from 'axios';
import Form from './components/Form';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await axios.get('/api/todos');
      setTasks(data);
    };
    if (alert) {
      fetchTodos();
      setAlert(false);
    }
  }, [alert, tasks]);

  const handleDelete = async (id) => {
    const { data } = await axios.delete(`/api/todos/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
    setAlert(true);
    toast({
      title: 'Success',
      description: data.message,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleAdd = async (name) => {
    const { data } = await axios.post('/api/todos/', { name });

    setTasks([...tasks, data.newTodo]);
    setAlert(true);
    toast({
      title: 'Success',
      description: data.message,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleToggle = async (id) => {
    let message = '';
    await axios.put(`/api/todos/setStatus/${id}`);
    setTasks(
      tasks.map(function (task) {
        if (task._id === id) {
          task.status = !task.status;
        }
        return task;
      })
    );
    setAlert(true);
    toast({
      title: 'Success',
      description: message,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const { theme, toggleTheme } = useColorMode();

  return (
    <Flex direction="column" alignContent="center" alignItems="center">
      <Button onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </Button>
      <Flex direction="column">
        <Heading
          mb={2}
          bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
          bgClip="text"
        >
          Task Manager
        </Heading>

        <Form onAdd={handleAdd} tasks={tasks} />
        <Tasks tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
      </Flex>
    </Flex>
  );
}

export default App;
