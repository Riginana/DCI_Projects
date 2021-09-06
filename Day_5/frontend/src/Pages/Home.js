import React, { useEffect, useState } from "react";
import { getData } from "../API/api";
// import LinkUrl from "../Components/LinkUrl";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <>
      {data.map((link, index) => {
        return (
          <div key={index} className="content">
            {/* <LinkUrl /> */}
            <div className="textAndImage">
              <div className="card-text">
                <div className="title">{link.title}</div>
                <div className="text">{link.explanation}</div>
                <div className="link">
                  <button>
                    <a href={link.url} target="_blank">
                      Let's go
                    </a>
                  </button>
                </div>
              </div>
              <div className="card-image">
                <img src={link.image} alt="screen-pic" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Home;
