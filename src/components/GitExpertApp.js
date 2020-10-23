import React,{useState} from 'react';

import {AddCategory} from './AddCategory';
import {GifGrid} from './GifGrid';

export const GitExpertApp = () => {

    const [categories,setCategories] = useState(['One Punch']);

    /*
    const handleAdd = () => {
        //setCategories([...categories,'HunterxHunter']);
        setCategories(cats => [...categories,'HunterxHunter']);
    }*/

    return (
        <>
          <h2> GifExpertApp </h2>
          <AddCategory setCategories={setCategories}/>
          <hr />


          <ol>
              {categories.map(category => 
                  <GifGrid 
                    key={category}
                    category={category}/>
              )}
          </ol>
        </>
    )
}
