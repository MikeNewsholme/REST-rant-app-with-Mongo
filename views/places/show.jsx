const React = require('react')
const Def = require('../default')

function show(data) {
    return(
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <div> <h2>No comments yet!</h2></div>
                <div> <h2> No ratings yet!</h2></div>
            </main>
        </Def>
    )
}

module.exports = show