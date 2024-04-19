import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
 let [keyword, setKeyword] = useState("");
 let [results, setResults] = useState(null);

 function handleResponse(response) {
console.log(response.data.meanings[0].definition)
setResults(response.data)
} 
 
function search(event) {
event.preventDefault();
let key="0ocfta5c0e4602a2a90c32a9a4bbf5b9"
let word= keyword;
let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
axios.get(apiUrl).then(handleResponse);
}

 function handleKeywordChange(event) {
  setKeyword(event.target.value);
 }
 
  return (
    <div className="Dictionary">
<form onSubmit={search}>
  <input type="search" onChange={handleKeywordChange}/>
</form>
<Results results={results}/>
</div>
  ) 
}