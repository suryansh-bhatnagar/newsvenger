import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
// import PropTypes from 'prop-types'

export default class News extends Component {
  // static defaultProps = {
  //   category : 'general',
  //   pagesize : 8
  // }
  // static propTypes={
  //   category : PropTypes.string,
  //   pagesize : PropTypes.number

  // }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6a28ce57b05649538ca0d8fce7b1e176&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.props.setProgress(10)
    this.setState({ loading: true });
    this.props.setProgress(30)
    let data = await fetch(url);
    this.props.setProgress(50)
    let parssedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parssedData.articles,
      totalResults: parssedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews();
  }

  // handleNext = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };

  // handlePrev = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    console.log( this.state.articles);
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6a28ce57b05649538ca0d8fce7b1e176&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parssedData = await data.json();
    console.log( this.state.articles);
    
    
    this.setState({
     
      articles: [...(this.state.articles),...(parssedData.articles)],
      totalResults: parssedData.totalResults,
      loading: false,
    });
    console.log( this.state.articles);
  };

  render() {
    let { pagesize, category } = this.props;
    return (
      <div>
       
          <h1 className=" text-center" style={{marginTop :'70px'}}>Top  {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} headlines -- NewsVenger</h1>
          {this.state.loading && <Spinner />}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.totalResults !== this.state.articles.length}
            loader={<h4>{<Spinner />}</h4>}
          >
            <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      publishedAt = {element.publishedAt}
                      source = {element.source.name}
                    />
                  </div>
                );
              })}
            </div></div>
          </InfiniteScroll>

          <div className="container d-flex justify-content-between">
           
          </div>
        </div>
    
    );
  }
}
