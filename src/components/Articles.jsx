import React, { useEffect, useState } from 'react';

const Articles = ({articles,filter}) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        if(filter.upvote){
       const newData = articles.sort((a,b)=>(b.upvotes - a.upvotes))
       setData([...newData])
        }
        else if(filter.recent){
            const newData = articles.sort((a,b)=>(new Date(b.date) - new Date(a.date)))
            setData([...newData])
             }
      else{
        const newData = articles.sort((a,b)=>(b.upvotes - a.upvotes))
        setData([...newData])
      }
    },[filter.upvote, filter.recent, articles])
  return (
    <div className="card w-50 mx-auto">
    <table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
            {data && data.map((article,index) =>(
<tr data-testid="article" key={index}>
<td data-testid="article-title">{article.title}</td>
<td data-testid="article-upvotes">{article.upvotes}</td>
<td data-testid="article-date">{article.date}</td>
</tr>
            ))}
   
        </tbody>
    </table>
</div>
  )
}

export default Articles
