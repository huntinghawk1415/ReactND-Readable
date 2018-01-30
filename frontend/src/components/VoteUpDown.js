import React from 'react';
import MdArrowDropUp from 'react-icons/lib/md/arrow-drop-up';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';

const VoteUpDown = () => {
  return (
    <div>
      <button className='btn btn-light btn-sm m-1' title='Vote up'>
        <MdArrowDropUp size={30}/>
      </button>
      <button className='btn btn-light btn-sm m-1' title='Vote down'>
        <MdArrowDropDown size={30}/>
      </button>
    </div> 
  )
}

export default VoteUpDown;