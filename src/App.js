import React from 'react';
import axios from 'axios';

// https://entree-f18.herokuapp.com/v1/menu/25 RESTAURANT API URL

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      dishes: []
    }
  }

  componentDidMount() {
    axios.get(`https://entree-f18.herokuapp.com/v1/menu/10`)
    .then(res => {
      const dishes = res.data.menu_items;
      console.log(dishes)
      this.setState({ dishes });
    })
    
  }

  render() {
  return (
    <div className="App">
      <h1>
        Firebase Hotel And Casino
        </h1>

        <ul>
        { this.state.dishes.map(item => <li>{item.description}</li>)}
        </ul>
    </div>
  );

}
}

// import React from 'react';

// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }

export default App;
