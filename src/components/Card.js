import React from "react";
import defImg from './emptyImg.jpg'
import { Link } from "react-router-dom";

const Card = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, imageAlt} = props;

    return (
      <>
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl? defImg : imageUrl} className="card-img-top" alt={imageAlt}/>
          <div className="card-body">
            <h5 className="card-title">{!title?"No Title Avaialble":title}</h5>
            <p className="card-text">{!description?"No Description Available":description}</p>
            <p className="card-text"><small className="text-warning">Published By {!author?"Unknown Author":author} On : {!date?"Not Availbe":new Date(date).toGMTString()}</small></p>
            <Link to={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</Link>
          </div>
        </div>
      </div>
      </>
    );
}

export default Card;