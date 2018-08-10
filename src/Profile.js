import React from 'react';
import ReactDOM from 'react-dom';

export default class Profile extends React.Component {
  // constructor(){
  // 	super()
  // }
  render () {
    return (

      <div>
        <h1>Profile for {this.props.profile.name}</h1>
        <p>{this.props.profile.location}</p>
        <div className="description">{this.props.profile.description}</div>
      </div>

    );

  }

}


// ReactDOM.render(<Profile profile={ this.state.profile } />)