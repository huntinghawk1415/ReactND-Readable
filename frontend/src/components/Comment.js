import React, {Component} from 'react';
import {formatDate} from './CommonFx';
import VoteUpDown from './VoteUpDown';

class Comment extends Component {
  render() {
    const {author, timestamp, body, votes} = this.props;
    return (
      <div className='row mb-2 bg-light'>
        <div className='col-10'>
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
        <div className='col-2 ml-auto'>
          <VoteUpDown />
        </div>
      </div>
    )
  }
}

export default Comment;
