import React from 'react';
import Button from './Button';
import Display from './Display';
import { evaluate } from 'mathjs';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
    };
    this.handleInput = this.handleInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.calculation = this.calculation.bind(this);
  }

  handleInput(e) {
    // console.log(e.target.innerText);
    this.setState({
      display:
        this.state.display === '0'
          ? e.target.innerText
          : this.state.display + e.target.innerText,
    });
    console.log(this.state.display);
  }

  clearInput() {
    this.setState({
      display: '0',
    });
  }

  calculation() {
    this.setState({
      display: evaluate(this.state.display),
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">JavaScript Calculator</h1>
        <div className="calculator-row">
          <Button
            identity="equals"
            category="grid-button button-command-alt"
            clicked={this.calculation}
            value="="
          />
        </div>
        <div className="calculator-row">
          <Button
            identity="one"
            category="grid-button button-number"
            clicked={this.handleInput}
            value="1"
          />
          <Button
            identity="two"
            category="grid-button button-number"
            clicked={this.handleInput}
            value="2"
          />
          <Button
            identity="three"
            category="grid-button button-number"
            clicked={this.handleInput}
            value="3"
          />
          <Button
            identity="clear"
            category="grid-button button-command"
            clicked={this.clearInput}
            value="C"
          />
        </div>
        <div className="calculator-row">
          <Button
            identity="four"
            category="grid-button button-number"
            clicked={this.handleInput}
            value="4"
          />
          <Button
            identity="five"
            category="grid-button button-number"
            clicked={this.handleInput}
            value="5"
          />
          <Button
            identity="six"
            category="grid-button button-number"
            clicked={this.handleInput}
            value="6"
          />
          <Button
            identity="add"
            category="grid-button button-command"
            clicked={this.handleInput}
            value="+"
          />
        </div>
        <div className="calculator-row">
          <Button
            identity="seven"
            category="grid-button button-number"
            clicked={this.handleInput}
            value="7"
          />
          <Button
            identity="eight"
            category="grid-button button-number"
            clicked={this.handleInput}
            value="8"
          />
          <Button
            identity="nine"
            category="grid-button button-number"
            clicked={this.handleInput}
            value="9"
          />
          <Button
            identity="subtract"
            category="grid-button button-command"
            clicked={this.handleInput}
            value="-"
          />
        </div>
        <div className="calculator-row">
          <Button
            identity="zero"
            category="grid-button button-number"
            clicked={this.handleInput}
            value="0"
          />
          <Button
            identity="decimal"
            category="grid-button button-number"
            clicked={this.handleInput}
            value="."
          />
          <Button
            identity="multiply"
            category="grid-button button-command"
            clicked={this.handleInput}
            value="*"
          />
          <Button
            identity="divide"
            category="grid-button button-command"
            clicked={this.handleInput}
            value="/"
          />
        </div>
        <div>
          <Display
            identity="display"
            category="display-area"
            content={this.state.display}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
