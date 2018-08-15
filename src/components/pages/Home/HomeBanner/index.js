
import React, { Component } from 'react'

import './index.scss'

import Swiper from 'swiper'



const  GetBannersItem = (props) =>{  
    let { data } = props
    return (
        <div className="swiper-slide">
            <img width="100%" src= { data.imageUrl } alt="" />
        </div>
    )
}

class AppHomeBanner extends Component {

    constructor(props){
        super(props)
        this.state={
            billboards:[]
        }
    }
   
    getBanners(){
        this.$http.get('/mz/v4/api/billboard/home',{
            params:{_t:Date.now()}
        }).then(res => {
           if(this.props.unmount) return false
            this.setState({billboards:res.data.data.billboards})
        })
    }
    componentDidUpdate () {
        if (!this.swiper) {
            this.swiper = new Swiper(this.el, {
                pagination: { el: '.swiper-pagination' }
            })
        }      
    }
    componentDidMount(){
        this.getBanners()
    }
    
   
    render () {
        let { billboards } = this.state
        return (
            <div className = "app-home-banner">
                <div ref = {el => this.el = el} className="swiper-container">
                    <div className="swiper-wrapper">
                        { billboards.map(item =>(
                            <GetBannersItem data = {item} key = {item.id} />
                        )) }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }

}

export default AppHomeBanner