var $list, $newItemForm, $newItemButton, $additems;
var item = '';
$additems = $("#additems");
$newItemForm = $("#newItemForm");
$newItemButton = $("#newItemButton");
$list = $('ul#listItems');
$listComplete = $('ul#list-complete');
var xbox = $('.xbox');


$newItemForm.on('submit', function(e){
  e.preventDefault();
  var checkbox = "<img width=\"25px\" src=\"images/checkbox.png\" class=\"checkbox\">";
  var xout = "<img width=\"25px\" src=\"images/xbox.png\" class=\"xbox\">";
  var check = "<img width=\"25px\" src=\"images/check.png\" class=\"check\">";
  var span = "<class=\"span\">";
  var text = $('input:text').val();
  $list.append('<li>' + checkbox + check + span + text + xout +'</li>');
  $('input:text').val('');
  $('.check').hide();

  $('.xbox').click (function(){
    $(this).closest('li').remove();
  }); 

  $('.checkbox').click(function(){
    $(this).attr('src', 'images/check.png');    
  });
});
