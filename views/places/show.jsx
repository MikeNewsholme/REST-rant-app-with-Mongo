const React = require('react')
const Def = require('../default')

function show(data) {
    return(
        <Def>
            <main>
                 <h1>{data.place.name}</h1>
                <h2>
                    <img className="showImage" src={data.place.pic} alt="Show Food" />
                </h2>
                <h2>Rating</h2>
                <div>
                    <p>Not Rated</p>
                </div>
                <h2>Description</h2>
                <div>
                    <p></p>
                </div>
                <h2>Comments</h2>
                <div>
                    <p>No Comments Yet</p>
                </div>
                <div>
                    <h3>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>
                        <form method="POST" action={`places/${data.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </h3>
                </div>
            </main>
        </Def>
    )
}

module.exports = show