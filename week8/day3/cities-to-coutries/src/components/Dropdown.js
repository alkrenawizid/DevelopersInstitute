import React from 'react';

class Dropdown extends React.Component {
  constructor(){
    super();
    this.state = {
      countriesArr:[],
      citiesArr:[]
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(data => {
      this.setState({countriesArr:data})
    })
    .catch(e => {
      console.log(e.details);
    })
  }
  getCities = (e) => {
    fetch(`http://localhost:3000/api/${e.target.value}`)
      .then(res => res.json())
      .then(data =>{
        this.setState({citiesArr:data})
      })
      .catch(e => {
        console.log(e);
      })
  }
  renderSelect = (array) => {
    if(array.length === 0){
      return null
    }
    return(
      <select onChange={this.getCities}>
        <option></option>
        {
          array.map( (item,i) => {
            return <option key={i} value={item.country_id||item.city_id}>{item.country||item.city}</option>
          })
        }
      </select>
    )
  }
  render(){
    // console.log(this.state.countriesArr);
    const {countriesArr,citiesArr} = this.state;
    return(
      <div>
        {this.renderSelect(countriesArr)}
        {this.renderSelect(citiesArr)}
      </div>
    )
  }
}
export default Dropdown;