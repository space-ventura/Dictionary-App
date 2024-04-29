import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
 let [keyword, setKeyword] = useState(props.defaultKeyword);
 let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);
 function handleResponse(response) {
setResults(response.data)

} 

function handleImageResponse(response) {
setPhotos(response.data.photos);
}

function search () {
let key="0ocfta5c0e4602a2a90c32a9a4bbf5b9";
let word= keyword;
let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
axios.get(apiUrl).then(handleResponse);
let imageApiKey= "0ocfta5c0e4602a2a90c32a9a4bbf5b9";
let imageApiUrl= `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
axios.get(imageApiUrl).then(handleImageResponse);
}
 

function handleSubmit(event) {
event.preventDefault();
search();
}


 function handleKeywordChange(event) {
  setKeyword(event.target.value);
 }

 function load() {
  setLoaded(true);
  search();
 }
 
if (loaded) {
return (
    <div className="Dictionary">
<section>
  <h2>What word do you seek meaning for?</h2>
<form onSubmit={handleSubmit}>
  <input type="search" defaultValue={props.defaultKeyword} onChange={handleKeywordChange}/>
</form>
<div className="hint">
  example: river, sea, ceasefire, now, etc.
</div>
</section>
<Results results={results}/>
<Photos photos={photos}/>
</div>
  ); 
}
else {
load();
return "Loading..."

}
  
}