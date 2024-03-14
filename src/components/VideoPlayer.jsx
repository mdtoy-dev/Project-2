import React, {useEffect, useRef, useState} from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router";



function VideoPlayer() {

const playerRef = useRef(null);   

let { type } = useParams();
const [urlType, setUrlType]=useState("");

console.log(type);

const urlMapping ={ 

    animalSounds: "https://www.youtube.com/watch?v=YCvzPBUPZ9w",
    colours: "https://www.youtube.com/watch?v=qhOTU8_1Af4",
    rhymes: "https://www.youtube.com/watch?v=buE6l32rCHo"
}

const setUrlBasedOnType=() => {

if(urlMapping.hasOwnProperty(type)){
    setUrlType(urlMapping[type]);
  
}else{
    console.log("Invalid Type"+type);
}

}
                 
useEffect(()=> {
        setUrlBasedOnType();
        },[type])


return(<>
          <div className="flex justify-center items-center">
          <h3 className="text-3xl mb-8">Watch Station</h3>
          </div> 
        <div className="flex justify-center items-center h-screen">
        <ReactPlayer ref={playerRef} url={urlType} controls={true} />   
        </div>  
        </>  
       )

}

export default VideoPlayer;

