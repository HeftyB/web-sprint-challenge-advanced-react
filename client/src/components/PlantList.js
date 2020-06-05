import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";

export default class PlantList extends Component {
  state = {
    plants: [],
    searchTerm: ""
  }

  updateSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  componentDidMount() {
    axios.get("http://localhost:3333/plants")
      .then( data => {
        this.setState({
          plants: data.data.plantsData
        })
      })
      .catch( error => {
        console.log(error)
        debugger
      })
  }

  search = plants => {
    let filteredPlants = plants.filter( plant => {
      if (plant.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
        return plant
      }
    })
    this.setState({
      plants: filteredPlants
    })
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <div>
        <Search updateSearchTerm={this.updateSearchTerm} search={this.search} plants={this.state.plants}/>
      
        <main className="plant-list">
          {this.state?.plants?.map((plant) => (
            <div className="plant-card" key={plant.id}>
              <img className="plant-image" src={plant.img} alt={plant.name} />
              <div className="plant-details">
                <h2 className="plant-name">{plant.name}</h2>
                <p className="plant-scientific-name">{plant.scientificName}</p>
                <p>{plant.description}</p>
                <div className="plant-bottom-row">
                  <p>${plant.price}</p>
                  <p>☀️ {plant.light}</p>
                  <p>💦 {plant.watering}x/month</p>
                </div>
                <button
                  className="plant-button"
                  onClick={() => this.props.addToCart(plant)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  }
}
