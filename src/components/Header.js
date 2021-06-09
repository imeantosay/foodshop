import React from 'react'
import Logo from './img/logo.png'

const Header = () => {
    return (
        <div>
          	<div className="mainHeader">
		<div className="container"> 
		<div className="menuBox f-display">
			<ul className="menu leftMenu f-display">
				<li><a href="#">Home</a></li>
				<li>
					<a href="#">Pages</a>
					
				</li>
				<li><a href="#">Products</a></li>
			</ul>
			<div className="logoBox"><a href="#"><img src={Logo} alt="Backery"/></a></div>
			<ul className="menu rightMenu f-display">
				<li><a href="#">Elements</a></li>
				<li><a href="#">Blog</a></li>
				<li><a href="#">Buy Now</a></li>
			</ul>
		</div> 
		</div>
	</div> 
    <div className="sliderWrap">
		<div className="sliderInner">
			<div className="container">
				<div className="sliderContent">
					<div className="h-tag">Healthy</div>
				<h1>artisian <span>breads</span></h1>
				<p>Authentic Recipes to enjoy!</p>
				<a href="" className="th-btn l-btn">Read more</a>
</div>
			</div> 
		</div>
	</div>
        </div>
    )
}
export default Header