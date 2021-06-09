import React from 'react'
import Product from './img/product.jpg'
import Product2 from './img/product002.jpg'
import Product3 from './img/product003.jpg'
import Product4 from './img/product004.jpg'
import Product5 from './img/product005.jpg'
import Product6 from './img/product006.jpg'
import Product7 from './img/product007.jpg'
import Product8 from './img/product008.jpg'


const Content = () => {
    return (
        <div>
<div className="productsWrap">
	<div className="product-content">
			<div className="container">
				<div className="p-contInner">
					<h2>OUR LATEST BAKERY PRODUCTS</h2>
					<i></i>
					<p>Check some of our best products and feel the great passion for food</p>
				</div>
			</div>
		</div>
		<div className="products">
			<div className="container">
				<div className="productsInner">
					<ul>
						<li><img src={Product} alt="Backery"/></li>
						<li><img src={Product2} alt="Backery" /></li>
						<li><img src={Product3} alt="Backery" /></li>
						<li><img src={Product4} alt="Backery" /></li>
						<li><img src={Product5} alt="Backery" /></li>
						<li><img src={Product6} alt="Backery" /> </li>
						<li><img src={Product7} alt="Backery" /></li>
						<li><img src={Product8} alt="Backery" /></li>
					</ul>
					<a href="" className="prodcuts-btn th-btn xl-btn">See All Products</a>
				</div>
			</div>
		</div>
	</div>

        </div>
        )
    }
    
 export default Content