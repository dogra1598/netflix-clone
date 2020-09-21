import React from "react";

import Navbar from "../../shared/Navbar/Navbar";
import Header from "../Components/HomeComponents/Header";
import Feature from "../../Netfix-clone/Components/HomeComponents/Feature";
import tvImg from "../../Assets/Images/tv.png";
import mobileImg from "../../Assets/Images/mobile.jpg"
import boxshot from "../../Assets/Images/boxshot.png";
import download from "../../Assets/Images/download.gif"
import Faq from "../../Netfix-clone/Components/HomeComponents/Faq";
import Footer from "../../shared/Footer/Footer";
// import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />

      {/* line break */}
      <div
        style={{
          backgroundColor: "#222",
        }}
      >
        &nbsp;
      </div>
      {/* line break */}

      <Feature
        side="left"
        video
        imageUrl={tvImg}
        title="Enjoy on your TV."
        text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        videoUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
      />

      {/* line break */}
      <div
        style={{
          backgroundColor: "#222",
        }}
      >
        &nbsp;
      </div>
      {/* line break */}

      <Feature
        side="right"
        imageUrl={mobileImg}
        subImg={boxshot}
        gif={download}
        title="Download your shows to watch offline."
        text="Save your favourites easily and always have something to watch."
      />

      {/* line break */}
      <div
        style={{
          backgroundColor: "#222",
        }}
      >
        &nbsp;
      </div>
      {/* line break */}

      <Feature
        side="left"
        video
        imageUrl={tvImg}
        title="Watch everywhere."
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        videoUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
      />

      {/* line break */}
      <div
        style={{
          backgroundColor: "#222",
        }}
      >
        &nbsp;
      </div>
      {/* line break */}

      <Faq />

      {/* line break */}
      <div
        style={{
          backgroundColor: "#222",
        }}
      >
        &nbsp;
      </div>
      {/* line break */}

      <Footer />
      
    </React.Fragment>
  );
};

export default Home;
