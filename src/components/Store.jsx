import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Store = () => {
    return (
        <>
            <div>
                <header>
                    <h1 className="site-heading text-center text-faded d-none d-lg-block">
                        <span className="site-heading-upper text-primary mb-3">WARM WELCOME</span>
                        <span className="site-heading-lower">Delicious Delights</span>
                    </h1>
                </header>
               
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand text-uppercase fw-bold d-lg-none" href="/">Sweety & Salty</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item px-lg-4">
                                    <Link className="nav-link text-uppercase" to="/">Home</Link>  {/* Updated to Link */}
                                </li>
                                <li className="nav-item px-lg-4">
                                    <Link className="nav-link text-uppercase" to="/aboutbusiness">About</Link>  {/* Updated to Link */}
                                </li>
                                <li className="nav-item px-lg-4">
                                    <Link className="nav-link text-uppercase" to="/product">Products</Link>  {/* Updated to Link */}
                                </li>
                                <li className="nav-item px-lg-4">
                                    <Link className="nav-link text-uppercase" to="/store">Store</Link>  {/* Updated to Link */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Store Information Section */}
                <section className="page-section cta">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <div className="cta-inner bg-faded text-center rounded">
                                    <h2 className="section-heading mb-5">
                                        <span className="section-heading-upper">Come On In</span>
                                        <span className="section-heading-lower">We're Open</span>
                                    </h2>
                                    <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                                        <li className="list-unstyled-item list-hours-item d-flex">
                                            Sunday
                                            <span className="ms-auto">Closed</span>
                                        </li>
                                        <li className="list-unstyled-item list-hours-item d-flex">
                                            Monday
                                            <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                        </li>
                                        <li className="list-unstyled-item list-hours-item d-flex">
                                            Tuesday
                                            <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                        </li>
                                        <li className="list-unstyled-item list-hours-item d-flex">
                                            Wednesday
                                            <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                        </li>
                                        <li className="list-unstyled-item list-hours-item d-flex">
                                            Thursday
                                            <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                        </li>
                                        <li className="list-unstyled-item list-hours-item d-flex">
                                            Friday
                                            <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                        </li>
                                        <li className="list-unstyled-item list-hours-item d-flex">
                                            Saturday
                                            <span className="ms-auto">9:00 AM to 5:00 PM</span>
                                        </li>
                                    </ul>
                                    <p className="address mb-5">
                                        <em>
                                            <strong>1116 Orchard Street</strong>
                                            <br />
                                            Golden Valley, Minnesota
                                        </em>
                                    </p>
                                    <p className="mb-0">
                                        <small><em>Call Anytime</em></small>
                                        <br />
                                        (317) 585-8468
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Our Cafe Section */}
                <section className="page-section about-heading">
                    <div className="container">
                        <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="/assets/img/about.jpg" alt="About Our Cafe" />
                        <div className="about-heading-content">
                            <div className="row">
                                <div className="col-xl-9 col-lg-10 mx-auto">
                                    <div className="bg-faded rounded p-5">
                                        <h2 className="section-heading mb-4">
                                            <span className="section-heading-upper">Strong Coffee, Strong Roots</span>
                                            <span className="section-heading-lower">About Our Cafe</span>
                                        </h2>
                                        <p>Founded in 1987 by the Hernandez brothers, our establishment has been serving up rich coffee sourced from artisan farmers in various regions of South and Central America. We are dedicated to traveling the world, finding the best coffee, and bringing it back to you here in our cafe.</p>
                                        <p className="mb-0">
                                            We guarantee that you will fall in
                                            <em>lust</em>
                                            with our decadent blends the moment you walk inside until you finish your last sip. Join us for your daily routine, an outing with friends, or simply just to enjoy some alone time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer text-faded text-center py-5">
                    <div className="container">
                        <p className="m-0 small">Copyright &copy; Your Website 2023</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Store;
