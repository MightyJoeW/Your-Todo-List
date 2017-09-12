//check off specific todos by clicking
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

//click on trash icon to delete todos
$('ul').on('click', 'span', function(event){
	//create a delete confirmation message
	var r = confirm('Are you sure you want to remove this item?');
	if (r === true) {
    	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //this 'this' refers to parent (li)
	}); //removes spans parent li
	event.stopPropagation(); //stops event from bubbling out
	} else {
    	return false;
	}
});

//input creates new todo
$("input[type='text']").keypress(function(event){
	//check if enter key was pressed
	if(event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val('');	
		//create new li and add to ul
		$('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + todoText + '</li>');
	}
});

//toggle input on click of plus icon
$('.fa-plus').on('click', function(){
	$("input[type='text']").fadeToggle();
});

