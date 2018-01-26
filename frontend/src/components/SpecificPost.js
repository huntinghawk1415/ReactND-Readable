import React, {Component} from 'react';
import {fetchSpecPost, fetchComments} from '../ProjectAPI';
import {formatDate} from './CommonFx';
import Comment from './Comment';
import VoteUpDown from './VoteUpDown';

class SpecificPost extends Component {
  state = {
    data: null,
    comments: null,
  }
  componentDidMount() {
    const {id} = this.props.match.params;
    fetchSpecPost(id)
      .then(data => this.setState({
        data
      }))
    fetchComments(id)
      .then(comments => this.setState({
        comments
      }))
  }
  render() {
    const {data, comments} = this.state;
    console.log(this.state.comments)
    return data
      ? (
        <div className='container h-100'>
          <h1 className='row ml-auto display-4 pt-5 pb-4'>
            {data.title}
          </h1>
          <div className='row bg-light rounded'>
            <div className='col-1'>
              <VoteUpDown />
            </div>
            <h5 className='col-11 font-weight-normal p-3'>
              {data.body}
            </h5>
          </div>
          <div className='row d-flex justify-content-end mt-2 mb-5'>
            <h5>  
              <small className='text-muted'>
                {`${data.author} -${formatDate(data.timestamp)}`}
              </small>
            </h5>
          </div>
          <h3>Comments</h3>
          <div className='mb-5'>{
            comments && comments.length
              ? comments.map(s => (
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

export default SpecificPost;