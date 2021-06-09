import React from 'react'
import Bread from './img/bread.png'
import Cake from './img/cake.png'
import Cookies from './img/cookies.png'
import Muffins from './img/muffins.png'

const Services = () => {
    return (
<div>

    <div className="productsWrap services">
		<div className="product-content service-content">
			<div className="container">
				<div className="p-contInner s-contInner">
					<h2>Main Services we provide</h2>
					<i></i>
					<p>Our services are the best in town, we provide great quality baked products</p>
				</div>
			</div>
		</div>
		<div className="products service-product">
			<div className="container">
				<div className="productsInner s-pro-inner">
					<ul>
						<li>
							<img src={Bread} alt="" />
							<a href="#" className="heading-link">lots of bread</a>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<a href="#">Read more</a>

						</li>
						<li> <img src={Cake} alt="" />
							<a href="#" className="heading-link">cakes</a>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<a href="">Read more</a>
						</li>
						<li><img src={Cookies} alt="" />
								<a href="" className="heading-link">cookies</a>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								<a href="">Read more</a>
						</li>
						<li><img src={Muffins} alt="" />
						<a href="" className="heading-link">muffins</a>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<a href="">Read more</a>
						</li>
						
						
					</ul>
					
				</div>
			</div>
		</div>
	</div>
</div>

    )
}
export default Services