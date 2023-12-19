import { useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import Axios from 'axios'
function App() {
  const [recipe,setRecipe]=useState([]);
  const [query,setquery]=useState("");
  const [healthLabels,sethealthLabels]=useState("vegetarian");
  const YOUR_APP_KEY="0702f172524afb37dd3e91cf6b63e559";
  const YOUR_APP_ID="8cd80746";
  const url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;
const getRecipeInfo=async()=>{
var result =await Axios.get(url);
setRecipe(result.data.hits);
console.log(result.data.hits);
}
function submithandler(e){
  e.preventDefault();
  getRecipeInfo();
}
  return (
    <div className='app'>
    <h1 > <u>Food Recepie</u>🥗</h1>

      <form className='app__searchForm' onSubmit={submithandler}>
<input className='app__input' placeholder='text' type='search' value={query} onChange={(e)=>setquery(e.target.value)} ></input>
<select className='app_healthLabels'>

<option value='vegan' onClick={()=>sethealthLabels("vegan")}>vegan</option>
<option value='vegetarian' onClick={()=>sethealthLabels("vegetarian")}>vegetarian</option>
<option value="low-Sugar" onClick={()=>sethealthLabels("low-Sugar")}>low-Sugar</option>
<option value="dairy-free" onClick={()=>sethealthLabels("dairy-free")}>dairy-free</option>
<option value="immuno-supportive" onClick={()=>sethealthLabels("immuno-supportive")}>immuno-supportive</option>
</select>
<input type="submit" value="Get Recepie" className='app_submit'></input>
      </form>
      <div  className="app__recipes">
      {
        recipe.map((recipe)=>{
          return <Recipe recipe={recipe}></Recipe>
          
        })
      }
      </div>
    </div>



  
  );
}

export default App;
