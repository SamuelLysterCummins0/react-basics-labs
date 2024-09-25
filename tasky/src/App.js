
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Tomorrow" description = "Empty dishwasher"/>
      <Task title="Laundry" deadline="Tomorrow" description = "Fold Laundry"/>
       <Task title="Tidy" deadline="Today" description = "LOL" />
    </div>
  );
}

export default App;
