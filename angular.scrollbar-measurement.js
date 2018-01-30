angular.module('scrollbar-measurement', [])
	.factory('scrollbarMeasurement', function(){
		return {
			getScrollbarWidth: function(){
				return $.scrollbarWidth();
			}
		};
	});