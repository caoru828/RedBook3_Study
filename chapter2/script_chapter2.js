function doTest(){
	var timer = setTimeout(function(){
		var date = new Date();
		console.log("chap2 now time is  ",date);
		window.clearTimeout(timer);
	},1500)
}
doTest();