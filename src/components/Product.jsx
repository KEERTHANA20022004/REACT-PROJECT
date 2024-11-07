import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Product = () => {
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
                                    <Link className="nav-link text-uppercase" to="/">Home</Link> {/* Updated to Link */}
                                </li>
                                <li className="nav-item px-lg-4">
                                    <Link className="nav-link text-uppercase" to="/aboutbusiness">About</Link> {/* Updated to Link */}
                                </li>
                                <li className="nav-item px-lg-4">
                                    <Link className="nav-link text-uppercase" to="/product">Products</Link> {/* Updated to Link */}
                                </li>
                                <li className="nav-item px-lg-4">
                                    <Link className="nav-link text-uppercase" to="/store">Store</Link> {/* Updated to Link */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Coffee & Teas Section */}
                <section className="page-section">
                    <div className="container">
                        <div className="product-item">
                            <div className="product-item-title d-flex">
                                <div className="bg-faded p-5 d-flex ms-auto rounded">
                                    <h2 className="section-heading mb-0">
                                        <span className="section-heading-upper">Blended to Perfection</span>
                                        <span className="section-heading-lower">Coffees & Teas</span>
                                    </h2>
                                </div>
                            </div>
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="/assets/img/products-01.jpg" alt="Coffees & Teas" />
                            <div className="product-item-description d-flex me-auto">
                                <div className="bg-faded p-5 rounded">
                                    <p className="mb-0">We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of specialty sourced black coffee, you will be coming back for more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bakery & Kitchen Section */}
                <section className="page-section">
                    <div className="container">
                        <div className="product-item">
                            <div className="product-item-title d-flex">
                                <div className="bg-faded p-5 d-flex me-auto rounded">
                                    <h2 className="section-heading mb-0">
                                        <span className="section-heading-upper">Delicious Treats, Good Eats</span>
                                        <span className="section-heading-lower">Bakery & Kitchen</span>
                                    </h2>
                                </div>
                            </div>
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="/assets/img/products-02.jpg" alt="Bakery & Kitchen" />
                            <div className="product-item-description d-flex ms-auto">
                                <div className="bg-faded p-5 rounded">
                                    <p className="mb-0">Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or lunchtime. We source our ingredients from local, organic farms whenever possible, alongside premium vendors for specialty goods.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bulk Speciality Blends Section */}
                <section className="page-section">
                    <div className="container">
                        <div className="product-item">
                            <div className="product-item-title d-flex">
                                <div className="bg-faded p-5 d-flex ms-auto rounded">
                                    <h2 className="section-heading mb-0">
                                        <span className="section-heading-upper">From Around the World</span>
                                        <span className="section-heading-lower">Bulk Speciality Blends</span>
                                    </h2>
                                </div>
                            </div>
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="/assets/img/products-03.jpg" alt="Bulk Speciality Blends" />
                            <div className="product-item-description d-flex me-auto">
                                <div className="bg-faded p-5 rounded">
                                    <p className="mb-0">Travelling the world for the very best quality coffee is something we take pride in. When you visit us, you'll always find new blends from around the world, mainly from regions in Central and South America. We sell our blends in small to large bulk quantities. Please visit us in person for more details.</p>
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

export default Product;
