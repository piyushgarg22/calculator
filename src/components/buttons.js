import React from "react";

export const NumberButtons = (props) => {
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  return (
    <React.Fragment>
      {numbers.map((number) => {
        return (
          <button  className="col-md-4" key={number} onClick={() => props.addChar(number)}>
            {number}
          </button>
        );
      })}
    </React.Fragment>
  );
};

export const OperatorButtons = (props) => {
  const operators = ["/", "*", "-", "+"];
  return (
    <React.Fragment>
      {operators.map((operator) => {
        return (
          <button className="col-md-12" key={operator} onClick={() => props.addChar(operator)}>
            {operator}
          </button>
        );
      })}
    </React.Fragment>
  );
};

export const ResetButtons = (props) => {
  return (
    <React.Fragment>
      <button className="p-2 flex-fill col-lg-6" onClick={() => props.clearResult()}>
        C
      </button>
      <button className="p-2 flex-fill col-lg-6 bg-danger" onClick={() => props.deleteChar()}>
        DEL
      </button>
    </React.Fragment>
  );
};

export const SubmitButton = (props) => {
  return (
    <React.Fragment>
      <button className="flex-grow-1" onClick={() => props.findSum()}>
        =
      </button>
    </React.Fragment>
  );
};
