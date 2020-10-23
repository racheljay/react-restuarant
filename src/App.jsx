import React from 'react';
import axios from 'axios';
import Menu from './Menu';

// https://entree-f18.herokuapp.com/v1/menu/25 RESTAURANT API URL

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
      prices: [],
      buttonClicked: "Lunch"
    }
    this.generatePrice = this.generatePrice.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(buttonName) {
    this.setState({
      buttonClicked: buttonName
    });
  }
  
  generatePrice() {
    let price = []
    while(price.length < 25) {
      price.push(`$${(Math.random() * 20).toFixed(2)}`)
    }
    return price;
  }


  componentDidMount() {
    //if there is already data. do not update
    let foodData = window.localStorage.getItem('food');
    let priceData = window.localStorage.getItem('price')
    
    if(foodData === null || priceData === null) {
    
    axios.get(`https://entree-f18.herokuapp.com/v1/menu/25`)
      .then(res => {
        const dishes = res.data.menu_items;
        console.log(dishes)
        window.localStorage.setItem("food", JSON.stringify(dishes))
        window.localStorage.setItem('price', JSON.stringify(this.generatePrice()))
      })

    }
    // console.log(foodData);
    // console.log(priceData)
    // console.log(this.state.prices)
    // console.log(this.generatePrice());
    this.setState({
      dishes: JSON.parse(foodData),
      prices: JSON.parse(priceData)
    })

  }

  componentDidUpdate() {
    
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Firebase Hotel and Casino</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div 
              className="nav-item nav-link"
              onClick={() => this.handleButtonClick('Lunch')}
              >Lunch</div>
              <div
              className="nav-item nav-link"
              onClick={() => this.handleButtonClick('Dinner')}
              >Dinner</div>
              <div
              className="nav-item nav-link"
              onClick={() => this.handleButtonClick('Breakfast')}
              >Breakfast</div>
              <div
              className="nav-item nav-link"
              onClick={() => this.handleButtonClick('Dessert')}
              >Dessert</div>
              <div
              className="nav-item nav-link"
              onClick={() => this.handleButtonClick('Snacks')}
              >Snacks</div>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">


            <h1>
              Firebase Hotel And Casino
            </h1>
          </div>

          <Menu
            food={this.state.dishes}
            price={this.state.prices}
            title={this.state.buttonClicked}
          />
          {/* <ol>
            {this.state.dishes.map(item => <li>{item.description}</li>)}
            {this.state.prices.map(item => <li>{item}</li>)}
          </ol> */}

          <div className="card text-center">
            {/* <div className="card-header">
              Featured
            </div> */}
            <div className="card-body bg-dark text-light">
              <h5 className="card-title">Firebase Hotel and Casino:</h5>
              <p className="card-text">
                348 E Main St, Lexington, KY<br/>
                (555) 555 - 5555<br/>
                11 a.m. - 8 p.m. Monday - Friday<br/>
                9 a.m. - 8 p.m. Saturday<br/>
                9 a.m. - 2 p.m. Sunday

              </p>
              
            </div>
            {/* <div className="card-footer text-muted">
              2 days ago
            </div> */}
          </div>

        </div>
      </>
    );

  }
}


export default App;