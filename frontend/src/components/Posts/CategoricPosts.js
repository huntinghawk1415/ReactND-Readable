import React, {Component} from 'react';
import {formatDate} from '../CommonFx';

class CategoricPosts extends Component {
  render() {
    const {title, timestamp, body, votes, author} = this.props;
    return (
      <div className='row mt-2 block-hover p-3'>
        <div className='col-md-1 d-flex justify-content-center align-items-center bg-dark text-light'>
          <h5 className='d-flex justify-content-center align-items-center'>
            {votes}
          </h5>
        </div>
        <div className='col ml-3'>
          <div className='row'>
            <h5>
              {title + ' '}
              <small className='text-muted'>{formatDate(timestamp)}</small>
            </h5>
          </div>
          <div className='row'>
            <h6 className='font-weight-normal'>
              <span className='pr-2'>{body}</span> ~
              <small className='text-muted'>{author}</small>
            </h6>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoricPosts
