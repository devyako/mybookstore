import React from "react";
import "./Typing.css";
import ReactTypingEffect from "react-typing-effect";

class TypingComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <ReactTypingEffect
          className="text"
          speed="100"
          eraseDelay="250"
          typingDelay="250"
          text={[
            "Books for future!",
            "Books for Progress!",
            "Books for Wider Mindset!"
          ]}
        />

        <div className="title">
          Best collection of books by the recomendations of successful people.
        </div>
      </div>
    );
  }
}

export default TypingComponent;
