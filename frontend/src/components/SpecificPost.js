import React, {Component} from 'react';
import * as API from '../ProjectAPI';
import {formatDate} from './CommonFx';
import Comment from './Comment';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Action from '../actions';

class SpecificPost extends Component {
  componentDidMount() {
    this.pageRefresh();
  }
  handlePostVote = ({target}) => {
    const {id} = this.props.match.params;
    API.postVote(id, target.value);
    this.pageRefresh();
  }
  handleCommentVote = (id, vote) => {
    API.commentVote(id, vote);
    this.pageRefresh();
  }
  handlePostDelete = () => {
    const {id} = this.props.match.params;
    API.deletePost(id);
    this.props.updateDeletedPost();
  }
  handleCommentDelete = (id) => {
    API.deleteComment(id);
    this.pageRefresh();
  }
  pageRefresh = () => {
    const {getSpecPost, getSpecComments} = this.props;
    const {id} = this.props.match.params;
    API.fetchSpecPost(id)
      .then(data => getSpecPost(data));
    API.fetchComments(id)
      .then(comments => getSpecComments(comments));
  }
  render() {
    const {specPostData, commentsData} = this.props;
    const {id} = this.props.match.params;
    return specPostData && specPostData.hasOwnProperty('id')
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
                <button className='btn btn-dark btn-sm' onClick={this.handlePostVote} value='upVote'>Vote up</button>
                <button className='btn btn-dark btn-sm' onClick={this.handlePostVote} value='downVote'>Vote down</button>
                <Link to={`${this.props.location.pathname}/create-comment`} className='btn btn-dark btn-sm'>Comment</Link>
                <Link to={`${this.props.location.pathname}/edit-post`} className='btn btn-dark btn-sm'>Edit</Link>
                <Link to={`/posts`} className='btn btn-danger btn-sm' onClick={this.handlePostDelete}>Delete</Link>
              </div>
            </div>
          </div>
          <h3>Comments</h3>
          <div className='mb-5'>{
            commentsData && commentsData.length
              ? commentsData.map(s => (
                <div key={s.id}>
                  <Comment
                    id={s.id}
                    parentId={s.parentId}
                    author={s.author}
                    timestamp={s.timestamp}
                    body={s.body}
                    votes={s.voteScore}
                    handleCommentVote={this.handleCommentVote}
                    handleCommentDelete={this.handleCommentDelete}
                  />
                </div>
              ))
              : <p>No comments yet</p>
          }</div>
        </div>
      ) : <div className='display-3 text-center mt-5'>This post has either moved or does not exist anymore :(</div>;
  }
}

function mapStateToProps(reducer) {
  return reducer;
}

function mapDispatchToProps(dispatch) {
  return {
    getSpecPost: (data) => dispatch(Action.getSpecPost(data)),
    getSpecComments: (data) => dispatch(Action.getSpecComments(data)),
    updateDeletedPost: (data) => dispatch(Action.deletePost(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecificPost);
