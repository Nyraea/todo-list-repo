import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';

function List({ exercise: {index, name, sets, completed } , onDelete}) {
  console.log('eggs is', completed); 
  const [checked, setChecked] = useState(completed);

  useEffect(() => {
    setChecked(completed);
  }, [completed]);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    onDelete(index);
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
       <FontAwesomeIcon icon={faCircleCheck} className='mx-2' style={{color: "#ffffff"}} onClick={handleCheck}/>       
        :
       <FontAwesomeIcon icon={faCircle} className='mx-2' style={{color: "#ffffff"}} onClick={handleCheck}/>       
      } 
      <FontAwesomeIcon icon={faPencil} className='mx-2' style={{color: "#ffffff"}} />
      <a href=''><FontAwesomeIcon icon={faTrash} className='mx-2' style={{color: "#ffffff"}} onClick = {handleDelete} /></a>
      </div>
    </div>
  );
}

export default List;
