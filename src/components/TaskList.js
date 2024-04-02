import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../redux/actions';


const TaskList = () => {

    const Task = useSelector((state)=> state.Task);
    const {tasks} = Task;
    const dispatch = useDispatch();

    const handleDeleteTask = (t) => {
        dispatch(deleteTask(t));
    };

  return (
    <ul className='flex flex-col items-center border-b-2 border-teal-500 py-2'> 
          {tasks && tasks.map((t) =>(
            <li className='my-2 flex '  key={t.id}>
                <span className='flex-1 w-64 text-lg font-medium'>
                    {t.task}
                    </span>
                <button className='className=" bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"' onClick={()=> handleDeleteTask(t)}>Delete</button>
            </li>
        ))}
    </ul>
  )
}

export default TaskList