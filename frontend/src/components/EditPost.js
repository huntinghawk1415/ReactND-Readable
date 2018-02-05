import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {editPost} from '../ProjectAPI';
import {getSpecPost} from '../actions';

class EditPost extends Component {
  handleSubmit = () => {
    const id = this.props.specPostData.id;
    const info = {
      title: document.getElementById('title').value,
      body: document.getElementById('body').value,
    }
    editPost(id, info);
  }
  render() {
    const {specPostData, location} = this.props;
    return specPostData
    ? (
        <div className='container h-100'>
          <div className='row display-4 pt-5 pb-4'>
            Edit Post
          </div>
          <form>
            <div className='form-group'>
              <label htmlFor='title'>
                <h4>Title</h4>
              </label>
              <input
                id='title'
                defaultValue={specPostData.title}
                type='text'
                required
                name='title'
                className='form-control' />
            </div>
            <div className='form-group'>
              <label htmlFor='body'>
                <h4>Body</h4>
              </label>
              <textarea
                id='body'
                defaultValue={specPostData.body}
                type='text'
                required
                name='body'
                className='form-control'
              ></textarea>
            </div>
            <div className='text-right'>
              <Link to={`${location.pathname.slice(0, location.pathname.search('/edit-post'))}`}>
                <button
                  onClick={this.handleSubmit}
                  type='submit'
                  className='btn btn-dark'
                >Submit</button>
              </Link>
            </div>
          </form>
        </div>
      )
    : <div className='container h-100 text-center'>
        <div className='pt-5 pb-4'>Hmm... something weird happend.</div>
        <button className='btn btn-dark btn-lg' onClick={this.props.history.goBack}>Let's go back</button>
      </div>
  }
}

function mapStateToProps(reducer) {
  const {specPostData} = reducer;
  return {
    specPostData,
    getSpecPost,
  };
}

export default connect(mapStateToProps)(EditPost);
