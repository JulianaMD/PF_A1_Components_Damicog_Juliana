import Navbar from './components/Navbar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <Navbar />
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;