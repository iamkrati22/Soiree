import React, { Component } from "react";

export default class Card extends Component {
  constructor(){
    super();
    this.state={
      imglink:'',
      title:'',
      desc:'',
    }
  }
  componentDidMount=()=>{
    this.setState({
      imglink:''
    })
  }
  render() {
    return (
      <div className="main">
          <div className="card-wrapper">
            <div className="card-image">
              <img
                src={this.imglink}
                alt="equilibrium"
              />
            </div>
            <div className="card-details">
              <div className="card-text">
                <a href="#">
                  <h1>Equilibrium #3429</h1>
                </a>
                <p>Our Equilibrium collection promotes balance and calm.</p>
              </div>
              <div className="card-stats">
                <div className="amount">
                  <img
                    src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_nft-preview-card-component/main/images/icon-ethereum.svg"
                    alt="ethereum icon"
                  />
                  <span>0.041 ETH</span>
                </div>
                <div className="time">
                  <img
                    src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_nft-preview-card-component/main/images/icon-clock.svg"
                    alt="clock icon"
                  />
                  <span>3 days left</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
