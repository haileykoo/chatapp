import React from 'react';
// import bg from 'img/bg.jpeg';

const People = () => {
	return (
	<>

          <div class="search">
            <input type="text" placeholder="search" />
            <i class="fa fa-search"></i>
          </div>

          <ul class="list">
            <h2>Family</h2>

            <li class="clearfix list">
				<img src="image/mom.JPG" alt="Mom" />
				<div class="about">
				<div class="name">Kwon Soon Ae</div>
				<div class="status">
					<i class="fa fa-circle online"></i> online
				</div>
				</div>
            </li>
            
            <li class="clearfix list">
				<img src="image/eun.JPG" alt="Ha Eun" />
				<div class="about">
				<div class="name">Koo Haeun</div>
				<div class="status">
					<i class="fa fa-circle offline"></i> left 7 mins ago
				</div>
				</div>
            </li>
            
            <li class="clearfix list">
				<img src="image/min.JPG" alt="Mini" />
				<div class="about">
				<div class="name">Koo Hamin</div>
				<div class="status">
					<i class="fa fa-circle online"></i> online
				</div>
				</div>
			</li>

            <li class="clearfix list">
				<img src="image/dad.jpg" alt="Dad" />
				<div class="about">
					<div class="name">Koo Hone Seo</div>
					<div class="status">
					<i class="fa fa-circle offline"></i> left 30 mins ago
					</div>
				</div>
			</li>
			</ul>
		{/* <img src={bg} alt="Background" /> */}
	</>)
}

export default People;
