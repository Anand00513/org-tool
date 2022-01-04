

import React from 'react';

import { useState, useEffect } from 'react';

function SearchBar () {

    
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  

 
  useEffect(() => {
    fetch("http://localhost:4000/employees",
    {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
    )
      .then(res => res.json())
      .then(
        (result) => {
         
          setItems(result);
          
        },
     
       
      )
  }, [])
       
function handlerSearch(e){

}

return(
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="filter" 
            onChange={event => setFilter(event.target.value)}
        />
        <button type="submit">Search</button>

        <div className="title">
        <div>
       
                {items.map((data)=>{ //It will read the JSON from fetch API
                    
                        return (
                         <div key={data.id}>  
                        <ul >
                         
                        {data.name.includes(filter) ? data.name +"("+data.title+")" :''}
                        {data.subordinates.map((data1)=>{ //It will read the inner JSON array
                           
                           return(
                           <div key={data1.id}>
                             <ul >
                               {data1.name.includes(filter) ? data1.name +"("+data1.title+")" :''}
                               {data1.subordinates.map((data2)=>{
                            return(
                           <div key={data2.id}>
                             <ul >
                             {data2.name.includes(filter) ? data2.name +"("+data2.title+")" :''}
                               {data2.subordinates.map((data3)=>{
                            return(
                           <div key={data3.id}>
                             <ul >
                             {data3.name.includes(filter) ? data3.name +"("+data3.title+")" :''}
                             </ul>
                             </div>
                            );
                        })}
                             </ul>
                             </div>
                            );
                        })}
                             </ul>
                             </div>
                            
                             
                            );
                        })}
                        
                        </ul>
                        
                        </div>
                       
                           
                        );
                })} 
                </div>
            </div>
    </form>
)


};
export default SearchBar;