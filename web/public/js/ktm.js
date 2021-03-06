<script>
	
		var slider = new Slider('#ex1', {
		});
		
		function colorcode(data, value_radiob){
		var value_radiob = $('input:radio[name=airquality]:checked').val();
			if (value_radiob=="pm25"){
				var red=0; var green=0; var blue=0;
				if (data<=50){
					red=49/255; green=163/255; blue=84/255;
					}
				if (data>50 && data<=100){
					red=254/255; green=196/255; blue=79/255;
					}	
				if (data>100){
					red=240/255; green=59/255; 	blue=32/255;
					}
				return new WorldWind.Color(red, green, blue, 1);
			}
			if (value_radiob=="blackcarbon"){
				var red=0; var green=0; var blue=0;
				if (data<=10000){
					red=255/255; green=247/255; blue=188/255;    
					}
				if (data>10001 && data<=20000){
					red=254/255; green=196/255; blue=79/255;   
					}	
				if (data>20000){
					red=217/255; green=95/255; 	blue=14/255;   
					}
			return new WorldWind.Color(red, green, blue, 1);
			}
		}
			
		// Register an event listener to be called when the page is loaded.
		window.addEventListener("load", eventWindowLoaded, false);
		
		// Define the event listener to initialize Web World Wind.
		function eventWindowLoaded() {
		
			// Create a World Window for the canvas.
			var wwd = new WorldWind.WorldWindow("canvasOne");
		
			// Add some image layers to the World Window's globe.
			wwd.addLayer(new WorldWind.BMNGOneImageLayer());
			wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer());

			// Add a compass, a coordinates display and some view controls to the World Window.
			wwd.addLayer(new WorldWind.CompassLayer());
			wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
			wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
		
			//Making the slider change the data by hour
			slider.on('change', function(data)
			{var hour=data.newValue+'h';
			placemarks(hour);
			$('#time').text(data.newValue + ':00');
			});
				
			// Adjust the Navigator to place Kathmandu in the center of the Web World Window.
			wwd.navigator.lookAtLocation.latitude = 27.708172;
			wwd.navigator.lookAtLocation.longitude = 85.320029;
				// Approx. 2 million meters above the ellipsoid
				wwd.navigator.range = 1e4; 
			
			//'Click' button for moving between cities
			/*The 'click' code needs some fixing
			$('#springfield').click(function (){
				if ($('#springfield').text()=='Go to Springfield, Massachusetts') {
					wwd.goTo(new WorldWind.Location(42.119707, -72.540215));
					$('#springfield').text('Go to Kathmandu, Nepal');}
				
				if ($('#springfield').text()=='Go to Kathmandu, Nepal') {wwd.goTo(new WorldWind.Location(27.708172, 85.320029));
					$('#springfield').text('Go to Springfield, Massachusetts');}
					});
			*/
			
			//PM2.5	
			var aq = {
				'Balaju': {'lat': 27.73517, 'lon': 85.314262,
					'pm25': {'0h': 47.92118, '1h': 53.58477, '2h': 45.71833, '3h': 53.53736, '4h': 67.73004, '5h': 80.69892, '6h': 103.4811, '7h': 187.5755,  '8h': 232.3603, '9h': 187.6194, '10h': 169.1186, '11h': 159.2186, '12h': 114.8519, '13h': 94.24835, '14h': 116.444, '15h': 132.1116, '16h': 100.2266, '17h': 147.7985, '18h': 158.1631, '19h': 233.6985, '20h': 137.8675, '21h': 119.994, '22h': 116.4316, '23h': 90.20799},
					'blackcarbon': {'0h': 4746.773, '1h': 4952.593, '2h': 3931.299, '3h': 4430.562, '4h': 7716.874, '5h':10849.59, '6h': 30780.88, '7h': 40899.02, '8h': 42611.72, '9h': 32159.57, '10h': 38510.39, '11h': 21253.01, '12h': 15560.92, '13h':12558.84, '14h':12257.84, '15h':14228.92, '16h':17918.25, '17h':23905.46, '18h':23864.11, '19h':25313.55, '20h':25487.19, '21h': 14769.26, '22h': 10992.9, '23h': 7173.2}
				},
				'Chabahil': {'lat': 27.707429, 'lon': 85.344537, 
					'pm25': {'0h': 50.56784, '1h': 45.62557, '2h': 47.09283, '3h': 58.02612, '4h': 59.89293, '5h': 71.02728, '6h': 151.7122, '7h': 169.4788, '8h': 163.6705, '9h': 133.2655, '10h': 122.489, '11h': 107.5981, '12h': 81.93974, '13h': 64.61893, '14h': 104.5677, '15h': 104.3293, '16h': 95.28834, '17h':103.8256, '18h': 112.2574, '19h': 108.3082, '20h': 78.27865, '21h': 71.86175, '22h': 67.03719, '23h': 62.55157},
					'blackcarbon': {'0h': 5420.129, '1h': 5153.733, '2h': 4717.211, '3h': 6273.826, '4h': 6465.032, '5h': 8602.326, '6h': 28477.52, '7h': 41953.35, '8h': 31700.53, '9h': 29455.21, '10h': 31676.01, '11h': 22776.52, '12h': 19085.99, '13h': 16053.28, '14h': 15469.75, '15h': 25623.59, '16h': 26651.74, '17h': 25608.42, '18h': 21514.58, '19h': 16655.05, '20h': 13894.31, '21h': 10183.73, '22h': 8148.711, '23h': 6931}
				},
				'Jawalakhel': {'lat': 27.673279, 'lon': 85.313971, 
					'pm25':{'0h': 66.80356, '1h': 54.7729, '2h': 50.27367, '3h':46.2369, '4h':46.71862, '5h': 72.51064, '6h': 133.8196, '7h': 151.9525, '8h': 139.0562, '9h': 121.6577, '10h': 99.45237, '11h': 80.95448, '12h': 56.08615, '13h': 56.66141, '14h': 47.74291, '15h': 61.29898, '16h': 62.97882, '17h': 76.80055, '18h': 88.9899, '19h': 79.06018, '20h': 138.9156, '21h': 75.75292, '22h': 73.48782, '23h': 77.04096},
					'blackcarbon':{'0h': 5709.106, '1h': 5132.571, '2h': 4856.737, '3h': 4294.08, '4h': 4853.327, '5h': 7499.58, '6h': 19422.56, '7h': 29916.43, '8h': 26848.27, '9h': 26017.75, '10h': 20060.62, '11h': 12562.85, '12h': 11532.41, '13h': 10561.14, '14h': 6994.614, '15h': 8992.643, '16h': 9857.099, '17h': 11724.06, '18h': 15333.52, '19h': 14636, '20h': 12100.85, '21h': 9780.007, '22h': 7409.309, '23h': 6264.205}
				},
				'Kalanki': {'lat': 27.69188, 'lon': 85.281158, 
					'pm25': {'0h': 72.47583, '1h': 62.47575, '2h': 64.58816, '3h': 72.72765, '4h': 80.20227, '5h': 97.85744, '6h': 155.105, '7h': 268.298, '8h': 209.1127, '9h': 178.2478, '10h': 169.3688, '11h': 148.9965, '12h': 113.8164, '13h': 81.69274, '14h': 78.9156, '15h': 82.00301, '16h': 91.12354, '17h': 108.9627, '18h': 119.9765, '19h': 109.7911, '20h': 115.7677, '21h': 113.9227, '22h': 106.4687, '23h': 79.81546},
					'blackcarbon':{'0h': 7116.834, '1h': 6304.714, '2h': 6161.674, '3h': 6187.879,	'4h': 7659.34, '5h': 10118.87, '6h': 16929.99, '7h':25709.9, '8h': 29420.55, '9h': 31226.83, '10h': 26286.84, '11h': 14226.7, '12h': 10874.13, '13h': 10682.59, '14h': 9809.834, '15h': 12979.94, '16h': 19807.6, '17h': 24146.35, '18h': 22214.66, '19h': 17539.39, '20h': 14605.34, '21h': 14524.07, '22h': 11392.82, '23h': 8412.883}
				},
				'Koteshwor': {'lat': 27.674727, 'lon': 85.343638, 
					'pm25':{'0h': 29.88431, '1h': 28.17183, '2h': 24.70743, '3h': 27.49124, '4h': 33.60331, '5h': 39.49305, '6h': 82.48209, '7h': 83.77126, '8h': 90.38467, '9h':91.41556, '10h':75.58248, '11h': 63.40221, '12h': 49.49879, '13h': 50.5083, '14h': 51.56778, '15h': 65.91496, '16h': 60.49378, '17h': 58.05173, '18h': 65.97511, '19h': 52.04864, '20h': 44.54639, '21h': 42.12531, '22h': 45.30844, '23h': 36.25952},
					'blackcarbon':{'0h': 2990.773, '1h': 2858.443, '2h': 2270.875, '3h':3556.967, '4h': 6796.97, '5h': 8944.556, '6h': 29014.08, '7h': 32045.81, '8h': 29055.39, '9h': 23520.47, '10h': 23648.93, '11h': 15584.05, '12h': 11155.11, '13h': 9197.122, '14h': 8079.665, '15h': 22745.67, '16h': 22884.91, '17h': 17382.98, '18h': 14325.87, '19h': 13003.76, '20h': 5320.825, '21h': 4132.038, '22h': 4518.128, '23h': 3078.199}
				},
				'Thapathali': {'lat': 27.690782, 'lon': 85.317644, 
					'pm25':{'0h': 48.71359, '1h': 54.3054, '2h': 55.36343, '3h': 59.82524, '4h': 59.25852, '5h': 77.61766, '6h': 99.70055, '7h': 107.8963, '8h': 107.404, '9h': 126.2279, '10h': 98.74506, '11h': 59.56495, '12h': 51.58247, '13h': 44.3271, '14h': 50.14414, '15h': 45.83421, '16h': 49.99577, '17h': 56.18436, '18h': 56.86908, '19h': 72.38672, '20h':72.13969, '21h':84.13457, '22h': 91.53011, '23h': 55.54317},
					'blackcarbon':{'0h': 3606.916, '1h': 3759.959, '2h':3798.121, '3h':4277.248, '4h': 4154.023, '5h': 5697.634, '6h':16412.02, '7h':19471.84, '8h': 18901.01, '9h': 20439.18, '10h': 18979.71, '11h': 12090.6,	'12h': 9495.415, '13h': 8673.707, '14h': 9259.957, '15h': 8701.246, '16h': 12580.07, '17h': 13799.38, '18h': 14057.6, '19h': 11666.18, '20h': 9455.554, '21h': 9073.506, '22h': 7889.632, '23h': 4627.912}
				}
			};

		//Placing and coloring placemarks with air pollution data by hour (by creating a new function that ends after Thapathali placemark)
	
		placemarks('0h');
			function placemarks(hour){
			var value_radiob = $('input:radio[name=airquality]:checked').val();
					
			//Add a placemark at Balaju, Kathmandu
			placemarkAttributes = new WorldWind.PlacemarkAttributes();
			placemarkAttributes.imageScale = 30;
			placemarkAttributes.imageColor = colorcode(aq.Balaju[value_radiob][hour],value_radiob);  
			var placemark = new WorldWind.Placemark(
				new WorldWind.Position(aq.Balaju.lat,aq.Balaju.lon,0),
				<!----new WorldWind.Position(27.73483, 85.31126, 0),-->
				true,
				placemarkAttributes
			);
			var placemarkLayer = new WorldWind.RenderableLayer("Placemarks");
			placemarkLayer.addRenderable(placemark);
			wwd.addLayer(placemarkLayer);
		
			//Add a placemark at Chabahil, Kathmandu
			placemarkAttributes = new WorldWind.PlacemarkAttributes();
			placemarkAttributes.imageScale = 30;
			placemarkAttributes.imageColor = colorcode(aq.Chabahil[value_radiob][hour],value_radiob);  
			var placemark = new WorldWind.Placemark(
				new WorldWind.Position(27.70149, 85.34029, 0),
				true,
				placemarkAttributes
			);
			var placemarkLayer = new WorldWind.RenderableLayer("Placemarks");
			placemarkLayer.addRenderable(placemark);
			wwd.addLayer(placemarkLayer);
		
			//Add a placemark at Jawalakhel, Kathmandu
			placemarkAttributes = new WorldWind.PlacemarkAttributes();
			placemarkAttributes.imageScale = 30;
			placemarkAttributes.imageColor = colorcode(aq.Jawalakhel[value_radiob][hour],value_radiob); 
			var placemark = new WorldWind.Placemark(
				new WorldWind.Position(27.67314, 85.31322, 0),
				true,
				placemarkAttributes
			);
			var placemarkLayer = new WorldWind.RenderableLayer("Placemarks");
			placemarkLayer.addRenderable(placemark);
			wwd.addLayer(placemarkLayer);
		
			//Add a placemark at Kalanki, Kathmandu
			placemarkAttributes = new WorldWind.PlacemarkAttributes();
			placemarkAttributes.imageScale = 30;
			placemarkAttributes.imageColor = colorcode(aq.Kalanki[value_radiob][hour], value_radiob); 
			var placemark = new WorldWind.Placemark(
				new WorldWind.Position(27.69225, 85.27814, 0),
				true,
				placemarkAttributes
			);
			var placemarkLayer = new WorldWind.RenderableLayer("Placemarks");
			placemarkLayer.addRenderable(placemark);
			wwd.addLayer(placemarkLayer);
		
			//Add a placemark at Koteshwor, Kathmandu
			placemarkAttributes = new WorldWind.PlacemarkAttributes();
			placemarkAttributes.imageScale = 30;
			placemarkAttributes.imageColor = colorcode(aq.Koteshwor[value_radiob][hour],value_radiob); 
			var placemark = new WorldWind.Placemark(
				new WorldWind.Position(27.67431, 85.34316, 0),
				true,
				placemarkAttributes
			);
			var placemarkLayer = new WorldWind.RenderableLayer("Placemarks");
			placemarkLayer.addRenderable(placemark);
			wwd.addLayer(placemarkLayer);
		
			//Add a placemark at Thapathali, Kathmandu
			placemarkAttributes = new WorldWind.PlacemarkAttributes();
			placemarkAttributes.imageScale = 30;
			placemarkAttributes.imageColor = colorcode(aq.Thapathali[value_radiob][hour],value_radiob); 
			var placemark = new WorldWind.Placemark(
				new WorldWind.Position(27.6926, 85.31531, 0),
				true,
				placemarkAttributes
			);
			var placemarkLayer = new WorldWind.RenderableLayer("Placemarks");
			placemarkLayer.addRenderable(placemark);
			wwd.addLayer(placemarkLayer);
			}
	}
			//colorcode(aq.Balaju['1h']);
			/*		
			//Download geoJSON
			var data = new WorldWind.GeoJSONParser(
			"http://nrcwg01.eco.umass.edu:8080/geoserver/topp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=topp:states&maxFeatures=50&outputFormat=application%2Fjson"
			);
			data.load();
			//window.alert(data.layer == null));
			wwd.addLayer(data.layer);
			*/
	</script>