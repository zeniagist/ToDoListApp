
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

  //clear input 
  $("input").val("");

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