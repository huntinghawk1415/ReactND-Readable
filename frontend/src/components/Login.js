import React, {Component} from 'react';

class Login extends Component {
  render() {
    return (
      <div className='container h-100'>
        <div className='row h-100 d-flex justify-content-center align-items-center'>
          <div>
            <div>
              Username
            </div>
            <div>
              <form>
                <input placeholder='username here'/>
              </form>
            </div>
            <div className='pt-3'>
              Passord
            </div>
            <div>
              <form>
                <input placeholder='password here' type='password'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
