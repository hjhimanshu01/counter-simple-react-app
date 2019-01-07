import React from "react";
import ReactDOM from "react-dom";
const { Component } = React;
const { render } = ReactDOM;

// state data for 3 counters

// Counter Component
class Counter extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div>
          <button onClick={() => this.props.onDecrement(this.props.id)}>
            -
          </button>
          <button onClick={() => this.props.onIncrement(this.props.id)}>
            +
          </button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.state = {
      data: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }],
      total: 0
    };
  }
  onIncrement(id) {
    this.state.data.forEach(element => {
      if (element.id === id) {
        element.value = element.value + 1;
        var total = this.state.total;
        total += 1;
        this.setState({ data: this.state.data, total });
      }
    });
  }
  onDecrement(id) {
    this.state.data.forEach(element => {
      if (element.id === id) {
        element.value = element.value - 1;
        var total = this.state.total;
        total -= 1;
        this.setState({ data: this.state.data, total });
      }
    });
  }
  render() {
    return (
      <div>
        <h1>COUNTER APP</h1>
        <h1>Total:{this.state.total}</h1>
        {this.state.data.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
          />
        ))}
        {/* this.state.total= this.state.data.map((element)=>
        {(this.state.total += element.value)} */}
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
