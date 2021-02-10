import React, { Component } from "react";
import debitdata from "../debit.json";

class Halifax extends Component {
  state = {};

  render() {
    return (
      <div className="hover-card-main">
        <div>
          <img src="./assets/Halifax@2x.png" alt="Halifax@2x" height="110px"  />
        </div>
        <div className="hover-text-left">
          <div>
            <div className="head">Banks</div>
            <div>{debitdata.banks[0].bankName}</div>
          </div>
          <div>
            <div className="head">Standing Instructions</div>
            <div> &#8356;{debitdata.banks[0].accounts[0].standingInst}</div>
          </div>
          <div>
            <div className="head">Min Balance</div>
            <div> &#8356;{debitdata.banks[0].accounts[0].minBalance}</div>
          </div>
        </div>
        <div className="hover-text-right">
          <div className="head">Available Balance</div>
          <div>&#8356;{debitdata.banks[0].accounts[0].balance}</div>
        </div>
      </div>
    );
  }
}

export default Halifax;
