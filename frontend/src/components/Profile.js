import React, {Component} from 'react';

class Profile extends Component {
  render() {
    return (
      <div className='container h-100'>
        <div className='row display-4 pt-5'>
          Username Here
        </div>
        <div className='row h-25 mt-5 border border-dark'>
          <div className='col p-4'>
            <h2 className='row h-50 m-0 d-flex justify-content-center'>
              Posts
            </h2>
            <h4 className='row h-50 m-0 font-weight-normal d-flex justify-content-center'>
              20
            </h4>
          </div>
          <div className='col p-4'>
            <h2 className='row h-50 m-0 d-flex justify-content-center'>
              Comments
            </h2>
            <h4 className='row h-50 m-0 font-weight-normal d-flex justify-content-center'>
              20
            </h4>
          </div>
          <div className='col p-4'>
            <h2 className='row h-50 m-0 d-flex justify-content-center'>
              Votes
            </h2>
            <h4 className='row h-50 m-0 font-weight-normal d-flex justify-content-center'>
              20
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
