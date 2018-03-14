import React, {Component} from 'react'
import  { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

// -------------------------------------

class SearchBar extends Component {

// -------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }
// -------------------------------------

onInputChange(event){
  // console.log(event.target.value)
  this.setState( {term: event.target.value} )
}

onFormSubmit(event) {
  event.preventDefault();

  // get weather data
  this.props.fetchWeather(this.state.term);
  // after submit clear form field
  this.setState({ term: ''})
}
// -------------------------------------

  render () {
    return (
<div>
  <h2>farts</h2>
    <form onSubmit={this.onFormSubmit} className="input-group">
      <input
          placeholder="get a 5 day forecast in your favourite cities"
          value={this.state.term}
          className="form-control"
          onChange={this.onInputChange} />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Search</button>
      </span>
    </form>
</div>
      )
  }
}
// -------------------------------------

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
