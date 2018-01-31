import React, {Component} from 'react';
import {formatDate} from './CommonFx';
import MdArrowDropUp from 'react-icons/lib/md/arrow-drop-up';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
import MdCreate from 'react-icons/lib/md/create';
import MdClear from 'react-icons/lib/md/clear';

class Comment extends Component {
  render() {
    const {author, timestamp, body, votes} = this.props;
    return (
      <div className='row mb-2 bg-light'>
        <div className='col-8'>
          <div className='row'>
            <div className='col-2 d-flex justify-content-center align-items-center bg-dark text-light'>
              <p className='font-weight-bold'>
                {votes}
              </p>
            </div>
            <div className='col-10'>
              <h6>
                {author + ' '}
                <small className='text-muted'>{formatDate(timestamp)}</small>
              </h6>
              <p>{body}</p>
            </div>
          </div>
        </div>
        <button className='btn btn-light btn-sm ml-auto' title='Vote up'>
          <MdArrowDropUp size={30}/>
        </button>
        <button className='btn btn-light btn-sm' title='Vote down'>
          <MdArrowDropDown size={30}/>
        </button>
        <button className='btn btn-light btn-sm' title='Edit Comment'>
          <MdCreate size={30}/>
        </button>
        <button className='btn btn-light btn-sm' title='Delete'>
          <MdClear className='text-danger' size={30}/>
        </button>
      </div>
    )
  }
}

export default Comment;
