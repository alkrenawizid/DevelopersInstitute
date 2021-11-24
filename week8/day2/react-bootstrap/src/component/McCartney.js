import React from 'react'

const McCartney = () => {
    const props = {
        title: "McCartney",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
        buttonLabel: "Go to Wikipedia",
        buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
        description: "Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."

    }
    return (
        <div>
            <div className="card m-5" style={{ width: '30rem' }}>
                <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="https://en.wikipedia.org/wiki/Paul_McCartney" className="btn btn-primary">Go to wikipedia</a>
                </div>
            </div>
        </div>
    )
}

export default McCartney
