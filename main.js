/* We're going to work with jQuery lib so we need to link our HTML document to it and also to this file, main.js
So this has to be entered on index.html

<script src='https://code.jquery.com/jquery-3.1.0.js'></script> // jQuery lib link
<script src='js/main.js'></script>                              // main.js goes after jQuery so that we can use its selectors
*/

var skillset = document.getElementsByClassName('skillset'); // this assigns to variable an Object HTMLCollection from our HTML file

alert(skillset); // this one shows the value of skillset class in a pop-up. Output: [Object HTMLCollection]

function main() {
  $('skillset').hide(); // hides skillset class block when page is loaded
  $('skillset').fadeIn(1000); // shows skillset class block gradually
  $('.projects').hide();
  $('.projects-button').on('click', function() { // triggers a function when clicking the class object
    $(this).next().slideToggle(400); // project list will be shown with an animation when clicking button (.toggle()) does it without animation
    $(this).toggleClass('active'); // when clicking projects-button class, its CSS style will be changed to active class'
    $(this).text('Projects Viewed'); // original text of projects-button class is 'Current Projects' and this will change when clicked
  })
}

$(document).ready(main); // when HTML & CSS are loaded, trigger main() function
