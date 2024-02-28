import React, { useState } from 'react';
import './global.css';
import Header from './Header.js';
import ExerciseForm from './ExerciseForm.js';
import List from './List.js';

function App() {
  const [exercises, setExercises] = useState([]);

  const handleAddExercise = (newExercise) => {
    // Update state to add the new exercise
    setExercises([...exercises, newExercise]);
  
  };
  

  return (
    <div>
      <div className= "row">
        <div className='col'></div>
        <div className='col'>

          <Header></Header>
          <br/>
          <br/>
          <br/>
          {/* Pass handleAddExercise as a prop to ExerciseForm */}
          <ExerciseForm onAddExercise={handleAddExercise}></ExerciseForm>
          <br/>
          {/* Map each exercise to a List component */}
          {exercises.map((exercise, index) => (
            <List key={index} exercise={exercise}></List>
          ))}
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
}

export default App;
