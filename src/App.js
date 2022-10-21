import React, { useState } from 'react';
import './App.css';
import Articles from './components/Articles';
const title = "Sorting Articles";



function App({articles}) {
  const [filter, setFilter] = useState({
    upvote: false,
    recent: false
});

  const upvote = () =>{
    setFilter(
        {upvote:true,
        recent: false}
    )
    }
    const recent = () =>{
        setFilter(
            {
                upvote:false,
                recent:true
            }
        )
    }
  return (
    <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={upvote}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick = {recent}>Most Recent</button>
            </div>
            <Articles filter={filter} articles={articles}/>
    </div>
   
  );
}

export default App;
