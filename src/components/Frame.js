import React from "react";

class Frame extends React.Component {
  render() {
    return (
      <div className="column">
        <iframe className="frameClass" src={this.props.src}></iframe>
      </div>
    );
  }
}

export default Frame;
