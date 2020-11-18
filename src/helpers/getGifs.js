


export const getGifs = async(category) =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=QIZbxiUbStXe9siyFwCcGPSJVwx5qhVx`;
        const respuesta =   await fetch(url);
        const {data} = await respuesta.json();

        const gifs = data.map( arr =>{
            return{
                id: arr.id,
                title: arr.title,
                url: arr.images.downsized_medium.url
            }
        })

        // console.log(gifs);
        // setImages(gifs);

        return gifs;
    }