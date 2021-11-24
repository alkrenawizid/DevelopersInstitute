import React from 'react'

const Jumbotron = () => {
    const props = {
        title: "Welcome to react",
        description: "React is the most popular rendering library in the world",
        buttonLabel:"Go to the official website",
        buttonURL:"https://reactjs.org/"
    }
    return (
        <div>
            <div className="p-5 bg-light">
                <h1 className="mb-3">{props.title}</h1>
                <h4 className="mb-3">{props.description}</h4>
                <a className="btn btn-primary" href="https://reactjs.org/" role="button">{props.buttonLabel}</a>
            </div>
        </div>
    )
}

export default Jumbotron
