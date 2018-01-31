import React, {Component} from 'react';
import {formatDate} from '../CommonFx';

class AllPosts extends Component {
  render() {
    const {title, timestamp, body, votes, author, commentCount} = this.props;
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
            <div className='font-weight-normal pr-2 text-truncate'>
              {body}
            </div>
          </div>
          <div className='row text-muted'>
            <div className='col-2 pl-0 ml-0'>{author}</div>
            <div className='col-2 mr-auto'>Comments~{commentCount}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllPosts;
