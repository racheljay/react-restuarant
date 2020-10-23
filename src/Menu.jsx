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
                <div className="row">
                    
                <div className="col-7">
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
                        <div className="p-2" key={index}>
                            {item.description}
                        </div>
                    ))}
                    </div>
                        <div className="col-5">
                    {this.props.price.filter((item, index) => {

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
                        <div className="p-2" key={index}>
                            {item}
                        </div>
                    ))}
                    </div>





                </div>


            </div>
        )
    }
}

export default Menu;
{/* <div className="col-6">{item.description}</div> */ }