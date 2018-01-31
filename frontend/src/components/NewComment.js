import React, {Component} from 'react';

class NewComment extends Component {
  render() {
    return (
      <div className='container h-100'>
        <div className='row display-4 pt-5 pb-4'>
          New Comment
        </div>
        <form>
          <div className='form-group'>
            <label htmlFor='name'>
              <h4>
                Name
              </h4>
            </label>
            <input
              type='text'
              required
              className='form-control'
              placeholder="Who's writing this?" />
          </div>
          <div className='form-group'>
            <label htmlFor='body'>
              <h4>
                Body
              </h4>
            </label>
            <textarea
              type='text'
              required
              className='form-control'
              placeholder='Write your comment here'
            ></textarea>
          </div>
          <div className='text-right'>
            <button
              type='submit'
              className='btn btn-dark'
            >Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewComment;
