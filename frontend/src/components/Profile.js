import React, {Component} from 'react';

class Profile extends Component {
  render() {
    return (
      <div className='container h-100'>
        <div className='row display-4 pt-5'>
          Username Here
        </div>
        <div className='row h-25 mt-5 pb-5'>
          <div className='col p-4 bg-dark text-light border border-white'>
            <h2 className='row h-50 m-0 d-flex justify-content-center'>
              Posts
            </h2>
            <h4 className='row h-50 m-0 font-weight-normal d-flex justify-content-center'>
              20
            </h4>
          </div>
          <div className='col p-4 bg-dark text-light border border-white'>
            <h2 className='row h-50 m-0 d-flex justify-content-center'>
              Comments
            </h2>
            <h4 className='row h-50 m-0 font-weight-normal d-flex justify-content-center'>
              20
            </h4>
          </div>
          <div className='col p-4 bg-dark text-light border border-white'>
            <h2 className='row h-50 m-0 d-flex justify-content-center'>
              Votes
            </h2>
            <h4 className='row h-50 m-0 font-weight-normal d-flex justify-content-center'>
              20
            </h4>
          </div>
        </div>
        <h5 className='row mt-5'>
          Recent Posts
        </h5>
        <div className='row mt-5'>
          <div className='col border border-dark'>
            <div className='row bg-primary'>
              Column 1
            </div>
            <div className='row bg-secondary'>
              Column 2
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col border border-dark'>
            <div className='row bg-primary'>
              Column 1
            </div>
            <div className='row bg-secondary'>
              Column 2
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col border border-dark'>
            <div className='row bg-primary'>
              Column 1
            </div>
            <div className='row bg-secondary'>
              Column 2
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
