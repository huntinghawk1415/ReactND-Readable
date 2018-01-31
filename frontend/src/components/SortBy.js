import React, {Component} from 'react';

class SortBy extends Component {
  handleChange = ({target}) => {
    const {handleDateChange, handleScoreChange} = this.props;
    if(target.value === 'dateNewFirst' || target.value === 'dateOldFirst') {
      handleDateChange(target.value);
    } else if (target.value === 'scoreHighFirst' || target.value === 'scoreLowFirst') {
      handleScoreChange(target.value);
    }
  }
  render() {
    return (
      <div className='col-4 ml-auto mt-auto'>
        <select onChange={this.handleChange} className="form-control">
          <option selected disabled value='none'>Sort by...</option>
          <option value='dateNewFirst'>Date New First</option>
          <option value='dateOldFirst'>Date Old First</option>
          <option value='scoreHighFirst'>Score High First</option>
          <option value='scoreLowFirst'>Score Low First</option>
        </select>
      </div>
    );
  }
}

export default SortBy;
