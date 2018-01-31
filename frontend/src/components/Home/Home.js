import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchAllPosts} from '../../ProjectAPI';
import AllPosts from './AllPosts';
import SortBy from '../SortBy';
import {connect} from 'react-redux';
import * as Action from '../../actions';

class Home extends Component {
  componentDidMount() {
    fetchAllPosts()
      .then(data => this.props.getAllPosts(data))
  }
  render() {
    const {homeData} = this.props
    return (
      <div className='container h-100'>
        <div className='row pt-5 pb-4'>
          <div className='display-4 col'>
            AllPosts
          </div>
          <SortBy />
        </div>
        <div>{
          homeData
            ? homeData.map(s => (
              <div key={s.id}>
                <Link
                  className='link-no-style text-dark'
                  to={`/${s.id}`}
                >
                  <AllPosts
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
    )
  }
}

function mapStateToProps(reducer) {
  return reducer
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: (data) => dispatch(Action.getAllPosts(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
