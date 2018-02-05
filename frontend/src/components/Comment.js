import React, {Component} from 'react';
import {formatDate} from './CommonFx';
import MdArrowDropUp from 'react-icons/lib/md/arrow-drop-up';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
import MdCreate from 'react-icons/lib/md/create';
import MdClear from 'react-icons/lib/md/clear';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Comment extends Component {
  handleVote = ({currentTarget}) => {
    const {id, handleCommentVote, refresh} = this.props;
    handleCommentVote(id, currentTarget.value);
    setTimeout(function () {
      refresh();
    }, 200);
  }
  handleDelete = () => {
    const {id, handleCommentDelete, refresh} = this.props;
    handleCommentDelete(id);
    setTimeout(function () {
      refresh();
    }, 200);
  }
  render() {
    const {author, timestamp, body, votes, id, specPostData} = this.props;
    return (
      <div className='row mb-2 bg-light p-3'>
        <div className='col-8'>
          <div className='row'>
            <div className='col-2 d-flex justify-content-center align-items-center bg-dark text-light'>
              <p className='font-weight-bold'>
                {votes}
              </p>
            </div>
            <div className='col-10'>
              <h6>
                {author + ' '}
                <small className='text-muted'>{formatDate(timestamp)}</small>
              </h6>
              <p>{body}</p>
            </div>
          </div>
        </div>
        <button onClick={this.handleVote} className='btn btn-light btn-sm ml-auto' title='Vote up' value='upVote'>
          <MdArrowDropUp size={30}/>
        </button>
        <button onClick={this.handleVote} className='btn btn-light btn-sm' title='Vote down' value='downVote'>
          <MdArrowDropDown size={30}/>
        </button>
        <Link to={`/${specPostData.category}/${specPostData.id}/comment=${id}/edit-comment`} className='btn btn-light btn-sm pt-3' title='Edit Comment'>
          <MdCreate size={25}/>
        </Link>
        <button onClick={this.handleDelete} className='btn btn-light btn-sm' title='Delete'>
          <MdClear className='text-danger' size={30}/>
        </button>
      </div>
    );
  }
}

function mapStateToProps(reducer) {
  const {specPostData} = reducer;
  return {
    specPostData,
  };
}

export default connect(mapStateToProps)(Comment);
