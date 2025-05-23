import React, { useState, useEffect } from 'react'
import Carousel from './Carousel';
import PropTypes from 'prop-types'
import LoadingIcon from './LoadingIcon';
import Card from './Card';

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const [totalResults, setTotalResults] = useState();

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let capCat = capitalizeFirstLetter(`${props.category}`);

    const updateNews = async () => {
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&q=${props.q}&apiKey=237c736a1d2a457580857335565d4aee&page=${pageNo}&pageSize=20`;
      let data = await fetch(url);
      props.setProgress(40);
      let parsedData = await data.json();
      props.setProgress(80);
      setTotalResults(parsedData.totalResults);
      setArticles(parsedData.articles);
      setLoading(false);
      props.setProgress(100);
    }

    useEffect(()=>{
      document.title = `${capCat} News - Khabar`;
      updateNews();                       // The next line with"eslint..." is used to remove the unnecessary warning coming while mounting
      // eslint-disable-next-line     
    },[]);

  const prevPage = async () => {
      let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&q=${props.q}&apiKey=237c736a1d2a457580857335565d4aee&page=${pageNo - 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setTotalResults(parsedData.totalResults);
      setArticles(parsedData.articles);
      setLoading(false);
      setPageNo(pageNo - 1);
    }
    
  const nextPage = async () => {
      let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&q=${props.q}&apiKey=237c736a1d2a457580857335565d4aee&page=${pageNo + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setTotalResults(parsedData.totalResults);
      setArticles(parsedData.articles);
      setLoading(false);
      setPageNo(pageNo+ 1);
    }

    return (
        <>
{loading && <LoadingIcon/>}
<div id="carouselExampleCaptions" className="container-fluid p-0 carousel slide sticky-top"  data-bs-ride="carousel" style={{width : "100%"}}>
<div className="carousel-indicators">

  {articles && articles.map((element, index) => {
    if(index === 0){
      return <button key={index + 1} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index + 1}`}></button>
    }else{
      return <button key={index + 1} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} aria-current="true" aria-label={`Slide ${index + 1}`}></button>
    }
  })}

</div>
<div className="carousel-inner">


            {articles.map((element, index) => {
              if(index === 0) return <Carousel key={element.url?element.url:" "} active="active" title={element.title?element.title:" "} description={element.description?element.description:" "} imageUrl={element.urlToImage} imageAlt="Image Not Available" author={element.author} date={element.publishedAt} newsUrl={element.url?element.url:" "}></Carousel>
              else return <Carousel key={element.url?element.url:" "} title={element.title?element.title:" "} description={element.description?element.description:" "} imageUrl={element.urlToImage} imageAlt="Image Not Available" author={element.author} date={element.publishedAt} newsUrl={element.url?element.url:" "}></Carousel>
              })}


</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
</div>

<div className="container my-3">
  <h1 className="text-align-center" style={{color:"white"}}>{capitalizeFirstLetter(`Top ${capCat} News`)}</h1>
  <div className="row">
      {articles.map((element, index) => {
        return  <div key={element.url?element.url:" "} className="col-12 col-sm-6 col-md-4">
                  <Card title={element.title?element.title:"No Title Available"} description={element.description?element.description:"No Description Available"} imageUrl={element.urlToImage} imageAlt="Image Not Available" author={element.author} date={element.publishedAt} newsUrl={element.url?element.url:" "}></Card>
                </div>
          }
        )
      }
  </div>
  <div className="container d-flex justify-content-between">
      <button disabled={pageNo<=1} onClick={prevPage} type="button" className="btn btn-light"> &larr; Previous</button>
      <button disabled={pageNo>=Math.ceil(totalResults/20)} onClick={nextPage} type="button" className="btn btn-light">Next &rarr; </button>
    </div>
</div>
</>
    )
}


News.defaultProps = {
  category: "general",
  q : "india"
}

News.propTypes = {
  category: PropTypes.string,
  q : PropTypes.string
}

export default News;