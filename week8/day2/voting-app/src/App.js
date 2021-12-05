import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  increment = (index) => {
    this.setState({ votes: this.state.languages[index].votes++ });
  };


  render() {
    const { languages } = this.state;
    return (
      <div>
        {languages.map((language, index) => {
          return (
            <Alert
              className="alert-warning mb-2 "
              style={{
                width: "30%",
                margin: "auto",
                marginTop: "50px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>{language.votes}</div>
              <div>{language.name}</div>

              <button
                key={index}
                style={{
                  color: "blue",
                  background: "lightblue",
                  border: "1px solid",
                }}
                onClick={() => this.increment(index)}
              >
                Click Here
              </button>
            </Alert>
          );
        })}
      </div>
    )
  }
}

export default App;
