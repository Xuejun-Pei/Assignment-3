alert("Hello!")
$("p").mouseout(function(){
	$(this).html("where did you go?")
	})

$(".menu").click(function(){





	if ($(this).hasClass("open")){
		$(this).removeClass("open")
	}else{
		$(this).addClass("open")
	}
})
