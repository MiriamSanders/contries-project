import React from 'react'

function PixaItem({data}) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Pixabay Image</h2>
      <div className="row">
        {console.log(data)
        }
        {data.map((item) => (
          <div key={item.id} className="col-md-4">
            <div className="card">
              <img
                src={item.webformatURL}
                className="card-img-top"
                alt={item.tags}
              />
              <div className="card-body">
                <h5 className="card-title">Views: {item.views.toLocaleString()}</h5>
                <p className="card-text">
                  <strong>Tags:</strong> {item.tags}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  )
}

export default PixaItem
