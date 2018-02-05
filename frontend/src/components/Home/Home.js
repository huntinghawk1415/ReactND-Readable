import React, {Component} from 'react';
import {fetchAllPosts} from '../../ProjectAPI';
import AllPosts from './AllPosts';
import SortBy from '../SortBy';
import {connect} from 'react-redux';
import * as Action from '../../actions';
import * as CommonFx from '../CommonFx';

class Home extends Component {
  componentDidMount() {
    fetchAllPosts()
      .then(data => this.props.getAllPosts(data));
  }
  handleDateChange = (str) => {
    const {sortHomeByDate} = this.props;
    if(str === 'dateNewFirst') {
      sortHomeByDate(CommonFx.sortByDateAsc);
      this.forceUpdate();
    } else if (str === 'dateOldFirst') {
      sortHomeByDate(CommonFx.sortByDateDsc);
      this.forceUpdate();
    }
  }
  handleScoreChange = (str) => {
    const {sortHomeByVote} = this.props;
    if(str === 'scoreHighFirst') {
      sortHomeByVote(CommonFx.sortByVoteAsc);
      this.forceUpdate();
    } else if (str === 'scoreLowFirst') {
      sortHomeByVote(CommonFx.sortByVoteDsc);
      this.forceUpdate();
    }
  }
  update = () => {
    fetchAllPosts()
      .then(data => this.props.getAllPosts(data));
    this.forceUpdate();
  }
  render() {
    const {homeData} = this.props;
    return (
      <div className='container h-100'>
        <div className='row pt-5 pb-4'>
          <div className='display-4 col'>
            All Posts
          </div>
          <SortBy
            handleDateChange={this.handleDateChange}
            handleScoreChange={this.handleScoreChange}
          />
        </div>
        <div>{
          homeData
            ? homeData.map(s => (
              <div key={s.id}>
                <AllPosts
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
    getAllPosts: (data) => dispatch(Action.getAllPosts(data)),
    sortHomeByDate: (data) => dispatch(Action.sortHomeByDate(data)),
    sortHomeByVote: (data) => dispatch(Action.sortHomeByVote(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
