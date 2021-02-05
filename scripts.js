
function newItem(){

//jQuery
//1. Adding a new item to the list of items: 
  let li = $("<li></li>");
  let inputValue = $("input").val(); //getting input values
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

//2. Crossing out an item from the list of items:
  function crossOut() {
      li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
      li.toggleClass("strike");
    });

//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteList);
  function deleteList(){
    li.addClass("delete")
  }
// 4. Reordering the items: 
  $('#list').sortable();

}





// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.








  /*
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();
*/










