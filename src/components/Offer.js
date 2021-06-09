import React from 'react'
import Muffin from './img/muffin3.jpg'
import Bread from './img/bread3.jpg'
import Danish from './img/danish1.jpg'
 const Offer = () => {
     return (
         <div>
	<div class="productsWrap weekOffer-Cont">
		<div class="product-content w-f-inner">
			<div class="container">
				<div class="p-contInner w-offer-heading">
					<h2>This week offer</h2>
					<i></i>
					<p> We offer something different to local and foreign patrons <br />
and ensure you enjoy a memorable food experience every time.</p>
				</div>
			</div>
		</div>
		<div class="offerContent-section">
			<div class="container">
				<div class="offerLeft-section">
					<ul>
						<li> <a href=""><img src={Muffin} /></a> </li>
						<li> <a href=""><img src={Bread} /></a> </li>
						<li> <a href=""><img src={Danish} /></a> </li>
					</ul>
				</div>
				<div class="offerRight-section">
					<div class="offerRightInner">
						<ul>
							<li class="rightInner-leftContent">
								<h2>MAPLE OAT MUFFIN</h2>
								<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
								<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
								
								<span><p>$ 5.50</p> <a href="">Order now</a></span>
								
							</li>
							<li class="rightInner-rightContent">
								<figure><img src={Muffin} /></figure>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
         </div>
     )
 }
 export default Offer