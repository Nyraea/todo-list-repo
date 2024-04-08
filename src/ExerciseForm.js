import { useState } from "react";
import './global.css';

function ExerciseForm({ onAddExercise, onClear }) {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any of the fields are empty
    if (!exercise || !sets || !reps) {
      alert('Please fill out all fields');
      return;
    }
   
    const newExercise = {
      name: exercise,
      sets: parseInt(sets),
      reps: parseInt(reps),
      completed: completed 
    };
   
    onAddExercise(newExercise);
    // Reset form fields
    setExercise('');
    setSets('');
    setReps('');
    setCompleted(false);
  };

  const handleExerciseChange = (e) => {
    setExercise(e.target.value);
  };

  const handleSetsChange = (e) => {
    setSets(e.target.value);
  };

  const handleRepsChange = (e) => {
    setReps(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCompleted(e.target.checked);
  };

  const handleClearClick = (event) => {
    event.preventDefault();
    onClear();
  };

  return (
    <div className="d-flex justify-content-center flex-column">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exerciseInput" className="text-tron text-regular color-neongreen"><b>Enter exercise</b></label>
          <input
            type="text"
            className="form-control bg-transparent rounded-pill box-neongreen border-neongreen text-light"
            id="exerciseInput"
            placeholder="Bicep Curls"
            value={exercise}
            onChange={handleExerciseChange}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="setsInput" className="text-tron text-regular color-neongreen"><b>Enter sets</b></label>
          <input
            type="number"
            className="form-control border-2 bg-transparent rounded-pill box-neongreen border-neongreen text-light"
            id="setsInput"
            placeholder="Enter sets"
            value={sets}
            onChange={handleSetsChange}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="repsInput" className="text-tron text-regular color-neongreen"><b>Enter reps</b></label>
          <input
            type="number"
            className="form-control bg-transparent rounded-pill box-neongreen border-neongreen text-light"
            id="repsInput"
            placeholder="Enter reps"
            value={reps}
            onChange={handleRepsChange}
          />
        </div>
        <br/>
        <div className="d-flex justify-content-center form-check">
          <input
            type="checkbox"
            className="d-flex mx-2 form-check-input bg-transparent border-2 shadow-neongreen border-neongreen rounded-pill"
            id="checkboxInput"
            checked={completed}
            onChange={handleCheckboxChange}
          />
          <label className="d-flex mx-2 form-check-label text-tron text-small color-neongreen" htmlFor="checkboxInput"><b>Completed</b></label>
        </div>
        <br/>
        <button type="submit" className="d-flex box-neongreen mx-auto bg-transparent border-4 shadow-neongreen border-neongreen rounded-pill text-tron color-neongreen">Add Exercise</button>
        <br/>
        <button onClick={handleClearClick} className="d-flex box-neongreen mx-auto bg-transparent shadow-neongreen border-4 border-neongreen rounded-pill text-tron color-neongreen">Clear Exercises</button>

      </form>
      
    </div>
  );
}

export default ExerciseForm;
