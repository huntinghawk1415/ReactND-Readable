import React, {Component} from 'react';
import CategoryList from './CategoryList';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Action from '../actions';
import {fetchCategories, newPost} from '../ProjectAPI';
import uuid from 'uuid/v4';

class NewPost extends Component {
  componentDidMount() {
    fetchCategories()
      .then(data => this.props.getCategories(data));
  }
  handleSubmit = () => {
    const info = {
      id: uuid(),
      timestamp: new Date().getTime(),
      author: document.getElementById('author').value,
      title: document.getElementById('title').value,
      body: document.getElementById('body').value,
      category: document.getElementById('category').value,
    }
    newPost(info);
  }
  render() {
    const {categories} = this.props;
    return (
      <div className='container h-100'>
        <div className='row display-4 pt-5 pb-4'>
          New Post
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
              name='author'
              className='form-control'
              placeholder="Who's writing this?" />
          </div>
          <div className='form-group'>
            <label htmlFor='title'>
              <h4>Title</h4>
            </label>
            <input
              id='title'
              type='text'
              required
              name='title'
              className='form-control'
              placeholder='What is your post about?' />
          </div>
          <div className='form-group'>
            <label htmlFor='body'>
              <h4>Body</h4>
            </label>
            <textarea
              id='body'
              type='text'
              required
              name='body'
              className='form-control'
              placeholder='Write your post here'
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category">
              <h4>Choose a Category</h4>
            </label>
            <select id='category' name='category' className="form-control">
              <option disabled selected>Choose</option>
              <CategoryList categories={categories}/>
            </select>
          </div>
          <div className='text-right'>
            <Link to='/all'>
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
  const {categories, getCategories} = reducer;
  return {
    getCategories,
    categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: (data) => dispatch(Action.getCategories(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
