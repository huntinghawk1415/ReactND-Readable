import React, {Component} from 'react';
import {fetchSpecPost, fetchComments} from '../ProjectAPI';
import {formatDate} from './CommonFx';
import Comment from './Comment';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Action from '../actions';

class SpecificPost extends Component {
  componentDidMount() {
    const {getSpecPost, getSpecComments} = this.props;
    const {id} = this.props.match.params;
    fetchSpecPost(id)
      .then(data => getSpecPost(data));
    fetchComments(id)
      .then(comments => getSpecComments(comments));
  }
  render() {
    const {specPostData, commentsData} = this.props;
    return specPostData && !specPostData.hasOwnProperty('error')
      ? (
        <div className='container h-100'>
          <h1 className='row ml-auto display-4 pt-5 pb-4'>
            {specPostData.title}
          </h1>
          <div className='row bg-light rounded'>
            <h5 className='col-11 font-weight-normal p-3'>
              {specPostData.body}
            </h5>
          </div>
          <div className='row mt-2 mb-5'>
            <div className='col'>
              <h5>
                <small className='text-muted'>
                  {`${specPostData.author} ${formatDate(specPostData.timestamp)} || Score ~${specPostData.voteScore}`}
                </small>
              </h5>
            </div>
            <div className='col d-flex justify-content-end'>
              <div className='btn-group'>
                <button className='btn btn-dark btn-sm' value='upVote' onClick={this.handleVote}>Vote up</button>
                <button className='btn btn-dark btn-sm' value='downVote' onClick={this.handleVote}>Vote down</button>
                <Link to={`${this.props.match.params.id}/create-comment`} className='btn btn-dark btn-sm'>Comment</Link>
                <button className='btn btn-dark btn-sm'>Edit</button>
                <button className='btn btn-danger btn-sm'>Delete</button>
              </div>
            </div>
          </div>
          <h3>Comments</h3>
          <div className='mb-5'>{
            commentsData && commentsData.length
              ? commentsData.map(s => (
                <div key={s.id}>
                  <Comment
                    author={s.author}
                    timestamp={s.timestamp}
                    body={s.body}
                    votes={s.voteScore}
                  />
                </div>
              ))
              : <p>No comments yet</p>
          }</div>
        </div>
      ) : <div className='display-3 text-center mt-5'>This Post Doesn't Exist :(</div>;
  }
}

function mapStateToProps(reducer) {
  return reducer;
}

function mapDispatchToProps(dispatch) {
  return {
    getSpecPost: (data) => dispatch(Action.getSpecPost(data)),
    getSpecComments: (data) => dispatch(Action.getSpecComments(data)),
    // postPostVote: (data) => dispatch(Action.postPostVote(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecificPost);
