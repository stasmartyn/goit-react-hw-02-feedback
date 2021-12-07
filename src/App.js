import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import Input from "./components/imput";
import ContactList from "./components/contactList";
class App extends React.Component {
  state = {
    contacts: [''],
    name: '',
    id:1
  }
 


  pushName=()=>{
    this.setState({
      name:document.getElementById('inputid').value
    })
  }
  pushNumber=()=>{
    this.setState({})
  }

render(){

  return(
    <div>
< Input onName={this.pushName} onContacts={this.pushNumber} />
  <ContactList items={this.state.name} /> 
    </div>
  )

}
    

}
export default App;