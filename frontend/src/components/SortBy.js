import React, {Component} from 'react';

class SortBy extends Component {
  render() {
    return (
      <div className='col-3 ml-auto mt-auto'>
        <select className="form-control">
          <option selected disabled value='none'>Sort by...</option>
          <option value='date'>Date</option>
          <option value='score'>Score</option>
        </select>
      </div>
    )
  }
}

export default SortBy;
