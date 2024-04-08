import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function List({ exercise: {index, name, sets, completed } , onDelete, onEdit}) {
  console.log('eggs is', completed); 
  const [checked, setChecked] = useState(completed);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedExercise, setEditedExercise] = useState({ name, sets });


  useEffect(() => {
    setChecked(completed);
  }, [completed]);

  useEffect(() => {
    setEditedExercise({ name, sets });
  }, [name, sets]);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    onDelete(index);
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (event) => {
    setEditedExercise({ ...editedExercise, [event.target.name]: event.target.value });
  };

  const handleEditSubmit = () => {
    onEdit({ ...editedExercise, index });
    setIsModalOpen(false);
  };


  return (
    <div className='d-flex justify-content-center row'>
      <div className='col'>      
        <h5 className='text-light mx-2'>{name}</h5>
      </div>
      <div className='col'>      
      <h5 className='text-light mx-2'>{sets}</h5>
      </div>
      <div className='col'>      
      {checked ?
       <button className='bg-transparent border-0' onClick={handleCheck}>
         <FontAwesomeIcon icon={faCircleCheck} className='mx-2' style={{color: "#ffffff"}}/>    
       </button>   
        :
       <button className='bg-transparent border-0' onClick={handleCheck}>
         <FontAwesomeIcon icon={faCircle} className='mx-2' style={{color: "#ffffff"}}/>     
       </button>  
      } 
      <button onClick={handleEditClick} className='bg-transparent border-0'>
        <FontAwesomeIcon icon={faPencil} className='mx-2' style={{color: "#ffffff"}} />
      </button>
      <button className='bg-transparent border-0' onClick = {handleDelete}><FontAwesomeIcon icon={faTrash} className='mx-2' style={{color: "#ffffff"}} /></button>
      </div>

      <Modal isOpen={isModalOpen}>
        <h2>Edit Exercise</h2>
        <label>
          Name:
          <input type='text' name='name' value={editedExercise.name} onChange={handleInputChange} />
        </label>
        <label>
          Sets:
          <input type='text' name='sets' value={editedExercise.sets} onChange={handleInputChange} />
        </label>
        <button onClick={handleEditSubmit}>Submit</button>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>

    </div>
  );
}

export default List;
