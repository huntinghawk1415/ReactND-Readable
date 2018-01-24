import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchAllPosts} from '../../ProjectAPI';
import Recent from './Recent';

class Home extends Component {
  state = {
    data: null,
  }
  componentDidMount() {
    fetchAllPosts()
      .then(data => this.setState({
        data
      }))
  }
  render() {
    const {data} = this.state
    return (
      <div className='container h-100'>
        <div className='row display-4 pt-5 pb-4'>
          Recent
        </div>
        <div>{
          data
            ? data.map(s => (
              <div key={s.id}>
                <Link
                  className='link-no-style text-dark'
                  to={`/${s.id}`}
                >
                  <Recent
                    title={s.title}
                    timestamp={s.timestamp}
                    body={s.body}
                    votes={s.voteScore}
                    author={s.author}
                  />
                </Link>
              </div>
            ))
            : <div>no data</div>
        }</div>
      </div>
    )
  }
}

export default Home;
