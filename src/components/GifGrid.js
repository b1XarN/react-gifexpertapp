import React from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data:images,loading} = useFetchGifs(category);


    // useEffect(()=>{
    //     getGifs( category )
    //         .then(imgs=> setImages(imgs))
    // }, [ category ]);



    // getGifs();

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading</p>}

            <div className="card-grid">
                {
                    images.map( (img)=>{
                        return(
                            <GifGridItem 
                                key={img.id}
                                { ...img }
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
