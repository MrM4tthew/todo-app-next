import React, { useEffect, useState } from 'react'
import Title from './TitleTodo'
import Input from './InputTodo'
import Listtodo from './ListTodo'

import styles from '../../styles/Todo.module.scss'

const Todo = (props) => {
    const [data, setData] = useState([]);
    const [newTodo, setNewTodo] = useState();

    useEffect(() => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem(
                "todos",
                JSON.stringify([
                    {
                        task: "Complete online Javascript course",
                        isFinish: true,
                        id: 0
                    },
                    {
                        task: "Jog around the park 3x",
                        isFinish: false,
                        id: 1
                    },
                    {
                        task: "10 minutes meditation",
                        isFinish: false,
                        id: 2
                    },
                    {
                        task: "Read for 1 hour",
                        isFinish: false,
                        id: 3
                    },
                    {
                        task: "Pick up groceries",
                        isFinish: false,
                        id: 4
                    },
                    {
                        task: "Complete Todo App on Frontend Mentor",
                        isFinish: false,
                        id: 5
                    },
                ])
            );
        }

        var currentData = JSON.parse(localStorage.getItem("todos"));
        setData(currentData);

        const currentnot = data.filter((dt) => dt.isFinish === false).length;
        // setNotfinished(currentnot);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(data))
    }, [data])


    const submitHandler = (e) => {
        e.preventDefault()

        if (newTodo) {
            let usedIDs = [];
            let count = 0;
            let newID;

            for (let todo of data) {
                usedIDs.push(todo.id);
            }

            while (true) {
                if (usedIDs.includes(count)) {
                    count++;
                } else {
                    newID = count;
                    break;
                }
            }

            setData([...data, { task: newTodo, isFinish: false, id: newID }]);
            setNewTodo('');
            console.log(data);
        }
    }

    const deleteHandler = (todoId) => {
        const updatedTodos = data.filter((item) => item.id !== todoId)

        setData(updatedTodos)
    }

    const deleteCompletedHandler = () => {
        const updatedTodos = data.filter((item) => item.isFinish == false)

        setData(updatedTodos)
    }

    const doneHandler = (todoId) => {
        const index = data.findIndex((emp) => emp.id === todoId)
        const doneTodo = [...data]

        doneTodo[index] = {
            task: data[index].task,
            isFinish: !data[index].isFinish,
            id: data[index].id,
        }

        setData(doneTodo)
    }


    return (
        <div className={styles.container}>
            <Title {...props} />
            <Input newTodo={newTodo} submitHandler={submitHandler} onChange={(e) => setNewTodo(e.target.value)} />
            <Listtodo data={data} doneHandler={doneHandler} deleteHandler={deleteHandler} deleteCompletedHandler={deleteCompletedHandler} />
        </div>
    )
}

export default Todo
