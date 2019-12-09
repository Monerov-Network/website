/*
Author       : MoneroV
Template Name: MoneroV
Version      : 1.0
*/

(function($)
{
	"use strict";
	
	// Preloader
	jQuery(window).on('load', function() {
		preloader();
	});
	$("nav.vertical-social").midnight();
	var headerHeight = jQuery('.navbar').outerHeight();
	jQuery('.navbar-nav li a').on('click', function(event) {
		jQuery('.navbar-nav li').removeClass('active');
		jQuery(this).parent().addClass('active');
		var $anchor = jQuery(this);
		
		jQuery('html, body').stop().animate({
			scrollTop: jQuery($anchor.attr('href')).offset().top-headerHeight
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});
	
	jQuery(".navbar-nav li a").on("click",function(event){
		jQuery(".navbar-collapse").removeClass('show');
		jQuery('.navbar-toggler').addClass('collapsed');
	});
	
	jQuery('.tilt-img img').tilt({
		maxTilt:6					
	});
	
	// Animation section
	 if(jQuery('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	 //===== Count Down =====//
  if ($.isFunction($.fn.downCount)) {
    $('.countdown').downCount({
      date: '12/13/2019 23:00:00',
      offset: +5
    });
  }

 
	// Back to top 		
	jQuery('.back-top a').on('click', function(event) {
		jQuery('body,html').animate({scrollTop:0},800);
		return false;
	});
	
	jQuery(window).on('scroll', function() {
		
		// Back to top 
		if(jQuery(this).scrollTop()>150){
			jQuery('.back-top').fadeIn();
		}
		else{
			jQuery('.back-top').fadeOut();
		}
	});
	
	// Preload
	function preloader(){
		jQuery(".preloaderimg").fadeOut();
		jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
			jQuery(this).remove();
		});
	}
	
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	//	alert();
				if ($('.wow').hasClass('animated')) {
						$(this).removeClass('animated');
						$(this).removeAttr('style');
						new WOW().init();
			    	}
		});
	
 /* Chart 2 */

    if ($('#myChartTwo').length > 0) {
        var ctxTwo = document.getElementById("myChartTwo").getContext('2d');
        var myChartTwo = new Chart(ctxTwo, {
            type: 'doughnut',
            data: {
                labels: ["Reserved Fund", "To Community", "1:1 Swap to XMV Holders", "Minable Coins"],
                datasets: [{
                    data: [5, 5, 20, 70],
                    backgroundColor: [
                        '#c13cbd',
                        '#4a8df8',
                        '#26d7e5',
                        '#ef7b7e'
                    ],
                    borderColor: [
                        '#02014c',
                        '#02014c',
                        '#56a7f9',
                        '#ef7b7e'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                legend: {
                    display: false,
                }
            }
        });
    }
	
	var XMVrawPrice;

	var url = "https://api.coingecko.com/api/v3/coins/monerov"; // Change this to your URL
/*	
fetch(url)
    .then(function(response) {
          if(response.ok) { // Check if response went through
              response.json().then(function(data) { 
                  var price_BTC = document.getElementById('xmvpricebtc');
				 // XMVrawPrice = data.price;
				 // XMVrawPrice = Number(Math.round(data.price+'e'+2)+'e-'+2);
                  var XMVPrice = '<i class="fa fa-bitcoin"></i> ' + data.market_data.current_price.btc;
                  price_BTC.innerHTML = XMVPrice;
				  
				  var price_USD = document.getElementById('xmvpriceusd');
				  var USDPrice = '<i class="fa fa-dollar"></i> ' + data.market_data.current_price.usd;
                  price_USD.innerHTML = USDPrice;
				  
              });
			   
          } else { // Response wasn't ok. Check dev tools
              console.log("response failed?");
          }
		
		   
    });
	*/ 	
	var mktdata = "";
 
  
	var url2 = "http://www.coincalculators.io/api.aspx?name=monerov&hashrate=40000000"; // Change this to your URL
	
	 


fetch(url, {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*',
	'Content-Type': 'application/json',
  }
}).then(function(response) {
          if(response.ok) { // Check if response went through
              response.json().then(function(data) { 
                  var price_BTC = document.getElementById('xmvpricebtc');
				 // XMVrawPrice = data.price;
				 // XMVrawPrice = Number(Math.round(data.price+'e'+2)+'e-'+2);
                  var XMVPrice = '<i class="fa fa-bitcoin"></i> ' + data.market_data.current_price.btc.toFixed(8);
                  price_BTC.innerHTML = XMVPrice;
				  
				  var price_USD = document.getElementById('xmvpriceusd');
				  var USDPrice = '<i class="fa fa-dollar"></i> ' + data.market_data.current_price.usd.toFixed(3);  
                  price_USD.innerHTML = USDPrice;
				  
				   var Hashrate = document.getElementById('hashrate');
				  var Hashratec =  (data.currentNethash/1048576).toFixed(2) + ' MH/s'; 
               //   Hashrate.innerHTML = Hashratec;
				   
				  var XMVReward = document.getElementById('xmvreward');
				  var XMVrw = (data.block_time_in_minutes*60).toFixed(3);
                  XMVReward.innerHTML = XMVrw;
				  var table_data = document.getElementById('table-details');  
										  
				var dt = '<div class="row"><div class="col-md-6"><h3>Specs</h3><div class="row"><div class="col-sm-6"><div class="boxes">'
				+'<i class="fa fa-bolt"></i><div class="r-bx"><p>Price USD</p><p>'
				+ data.market_data.current_price.usd.toFixed(3) + ' | 24h ('+ data.market_data.price_change_percentage_24h.toFixed(2) +'%)</p></div></div></div><div class="col-sm-6 pl-md-0"><div class="boxes"><i class="fa fa-gift"></i><div class="r-bx">'
				+'<p>Block Reward</p><p>' + data.blockReward + '</p></div></div></div></div><div class="row"><div class="col-sm-6"><div class="boxes"><i class="fa fa-clock-o"></i><div class="r-bx">'
				+'<p>Block Time</p><p>' + data.blockTime + ' Sec</p></div></div></div><div class="col-sm-6 pl-md-0"><div class="boxes"><i class="fa fa-th-large"></i><div class="r-bx">'
				+'<p>Last Block</p><p>'+ data.lastBlock +'</p></div></div></div></div><div class="row"><div class="col-sm-6"><div class="boxes"><i class="fa fa-codepen"></i><div class="r-bx"><p>Algorithm</p><p>'+ data.algorithm +'</p></div></div></div>'
				+'<div class="col-sm-6 pl-md-0"><div class="boxes"><i class="fa fa-cube"></i><div class="r-bx"><p>Current Difficulty</p><p>'+ data.currentDifficulty +'</p></div></div></div></div></div><div class="col-md-6">'
				+'<h3>Exchanges</h3><div id="exclist"><table class="table table-bordered table-condensed"><thead>'
				+'<tr><th>Name</th><th>Tradeogre</th><th>Crex24</th></tr></thead><tbody>'
				+'<tr><td>Pair</td><td>BTC <i class="fa fa-exchange"></i> XMV</td><td>BTC <i class="fa fa-exchange"></i> XMV</td></tr>'
				+'<tr><td>Price</td><td><i class="fa fa-bitcoin"></i> '+ data.exchanges[0].price_in_base.toFixed(8) +'</td><td><i class="fa fa-bitcoin"></i> '+ data.exchanges[1].price_in_base.toFixed(8) +'</td></tr>' 
				+'<tr><td>Volume</td><td><i class="fa fa-bitcoin"></i> '+ data.exchanges[0].volume.toFixed(8)  +'</td><td><i class="fa fa-bitcoin"></i> '+ data.exchanges[1].volume.toFixed(8) +'</td></tr>'
				+'<tr><td>Buy Price</td><td><i class="fa fa-bitcoin"></i> '+ data.exchanges[0].buyPrice.toFixed(8)  +'</td><td><i class="fa fa-bitcoin"></i> '+ data.exchanges[1].buyPrice.toFixed(8) +'</td></tr>'
				+'<tr><td>Sell Price</td><td><i class="fa fa-bitcoin"></i> '+ data.exchanges[0].sellPrice.toFixed(8)  +'</td><td><i class="fa fa-bitcoin"></i> '+ data.exchanges[1].sellPrice.toFixed(8) +'</td></tr>'
				+'<tr><td>Last Update</td><td>'+ new Date(data.lastUpdate).toLocaleDateString("en-US") +'</td><td>'+ new Date(data.lastUpdate).toLocaleDateString("en-US") +'</td></tr>'
				+'</tbody></table></div></div></div>';    
											console.log(dt);
								 			table_data.innerHTML = dt;		    
              });
			   
          } else { // Response wasn't ok. Check dev tools
              console.log("response failed from https://www.coincalculators.io !");
			table_data.innerHTML = "API Failed !!!";	

					var url = "https://api.coingecko.com/api/v3/coins/monerov"; // Change this to your URL
						fetch(url)
							.then(function(response) {
								  if(response.ok) { // Check if response went through
									  response.json().then(function(data) { 
										  var price_BTC = document.getElementById('xmvpricebtc');
										 // XMVrawPrice = data.price;
										 // XMVrawPrice = Number(Math.round(data.price+'e'+2)+'e-'+2);
										  var XMVPrice = '<i class="fa fa-bitcoin"></i> ' + data.market_data.current_price.btc;
										  price_BTC.innerHTML = XMVPrice;
										  
										  var price_USD = document.getElementById('xmvpriceusd');
										  var USDPrice = '<i class="fa fa-dollar"></i> ' + data.market_data.current_price.usd;
										  price_USD.innerHTML = USDPrice;
										   
									  });
									   
								  } else { // Response wasn't ok. Check dev tools
									  console.log("response failed?");
								  }
					 			   
							}); 
			  
			  
          }
		
		   
    });	
	

/*
	var urlusd = "https://www.cryptonator.com/api/ticker/btc-usd"; // Change this to your URL

	fetch(urlusd)
    .then(function(response) {
          if(response.ok) { // Check if response went through
              response.json().then(function(data) { 
                  var price_BTC = document.getElementById('xmvpriceusd');
				  var XMVrawusd = parseFloat((XMVrawPrice / data.ticker.price));
				  console.log(XMVrawPrice);
				  console.log(XMVrawusd);
				  XMVrawusd = parseInt(parseFloat(XMVrawusd).toFixed(2));
				  console.log(XMVrawusd);
                  var BTCPrice = '<i class="fa fa-dollar"></i> ' + XMVrawusd;
                  price_BTC.innerHTML = BTCPrice;
              });
          } else { // Response wasn't ok. Check dev tools
              console.log("response failed?");
          }

    });
	
	*/
	 
	
//show data	table 

	jQuery('#show-specs').on('click', function(event) {
	 
	  $("#table-details").slideDown(200);
    });
	  
		
})(jQuery); 
