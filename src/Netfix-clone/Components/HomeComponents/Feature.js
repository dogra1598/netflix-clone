import React from "react";

import "./Feature.css";

const Feature = (props) => {
  let feature = null;
  if (props.side === "left") {
    feature = (
      <div className="feature__container">
        <div className="feature__left">
          <div className="feature__content">
            <div className="feature__title">
              <h1>{props.title}</h1>
            </div>
            <div className="feature__text">
              <h2>{props.text}</h2>
            </div>
          </div>
          {props.video ? (
            <div className="feature__story">
              <div className="feature__video">
                <video autoplay="" playsinline="" muted="" loop>
                  <source src={props.videoUrl} type="video/mp4" />
                </video>
              </div>
              <div className="feature__img">
                <img src={props.imageUrl} alt="" />
              </div>
            </div>
          ) : (
            <div className="feature__storyAlt">
              <div className="">
                <img src={props.imageUrl} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    feature = (
      <div className="feature__container">
        <div className="feature__right">
          {props.video ? (
            <div className="feature__story">
              <div className="feature__video">
                <video autoplay="" playsinline="" muted="" loop>
                  <source src={props.videoUrl} type="video/mp4" />
                </video>
              </div>
              <div className="feature__img">
                <img src={props.imageUrl} alt="" />
              </div>
            </div>
          ) : (
            <div
              className="feature__storyAlt"
              style={{
                backgroundImage: `url(${props.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="feature__storyAlt__sub">
                <div className="feature__storyAlt__sub__img">
                  <img src={props.subImg} alt="" />
                </div>
                <div className="feature__storyAlt__sub__text">
                  <span style={{ fontWeight: "700" }}>Stranger Things</span> <br />
                  <span
                    style={{
                      color: "blue",
                    }}
                  >
                    Downloading...
                  </span>
                </div>
                <div className="feature__storyAlt__sub__gif">
                  <img src={props.gif} alt="" />
                </div>
              </div>
            </div>
          )}
          <div className="feature__content">
            <div className="feature__title">
              <h1>{props.title}</h1>
            </div>
            <div className="feature__text">
              <h2>{props.text}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <React.Fragment>{feature}</React.Fragment>;
};

export default Feature;
