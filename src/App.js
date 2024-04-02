
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
  
      <div className='max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16' >
         <div class="px-4 py-2">
        <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
    </div>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
