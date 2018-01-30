import React, {Component} from 'react';

class NewPost extends Component {
  render() {
    return (
      <div className='container h-100'>
        <div className='row display-4 pt-5 pb-4'>
          New Post
        </div>
        <form>
          <div className='form-group'>
            <label htmlFor='title'>
              <h4>
                Title
              </h4>
            </label>
            <input
              type='text'
              required
              className='form-control'
              placeholder='What is your post about?' />
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
              placeholder='Write your post here'
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category">
              <h4>
                Choose a Category
              </h4>
            </label>
            <select className="form-control">
              <option disabled selected>Choose</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
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

export default NewPost;
