import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(props) {
 let [keyword, setKeyword] = useState(props.defaultKeyword);
 let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
 function handleResponse(response) {
console.log(response.data.meanings[0].definition)
setResults(response.data)
} 

function search () {
let key="0ocfta5c0e4602a2a90c32a9a4bbf5b9"
let word= keyword;
let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
axios.get(apiUrl).then(handleResponse);
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
  <h1>What word do you seek meaning for?</h1>
<form onSubmit={handleSubmit}>
  <input type="search" defaultValue={props.defaultKeyword} onChange={handleKeywordChange}/>
</form>
<div className="hint">
  example: ceasefire, now, free, Palestine, etc.
</div>
</section>
<Results results={results}/>
</div>
  ); 
}
else {
load();
return "Loading..."

}
  
}