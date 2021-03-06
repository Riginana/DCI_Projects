import React from "react";
import Screenshot1 from "../images/samantha-gades-BlIhVfXbi9s-unsplash.jpg";
import LinkUrl from "../Components/LinkUrl";

function Home() {
  return (
    <div className="content">
      <LinkUrl />
      <div className="textAndImage">
        <div className="card-text">
          <div className="title">
            Get the inspiration of interior design here
          </div>
          <div className="text">
            Architecture not only about engineering, it even lands to art and
            aesthetics. With us, you will get a residentical design with an
            extraordinary touch of art.
          </div>
          <div className="link">
            <button>
              <a href="https://www.google.com/" target="_blank">
                Let's go
              </a>
            </button>
          </div>
        </div>
        <div className="card-image">
          <img src={Screenshot1} alt="screen-pic" />
        </div>
      </div>
      <div className="textAndImage">
        <div className="card-text">
          <div className="title">
            Get the inspiration of interior design here
          </div>
          <div className="text">
            Architecture not only about engineering, it even lands to art and
            aesthetics. With us, you will get a residentical design with an
            extraordinary touch of art.
          </div>
          <div className="link">
            <button>
              <a href="https://www.google.com/" target="_blank">
                Let's go
              </a>
            </button>
          </div>
        </div>
        <div className="card-image">
          <img src={Screenshot1} alt="screen-pic" />
        </div>
      </div>
    </div>
  );
}

export default Home;
