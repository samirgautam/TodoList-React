import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../redux/actions";

const TaskList = () => {
  const Task = useSelector((state) => state.Task);
  const { tasks } = Task;
  const dispatch = useDispatch();

  const handleDeleteTask = (t) => {
    dispatch(deleteTask(t));
  };
  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <ul className="flex flex-col items-center border-b-2 border-teal-500 py-2">
      {tasks &&
        tasks.map((t) => (
          <li className="my-2 flex " key={t.id}>
            <span
              className={`flex-1 w-64 text-lg font-medium ${
                t.completed ? "line-through" : ""
              }`}
            >
              {t.task}
            </span>
            <button 
            className=" w-10 flex-1 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded m-2"
            onClick={() => handleToggleTask(t.id)}
          >
            {t.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button
              className=' className=" bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white px-2 rounded m-2  "'
              onClick={() => handleDeleteTask(t)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
