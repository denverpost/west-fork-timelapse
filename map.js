   	var map;

	var layers = [];
	
	layers[0] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130615.kmz', {preserveViewport: true});
	layers[1] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130616.kmz', {preserveViewport: true});
	layers[2] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130617.kmz', {preserveViewport: true});
	layers[3] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130618.kmz', {preserveViewport: true});
	layers[4] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130619.kmz', {preserveViewport: true});
	layers[5] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130620.kmz', {preserveViewport: true});
	layers[6] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130621.kmz', {preserveViewport: true});
	layers[7] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130622.kmz', {preserveViewport: true});
	layers[8] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130623.kmz', {preserveViewport: true});
	layers[9] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130624.kmz', {preserveViewport: true});
	layers[10] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130625.kmz', {preserveViewport: true});
	layers[11] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130626.kmz', {preserveViewport: true});
	layers[12] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130628.kmz', {preserveViewport: true});
	layers[13] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130630.kmz', {preserveViewport: true});
	layers[14] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130701.kmz', {preserveViewport: true});
	layers[15] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130703.kmz', {preserveViewport: true});
	layers[16] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130704.kmz', {preserveViewport: true});
	layers[17] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130705.kmz', {preserveViewport: true});
	layers[18] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130707.kmz', {preserveViewport: true});
	layers[19] = new google.maps.KmlLayer('http://extras.denverpost.com/media/maps/colorado-wildfires/timelapse/timelapse-west-fork-20130708.kmz', {preserveViewport: true});

	var messages = [];
	messages[0] = 'June 15, 2013, 2:58 a.m.';
	messages[1] = 'June 15, 2013, 10:10 p.m.';
	messages[2] = 'June 16, 2013, 10:10 p.m.';
	messages[3] = 'June 17, 2013, 11:23 a.m.';
	messages[4] = 'June 18, 2013, 1:32 a.m.';
	messages[5] = 'June 20, 2013, 12:20 a.m.';
	messages[6] = 'June 21, 2013, 12:47 a.m.';
	messages[7] = 'June 21, 2013, 7:52 p.m.';
	messages[8] = 'June 23, 2013, 12:24 a.m.';
	messages[9] = 'June 24, 2013, 1:40 a.m.';
	messages[10] = 'June 24, 2013, 11:13 p.m.';
	messages[11] = 'June 25, 2013, 10:18 p.m.';
	messages[12] = 'June 28, 2013, 12:06 a.m.';
	messages[13] = 'June 29, 2013, 10:31 p.m.';
	messages[14] = 'June 30, 2013, 10:32 p.m.';
	messages[15] = 'July 2, 2013, 10:58 p.m.';
	messages[16] = 'July 4, 2013, 12:06 a.m.';
	messages[17] = 'July 5, 2013, 11:03 p.m.';
	messages[18] = 'July 7, 2013, 12:37 a.m.';
	messages[19] = 'July 7, 2013, 7:55 p.m.';

	function drawGoogleWildfireMap() {
		
		var mapZoom = null;
		
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			disableDefaultUI: true,
			panControl: false,
			zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			overviewMapControl: false,
			center: new google.maps.LatLng(37.587917,-106.955627),
			mapTypeId: google.maps.MapTypeId.TERRAIN
		});

		//google.maps.event.addListener(map, 'idle', function(){ console.log(map.getZoom() + ', ' + map.getCenter()) })
	}

/* layer rotate */
	
	var lastmap = null;
	var lapseint;
	
	function timeLapseLayers(layer, message) {
		//for(var i=0;i<layer.length;i++) {
		var i = 0;
		lapseint = setInterval(function() {
			console.log(i);
			layer[i].setMap(map);
			$('#timemessage').slideToggle(50).html(message[i]).slideToggle(50);
			if(null != lastmap) { lastmap.setMap(null); }
			lastmap = layer[i];
			console.log(layer.length);
			i++;
			if(i >= layer.length) { 
				i = 0;
				clearInterval(lapseint);
			}	
		}, 1600);
		//}
	}
 
/* end layer rotate */