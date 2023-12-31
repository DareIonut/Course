import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {


    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

   logTodo(id, title, completed)
});

const logTodo = (id: number, title: string, completed: boolean)=>{
    console.log(`There is the ${id}, the ${title} and ${completed}`)
}



//Types 
interface Car{
    name: string,
    color: string,
    age: number,
    lether: boolean,
    cruiseControl: boolean,
}

const machine: Car = {
    name: "vw",
    color: "red",
    age: 10,
    lether: false,
    cruiseControl: true
}


console.log(machine.name);