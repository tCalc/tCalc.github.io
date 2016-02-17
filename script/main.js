

var charClass=[];
var mdown = ('ontouchstart' in document.documentElement)  ? 'touchstart' : 'mousedown';
var mup =  ('ontouchend' in document.documentElement)  ? 'touchend' : 'mouseup';
var classDB
$(document).ready(function(){
    var charClass=[];
    
    
    
    /*import class database*/
    Tabletop.init( { key: '1lK4auOQYRzUMnikY0zfraeYnoPGZZSPg6oOGPo5hqZE',
                   callback: function(data, tabletop) {
                       classDB = data},
                   simpleSheet: true 
    });
        
   function getClassByName(name) {
        return classDB.filter(
            function(data){
                return data.class_name == name; }
        );
    };
    
    
    $('[data-toggle="tooltip"]').tooltip(); 
    $('a.classSelect').on(mdown, function(){
        
        $(".btn").button('reset');
        $(".btn").removeClass('active');
        var found = getClassByName($(this).text());
        console.log(found[0]);
        charClass[0]=found[0];
        $("#classLabel").text(charClass[0].class_name);
        $("#classL").text(charClass[0].class_name);
        
    });
    $('a.classSelect').on(mup, function(){
        /*change button label*/
        $(this).parent().parent().siblings(".btn:first-child").html($(this).text()+' <span class="label label-default">Selected</span> <span class="caret"></span>');
        $(this).parent().parent().siblings(".btn:first-child").val($(this).text());
        $(this).parent().parent().siblings(".btn:first-child").addClass('active');
        
        /*change background on release*/
        if ($(window).width() > 768) { 
            $('body').css({"background-image":"url(/img/class-b/"+charClass[0].bg_link+")"});
        };
        
        /*set label color by class*/
        $('#classLabel').css({"background":charClass[0].color_hex})
        $('#classL').css({"background":charClass[0].color_hex})
        
        /*set image*/
        $('#classImg').attr('src',"img/class/"+charClass[0].image_link);
        $('#classImg').attr('alt',charClass[0].class_name);
        
    });
    
    /* background when resize*/
     $(window).resize(function() {
        if ($(window).width() > 768) { 
            $('body').css({"background-image":"url(/img/class-b/"+charClass[0].bg_link+")"});} else{
            $('body').css({"background-image":"url()"});
            }
        });
     
    
    /*focus when hovered*/
    $(".input-sm").hover(function(){
        $(this).focus()
    });
    
    /* Back to top*/
       	var offset = 250,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});


});


