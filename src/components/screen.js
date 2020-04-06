import React from 'react';

export const Screen = props => {
    console.log(props.result)
    return <React.Fragment>
        <div class="previousData">{props.previousResult}</div>
        <div class="currentData">{props.result == "" ? "0" : props.result}</div>
    </React.Fragment>
}