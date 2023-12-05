var $j = jQuery.noConflict();

$j( document ).ready( function() {
	"use strict";
	// She header
	sheHeader();
} );
	

/* ==============================================
HEADER EFFECTS
============================================== */


function sheHeader() {
		
	var header = $j('.she-header-yes'),
		container = $j('.she-header-yes .elementor-container, .she-header-yes.e-container'),
		header_elementor = $j('.elementor-edit-mode .she-header-yes'),
		header_logo = $j('.she-header-yes .elementor-widget-theme-site-logo .elementor-image, .she-header-yes .elementor-widget-image .elementor-image'),
		data_settings = header.data('settings');
						
	if ( typeof data_settings != 'undefined' ) {
		var responsive_settings = data_settings["transparent_on"];
		var width = $j(window).width(),
		    header_height= header.height(),
			logo_width = header_logo.width(),
			logo_height = header_logo.height() ;
		}
							
	// Check responsive is enabled
	if( typeof width != 'undefined' && width) {
	if( width >= 1025 ) {
	var enabled = "desktop";
	}else if (width  > 767 && width < 1025  ) {
	var enabled = "tablet";
	}else if (width <= 767 ) {
	var enabled = "mobile";
	}
	}
	
	if ($j.inArray(enabled, responsive_settings)!='-1') {
								
	var scroll_distance = data_settings["scroll_distance"];
	var transparent_header = data_settings["transparent_header_show"];
	var	background = data_settings["background"];
	var bottom_border_color = data_settings["custom_bottom_border_color"],
		bottom_border_view = data_settings["bottom_border"],
		bottom_border_width = data_settings["custom_bottom_border_width"];
								
	var shrink_header = data_settings["shrink_header"],
		data_height = data_settings["custom_height_header"],
		data_height_tablet = data_settings["custom_height_header_tablet"],
		data_height_mobile = data_settings["custom_height_header_mobile"];

	var shrink_logo = data_settings["shrink_header_logo"],
		data_logo_height = data_settings["custom_height_header_logo"],
		data_logo_height_tablet = data_settings["custom_height_header_logo_tablet"],
		data_logo_height_mobile = data_settings["custom_height_header_logo_mobile"];
	
	var change_logo_color = data_settings["change_logo_color"];
		
	var blur_bg  = data_settings["blur_bg"];
	
	var scroll_distance_hide_header = data_settings["scroll_distance_hide_header"];
	
	// add transparent class
	if(transparent_header == "yes" ){
		header.addClass('she-header-transparent-yes');
	}
							
		// border bottom
		if( typeof bottom_border_width != 'undefined' && bottom_border_width) {
		var bottom_border = bottom_border_width["size"] + "px solid " + bottom_border_color;
		}
		
						
		// hide header on scroll
		if( typeof scroll_distance_hide_header != 'undefined' && scroll_distance_hide_header) {
		
			var mywindow = $j(window);
			var mypos = mywindow.scrollTop();
			
				mywindow.scroll(function() {
					if (mypos > scroll_distance_hide_header["size"]) {
						if(mywindow.scrollTop() > mypos)
						{
							header.addClass('headerup');
						}else{
							header.removeClass('headerup');
						}
					}
					mypos = mywindow.scrollTop();
				});
		}
					
		// scroll function
		$j(window).on("load scroll",function(e){
			var scroll = $j(window).scrollTop();
									
			if (header_elementor) {
				header_elementor.css("position", "relative");
			}
								
			if (scroll >= scroll_distance["size"]) {
				header.removeClass('header').addClass("she-header");
				header.css("background-color", background);
				header.css("border-bottom", bottom_border);
				header.removeClass('she-header-transparent-yes');
				
				if( shrink_header == "yes" ) {
					header.css({"padding-top":"0", "padding-bottom":"0", "margin-top":"0", "margin-bottom":"0"});
					container.css({"min-height": data_height, "transition": "all 0.4s ease-in-out", "-webkit-transition": "all 0.4s ease-in-out", "-moz-transition": "all 0.4s ease-in-out"});
										
				}
				
				if( change_logo_color == "yes" ) {
					header_logo.addClass("change-logo-color");
										
				}
								
				if( blur_bg == "yes" ) {
					header.css({"backdrop-filter": "saturate(180%) blur(20px)", "-webkit-backdrop-filter": "saturate(180%) blur(20px)"});
										
				}
										
				} else {
					header.removeClass("she-header").addClass('header');
					header.css("background-color", "");
					header.css("border-bottom", "");
				
					if(transparent_header == "yes" ){
						header.addClass('she-header-transparent-yes');
					}
					if( shrink_header == "yes" ) {
						header.css({"padding-top":"", "padding-bottom":"", "margin-top":"", "margin-bottom":""});
						container.css("min-height", "");
					}
					if( change_logo_color == "yes" ) {
					header_logo.removeClass("change-logo-color");
										
				}
					if( blur_bg == "yes" ) {
						header.css({"backdrop-filter": "", "-webkit-backdrop-filter": ""});
					}
				}

				
		});
	}
	
};
