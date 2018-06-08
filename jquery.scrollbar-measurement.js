$(function(){
	function getScrollbarWidth(){
		// Create the measurement node
		var scrollDiv = document.createElement("div");
		scrollDiv.className = "scrollbar-measure";
		scrollDiv.setAttribute('style', 'width: 100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;');
		document.body.appendChild(scrollDiv);
	
		// Get the scrollbar width
		var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	
		// Delete the DIV 
		document.body.removeChild(scrollDiv);
		
		return scrollbarWidth;
	}
	
	jQuery.fn.extend({
		scrollbarWidth: getScrollbarWidth
	});
	
	var scrollbarWidth = getScrollbarWidth();
	if(scrollbarWidth > 0){
		$('html').addClass('has-scrollbar');
		$('html').addClass('scrollbar-' + scrollbarWidth);
	}else{
		setTimeout(function(){
			var scrollbarWidth = getScrollbarWidth();
			if(scrollbarWidth > 0){
				$('html').addClass('has-scrollbar');
				$('html').addClass('scrollbar-' + scrollbarWidth);
			}
		}, 250);
	}
});
