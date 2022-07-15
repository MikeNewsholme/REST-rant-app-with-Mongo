const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = (
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )
  if (data.place.comments.length){
    comments = data.place.comments.map(c => {
      return (
        <div className='border'>
          <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave'}
          </h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
      <Def>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img className="img-fluid" src={data.place.pic} alt={data.place.name} />
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
            </div>
            <div className="col-sm-6 show-box">
              <h1>{data.place.name}</h1>
              <div>
                <h2>Rating</h2>
                
              </div>
              <div>
                <h2>Desciption</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
              </div>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
              </a>
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
            </div>
            <hr />
            <div className="row">
              <div className="row comment-box">
                <h2>
                  <br />
                  Comments
                </h2>
                {comments}
              </div>
              <hr />
              <div className="rant-post-box">
                <h1>Got Your Own Rant or Rave?</h1>
                <form
                  className="row g-3"
                  method="POST"
                  action={`/places/${data.id}/comment`}
                >
                  <div className="col-12">
                    <label htmlFor="content" className="form-label">
                      Your Comment
                    </label>
                    <textarea
                      className="form-control"
                       type="text"
                      id="content"
                      name="content"
                    ></textarea>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="author" className="form-label">
                      Your Name
                    </label>
                    <input className="form-control" id="author" name="author" />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="stars" className="form-label">
                      Stars
                    </label>
                    <input
                      className="form-range"
                      type="range"
                      id="stars"
                      name="stars"
                      min="1"
                      max="5"
                      step="0.5"
                    />
                  </div>
                  <div className="col-md-2">
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="rant"
                        id="rant-checkbox"
                      >
                        Rant?
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rant"
                        name="rant"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Add Comment"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </Def>
    );
}

module.exports = show