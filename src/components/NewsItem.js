import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {

    let {title,description,imageUrl,newsUrl ,publishedAt,source} = this.props;
     const time = new Date(publishedAt).toGMTString();
    return (
      <div>
        <div className="card ">
          <div style={{display:"flex",justifyContent: 'flex-end',position:'absolute',right:0}} >
        <span className="badge bg-danger">{source}</span>

          </div>
        <img src={imageUrl ===null?'https://static.news.bitcoin.com/wp-content/uploads/2021/12/too-late-to-ban.jpg':imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <p className="card-text"><small className="text-muted">{time}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">
              Read more
              
            </a>
          </div>
        </div>
      </div>
    );
  }
}
