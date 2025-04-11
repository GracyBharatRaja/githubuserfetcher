import { useState } from "react";
import { GithubUser } from "./components/GitHubUserFetcher.jsx";
import "./App.css";


export default function App(){
const [username,setUsername]=useState('');
const [submittedUser,setSubmittedUSer]=useState("");

const handleSubmit=(e)=> {

  e.preventDefault();
  setSubmittedUSer(username)
  
}
return(

  <div className="app">

    <h1>GitHub User  Fetcher</h1>

    <form onSubmit={handleSubmit}>

      <input type="text" placeholder="Type Username" value={username}
      
      
      onChange={(e)=>setUsername(e.target.value)}/>

      <button type="submit">Fetch</button>







    </form>


{submittedUser && <GithubUser username={submittedUser}/>}




  </div>





)




}