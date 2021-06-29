import React from 'react';

class Frame extends React.Component {
  render(){
      return (
      <div className="frameClass">
         <iframe frameBorder="1" width="420" height="345" 
            src={this.props.src}></iframe> 
      </div>
    );
  }
}

export default Frame;