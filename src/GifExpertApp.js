import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
// import PropTypes from 'prop-types'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     // setCategories([...categories,'Fairy Tail']);
    //     setCategories( cats => [...cats, 'Fairy Tail']);

    // }


    return (
        <>
          <h2>GifExpertApp</h2>  
          <AddCategory setCategories={setCategories}/>
          <hr></hr>

          <ol>
              {
                  categories.map((category)=>{
                  return <GifGrid
                            key={category}
                            category={category}
                         />
                  })
              }
          </ol>
        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp
