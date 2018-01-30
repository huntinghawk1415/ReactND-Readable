import React, {Component} from 'react';
import {fetchSpecPost, fetchComments} from '../ProjectAPI';
import {formatDate} from './CommonFx';
import Comment from './Comment';
import VoteUpDown from './VoteUpDown';
import {connect} from 'react-redux';
import * as Action from '../actions';

class SpecificPost extends Component {
  componentDidMount() {
    const {getSpecPost, getSpecComments} = this.props;
    const {id} = this.props.match.params;
    fetchSpecPost(id)
      .then(data => getSpecPost(data))
    fetchComments(id)
      .then(comments => getSpecComments(comments))
  }
  render() {
    const {specPostData, commentsData} = this.props;
    return specPostData
      ? (
        <div className='container h-100'>
          <h1 className='row ml-auto display-4 pt-5 pb-4'>
            {specPostData.title}
          </h1>
          <div className='row bg-light rounded'>
            <div className='col-1'>
              <VoteUpDown />
            </div>
            <h5 className='col-11 font-weight-normal p-3'>
              {specPostData.body}
            </h5>
          </div>
          <div className='row d-flex justify-content-end mt-2 mb-5'>
            <h5>
              <small className='text-muted'>
                {`${specPostData.author} ~${formatDate(specPostData.timestamp)}`}
              </small>
            </h5>
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
      ) : null;
  }
}

function mapStateToProps(reducer) {
  return reducer
}

function mapDispatchToProps(dispatch) {
  return {
    getSpecPost: (data) => dispatch(Action.getSpecPost(data)),
    getSpecComments: (data) => dispatch(Action.getSpecComments(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecificPost);
