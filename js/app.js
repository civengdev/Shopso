
/* 1) on page load (inside document ready function)*/
$(document).ready(function() {
	/*
	a) add list title
	--> onkeydown get the value from the "List Title" input and display it as List Title
	*/
	function addListTitle () {
		var title = $('#add-title').val();
		if(!title) {
            alert("Please enter a valid title");
      } 
      	else {
      	$('.list-body .content div').toggleClass('show');
      	$('#update-title').html(title);
      	
      }
	/*alert(title);*/
	}
	$(document).on('click', '#add-list-title-button', function(){
    	addListTitle();
	});
	

	/*
	b) delete list
	--> onclick delete the title in the List Title
	*/
	function deleteListTitle () {
		$('#update-title').html('');

	}
	$(document).on('click', '#delete-list', function(){
    	deleteListTitle ();
    	clearEntireList ();
	});
	/*
	c) add list item
	--> onclick get the value from the "Add item here" input and display it inside the shopping list item list below (by adding one row at at a time)
	*/
	function addListItem () {
		var listItem = $('#add-item').val();
		$('.list-container').append('<li class="input"><div class="inside-list"><img class="x-icon" src="images/xicon2.png" alt="x image" width="20"><span>'+listItem+'</span><img class="tick-icon" src="images/tickicon.png" alt="tick image" width="25"></div></li>');
		

		/*alert(listItem);	*/
	}
	$(document).keydown(function(key) {
		if (key.keyCode == 13) {
			addListItem ();
		}
	});
	console.log( "ready!" );
});
/*
2) after the page load (out side document ready function)
a) select an item in the list
--> onclick toggle the "select" class (defined as a stand alone class in css) on the item
*/
$(document).on('click', '.tick-icon', function(){
	$(this).parent().toggleClass('tick');
});
/*
b) delete an item in the list
--> onclick delete the entire row (it's parent container) in which the button exists
*/
$(document).on('click', '.x-icon', function(){
    	$(this).parent().parent().remove();
	});
/*
c) clear the entire list
--> on click delete all the rows in the shopping list
*/
function clearEntireList () {
	$('.items').parent().empty();
}


/* Validation */

function validateInput (value) {

if( !this.value ) {
            alert("Please enter a valid title");
      }

}