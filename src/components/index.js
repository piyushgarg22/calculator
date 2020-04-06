import React, { Component } from "react";
import {
  NumberButtons,
  OperatorButtons,
  ResetButtons,
  SubmitButton,
} from "./buttons";
import {Screen} from './screen';
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      previousResult : ""
    };
  }
  addChar = (char) => {
    const operators = ["/", "*", "+", "-", "."];
    let lastResult = this.state.result;
    let lastChar = lastResult.slice(-1);
    let checkChar = operators.some((operator) => {
      let checkResult =
        (operator === char && lastResult.length === 0) ||
        (operator === char && lastChar === char);
      return checkResult;
    });
    if (checkChar) {
        debugger;
      this.setState({ result: lastResult });
    } else {
      this.setState({ result: lastResult + char});
    }
  };
  deleteChar = () => {
    let lastResult = this.state.result;
    if (lastResult.length === 0) {
      this.setState({ result: "" });
    } else {
      let newResult = lastResult.slice(0, lastResult.length - 1);
      this.setState({ result: newResult });
    }
  };
  clearResult = () => {
    this.setState({ result: "" });
  };
  findSum = () => {
    let sum = eval(this.state.result).toString();
    this.setState({ result: sum },()=>this.setState({previousResult:this.state.result}));
  };
  render() {
      var {result,previousResult} = this.state;
    return (
      <div className="container">
      <div className="row">
      <div className="col-lg-4 col-mg-4 col-xs-12 m-auto">

<div class="calci-outer">
    
      <div className="screenpad"><Screen previousResult={previousResult} result={result}/></div>





<div className="numpad">
        <div className="d-flex">
          <ResetButtons
            clearResult={this.clearResult}
            deleteChar={this.deleteChar}
          />
        </div>

        <div class="d-flex">
        <div class="w-75 d-flex flex-wrap">
        <NumberButtons addChar={this.addChar} />
          <SubmitButton findSum={this.findSum} />
        </div>
        <div class="w-25">
        <OperatorButtons addChar={this.addChar} />
        </div>

        </div>
        </div>
         
       
      </div>
      </div>
        
</div>
      
      </div>
    );
  }
}
