import { useState } from 'react';
import Task from './components/Task';
import Button from './components/Button';
import Modal from './components/Modal';
import './App.scss';

function App() {
    const [active, setActive] = useState(-1);
    const [modal, setModal] = useState(null);
    const tasks = ['task 1', 'task 2', 'task 3', 'task 5'];

    // console.log('re-render');
    const activeTask = (task) => {
        if (task === active) setActive(-1);
        else setActive(task);
    };

    const closeModal = () => {
        setModal(null);
    };
    const editMode = () => {
        setModal(1);
    };
    const deleteMode = (task) => {
        setModal({
            title: 'Delete this task forever?',
            primary: ['Delete', 'danger'],
            secondary: ['Cancel', 'disable'],
            body: task,
        });
    };

    return (
        <div className="App">
            <div className="wrapper">
                <h1>TO DO</h1>
                <div>
                    <input type="text" name="" id="" placeholder="E.g: Your task" />
                    <Button value={'+'} />
                </div>
                <div className="tasks">
                    {active !== -1 ? (
                        <div className="active-mark" style={{ '--i': active }}>
                            &gt;
                        </div>
                    ) : null}
                    {tasks.map((task, index) => {
                        return (
                            <Task
                                key={index}
                                value={task}
                                onClick={() => {
                                    activeTask(index);
                                }}
                                active={active === index}
                                editMode={editMode}
                                deleteMode={() => deleteMode(task)}
                            />
                        );
                    })}
                </div>
                {modal && (
                    <Modal
                        title={modal.title}
                        primary={modal.primary}
                        secondary={modal.secondary}
                        closeModal={closeModal}
                    >
                        {modal.body}
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default App;
