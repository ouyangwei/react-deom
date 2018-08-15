
import React, { Component } from 'react'
import './index.scss'


class Button extends Component{
    handleClick(){
        alert(1)
    }
    render(){
        return(
            <button className="button button-big" onClick = {this.props.handleClick} >点击一次</button>
        )
    }
}
class DoubleButton extends Component{
    DoubleHandleClick(){
        alert(2)
    }
    render(){
        return(
            <button  className="button button-big" onDoubleClick = {this.props.DoubleHandleClick} >点击二次</button>
        )
    }
}
const HOC = (PCcomponent)=>{
    return class extends Component{
        handleClick(){
            alert(1)
        }
        DoubleHandleClick(){
            alert(2)
        }
        render(){
            return(
                <PCcomponent handleClick = {this.handleClick} DoubleHandleClick={this.DoubleHandleClick}/>
            )
        }
    }
    
}

const ButtonHOC = HOC(Button)
const BoubleButtonHOC = HOC(DoubleButton)


class AppNotFound extends Component {
   
    render () {
        return (
            <div className = "app-not-found">
                NotFond  <ButtonHOC/> <BoubleButtonHOC/>
            </div>
        )
    }

}

export default AppNotFound