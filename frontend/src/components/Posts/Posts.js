import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchAllPosts} from '../../ProjectAPI';
import CategoricPosts from './CategoricPosts';
import {connect} from 'react-redux';
import * as Action from '../../actions';

class Posts extends Component {
  componentDidMount() {
    fetchAllPosts()
      .then(data => this.props.getCatPosts(data))
  }
  render() {
    const {postsData} = this.props;
    return (
      <div className='container h-100'>
        <div className='row display-4 pt-5 pb-4'>
          <div className='col'>Posts</div>
          <div className='col ml-auto mt-auto'>
            <select className="form-control">
              <option disabled selected>Choose</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div>{
          postsData
            ? postsData.map(s => (
              <div key={s.id}>
                <Link
                  className='link-no-style text-dark'
                  to={`/${s.id}`}
                >
                  <CategoricPosts
                    title={s.title}
                    timestamp={s.timestamp}
                    body={s.body}
                    votes={s.voteScore}
                    author={s.author}
                  />
                </Link>
              </div>
            ))
            : null
        }</div>
      </div>
    )
  }
}

function mapStateToProps(reducer) {
  return reducer
}

function mapDispatchToProps(dispatch) {
  return {
    getCatPosts: (data) => dispatch(Action.getCatPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
