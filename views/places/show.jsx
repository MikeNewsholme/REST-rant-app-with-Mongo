const React = require('react')
const Def = require('../default')

function show(data) {
    return (
      <Def>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img src={data.place.name} alt={data.place.name} />
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
              <h2>
                <img
                  className="showImage"
                  src={data.place.pic}
                  alt="Show Food"
                />
              </h2>
            </div>
          </div>
          <h2>Rating</h2>
          <div>
            <p>Not Rated</p>
          </div>
          <h2>Description</h2>
          <div>
           <h3> 
            {data.place.showEstablished()}
           </h3>
           <h4>
            Serving {data.place.cuisines}
           </h4>
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
    );
}

module.exports = show