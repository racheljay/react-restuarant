import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    // this.getLunch = this.getLunch.bind(this)
  }

  render() {

    return (

      <div className="container">
        <h3 className="row">{this.props.title}</h3>
        

          
            {this.props.food.filter((item, index) => {

              if (this.props.title === "Lunch") {
                if (index < 5) {
                  return item;
                }
              }
              else if (this.props.title === "Dinner") {
                if (index > 4 && index < 12) {
                  return item;
                }
              } else if (this.props.title === "Breakfast") {
                if (index > 11 && index < 16) {
                  return item;
                }
              } else if (this.props.title === "Dessert") {
                if (index > 15 && index < 22) {
                  return item;
                }
              } else if (this.props.title === "Snacks") {
                if (index > 21 && index < 25) {
                  return item;
                }
              }
            }).map((item, index) => (
              <div className="row">

              <div className="col-9 col-lg-7 p-2" key={index}>
                {item.description}
              </div>
              <div className="col-3 col-lg-5">{item.price}</div>
              </div>
              
            ))}

      </div>
    )
  }
}

export default Menu;
{/* <div className="col-6">{item.description}</div> */ }