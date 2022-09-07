import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) =>  {
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)  


// document.title = `${capitalizeFirstLetter(props.category)
// } - NEWS`;


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country
      }&category=${props.category
      }&apiKey=${props.apiKey}&page=${props.page
      }&pageSize=${props.pageSize
      }`;
      setLoading(false) 
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json()
    console.log(parseData);
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false) 
    
    props.setProgress(100);
  }
useEffect(() =>{
  updateNews();
 //eslint-disable-next-line 
},[])

 

 const handlePrevClick = async () => {
    console.log("previous");

    setPage(page - 1)
    updateNews();
  }


  const handleNextClick = async () => {
    console.log("next");
    setPage(page +1)
    
    updateNews();
  }
 const fetchMoreData = async () => {
    
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country
      }&category=${props.category
      }&apiKey=${props.apiKey}&page=${page +1}
      }&pageSize=${props.pageSize
      }`;
      setPage(page +1)
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    setArticles( articles.concat( parseData.articles))
    setTotalResults( parseData.totalResults)
    setLoading(false) 
    
   
  };


    console.log("render");
    return (
      <>
    <h2 className='text-center'style={{ marginTop: '80px'}}>News - Top Headlines from {
      capitalizeFirstLetter(props.category )}
       </h2>
      {articles.loading && <Spinner/>}
            <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
        > 
        <div className='container'>

        <div className='row my-4'> 
        { /* {!loading && articles.map((element) =>{ */ } 
        {articles.map((element) => {

              return <div className='col-md-4' key={element.url}> < NewsItem title={
                element.title ? element.title.slice(0, 40) : ""}
                description={element.description ? element.description.slice(0, 80) : ""}imageUrl={ element.urlToImage ? element.urlToImage : "https://www.greatandhra.com/newphotos10/money21661196602.jpg"}newsUrl={ element.url}author={  element.author }date={element.publishedAt}source={element.source.name} /> 
                     </div>
            })} 
            </div>

        </div>
     
      </InfiniteScroll>
    

      </>)
    
      } 


News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
