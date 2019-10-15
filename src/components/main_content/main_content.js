import React, { Component } from "react";
import avatar_icon from "../../images/avatar_icon.svg";
import dot_icon from "../../images/dot_icon.svg";
import comment_icon from "../../images/comment_icon.svg";
import video_placeholder from "../../images/video-placeholder.svg";

export default class MainContent extends Component {
  render() {
    return (
      <article className="main-container">
        <div className="title-container">
          {/* <div className="date-container">
          <p className="date-name">Sept</p>
          <p className="date-number">01</p>
        </div> */}
          <div className="title-header-container">
            <h1 className="title-h1">Welcome to our blog</h1>
            <div className="title-info-container">
              <img className="info-space" src={avatar_icon} alt="avatar-icon" />
              <p className="info-space article-author">
                by <strong>Admin</strong>
              </p>
              <img className="info-space" src={dot_icon} alt="dot" />
              <p className="info-space creation-date">5 days ago</p>
              <img className="info-space" src={dot_icon} alt="dot" />
              <div className="info-space comment-icon-container">
                <img
                  className="info-space"
                  src={comment_icon}
                  alt="comment-icon"
                />
                <p className="comment-number">1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="video-container">
          <img src={video_placeholder} alt="video" />
        </div>
        <div className="article-container">
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            necessitatibus dolorem alias aperiam tempora quibusdam quasi ab sed
            culpa inventore dignissimos laudantium reprehenderit ipsa
            repudiandae veniam eaque voluptatibus aliquam vel non dolorum
            magnam, ipsam assumenda. Eveniet veniam mollitia quidem unde officia
            animi asperiores soluta, eum repudiandae eos excepturi aperiam et
            saepe. Dolorum iure, atque fuga mollitia sunt, et delectus sapiente
            iste commodi expedita explicabo perferendis. Magnam quos autem rem
            inventore, minima quo voluptatum? Ipsa ipsam modi voluptatem
            voluptates, iure alias obcaecati reprehenderit molestiae expedita
            illo facilis tempore pariatur ab provident consequatur deleniti
            rerum illum ducimus officia repudiandae nulla quis necessitatibus?
          </p>
          <a className="read-more" href="#read-more">
            Read More
          </a>
        </div>
      </article>
    );
  }
}
