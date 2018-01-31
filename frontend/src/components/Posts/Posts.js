import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchAllPosts, fetchCatPosts, fetchCategories} from '../../ProjectAPI';
import CategoricPosts from './CategoricPosts';
import CategoryList from '../CategoryList';
import SortBy from '../SortBy';
import {connect} from 'react-redux';
import * as Action from '../../actions';
import * as CommonFx from '../CommonFx';

class Posts extends Component {
  componentDidMount() {
    fetchAllPosts()
      .then(data => this.props.getCatPosts(data));
    fetchCategories()
      .then(data => this.props.getCategories(data));
  }
  handleClick = (e) => {
    const input = e.target.value;
    fetchCatPosts(input)
      .then(data => this.props.getCatPosts(data));
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
  render() {
    const {postsData, categories} = this.props;
    return (
      <div className='container h-100'>
        <div className='row display-4 pt-5 pb-4'>
          <div className='col'>Posts</div>
          <div className='col ml-auto mt-auto'>
            <select onChange={this.handleClick} className="form-control">
              <option selected value='none' disabled>Choose a category</option>
              <CategoryList categories={categories}/>
            </select>
          </div>
          <SortBy 
            handleDateChange={this.handleDateChange}
            handleScoreChange={this.handleScoreChange}
          />
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
                    commentCount={s.commentCount}
                  />
                </Link>
              </div>
            ))
            : null
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
