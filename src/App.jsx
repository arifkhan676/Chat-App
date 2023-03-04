import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faPhone, faVideo, faSmile,faPaperPlane } from '@fortawesome/free-solid-svg-icons' 

function App() {
  return (
    <div className="App">
     <div className='middle-container'> 
     <div className='top'>
      <FontAwesomeIcon className='topi' icon={faUser} />
    <h3 className='userName' > Nur Hossain Arman </h3>
      <div className='iconTop'>
         <FontAwesomeIcon className='ti' icon={faPhone} />
         <FontAwesomeIcon className='ti' icon={faVideo} />
         <FontAwesomeIcon className='ti' icon={faUser} />

          </div>
     </div>

     <div className='middle'>
     <input className='rightUser' type="text" placeholder='say something' />
   <input className='leftUser' type="text" placeholder='what about ypu?' />
     </div>
     <div className='bottom'>
      <div className='bti' >
      <FontAwesomeIcon className='bottomicon' icon={faSmile} />

      <textarea className='bin' name="" id="" cols='70' placeholder='Message'></textarea>
      <FontAwesomeIcon className='bottomicon' icon={faPaperPlane} />

      </div>
     </div>
      </div>
     
    </div>
  );
}

export default App;
