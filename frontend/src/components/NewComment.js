import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {newComment} from '../ProjectAPI';
import uuid from 'uuid/v4';

class NewComment extends Component {
  handleSubmit = () => {
    const {location} = this.props;
    const info = {
      id: uuid(),
      parentId: location.pathname.slice(location.pathname.search(/\D\//) + 2, location.pathname.search('/c')),
      timestamp: new Date().getTime(),
      author: document.getElementById('author').value,
      body: document.getElementById('body').value,
    }
    newComment(info);
  }
  render() {
    const {pathname} = this.props.location;
    return (
      <div className='container h-100'>
        <div className='row display-4 pt-5 pb-4'>
          New Comment
        </div>
        <form>
          <div className='form-group'>
            <label htmlFor='name'>
              <h4>Name</h4>
            </label>
            <input
              id='author'
              type='text'
              required
              className='form-control'
              placeholder="Who's writing this?" />
          </div>
          <div className='form-group'>
            <label htmlFor='body'>
              <h4>Body</h4>
            </label>
            <textarea
              id='body'
              type='text'
              required
              className='form-control'
              placeholder='Write your comment here'
            ></textarea>
          </div>
          <div className='text-right'>
            <Link to={`${pathname.slice(0, pathname.search('/create-comment'))}`}>
              <button
                onClick={this.handleSubmit}
                type='submit'
                className='btn btn-dark'
              >Submit</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(reducer) {
  return reducer;
}

export default connect(mapStateToProps)(NewComment);
