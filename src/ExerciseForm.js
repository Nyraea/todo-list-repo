import { useState } from "react";

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
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exerciseInput" className="text-light"><b>Enter exercise</b></label>
          <input
            type="text"
            className="form-control"
            id="exerciseInput"
            placeholder="Bicep Curls"
            value={exercise}
            onChange={handleExerciseChange}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="setsInput" className="text-light"><b>Enter sets</b></label>
          <input
            type="number"
            className="form-control"
            id="setsInput"
            placeholder="Enter sets"
            value={sets}
            onChange={handleSetsChange}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="repsInput" className="text-light"><b>Enter reps</b></label>
          <input
            type="number"
            className="form-control"
            id="repsInput"
            placeholder="Enter reps"
            value={reps}
            onChange={handleRepsChange}
          />
        </div>
        <br/>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkboxInput"
            checked={completed}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label text-light" htmlFor="checkboxInput"><b>Completed</b></label>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary mx-auto">Add Exercise</button>
        <br/>
        <br/>
        <button onClick={handleClearClick} className="btn btn-secondary mx-auto">Clear Exercises</button>

      </form>
    </div>
  );
}

export default ExerciseForm;
