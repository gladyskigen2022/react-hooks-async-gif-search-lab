import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Image } from 'semantic-ui-react'

function GifList({showGif}) {

    return (
        <ul>
            {showGif.map((gif) => {
                return (
                    <Card style={{marginTop: "15px"}}>
                        <Image src={gif.url} alt="gif" wrapped ui={false} />
                    </Card>
                )
            })}
        </ul>
    )
}

export default GifList;