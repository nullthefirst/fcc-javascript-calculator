import React from 'react';
import Button from './Button';

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <h1 id="title">JavaScript Calculator</h1>
        <div class="calculator-row">
          <Button
            identity="one"
            category="grid-button button-number"
            clicked={() => console.log('clicked')}
            value="1"
          />
          <Button
            identity="two"
            category="grid-button button-number"
            clicked={() => console.log('clicked')}
            value="2"
          />
          <Button
            identity="three"
            category="grid-button button-number"
            clicked={() => console.log('clicked')}
            value="3"
          />
          <Button
            identity="clear"
            category="grid-button button-command"
            clicked={() => console.log('clicked')}
            value="C"
          />
        </div>
        <div class="calculator-row">
          <Button
            identity="four"
            category="grid-button button-number"
            clicked={() => console.log('clicked')}
            value="4"
          />
          <Button
            identity="five"
            category="grid-button button-number"
            clicked={() => console.log('clicked')}
            value="5"
          />
          <Button
            identity="six"
            category="grid-button button-number"
            clicked={() => console.log('clicked')}
            value="6"
          />
          <Button
            identity="add"
            category="grid-button button-command"
            clicked={() => console.log('clicked')}
            value="+"
          />
        </div>
        <div class="calculator-row">
          <Button
            identity="seven"
            category="grid-button button-number"
            clicked={() => console.log('clicked')}
            value="7"
          />
          <Button
            identity="eight"
            category="grid-button button-number"
            clicked={() => console.log('clicked')}
            value="8"
          />
          <Button
            identity="nine"
            category="grid-button button-number"
            clicked={() => console.log('clicked')}
            value="9"
          />
          <Button
            identity="subtract"
            category="grid-button button-command"
            clicked={() => console.log('clicked')}
            value="-"
          />
        </div>
        <div class="calculator-row">
          <Button
            identity="zero"
            category="grid-button button-number"
            clicked={() => console.log('clicked')}
            value="0"
          />
          <Button
            identity="decimal"
            category="grid-button button-number"
            clicked={() => console.log('clicked')}
            value="."
          />
          <Button
            identity="multiply"
            category="grid-button button-command"
            clicked={() => console.log('clicked')}
            value="*"
          />
          <Button
            identity="divide"
            category="grid-button button-command"
            clicked={() => console.log('clicked')}
            value="/"
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
