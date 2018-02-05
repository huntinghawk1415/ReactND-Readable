import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchAllPosts, fetchCatPosts} from '../../ProjectAPI';
import CategoricPosts from './CategoricPosts';
import SortBy from '../SortBy';
import {connect} from 'react-redux';
import * as Action from '../../actions';
import * as CommonFx from '../CommonFx';

class Posts extends Component {
  componentDidMount() {
    const {getCatPosts, location} = this.props;
    const uri = location.pathname.slice(1, location.pathname.length)
    uri === 'all'
    ? fetchAllPosts()
        .then(data => getCatPosts(data))
    : fetchCatPosts(uri)
        .then(data => getCatPosts(data))
  }
  handleClick = ({target}) => {
    const {getCatPosts} = this.props;
    console.log(target.value);
    target.value !== 'all'
    ? fetchCatPosts(target.value)
        .then(data => getCatPosts(data))
    : fetchAllPosts()
        .then(data => getCatPosts(data))
  }
  handleDateChange = (str) => {
    const {sortPostsByDate} = this.props;
    if(str === 'dateNewFirst') {
      sortPostsByDate(CommonFx.sortByDateAsc);
      this.forceUpdate();
    } else if (str === 'dateOldFirst') {
      sortPostsByDate(CommonFx.sortByDateDsc);
      this.forceUpdate();
    }
  }
  handleScoreChange = (str) => {
    const {sortPostsByVote} = this.props;
    if(str === 'scoreHighFirst') {
      sortPostsByVote(CommonFx.sortByVoteAsc);
      this.forceUpdate();
    } else if (str === 'scoreLowFirst') {
      sortPostsByVote(CommonFx.sortByVoteDsc);
      this.forceUpdate();
    }
  }
  update = () => {
    const {getCatPosts, location} = this.props;
    const uri = location.pathname.slice(1, location.pathname.length)
    uri === 'all'
    ? fetchAllPosts()
        .then(data => getCatPosts(data))
    : fetchCatPosts(uri)
        .then(data => getCatPosts(data))
  }
  render() {
    const {postsData} = this.props;
    return (
      <div className='container h-100'>
        <div className='row display-4 pt-5 pb-4'>
          <div className='col'>Posts</div>
          <div className='col ml-auto mt-auto'>
            <div className='btn-group'>
              <Link to='/all'><button onClick={this.handleClick} className='btn btn-primary btn-sm mt-2' value='all'>All</button></Link>
              <Link to='/react'><button onClick={this.handleClick} className='btn btn-dark btn-sm ml-2 mt-2' value='react'>React</button></Link>
              <Link to='/redux'><button onClick={this.handleClick} className='btn btn-dark btn-sm ml-2 mt-2' value='redux'>Redux</button></Link>
              <Link to='/udacity'><button onClick={this.handleClick} className='btn btn-dark btn-sm ml-2 mt-2' value='udacity'>Udacity</button></Link>
            </div>
          </div>
          <SortBy
            handleDateChange={this.handleDateChange}
            handleScoreChange={this.handleScoreChange}
          />
        </div>
        <div>{
          postsData && postsData.length
            ? postsData.map(s => (
              <div key={s.id}>
                <CategoricPosts
                  id={s.id}
                  title={s.title}
                  timestamp={s.timestamp}
                  body={s.body}
                  votes={s.voteScore}
                  author={s.author}
                  commentCount={s.commentCount}
                  category={s.category}
                  update={this.update}
                />
              </div>
            ))
            : <div className='display-4'>There are no Posts! Click <Link to='/create-post'>here</Link> to make one</div>
        }</div>
      </div>
    );
  }
}

function mapStateToProps(reducer) {
  return reducer;
}

function mapDispatchToProps(dispatch) {
  return {
    getCatPosts: (data) => dispatch(Action.getCatPosts(data)),
    getCategories: (data) => dispatch(Action.getCategories(data)),
    sortPostsByDate: (data) => dispatch(Action.sortPostsByDate(data)),
    sortPostsByVote: (data) => dispatch(Action.sortPostsByVote(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
