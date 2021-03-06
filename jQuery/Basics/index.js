$(document).ready(function () {
  $("h1").css("color","purple");
});

//change the h1 text to the key value whenever a key is pressed
$(document).keypress(function(event) {
  $("h1").text(event.key);
});

//another way to add event listener
$("h1").on("mouseover", function() {
  $("h1").animate({margin: "20%"});
});


// jQuery commands
// "$" instead of document.querySelector or document.querySelectorAll
// .css() is used to change css attributes, when two attributes are used. i.e - $("h1").css("color","red");
// .css() to get value of the css attribute when one attribute is used. i.e - $("h1").css("color");
// .addClass() to add the class to the element. For adding multiple classes, .addClass(".class1 .class2");
// .removeClass() to remove class from the element.
// .hasClass() returns boolean value for the presence of the particular class in the element.
// .text() used to change the entire text in the element or elements.
// .html() used to add the html value inside the element.
// .attr() used to get and change the attributes in the element. i.e - .attr("src"); & .attr("href", "www.google.com");

// adding event listener --- $("h1").click(function () {
//                               $("h1").css("color","purple");
//                             });

// another way to add event lsitener --
// $("h1").on("mouseover", function() {
//   $("h1").css("color","red");
// });

// .before() adds html element before opening tag of the selected html element. i.e - $("h1").before("<button>New button</button>")
// .after() adds html element after the opening tag of selected html element. i.e - $("h1").after("<button>New button</button>")
// .prepend() and .append() adds html element just before and after the content inside the selected element
// .remove(), removes the element

//-- Animations --
// .hide(), hides the element.
// .show(), shows the element.
// .toggle(), toggles the element.
// .fadeOut()
// .fadeIn()
// .fadeToggle()
//.slideUp()
//.slideDown()
//.slideToggle()
//.animate({opacity:0.5}), adds custom animation. Should add css value inside the curly braces.
//                            The css values should only contain numeric vlaues.S i.e - margin,padding etc.. color, font-family wont work.
//we can use multiple animations at a time. i.e- $().slideUp().sildeDown().fadeOut().animate()
