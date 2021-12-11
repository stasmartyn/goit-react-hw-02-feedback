import React from "react";

function Form({onGood,onNeutral,onBad,good,bad,neutral,total}){

    return(
        <div>
        <h1>Please leave your feedback</h1>
        <ul>
          <li><button onClick={onGood}>Good</button></li>
          <li><button onClick={onBad}>Bad</button></li>
          <li><button onClick={onNeutral}>Neutral</button></li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good:{good}</p>
          </li>
          <li>
            <p>Bad:{bad}</p>
          </li>
          <li>
            <p>Neutral:{neutral}</p>
          </li>
          <li>
            <p>
              Total:{total}
            </p>
          </li>
        </ul>
      </div>
    );

}
export default Form;