import React from "react"
import { useEffect, useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { useColorMode , Button} from '@chakra-ui/react';
import { useToast} from "@chakra-ui/react";
import Form from './components/Form';
import Tasks from './components/Tasks';
import { v4 as uuidv4 } from "uuid";

import './App.css';


function App() {

  const [tasks, setTasks]  =useState([])
  const toast = useToast();

  useEffect(()=> {
    setTasks([{
      id: 1,
      name: 'Hey there',
      status: 'complete',
      date: Date.now()
    }])
  }, [])


  const handleDelete = (id) => {

    setTasks(tasks.filter(task=> task.id!==id));

    toast({
      title: "Success",
      description: "Task Removed",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleAdd = (name) => {

    let task = {id:uuidv4(), name:name, status:'incomplete', date:Date.now()};
    setTasks([...tasks,task]);
    

  };

  const handleToggle = (id) => {

    setTasks(tasks.map(function(task){
        if(task.id===id)
        if(task.status==="complete") task.status="incomplete"; else task.status="complete";
        return task
    })); 

  }



  const {toggleTheme} = useColorMode();


  return (

    <Flex direction="column" alignContent="center" alignItems="center">
      <Flex direction="column">

        <Heading mb={2} bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text"> Task Manager</Heading>
        
        <Form onAdd={handleAdd} />
        <Tasks tasks = {tasks} onDelete={handleDelete} onToggle={handleToggle} />
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </Flex>

    </Flex>
  
    
  );
}

export default App;
