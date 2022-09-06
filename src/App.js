

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

export default class App extends Component {

  pageSize = 10;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }
setProgress =(progress)=>{
  this.setState({progress: progress})
}
  render() {
    return (
      <div>
         <Router>
         <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
       
      />
       <Navbar/>
      
       <Routes>
          <Route exact path="/" element={<News setProgress = {this.setProgress}  key="1" apiKey={this.apiKey} pageSize ={this.pageSize} country="in" category ="general"/>}/>

          <Route exact path="/business" element={<News setProgress = {this.setProgress}  key="2" apiKey={this.apiKey} pageSize ={this.pageSize} country="in" category ="business"/>}/>

           <Route exact path="/entertainment" element={<News setProgress = {this.setProgress}  key="3" apiKey={this.apiKey} pageSize ={this.pageSize} country="in" category ="entertainment"/>}/>

           <Route exact path="/general" element={<News setProgress = {this.setProgress}  key="4" apiKey={this.apiKey} pageSize ={this.pageSize} country="in" category ="general"/>}/>

           <Route exact path="/health" element={<News setProgress = {this.setProgress}  key="5" apiKey={this.apiKey} pageSize ={this.pageSize} country="in" category ="health"/>}/>

           <Route exact path="/science" element={<News setProgress = {this.setProgress}  key="6" apiKey={this.apiKey} pageSize ={this.pageSize} country="in" category ="science"/>}/>

           <Route exact path="/sports" element={<News setProgress = {this.setProgress}  key="7" apiKey={this.apiKey} pageSize ={this.pageSize} country="in" category ="sports"/>}/>

           <Route exact path="/technology" element={<News setProgress = {this.setProgress}  key="8" apiKey={this.apiKey} pageSize ={this.pageSize} country="in" category ="technology"/>}/>
        </Routes>
       </Router>
      </div>
    )
  }
}



