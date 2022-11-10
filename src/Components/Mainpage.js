import React, { useState, useEffect, useRef } from "react";
import v1 from "/home/agva/Desktop/AgVaPro_webpage/webpage/src/videos/v1.mov";
import v2 from "/home/agva/Desktop/AgVaPro_webpage/webpage/src/videos/v2.mov";
import v3 from "/home/agva/Desktop/AgVaPro_webpage/webpage/src/videos/v3.mov";
import v4 from "/home/agva/Desktop/AgVaPro_webpage/webpage/src/videos/v4.mov";
import v5 from "/home/agva/Desktop/AgVaPro_webpage/webpage/src/videos/v5.mov";
import v6 from "/home/agva/Desktop/AgVaPro_webpage/webpage/src/videos/v6.mov";
import v7 from "/home/agva/Desktop/AgVaPro_webpage/webpage/src/videos/v7.jpg";
import v8 from "/home/agva/Desktop/AgVaPro_webpage/webpage/src/videos/v8.jpg";
import v9 from "/home/agva/Desktop/AgVaPro_webpage/webpage/src/videos/v9.png";

function Mainpage() {
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref6 = useRef(null);
  const Ref5 = useRef(null);
  const Ref4 = useRef(null);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    //auto play on scroll
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };
    
    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Ref1.current.play();
        } else {
          Ref1.current.pause();
        }
      });
    };

    let handlePlay2 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Ref2.current.play();
        } else {
          Ref2.current.pause();
        }
      });
    };

    let handlePlay3 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Ref3.current.play();
        } else {
          Ref3.current.pause();
        }
      });
    };

    let handlePlay4 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Ref4.current.play();
        } else {
          Ref4.current.pause();
        }
      });
    };

    let handlePlay5 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Ref5.current.play();
        } else {
          Ref5.current.pause();
        }
      });
    };

    let handlePlay6 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Ref6.current.play();
        } else {
          Ref6.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);
    let observer2 = new IntersectionObserver(handlePlay2, options);
    let observer3 = new IntersectionObserver(handlePlay3, options);
    let observer4 = new IntersectionObserver(handlePlay4, options);
    let observer5 = new IntersectionObserver(handlePlay5, options);
    let observer6 = new IntersectionObserver(handlePlay6, options);

    observer.observe(Ref1.current);
    observer2.observe(Ref2.current);
    observer3.observe(Ref3.current);
    observer4.observe(Ref4.current);
    observer5.observe(Ref5.current);
    observer6.observe(Ref6.current);

    //dynamic resizing.
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    //auto play on scroll
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <video
        ref={Ref1}
        src={v2}
        height={windowSize.height}
        width={windowSize.width}
        loop autoPlay muted
      />

      <video
        ref={Ref2}
        src={v3}
        height={windowSize.height}
        width={windowSize.width}
        loop autoPlay muted
      />
      <img
        className="main-img"
        src={v9}
        alt=""
        
      ></img>
        <video
        ref={Ref5}
        src={v6}
        height={windowSize.height}
        width={windowSize.width}
        loop autoPlay muted
      />
      <video
        ref={Ref3}
        src={v5}
        height={windowSize.height}
        width={windowSize.width}
        loop autoPlay muted
      />
     
      <img
        className="main-img"
        src={v8}
        alt=""
        
      ></img>
      <video
        ref={Ref6}
        src={v4}
        height={windowSize.height}
        width={windowSize.width}
        loop autoPlay muted
      />

     
       <img
        className="main-img"
        src={v7}
        alt=""
        
      ></img>
         <video
        ref={Ref4}
        src={v1}
        height={windowSize.height}
        width={windowSize.width}
        loop autoPlay muted
      />


    </>
  );
}

export default Mainpage;
