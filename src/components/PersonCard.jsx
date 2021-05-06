import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state={
            age: this.props.age
        }
    }
    render() {
        const birthday=()=>{
            this.setState({age:this.state.age + 1})
            console.log(`Happy birthday ${this.props.firstName} ${this.props.lastName}! You're now ${this.state.age+1}.`)
        }
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hcolor}</p>
                <button onClick={birthday} className="btn btn-sm btn-primary mb-2">Birthday button for {this.props.firstName} {this.props.lastName}!</button>
            </div>
        );
    }
}

export default PersonCard;