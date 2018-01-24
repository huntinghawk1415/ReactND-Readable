import React, {Component} from 'react';
import {fetchSpecPost} from '../ProjectAPI';

class SpecificPost extends Component {
  componentDidMount() {
    fetchSpecPost(this.props.match.params.id)
      .then(data => console.log(data))
  }
  render() {
    const {match} = this.props;
    return (
      <div>{match.params.id}</div>
    )
  }
}

export default SpecificPost;