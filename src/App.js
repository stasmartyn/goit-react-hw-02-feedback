import React,{ Component } from "react";
import Form from "./components/form";
class MyForm extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      goodIncrement=()=>{
  this.setState(prevState => {
    return{
      good:prevState.good+1,
    }
    });
      }
      neutralIncrement=()=>{
        this.setState(prevState=>{
          return{
            neutral:prevState.neutral+1,
          }

        })
      }
      badIncrement=()=>{
        this.setState(prevState=>{
          return{
            bad:prevState.bad+1,
          }
        })
      }

      countTotalFeedback=()=>{
        let total = Object.values(this.state).reduce((acc, el) => acc + el, 0);
    return total;
      }
        
      

      render(){
        return(
        <div>
< Form
 onGood={this.goodIncrement}
 onNeutral={this.neutralIncrement}
 onBad={this.badIncrement}
 good={this.state.good}
 neutral={this.state.neutral}
 bad={this.state.bad}
 total={this.countTotalFeedback()}
 />

        </div>
        );
      }
}

export default MyForm;