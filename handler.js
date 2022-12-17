document.addEventListener("DOMContentLoaded", function() { 
     // get the input element
     var input = document.getElementById("name"); 
 
     // add the focus event listener to the input element
     input.addEventListener("focus", function(event) { 
          // get the element with id "john"
          var john = document.getElementById("john"); 
 
          // get all direct children of "john" with a class of "important"
          var importantElements = john.querySelectorAll(".important"); 
 
          // add the "shape" class to all "important" elements
          importantElements.forEach(function(element) { 
                   element.classList.add("shape"); 
          }); 
 
          // stop the event from propagating beyond this handler
          event.stopPropagation(); 
      }); 
 }); 
