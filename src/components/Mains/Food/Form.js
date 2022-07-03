import React, { Component } from 'react'
//import Card from './Card';
import axios from 'axios';
class Form extends Component {
  constructor(){
    super();
    this.state={
      title:'',
      desc:'',
      imglink:'',
      recipeLink:'',
      /* spoonacular_score:'',
      health_score:'' */
      readyInMinutes:''
    }
  }
  handleButtonClick =()=>{
    axios.get("https://api.spoonacular.com/recipes/random?apiKey=7d2bfc5d4e2e4e239893231b7c8ae34f").then(res =>{
     // var ran = Math.floor((Math.random() * 20) + 1);
    this.setState({
       
        title:res.data.recipes[0].title,
        desc:res.data.recipes[0].instructions,
        imglink:res.data.recipes[0].image,
        recipeLink: "Source :" + res.data.recipes[0].sourceUrl,
        /* spoonacular_score:"Spoonacular Score:" + res.data.recipes[0].spoonacularScore,
        health_score:res.data.recipes[0].healthScore */
        readyInMinutes: "Ready in " + res.data.recipes[0].readyInMinutes + " mins "
      })
    })
  }
  componentDidMount() {
    axios({
        url:"https://api.spoonacular.com/recipes/random?apiKey=7d2bfc5d4e2e4e239893231b7c8ae34f",
        method:"GET"
    }).then((res)=>{
       console.log(res.data.recipes[0].title);
        this.setState({
            title:'',
            desc:'',
            imgLink:'',
            recipeLink:'',
            readyInMinutes:''
        });
    });
}

  render(){return (
    <div>
          <select>
              <option>Select </option>
              <option>Dessert</option>
              <option>Starters</option>
              <option>Main Course</option>
          </select> &nbsp;&nbsp;
          <input type='select' placeholder='What are you looking for?' className='search' /> &nbsp;&nbsp;
          <input type='radio' /> Vegeterian &nbsp;
          <button type='submit' onClick={this.handleButtonClick}>Submit</button>
          <br />
     {/*  <p>Name of the Recipe - {this.state.title}</p>
      <p>Description - {this.state.desc}</p>
      <p>image - <img src={this.state.imglink} alt = "img"></img></p>
      <p>Source - <a href = {this.state.recipeLink}>{this.state.recipeLink}</a></p> */}
       <div className="main">
          <div className="card-wrapper">
            <div className="card-image">
              <img
                src={this.state.imglink}
                alt="equilibrium"
              />
            </div>
            <div className="card-details">
              <div className="card-text">
                <a href="#">
                  <h1>{this.state.title}</h1>
                </a>
                <p>{this.state.desc}</p>
              </div>
              <div className="card-stats">
                <div className="amount">
                  <span><a href = {this.state.recipeLink}>{this.state.recipeLink.substring(0,7)}</a></span>
                </div>
                <div className="time">
                  <img
                    src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_nft-preview-card-component/main/images/icon-clock.svg"
                    alt="clock icon"
                  />
                  <span>{this.state.readyInMinutes}</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
  }
}

export default Form
