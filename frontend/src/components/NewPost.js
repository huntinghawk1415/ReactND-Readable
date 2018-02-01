import React, {Component} from 'react';
import CategoryList from './CategoryList';
import {connect} from 'react-redux';
import * as Action from '../actions';
import {fetchCategories} from '../ProjectAPI';

class NewPost extends Component {
  componentDidMount() {
    fetchCategories()
      .then(data => this.props.getCategories(data));
  }
  render() {
    const {categories} = this.props;
    console.log(this.props)
    return (
      <div className='container h-100'>
        <div className='row display-4 pt-5 pb-4'>
          New Post
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
              <CategoryList categories={categories}/>
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
