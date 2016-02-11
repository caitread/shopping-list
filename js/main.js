
$(document).ready(function(){ 
  /* add item with click */ $("#newItemButton").click(addItem);
  /* add item with enter */
  $("#newItemForm").keydown(function(event){
    var keycode = event.keycode;
    if(keycode == 13){
      addItem();
    }
	});
});

function addItem(){
  var newItem = $("newItemForm").val();
  if (newItem.trim().length === 0){
    alert("You must enter an item to be added.");
        return;
	}
  var listItem = createListItem(newItem);
	$("#listGet").append(listItem);
	$("#newItemForm").val("");
  }

function createListItem(newItem) {
	var listItem = "<li class='ui-state-default'><input type='checkbox'>"; 
	listItem += "<span>" + newItem + "</span>";
	listItem += "<a href='#'>remove</a></li>";
	return listItem; 
}
