$(document).ready(function() {
  $('#js-shopping-list-form').submit(function(event){
      event.preventDefault();
  let $listItem = $('#shopping-list-entry');
      $('.shopping-list').append(
          '<li>' +
              '<span class="shopping-item">' + $listItem.val()+'</span>' +
         '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">'+
           '<span class="button-label">check</span>'+
          '</button>'+
          '<button class="shopping-item-delete">' +
           '<span class="button-label">delete</span>'+
          '</button>' +
         '</div>' +
          '</li>'
  );
// $(this) is referring to the form
//[0] makes it where it targets what is in the input and gets rid of it
   $(this)[0].reset();
});

//"this" refers to delete button. the "closest("li").remove() means "delete the closest li parent element to the delete button".
  $(".shopping-list").on("click", ".shopping-item-delete", function(event){
      $(this).closest("li").remove();
});

//checking and unchecking items
$(".shopping-list").on("click", ".shopping-item-toggle", function(event){

//toggle shopping item checked class
//means "find the element with the shopping item class, then change the style (none or strikethrough)
// means give or remove class
      $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  });


});