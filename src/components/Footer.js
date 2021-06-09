import React from 'react'
import Img1 from './img/001.jpg'
import Img2 from './img/002.jpg'
import Img3 from './img/003.jpg'
import Img4 from './img/004.jpg'
import Img5 from './img/005.jpg'
import Img6 from './img/006.jpg'
const Footer = () => {
    return (
        <div>
<div className="footerWrap">
	<div className="footerInner">
		<div className="container">
			<ul className="f-content">
				<li>
					<h2>happy hours</h2>
					<p>If you are near our shop, you are in luck. You can have that cookie WARMED UP! Oh, happy day. Pick your happiness!</p>
					<i>3:00 pm - 5:00 pm daily</i>
					<div className="socialIcons">
						<a href="" className="fb"></a>
						<a href="" className="tw"></a>
						<a href="" className="ig"></a>
						<a href="" className="ut"></a>
					</div>
				</li>
				<li>
					<h2>our gallery</h2>
					
					<ul className="f-gallery">
						<li><a href=""><img src={Img1} /></a></li>
						<li><a href=""><img src={Img2} /></a></li>
						<li><a href=""><img src={Img3} /></a></li>
						<li><a href=""><img src={Img4} /></a></li>
						<li><a href=""><img src={Img5} /></a></li>
						<li><a href=""><img src={Img6} /></a></li>
					</ul>
				</li>
				<li>
					<h2>opening hours</h2>
					<div className="timingbox">
						<ul className="days">
						<li>Monday</li>
						<li>Tuesday</li>
						<li>Wednesday</li>
						<li>Thrusday</li>
						<li>Friday</li>
						<li>Saturday</li>
						<li>Sunday</li>
						
					</ul>
					<ul className="timing">
						<li>8:00 - 16:00</li>
						<li>8:00 - 16:00</li>
						<li>8:00 - 16:00</li>
						<li>8:00 - 16:00</li>
						<li>8:00 - 16:00</li>
						<li>10:00 - 16:00</li>
						<li>closed</li>
						
					</ul>
					</div>
					
				</li>
				<li>
					<h2>contact us</h2>
					<p><i></i> 0 800 12345 6780</p>
					<p> 0 800 12345 6780</p>
					<p><i></i> 30 Hampton Road Southampton, NY 11968</p>
					<p><i></i> info@mywebsite.com</p>
					<p><i></i> www.myproject.com</p>
				</li>
			</ul>
			<div className="copyrights"><p>Copyright © 2015-2021 Bakery WordPress Theme by <i>A Wajid. and Thanx to Miss Faiza</i></p></div>
		</div>

	</div>

</div>

        </div>
    )
}
export default Footer