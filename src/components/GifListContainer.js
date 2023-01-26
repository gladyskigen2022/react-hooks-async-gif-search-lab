import React, { useEffect, useState } from "react";
import GifSearch from "./GifSearch.js"
import GifList from "./GifList.js"

function GifListContainer() {

    const [search, setSearch] = useState([])
    const [showGif, setShowGif] = useState([])

    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        
        
        .then((response) => response.json())
        .then(({data}) => {
            const firstThree = data.map((item) => ({ url: item.images.original.url }))
            setShowGif(firstThree)
        })
    }, [search])


    return (
        <>
            <GifSearch search={search} setSearch={setSearch} />
            <GifList showGif={showGif} />
        </>
    )
}

export default GifListContainer;