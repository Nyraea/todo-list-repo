import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './global.css';

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
        <h5 className='text-tron text-regular color-neongreen mx-2'>{name}</h5>
      </div>
      <div className='col'>      
      <h5 className='text-tron text-regular color-neongreen mx-2'>{sets}</h5>
      </div>
      <div className='col'>      
      {checked ?
       <button className='bg-transparent border-0' onClick={handleCheck}>
         <FontAwesomeIcon icon={faCircleCheck} className='mx-2 color-neongreen'/>    
       </button>   
        :
       <button className='bg-transparent border-0' onClick={handleCheck}>
         <FontAwesomeIcon icon={faCircle} className='mx-2 color-neongreen'/>     
       </button>  
      } 
      <button onClick={handleEditClick} className='bg-transparent border-0'>
        <FontAwesomeIcon icon={faPencil} className='mx-2 color-neongreen' />
      </button>
      <button className='bg-transparent border-0' onClick = {handleDelete}><FontAwesomeIcon icon={faTrash} className='mx-2 color-neongreen' style={{color: "#ffffff"}} /></button>
      </div>

      <Modal isOpen={isModalOpen} className='d-flex justify-content-center flex-column align-items-center bg-shadow w-100 h-100' >
        <h1 className='text-tron color-neongreen shadow-neongreen'>Edit Exercise</h1>
        <br></br>
        <label className='d-flex text-tron color-neongreen text-small' htmlFor='exerciseInput'>
          Name
          </label>
          <input id = "exerciseInput" type='text' name='name' value={editedExercise.name} onChange={handleInputChange} className='bg-transparent rounded-pill box-neongreen border-neongreen text-light' />
        <br/>
        <label className='d-flex text-tron color-neongreen text-small' htmlFor='setsInput'>
          Sets
          </label>
          <input id = "setsInput" type='text' name='sets' value={editedExercise.sets} onChange={handleInputChange} className='bg-transparent rounded-pill box-neongreen border-neongreen text-light' />
          <br/>
          <br/>
          <br></br>
        <button onClick={handleEditSubmit} className="d-flex box-neongreen mx-auto bg-transparent border-4 shadow-neongreen border-neongreen rounded-pill text-tron color-neongreen px-5 ">Submit</button>
        <br/>
        <button onClick={() => setIsModalOpen(false)} className="d-flex box-neongreen mx-auto bg-transparent border-4 shadow-neongreen border-neongreen rounded-pill text-tron color-neongreen px-5">Close</button>
      </Modal>

    </div>
  );
}

export default List;
