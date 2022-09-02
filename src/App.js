

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
  render() {
    return (
      <div>
         <Router>
         <LoadingBar
        color='#f11946'
        progress={10}
       
      />
       <Navbar/>
      
       <Routes>
          <Route exact path="/" element={<News key="1" pageSize ={this.pageSize} country="in" category ="general"/>}/>

          <Route exact path="/business" element={<News key="2" pageSize ={this.pageSize} country="in" category ="business"/>}/>

           <Route exact path="/entertainment" element={<News key="3" pageSize ={this.pageSize} country="in" category ="entertainment"/>}/>

           <Route exact path="/general" element={<News key="4" pageSize ={this.pageSize} country="in" category ="general"/>}/>

           <Route exact path="/health" element={<News key="5" pageSize ={this.pageSize} country="in" category ="health"/>}/>

           <Route exact path="/science" element={<News key="6" pageSize ={this.pageSize} country="in" category ="science"/>}/>

           <Route exact path="/sports" element={<News key="7" pageSize ={this.pageSize} country="in" category ="sports"/>}/>

           <Route exact path="/technology" element={<News key="8" pageSize ={this.pageSize} country="in" category ="technology"/>}/>
        </Routes>
       </Router>
      </div>
    )
  }
}



