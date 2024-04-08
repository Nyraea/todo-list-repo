
  import React, { useState } from 'react';
  import './global.css';
  import Header from './Header.js';
  import ExerciseForm from './ExerciseForm.js';
  import List from './List.js';
  
  function App() {
    const [exercises, setExercises] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');
  
    const sortedExercises = [...exercises].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === 'desc') {
        return b.name.localeCompare(a.name);
      } else {
        return 0;
      }
    });
  
    const handleAddExercise = (newExercise) => {
      setExercises([...exercises, {...newExercise, index: exercises.length}]);
    };
  
    const handleDelete = (index) => {
      setExercises(exercises.filter(exercise => exercise.index !== index));
    };
  
    const handleEdit = (editedExercise) => {
      setExercises(prevExercises => prevExercises.map(exercise =>
        exercise.index === editedExercise.index ? editedExercise : exercise
      ));
    };
  
  
    const handleClear = () => {
      setExercises([]);
    };
  
  
    return (
      <div className=''>
        <div className= "row">
          <div className='col'></div>
          <div className='col'>
            <br/>
            <Header></Header>
            <br/>
            {/* Pass handleAddExercise as a prop to ExerciseForm */}
            <ExerciseForm onAddExercise={handleAddExercise} onClear={handleClear}></ExerciseForm>
            <br/>
            <br/>
            <select className = 'd-flex mx-auto bg-transparent text-tron border-neongreen color-neongreen border-1 box-neongreen shadow-neongreen' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
              <option value="none">None</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
            <br/>
            <br/>
            <br/>
            {/* Map each exercise to a List component */}
            {sortedExercises.map((exercise) => (
              <List key={exercise.index} exercise={exercise} onDelete={() => handleDelete(exercise.index)} onEdit={handleEdit} ></List>
            ))}
          </div>
          <div className='col'></div>
        </div>
      </div>
    );
  }
  
  export default App;
