import { Component } from "react";

class Header extends Component {
    render(){
        this.state = {
            name : "My name is Hafsa.",
            age : "I am 19 years old.",
            skils : ['react','html','js','css']
        }

        return(
            <>
            <h2>{this.state.name} </h2>
            <h2>{this.state.age} </h2>
            {this.state.skils.map((item)=><p>{item}</p>)}
            </>
          )
        }
}
export default Header;