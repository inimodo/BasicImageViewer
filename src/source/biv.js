import React from 'react';
import { useState, useEffect } from "react";
import './css/global.css';
import './css/images.css';
import Image from './image.js';
import Imagelist from './imagelist.js';

//https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

//https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}



function Biv(props){
  //https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
  const { height } = useWindowDimensions();
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);


  const h_scale = 1;

  var index = Math.floor(scrollY*h_scale/height);
  var scroll = scrollY*h_scale/height;
  var rel_scroll = scroll-index;

  var cen_scroll = rel_scroll;

  if(rel_scroll<0.5)
  {
    cen_scroll = 1.0-rel_scroll;
  }
  cen_scroll = (cen_scroll-0.5)*2;

  var pagedata = {
    "rel_scroll":rel_scroll,
       "cen_scroll":cen_scroll,
    "height":height,
    "index":index

  };

  const images = Imagelist.map((image,index)=>(
    <Image pd={pagedata} image={image} key={index} index={index}/>
  ));
  return (
    <>
    {images}
    <a className="legal">© Markus Kotar 2023 - markus@ini02.xyz</a>
    </>
  );

}
export default Biv;
