import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("event handler", counterId);
    this.setState({
      counters: this.state.counters.filter(c => c.id !== counterId)
    });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          >
            <h4> Counter # {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
