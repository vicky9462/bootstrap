import React from 'react'
import NavBar from './NavBar'

function About() {
    return (
        <div>
            <NavBar/>
            <div className='container my-4'>
            <div className="row featurette d-flex justify-content-center align-items-center">
      <div className="col-md-7">
        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5">
      <img className='img-fluid' src="https://source.unsplash.com/500x500/?code,laptop" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
     
      </div>
    </div>
    <div className="row featurette d-flex justify-content-center align-items-center">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5 order-md-1">
      <img className='img-fluid' src="https://source.unsplash.com/500x500/?code,html" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
       
      </div>
    </div>
    <div className="row featurette d-flex justify-content-center align-items-center">
      <div className="col-md-7">
        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5 order-md-1">
      <img  className='img-fluid' src="https://source.unsplash.com/500x500/?code,iphone" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
     
      </div>
    </div>
    </div>
    <footer className="container">
    <p className="float-end"><a href="#">Back to top</a></p>
    <p>© 2017–2021 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
  </footer>
        </div>
    )
}


export default About
