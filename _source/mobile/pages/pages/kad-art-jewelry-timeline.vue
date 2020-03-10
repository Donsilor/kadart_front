<template>
  <div class="time-line">
    <div class="tit-box">
      <div class="time-line-tit">OUR DEVELOPING TIMELINE</div>
    </div>

		<div class="time-box clf">
			<div class="line"></div>

      <div class="year-list">
        <div class="year-time">2015</div>
        <div class="year-info">
          <div class="year-tit">BDD.Co & KADART</div>
          <div class="year-text">Establish Date <br> Expertise in diamond setting and wholesale </div>
        </div>
      </div>

      <div class="year-list">
        <div class="year-time">2018</div>
        <div class="year-info">
          <div class="year-tit">Registered and established Hengdeli.Co </div>
        </div>
      </div>

      <div class="year-list">
        <div class="year-time">2019</div>
        <div class="year-info">
          <div class="year-tit">Operation Center moved to Shenzhen</div>
          <div class="year-text">
            <p>Expanded business in Oversea Wholesale,Domestic E-commerce, International E-commerce and High-end Jewelry.</p>
            <p>KADART faces to the global market as in managing two segments of Oversea Wholesale and International E-commerce. </p>
          </div>
        </div>
      </div>

      <div class="clf">
        <div class="mouth-list fr border">
          <div class="mouth-num">06-Jun</div>
          <div class="mouth-text">Participated in JCK Las Vegas Trade Show</div>
        </div>
      </div>

      <div class="clf">
        <div class="mouth-list fr">
          <div class="mouth-num">09-Sep</div>
          <div class="mouth-text">Participated in Vicenzaoro Jewelry Show；
          <br> HK International Jewellery Show </div>
        </div>
      </div>

      <div class="clf">
        <div class="mouth-list fr white">
          <div class="mouth-num">11-Nov</div>
          <div class="mouth-text">Foshan branch Office officially opened,focuses on High-end Jewelry.</div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
	export default{
		head() {
		  return {
		    title: 'Kad Art Jewelry Timeline',
		    meta: [{
		        hid: 'description',
		        name: 'description',
		        content: 'Kad Art Jewelry\'s history and milestone, company establishment, fast growing and expanding to be the best high-quality jewelry company. Kad Art participated in 3 famous jewelry show with the trendy fine jewelry to customers with quality and value.'
		      },
		      {
		        hid: 'keywords',
		        name: 'keywords',
		        content: 'Kad Art history, kad artcompany timeline, milestones of kad art'
		      }
		    ]
		  }
		},

	}
</script>

<style>
	.time-line{
		margin: 2rem 0;
	}
  .tit-box{
    text-align: center;
  }
	.time-line-tit{
		max-width: 80%;
		height: 4rem;
		background-color: #480f32;
		line-height: 4rem;
		font-size: 1.4rem;
		color: #fff;
    padding: 0 5%;
    display: inline-block;
	}

	.time-box{
		width: 90%;
		position: relative;
		margin: 2rem auto;
    border-left: 2px solid #480f32;
	}

	.time-box .line{
		position: absolute;
		width: 6px;
		height: 100%;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		background-color: #480f32;
		z-index: -2;
    display: none;
	}

	.year-list{
		width: 100%;
		display: flex;
		align-items: center;
		border: 1px solid #480f32;
		padding: 0.5rem 0.5rem;
		box-sizing: border-box;
		background-color: #fff;
	}

	.year-list:not(:first-child){
		border-bottom: none;
	}

	.year-time{
		width: 4rem;
		height: 4rem;
		background-color: #480f32;
		border-radius: 50%;
		font-family: DFPYaSong;
		line-height: 4rem;
		text-align: center;
		font-size: 1.5rem;
		color: #fff;
		flex-shrink: 0;
	}
	.year-info{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		margin-left: 5%;
	}
	.year-tit{
		font-size: 1.4rem;
		color: #333;
		margin-bottom: 0.5rem;
	}
	.year-text{
		font-size: 1.2rem;
		line-height: 1.4rem;
		color: #333333;
		opacity: 0.58;
	}
	.year-text p:first-child{
		margin-bottom: 12px;
	}

	.mouth-list{
		width: 100%;
		background-color: #480f32;
		padding: 1rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.mouth-num{
    font-family: DFPYaSong;
		font-size: 1.5rem;
		color: #fff;
		text-decoration: underline;
		margin-bottom: 0.5rem;
	}
	.mouth-text{
    font-family: STKAITI;
		font-size: 1.4rem;
		color: #fff;
	}
	.mouth-list.white{
		background-color: #fff;
		color: #000;
		border: 1px solid #480f32;
	}

	.mouth-list.white .mouth-num{
		font-size: 1.5rem;
		color: #000;
	}
	.mouth-list.white .mouth-text{
			font-size: 1.4rem;
			color: #333;
			opacity: 0.58;
	}

	.mouth-list.border{
		border-bottom: 1px solid #fff;
	}
</style>
