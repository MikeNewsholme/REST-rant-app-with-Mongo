const React = require('react')
const Def = require('../default')

function error404(){
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND! SADGE</h1>
                <p>Woopsie, sorry we can not find this page!</p>
            </main>
        </Def>
    )

}

module.exports = error404