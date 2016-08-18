<!--
Time Controls
-->
			<div class="col-xs-12 non-interactive">
		<div class="row">
		<!--Create a shallow div along the bottom edge of the globe-->
		<div class="interactive" style="position: absolute; top 65px; bottom: 0; width: 100%">

			<!--Date/Time Buttons-->
			<div id="timeControlButtons"
				 style="width: 166px; margin-right: auto; margin-left: auto">
				<div class="btn-group btn-group-sm interactive" role="group"
					 style="float:bottom"
					 aria-label="time controls">
					<button id="time-fast-backward" type="button"
							class="btn btn-default repeatButton">
						<span class="glyphicon glyphicon-fast-backward"
							  aria-hidden="true"></span>
					</button>
					<button id="time-step-backward" type="button"
							class="btn btn-default repeatButton">
						<span class="glyphicon glyphicon-step-backward"
							  aria-hidden="true"></span>
					</button>
					<button id="time-reset" type="button" class="btn btn-default"
							data-bind="click: onTimeReset, css:{active: autoUpdateTime}">
						<span class="glyphicon glyphicon-time" aria-hidden="true"></span>
					</button>
					<button id="time-step-forward" type="button"
							class="btn btn-default repeatButton">
						<span class="glyphicon glyphicon-step-forward"
							  aria-hidden="true"></span>
					</button>
					<button id="time-fast-forward" type="button"
							class="btn btn-default repeatButton">
						<span class="glyphicon glyphicon-fast-forward"
							  aria-hidden="true"></span>
					</button>
				</div>
			</div>
			
<!--Date/Time Slider-->

var datetimeSlider='<div id="timeControlSlider"
                                         style="width: 166px; margin-right: auto; margin-left: auto"></div>
                    '
					
					
