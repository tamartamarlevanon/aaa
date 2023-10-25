import React from "react";
import CostumeSale from "./customSale";

class Purim extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                {
                    custom: "clown",
                    price: 300,
                },
                {
                    custom: "mikimouse",
                    price: 400,
                }],
                newCustom: "",
                newPrice: ""

        };

    }

    handleChanceName=(e)=>{
        this.setState({newCustom:e.target.value});
    }
   handleChanceCost=(e)=>{
    this.setState({newPrice:e.target.value});
   }
    pushCustom=()=>{
        const newArray=this.state.arr;
        newArray.push({custom: this.state.newCustom, price: this.state.newPrice})
        this.setState({arr:newArray})
    }

login=()=>{
    return (<div>
        <input onChange={this.handleChanceName }placeholder="enter cusromer"></input><br/>
        <input onChange={this.handleChanceCost }placeholder="enter price"></input><br/>
        <button onClick={this.pushCustom}>enter detalis</button>
    </div>)
}
    render() {
   
        return (<div>
        {this.login()} 
        <CostumeSale c={this.state.arr}></CostumeSale>
        </div>)
            
    }
}
export default Purim;