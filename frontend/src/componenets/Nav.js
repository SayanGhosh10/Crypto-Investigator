import React from 'react'

function Nav() {
    const textStyle = {
        color: "white",
        fontSize: "1.5vw"
    }
    return (
        <div className='nav justify-content-end'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={textStyle}>Crypto Investigator</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Nav
