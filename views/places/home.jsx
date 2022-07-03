const React = require('react')
const Def = require('../default')

function home(){
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <a href='/places'>
                    <div>
                        <img src="/images/parrot.jpg" alt="Parrot"/>
                        <div> <a href="AUTHOR_LINK">Mikhail Vasilyev</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
                        </div>
                    </div>
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home