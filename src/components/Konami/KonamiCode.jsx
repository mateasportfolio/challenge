import React from "react";

class KonamiCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [],
      activated: false,
    };
    this.konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    const { keys, activated } = this.state;
    const { konamiCode } = this;
    keys.push(event.keyCode);
    if (keys.length > 10) {
      keys.shift();
    }
    if (JSON.stringify(keys) === JSON.stringify(konamiCode)) {
      this.setState({ activated: true, keys: [] });
    }
  };

  render() {
    return (
      <div>
        {this.state.activated ? (
          <p>Konami Code Activated!</p>
        ) : (
          <p>Try the Konami Code</p>
        )}
      </div>
    );
  }
}
export default KonamiCode;
