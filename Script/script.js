lastId = '';

function changePage(id){
	if(id != lastId){
		$("#home").addClass('hidden');
		$("#resumePage").addClass('hidden');
		$("#portfolioPage").addClass('hidden');
		$("#"+lastId).addClass('hidden');
		$("#"+id).removeClass('hidden');
		console.log(id);
		
		lastId = id;
		
		$(".boutonMenu").removeClass('active');
		$("#"+id+"Menu").addClass('active');
		
		if(id == 'home'){
			$("body").addClass('home');

			$("footer").removeClass('min');
			$("footer").removeClass('container');
		}else{
			$("body").removeClass('home');

			$("footer").addClass('min');
			$("footer").addClass('container');
		}
			
		location.hash = id + 'Page';
	}
}

$(document).ready(function() {
	if(location.hash == "")
		location.hash = "homePage";
		
	var str = location.hash;
	str = str.replace('#', '');
	str = str.replace('Page', '');
		
	changePage(str);
	console.log(str);

	$('[data-toggle="tooltip"]').tooltip({
	    'placement': 'top'
	});
})