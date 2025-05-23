import './Carousel.css';
import React from 'react'
import defImg from './emptyImg.jpg'


const Carousel = (props) => {

    let {title, description, imageUrl, newsUrl, active, author, date, imageAlt} = props;
    
    return (
    <>
    <div className={`carousel-item ${active}`} id={newsUrl}>
      <img src={!imageUrl? defImg : imageUrl} className="d-block w-100" alt={imageAlt}/>
      <div id = "caption" className="carousel-caption bg-dark bg-opacity-50 text-light">
        <h5>{!title?"No Title Avaialble":title}</h5>
        <p className="d-none d-md-block">{!description?"No Description Available":description}</p>
        <p className="card-text"><small className="text-warning d-none d-md-block">Published By {!author?"Unknown Author":author} On : {!date?"Not Availbe":new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target="_blank" rel="noreferrer" type="button" className="btn btn-primary text-light">Read More</a>
      </div>
    </div>
    </>
    )
}

Carousel.defaultProps= {
  imageUrl: defImg,
  title : "No Title Available",
  description: "No Description Available...",
  imageAlt: "Image Not Available",
  author: "Unknown Author",
  date : "Not Available"
}

export default Carousel;