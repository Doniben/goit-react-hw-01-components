import React, { Component } from 'react';

export class ClassColorChangingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const buttonStyle = {
      backgroundColor: this.state.isHovered ? 'lightblue' : 'white',
      color: this.state.isHovered ? 'white' : 'black',
    };

    return (
      <button
        style={buttonStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        Class Component
      </button>
    );
  }
}
