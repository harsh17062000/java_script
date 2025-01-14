import React from 'react'
import './Home.css'
function Home() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active" id='image-box'>
                        <img src="https://plus.unsplash.com/premium_photo-1661962665010-bdd77ee61670?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Metro</h2>
                                <p>Fasted root for travel within a City</p>
                            </div>
                    </div>
                    <div className="carousel-item" id='image-box'>
                        <img src="https://plus.unsplash.com/premium_photo-1674129546223-d477baf52c5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Comfortable Seats</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, provident.</p>
                            </div>
                    </div>
                    <div className="carousel-item" id='image-box'>
                        <img src="https://plus.unsplash.com/premium_photo-1661876638101-e83e45eaeacc?q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Metro Stations</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ut.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* -------------about------------------------------------------------------------------- */}

            <div className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1495562091148-2f4efe7301df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Metro"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold mb-4">About Metro</h1>
            <p className="lead">
              At Metro, we strive to make your journeys effortless. With state-of-the-art
              technology and a focus on customer convenience, we connect you to your
              destinations quickly, safely, and efficiently.
            </p>
            <p>
              Whether you're commuting to work, exploring the city, or visiting loved
              ones, Metro is here to ensure your travels are smooth and enjoyable.
            </p>
            <a href="/contact" className="btn btn-primary mt-3">
              Know more
            </a>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Home