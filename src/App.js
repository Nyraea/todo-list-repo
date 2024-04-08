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
  const handleDelete = (index) => {
    setExercises(exercises.filter(exercise => exercise.index == index));
  };

  
  const handleClear = () => {
    setExercises([]);
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
          <ExerciseForm onAddExercise={handleAddExercise} onClear={handleClear}></ExerciseForm>
          <br/>
          {/* Map each exercise to a List component */}
          {exercises.map((exercise, index) => (
            <List key={index} exercise={exercise} onDelete={() => handleDelete(index)}></List>
          ))}
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
}

export default App;
