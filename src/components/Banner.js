import React from 'react'
import Rusk from './img/rusk.png'
const Banner = () => {
    return (
        <div>
	<div className="breadBanner-bg">
		<div className="b-banner-bg-inner">
			<div className="contaier">
				<div className="b-banner-heading">
					<h1>DIFFERENT TYPES OF BREAD PRODUCTS</h1>
					<p>YOU WILL FIND THEM ONLY THE BEST PRODUCTS IN OUR STORES</p>
				</div>
				<div className="ruskImg">
					<img src={Rusk} />
				</div>


			</div>
		</div>
	</div>
        </div>
    )
}

export default Banner