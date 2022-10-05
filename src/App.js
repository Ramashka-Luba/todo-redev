import { useState } from 'react';

import s from './App.module.css';
import Form from './components/form/Form.jsx'
import ToDo from './components/toDo/ToDo.jsx'


const App = () => {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy Orange", date:'2000-20-20', count: 20, completed: false },
]);


const handleDelete = (id) => {
    const filtredArr = tasks.filter((item) => item.id !== id);
    setTasks([...filtredArr]);
};

const handleEdit = (id, text ) => {
    // console.log("----handleEdit----", id, text);
    const arr = tasks.map(item => item.id === id ? { ...item, title: text } : item);

    setTasks([...arr]);
};

const handleComplete = (id) => {    // заваршина таска или нет 
    setTasks(tasks.map(item => {
        if (item.id === id) {
            return {
                ...item, completed: !item.completed
            };
        }
        return item;
    }))
};





// console.log(tasks);

return (
    <div className={s.App}>
        <div className={s.innerApp}>
            <h2 className={s.titleApp}>What's the Plan for Today?</h2>
            <Form
                setTasks={setTasks}
                tasks={tasks} />

            <ul className={s.list}>
                {tasks.map((task) => (
                    <ToDo key={task.id}  //чтобы пофиксить ошибку с "key" - корневому элементу добавляем key и присваиваем наш id
                        task={task}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        // tasks={tasks}
                        // setTasks={setTasks}
                        handleComplete={handleComplete}
                    />
                ))}
            </ul>
        </div>

    </div>
);
}

export default App;