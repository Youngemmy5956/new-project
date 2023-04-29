import React from 'react';

import Button from './Button';


class Text extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: 'check' };
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState({ text: 'mata' });
      }


  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>


        <div >
        <Text text={this.state.text} />
        <Button onClick={this.handleClick} />
      </div>
      </div>
    );
  }
}

export default Text;
