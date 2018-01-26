import React from 'react';
import MdArrowDropUp from 'react-icons/lib/md/arrow-drop-up';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';

const VoteUpDown = () => {
  return (
    <div>
      <div>
        <MdArrowDropUp size={30}/>
      </div>
      <div>
        <MdArrowDropDown size={30}/>
      </div>
    </div> 
  )
}

export default VoteUpDown;