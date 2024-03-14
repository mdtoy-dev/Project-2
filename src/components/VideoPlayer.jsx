import React, {useRef, useState} from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router";


const animalSounds= 'https://www.youtube.com/watch?v=YCvzPBUPZ9w';
const learnColors= "https://www.youtube.com/watch?v=qhOTU8_1Af4";
const Rhymes="https://www.youtube.com/watch?v=buE6l32rCHo";


function VideoPlayer() {

const playerRef = useRef(null);   

let { type } = useParams();
const [url, setUrl]=useState("");

console.log(type);


return(<>
          <div className="flex justify-center items-center">
          <h3 className="text-3xl mb-8">Watch Station</h3>
          </div> 
        <div className="flex justify-center items-center h-screen">
        <ReactPlayer ref={playerRef} url={animalSounds} controls={true} />   
        </div>  
        </>  
       )

}

export default VideoPlayer;
