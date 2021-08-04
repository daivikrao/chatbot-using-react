import React from "react";
import axios from "axios";
import { useSpeechSynthesis } from 'react-speech-kit';



function App()
{
  const [posts,setPost] = React.useState([]);
  const { speak,listening, stop } = useSpeechSynthesis();

  React.useEffect(() => {
    axios.get("https://v2.jokeapi.dev/joke/Programming?type=single").then(res=>{
      setPost(res.data);
      //console.log(posts.joke);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  window.addEventListener('keydown', (event) => {
    speak({ text: posts.joke })
  });

  return  <h1>Press any key to hear a JOKE 😂</h1>;

}

export default App;