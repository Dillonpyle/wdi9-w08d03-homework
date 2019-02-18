import React from 'react'

const Gif = ({ data }) => {
    let gifList = data.map((gif, i) => {
        return (
            <div key={i}>
                <img src={gif.images.downsized.url} />
            </div >
        )
    })

    return (

        <React.Fragment>
            {gifList}
        </React.Fragment>

    )
}

export default Gif