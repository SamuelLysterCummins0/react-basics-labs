import React from 'react';

function Task(props) {

    const priorityStyle = (priority) => {
        switch (priority) {
          case 'Low':
            return { backgroundColor: 'green', color: 'white' }; // Low priority style
          case 'Medium':
            return { backgroundColor: 'orange', color: 'white' }; // Medium priority style
          case 'High':
            return { backgroundColor: 'red', color: 'white' }; // High priority style
          default:
            return {};
        }
      };
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        <p className="title">{props.title}</p>
        <p>Due:{props.deadline}</p>
        <p className="desc">{props.description}</p>
        <p style={priorityStyle(props.priority)} className="priority">{props.priority}</p>
        <button onClick={props.markDone} className='doneButton'>Done</button>
        <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;