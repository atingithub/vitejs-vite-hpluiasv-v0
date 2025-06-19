import React, { useState } from "react";

const TaskForm : React.FC = () => {

    const [task, setTask] = useState("Task 1");

    const handleUpdateTask = (updatedTask: string) => {
        setTask(updatedTask)
    }

    return (
        <div>
            <p>Task : {task}</p>
            <button onClick={() => handleUpdateTask("task update")}>Update task</button>
        </div>
    )
}

export default TaskForm;