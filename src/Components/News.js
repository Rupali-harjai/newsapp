import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }


  // articles =
  //     {
  //       "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
  //       "author": "ABC News",
  //       "title": "Australia to face India, England more often as International Cricket Council announces men's Future Tours Program",
  //       "description": "Australia will play India in two five-test series in the coming years, while England will be its opponent more regularly across the game's formats.",
  //       "url": "http://www.abc.net.au/news/2022-08-17/cricket-australia-india-england-future-tours-program/101344104",
  //       "urlToImage": "https://live-production.wcms.abc-cdn.net.au/acc5c7a875805d0329ca071026ca9d85?impolicy=wcms_crop_resize&cropH=2086&cropW=3708&xPos=0&yPos=112&width=862&height=485",
  //       "publishedAt": "2022-08-17T08:49:43Z",
  //       "content": "Australia will play India and England more regularly in men's cricket after the International Cricket Council (ICC) confirmed its Future Tours Program.\r\n<ul><li>Australia and India will meet in two f… [+3346 chars]"
  //     },
  //     {
  //       "source": { "id": "bbc-sport", "name": "BBC Sport" },
  //       "author": "BBC Sport",
  //       "title": "Shane Warne memorial - watch & follow updates",
  //       "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
  //       "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
  //       "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
  //       "publishedAt": "2022-03-30T08:22:26.498888Z",
  //       "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
  //     },
  //     {
  //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //       "author": null,
  //       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //       "publishedAt": "2020-04-27T11:41:47Z",
  //       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //       "author": null,
  //       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //       "publishedAt": "2020-03-30T15:26:05Z",
  //       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }
  //

  // jab bhe constructore karna hai to super ka use karna hai


  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    console.log('this is a constructor of news component');
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)
      } - NEWS`;
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
      }&category=${this.props.category
      }&apiKey=ee2137ba5c964c57bf01d5bd827afe1d&page=${this.state.page
      }&pageSize=${this.props.pageSize
      }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
  }
  async componentDidMount() {
    console.log("cdm");
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee2137ba5c964c57bf01d5bd827afe1d&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseData = await data.json()
    // console.log(parseData);
    // this.setState({articles : parseData.articles,
    //    totalResults : parseData.totalResults,
    //    loading : false })

    this.updateNews()
  }

  handlePrevClick = async () => {
    console.log("previous");
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee2137ba5c964c57bf01d5bd827afe1d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseData = await data.json()
    // console.log(parseData);


    // this.setState({
    //     page: this.state.page - 1,
    //     articles : parseData.articles,
    //       loading:false
    // })
    this.setState({
      page: this.state.page - 1
    })
    this.updateNews();
  }


  handleNextClick = async () => {
    console.log("next");
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee2137ba5c964c57bf01d5bd827afe1d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseData = await data.json()


    // this.setState({
    //     page: this.state.page + 1,
    //     articles : parseData.articles,
    //     loading:false
    // })
    // }
    this.setState({
      page: this.state.page + 1
    })
    this.updateNews();
  }
  fetchMoreData = async () => {
      this.setState({page: this.state.page + 1 })
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
      }&category=${this.props.category
      }&apiKey=ee2137ba5c964c57bf01d5bd827afe1d&page=${this.state.page
      }&pageSize=${this.props.pageSize
      }`;
 
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({ articles: this.state.articles.concat( parseData.articles), 
      totalResults: parseData.totalResults, 
      loading: false })
   
  };


  render() {
    console.log("render");
    return (
      <>
    <h2 className='text-center'>News - Top Headlines from {
      this.capitalizeFirstLetter(this.props.category )}
       </h2>
      {this.state.articles.loading && <Spinner/>}
            <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.totalResults}
        loader={<Spinner/>}
        > 
        <div className='container'>

        <div className='row my-4'> 
        { /* {!this.state.loading && this.state.articles.map((element) =>{ */ } 
        {this.state.articles.map((element) => {

              return <div className='col-md-4' key={element.url}> < NewsItem title={
                element.title ? element.title.slice(0, 40) : ""}
                description={element.description ? element.description.slice(0, 80) : ""}imageUrl={ element.urlToImage ? element.urlToImage : "https://www.greatandhra.com/newphotos10/money21661196602.jpg"}newsUrl={ element.url}author={  element.author }date={element.publishedAt}source={element.source.name} /> 
                     </div>
            })} 
            </div>

        </div>
     
      </InfiniteScroll>
       {/* <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> & larr;Previous </button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
          type="button" className="btn btn-dark" onClick={this.handleNextClick} > Next & rarr;</button>
      </div>  */}

      </>)}} 

export default News
