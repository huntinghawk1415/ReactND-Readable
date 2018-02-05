import React, {Component} from 'react';
import {formatDate} from '../CommonFx';
import MdArrowDropUp from 'react-icons/lib/md/arrow-drop-up';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
import MdCreate from 'react-icons/lib/md/create';
import MdClear from 'react-icons/lib/md/clear';
import {Link} from 'react-router-dom';
import {postVote, fetchSpecPost, deletePost} from '../../ProjectAPI';
import {connect} from 'react-redux';
import * as Action from '../../actions';

class CategoricPosts extends Component {
  componentWillMount() {
    this.props.deletePost();
  }
  handleVote = ({currentTarget}) => {
    const {id, update} = this.props;
    postVote(id, currentTarget.value);
    setTimeout(function () {
      update();
    }, 100);
  }
  handleGoToEditPost = () => {
    const {getSpecPost, id} = this.props;
    fetchSpecPost(id)
      .then(data => getSpecPost(data))
  }
  handleDelete = () => {
    const {id, updateDeletedPost, update} = this.props;
    deletePost(id);
    updateDeletedPost();
    setTimeout(function () {
      update();
    }, 100);
  }
  render() {
    const {title, timestamp, body, votes, author, commentCount, category, id} = this.props;
    return (
      <div className='row mt-2 p-3 bg-light'>
        <div className='col-md-1 d-flex justify-content-center align-items-center bg-dark text-light'>
          <h5 className='d-flex justify-content-center align-items-center'>
            {votes}
          </h5>
        </div>
        <div className='col ml-3'>
          <div className='row'>
            <h5>
              <Link
                className='link-no-style text-dark'
                to={`/${category}/${id}`}
              >{title + ' '}</Link>
              <small className='text-muted'>{formatDate(timestamp)}</small>
            </h5>
          </div>
          <div className='row'>
            <div className='font-weight-normal pr-2 text-truncate'>
              {body}
            </div>
          </div>
          <div className='row text-muted'>
            <div className='col-2 pl-0 ml-0'>{author}</div>
            <div className='col-2 mr-auto'>Comments~{commentCount}</div>
          </div>
        </div>
        <button onClick={this.handleVote} className='btn btn-light btn-sm ml-auto' title='Vote up' value='upVote'>
          <MdArrowDropUp size={30}/>
        </button>
        <button onClick={this.handleVote} className='btn btn-light btn-sm' title='Vote down' value='downVote'>
          <MdArrowDropDown size={30}/>
        </button>
        <Link to={`/${category}/${id}/edit-post`} onClick={this.handleGoToEditPost} className='btn btn-light btn-sm pt-4' title='Edit Post'>
          <MdCreate size={25}/>
        </Link>
        <button onClick={this.handleDelete} className='btn btn-light btn-sm' title='Delete'>
          <MdClear className='text-danger' size={30}/>
        </button>
      </div>
    );
  }
}

function mapStateToProps({specPostData}) {
  return {
    specPostData,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getSpecPost: (data) => dispatch(Action.getSpecPost(data)),
    deletePost: () => dispatch(Action.deletePost()),
    updateDeletedPost: (data) => dispatch(Action.deletePost(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoricPosts)
