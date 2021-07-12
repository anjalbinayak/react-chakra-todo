
import { Flex, Heading } from '@chakra-ui/react';
import './App.css';
import Form from './Component/Form';
import Tasks from './Component/Tasks';


function App() {
  return (
    <Flex direction="column" alignContent="center" alignItems="center">
      <Flex direction="column">

        <Heading mb={2} bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text"> Task Manager</Heading>
        <Form />
        <Tasks />
      </Flex>

    </Flex>
  );
}

export default App;
