import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCommentDetails, editComment} from '../ProjectAPI';

class EditComment extends Component {
  state = {
    deets: null,
  }
  componentDidMount() {
    const {location} = this.props;
    const str = location.pathname.slice(location.pathname.search('=') + 1, location.pathname.search('/edit-comment'));
    getCommentDetails(str)
      .then(data => this.setState({
        deets: data
      }));
  }
  handleSubmit = () => {
    const id = this.state.deets.id;
    const info = {
      timestamp: new Date().getTime(),
      body: document.getElementById('body').value,
    }
    editComment(id, info);
  }
  render() {
    const {specPostData} = this.props;
    const {deets} = this.state;
    return specPostData && deets
    ? (
        <div className='container h-100'>
          <div className='row display-4 pt-5 pb-4'>
            Edit Comment
          </div>
          <form>
            <div className='form-group'>
              <label htmlFor='body'>
                <h4>Body</h4>
              </label>
              <textarea
                id='body'
                defaultValue={deets.body}
                type='text'
                required
                name='body'
                className='form-control'
              ></textarea>
            </div>
            <div className='text-right'>
              <Link to={`/${specPostData.category}/${specPostData.id}`}>
                <button
                  onClick={this.handleSubmit}
                  type='submit'
                  className='btn btn-dark'
                >Submit</button>
              </Link>
            </div>
          </form>
        </div>
      )
    : <div className='container h-100 text-center'>
        <div className='pt-5 pb-4'>Hmm... something weird happend.</div>
        <button className='btn btn-dark btn-lg' onClick={this.props.history.goBack}>Let's go back</button>
      </div>
  }
}

function mapStateToProps(reducer) {
  const {specPostData} = reducer;
  return {
    specPostData,
  };
}

export default connect(mapStateToProps)(EditComment);
