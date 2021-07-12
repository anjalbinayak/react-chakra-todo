import { v4 as uuidv4 } from 'uuid';

export function getTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks;
}

function flush(tasks){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

export function addTask(name){
    let tasks = getTasks();
    let task = {id:uuidv4(),name, date:Date.now(), status:'incomplete'};
    tasks.push(task);   
    flush(tasks);
}

export function toggle(id){

}

export function deleteTask(id){
    let tasks = getTasks();
    tasks.filter(task=> task.id !== id);
    flush(tasks);
}

export function editTask(id,name){

}

export function complete(id){

}

export function incomplete(id){

}


