import React, { Component } from 'react'

export default class App extends Component {
  /*state*/
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Elizabeth Woolridge Grant',
        imgSrc: 'https://i1.sndcdn.com/artworks-000078001073-v6fad9-t500x500.jpg',
        bio:'Known professionally as Lana Del Rey, is an American singer-songwriter.Her music is noted for its cinematic quality and exploration of tragic romance, glamour, and melancholia, with frequent references to contemporary pop culture and 1950s–70s Americana.',
        profession: 'singer-songwriter',
      },
      show: false,
      interval: 0,
    };
  }
  /*component lifecycle*/

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };


  render() {
    const { person, show, interval } = this.state;
      return (
        <div style={{fontStyle:'oblique',textAlign:'center'}}>
          <button style={{boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);',color:'green'}} onClick={this.toggleShow}>Toggle Profile</button>
          {show && (
            <div style={{marginTop:'20px'}}>
              <h2 style={{color:'pink'}}>{person.fullName}</h2>
              <img style={{marginRight:'auto',marginLeft:'auto',display:'block',width:'50%'}} src={person.imgSrc} alt={person.fullName} />
              <p>{person.bio}</p>
              <p>Profession: {person.profession}</p>
            </div>
          )}
          <p style={{textAlign:'right'}}>Time since mount: {interval} seconds</p>
        </div>
      );
    }
  }
