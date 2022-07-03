import React, { Component } from 'react'
import Card from './Card';
import axios from 'axios';

class Form extends Component {
  constructor(){
    super();
    this.state={
      title:'',
      desc:'',
      imglink:'',
      voteAvg:'',
      releaseData:''
    }
  }
  handleButtonClick =()=>{
    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=1bf9625d527e64c06b14d8dcf187627d&language=en-US&page=1").then(res =>{
      var ran = Math.floor((Math.random() * 20) + 1);
    this.setState({
       
        title:res.data.results[ran].original_title,
        desc:res.data.results[ran].overview,
        imglink:"https://image.tmdb.org/t/p/original"+ res.data.results[ran].poster_path,
        voteAvg: "Ratings : " + res.data.results[ran].vote_average,
      releaseData:"Year : "+ res.data.results[ran].release_date
      })
    })
  }
  componentDidMount() {
    axios({
        url:"https://api.themoviedb.org/3/movie/top_rated?api_key=1bf9625d527e64c06b14d8dcf187627d&language=en-US&page=1",
        method:"GET"
    }).then((res)=>{
       //console.log(res.data.results);
        this.setState({
            title:'',
            desc:'',
            imgLink:'' ,
            voteAvg:'',
        releaseData:''
        });
    });
}

  render(){return (
    <div>
          <select>
              <option>Select Genre</option>
              <option>Horror</option>
              <option>Thriller</option>
              <option>Romance</option>
              <option>Adventure</option>
              <option>Animated</option>
          </select> &nbsp;&nbsp;
          <input type='select' placeholder='What are you looking for?' className='search' /> &nbsp;&nbsp;
          <input type='radio' /> Most Popular &nbsp;
          <button type='submit' onClick={this.handleButtonClick}>Submit</button>
          <br />
          {/* <Card imglink={this.imglink}/>
      <p>Name of the movie - {this.state.title}</p>
      <p>Description - {this.state.desc}</p>
      <p>image - <img src={this.state.imglink} alt = "img"></img></p> */}
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
                  <span>{this.state.voteAvg}</span>
                </div>
                <div className="time">
                  <img
                    src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_nft-preview-card-component/main/images/icon-clock.svg"
                    alt="clock icon"
                  />
                  <span> {this.state.releaseData}</span>
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
