

import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import News from './Components/News'
import {
  BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App =()=> {

  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setProgress] = useState(0)
 
    return (
      <div>
         <Router>
         <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
       
      />
       <Navbar/>
      
       <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress}  key="1" apiKey={apiKey} pageSize ={pageSize} country="in" category ="general"/>}/>

          <Route exact path="/business" element={<News setProgress = {setProgress}  key="2" apiKey={apiKey} pageSize ={pageSize} country="in" category ="business"/>}/>

           <Route exact path="/entertainment" element={<News setProgress = {setProgress}  key="3" apiKey={apiKey} pageSize ={pageSize} country="in" category ="entertainment"/>}/>

           <Route exact path="/general" element={<News setProgress = {setProgress}  key="4" apiKey={apiKey} pageSize ={pageSize} country="in" category ="general"/>}/>

           <Route exact path="/health" element={<News setProgress = {setProgress}  key="5" apiKey={apiKey} pageSize ={pageSize} country="in" category ="health"/>}/>

           <Route exact path="/science" element={<News setProgress = {setProgress}  key="6" apiKey={apiKey} pageSize ={pageSize} country="in" category ="science"/>}/>

           <Route exact path="/sports" element={<News setProgress = {setProgress}  key="7" apiKey={apiKey} pageSize ={pageSize} country="in" category ="sports"/>}/>

           <Route exact path="/technology" element={<News setProgress = {setProgress}  key="8" apiKey={apiKey} pageSize ={pageSize} country="in" category ="technology"/>}/>
        </Routes>
       </Router>
      </div>
    )
  
}



export default App;