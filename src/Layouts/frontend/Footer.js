import React from 'react'
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
   <>
   <footer className="site-footer style-1">
		{/* <!-- Footer Category --> */}
		<div className="footer-category">
			<div className="container">
				<div className="category-toggle">
					<Link to="javascript:void(0);" className="toggle-btn">Books categories</Link>
					<div className="toggle-items row">
						<div className="footer-col-book">
							<ul>
								<li><Link to="books-grid-view.html">Architecture</Link></li>
								<li><Link to="books-grid-view.html">Art</Link></li>
								<li><Link to="books-grid-view.html">Action</Link></li>
								<li><Link to="books-grid-view.html">Biography</Link></li>
								<li><Link to="books-grid-view.html">Body, Mind & Spirit</Link></li>
								<li><Link to="books-grid-view.html">Business & Economics</Link></li>
								<li><Link to="books-grid-view.html">Children Fiction</Link></li>
								<li><Link to="books-grid-view.html">Children Non-Fiction</Link></li>
								<li><Link to="books-grid-view.html">Comics & Graphics</Link></li>
								<li><Link to="books-grid-view.html">Cooking</Link></li>
								<li><Link to="books-grid-view.html">Crafts & Hobbies</Link></li>
								<li><Link to="books-grid-view.html">Design</Link></li>
								<li><Link to="books-grid-view.html">Drama</Link></li>
								<li><Link to="books-grid-view.html">Education</Link></li>
								<li><Link to="books-grid-view.html">Family & Relationships</Link></li>
								<li><Link to="books-grid-view.html">Fiction</Link></li>
								<li><Link to="books-grid-view.html">Foreign Language</Link></li>
								<li><Link to="books-grid-view.html">Games</Link></li>
								<li><Link to="books-grid-view.html">Gardening</Link></li>
								<li><Link to="books-grid-view.html">Health & Fitness</Link></li>
								<li><Link to="books-grid-view.html">History</Link></li>
								<li><Link to="books-grid-view.html">House & Home</Link></li>
								<li><Link to="books-grid-view.html">Humor</Link></li>
								<li><Link to="books-grid-view.html">Literary Collections</Link></li>
								<li><Link to="books-grid-view.html">Mathematics</Link></li>
								<li><Link to="books-grid-view.html">Medical</Link></li>
								<li><Link to="books-grid-view.html">Nature</Link></li>
								<li><Link to="books-grid-view.html">Performing Arts</Link></li>
								<li><Link to="books-grid-view.html">Pets</Link></li>
								<li><Link to="books-grid-view.html">Show others</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Footer Category End --> */}
		
		{/* <!-- Footer Top --> */}
		<div className="footer-top">
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
						<div className="widget widget_about">
							<div className="footer-logo logo-white">
								<Link to="index.html"><img src="images/logo.png" alt=""/></Link> 
							</div>
							<p className="text">Bookland is a Book Store Ecommerce Website Template by DexignZone lorem ipsum dolor sit</p>
							<div className="dz-social-icon style-1">
								<ul>
									<li><Link to="https://www.facebook.com/dexignzone" target="_blank" ><i className="fa-brands fa-facebook-f"></i></Link></li>
									<li><Link to="https://www.youtube.com/channel/UCGL8V6uxNNMRrk3oZfVct1g" target="_blank"><i className="fa-brands fa-youtube"></i></Link></li>
									<li><Link to="https://www.linkedin.com/showcase/3686700/admin/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link></li>
									<li><Link to="https://www.instagram.com/website_templates__/" target="_blank"><i className="fa-brands fa-instagram"></i></Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.2s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our Links</h5>
							<ul>
								<li><Link to="about-us.html">About us</Link></li>
								<li><Link to="contact-us.html">Contact us</Link></li>
								<li><Link to="privacy-policy.html">Privacy Policy</Link></li>
								<li><Link to="pricing.html">Pricing Table</Link></li>
								<li><Link to="faq.html">FAQ</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-xl-2 col-lg-3 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.3s">
						<div className="widget widget_services">
							<h5 className="footer-title">Bookland ?</h5>
							<ul>
								<li><Link to="index.html">Bookland</Link></li>
								<li><Link to="services.html">Services</Link></li>
								<li><Link to="books-detail.html">Book Details</Link></li>
								<li><Link to="blog-detail.html">Blog Details</Link></li>
								<li><Link to="books-grid-view.html">Shop</Link></li>
							</ul>   
						</div>
					</div>
					<div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Resources</h5>
							<ul>
								<li><Link to="services.html">Download</Link></li>
								<li><Link to="help-desk.html">Help Center</Link></li>
								<li><Link to="shop-cart.html">Shop Cart</Link></li>
								<li><Link to="shop-login.html">Login</Link></li>
								<li><Link to="about-us.html">Partner</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="0.5s">
						<div className="widget widget_getintuch">
							<h5 className="footer-title">Get in Touch With Us</h5>
							<ul>
								<li>
									<i className="flaticon-placeholder"></i>
									<span>832  Thompson Drive, San Fransisco CA 94107,US</span>
								</li>
								<li>
									<i className="flaticon-phone"></i>
									<span>+123 345123 556<br/>
									+123 345123 556</span>
								</li>
								<li>
									<i className="flaticon-email"></i> 
									<span>support@bookland.id<br/>
									info@bookland.id</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Footer Top End --> */}
		
		{/* <!-- Footer Bottom --> */}
		<div className="footer-bottom">
			<div className="container">
				<div className="row fb-inner">
					<div className="col-lg-6 col-md-12 text-start"> 
						<p className="copyright-text">Bookland Book Store Ecommerce Website - © 2022 All Rights Reserved</p>
					</div>
					<div className="col-lg-6 col-md-12 text-end"> 
						<p>Made with <span className="heart"></span> by <Link to="https://dexignzone.com/">DexignZone</Link></p>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Footer Bottom End --> */}
		
	</footer>
   </>
  )
}
