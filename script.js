icons = [{
			"man": 		"/images/man1.jpg",
			"desc": 	"У Вас большой коллектив, состоящий из сотрудников разных профессий. Вам важно контролировать все процессы и эффективно развивать свой бизнес? С Дасофтом Вы сможете управлять всем штатом компании прямо из офисного кресла."
		},
	
		{
			"man": 		"/images/man2.jpg",
			"desc": 	"Вы будете в курсе всех дел независимо от вашего местонахождения. Когда бизнес как на ладони, вы свободны и независимы от обстоятельств. Дасофт дарит целый мир."
		},
	
		{
			"man": 		"/images/man3.jpg",
			"desc": 	"Вам важно контролировать все процессы и эффективно развивать свой бизнес? С Дасофтом Вы сможете управлять всем штатом компании прямо из офисного кресла."
		},
	
		{
			"man": 		"/images/man4.jpg",
			"desc": 	"Когда бизнес как на ладони, вы свободны и независимы от обстоятельств. Дасофт дарит целый мир. Вам важно контролировать все процессы и эффективно развивать свой бизнес?"
		},
		
		{
			"man": 		"/images/man5.jpg",
			"desc": 	"Дасофт дарит целый мир. Вам важно контролировать все процессы и эффективно развивать свой бизнес?"
		}
];

var current_icon = -1;

$(document).ready(function(){ 
    
	
	var im = new Array();
	/* img preloader */
	for(i = 0; i < icons.length; i++) {
		im[i] = new Image();
		im[i].src = icons[i].man;
	}
	

    /* tooltips */
    $("#i1, #i2, #i3, #i4, #i5, #i6").hover(
      	function() {
      		$(this).children().css("display", "block");
      	}, 
      		
      	function() {
     		$(this).children().css("display", "none");
    	}
    ); 

	/* icons action */ 
	$("#i1, #i2, #i3, #i4, #i5, #i6")
	.mouseover(function() { 
		ico_click($(this).attr("id").substr(1) - 1);
		return false;
	}); 

	/* left arrow */
	$("#arr_left").bind("click", function() { 
		current_icon--;
		if (current_icon < 0) current_icon = icons.length - 1;
		ico_click(current_icon);
		return false;
	});
	
	/* right arrow */
	$("#arr_right").bind("click", function() { 
		current_icon++;
		if (current_icon >= icons.length ) current_icon = 0;
		ico_click(current_icon);
		return false;
	});

	/* action */
	function ico_click(i) {
		current_icon = i;
		$(".index_icons_wrapper>div").removeClass("sel");
		
		if (i != undefined) {
			$("#i" + (i+1)).addClass("sel");

			$("#man").css("background-image", "url(" + icons[i]['man'] + ")");
			$("#desc").html(icons[i]["desc"]);

			 
			$("#desc").hide();
			$("#desc").fadeIn();
		} else {
			$("#man").css("background-image", "url(/images/man0.jpg)");
		}
	}	
       
    
    $("#arr_left,#arr_right,#hat,#art").hover(function(){
    	$(this).addClass("hover");
    }, function(){
    	$(this).removeClass("hover");
    });
    
    
    $("#order_link").click(function(){
    	$("#order").slideToggle();
    	if ($(this).hasClass("sel")) $(this).removeClass("sel"); 
    	else $(this).addClass("sel");
    	return false;
    });
    
 });

