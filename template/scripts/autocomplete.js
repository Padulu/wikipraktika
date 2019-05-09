"use strict";

function autocomplete(input, array) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    /*execute a function when someone writes in the text field:*/
    input.addEventListener("input", function() {
        var itemContainer, item, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;} /*don't do aynthing if no value

        /*create a DIV element that will contain the items (values):*/
        itemContainer = document.createElement("DIV");
        itemContainer.setAttribute("class", "autocomplete-items");

        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(itemContainer);

        /*for each item in the array...*/
        for (var i = 0; i < array.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (array[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            item = document.createElement("DIV");

            item.innerHTML = array[i].substr(0, val.length); 
            item.innerHTML += array[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            item.innerHTML += "<input type='hidden' value='" + array[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            item.addEventListener("click", function() {
                /*insert the value for the autocomplete text field:*/
                input.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            itemContainer.appendChild(item);
          }
        }
    });

    function closeAllLists() {
      /*close all autocomplete lists in the document */
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
          x[i].parentNode.removeChild(x[i]);
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function () {
        closeAllLists();
    });
  }
  

var modulles = ["Mexico Instrument TI 30", "Mexico Instrument TI 32", "Mexico Instrument D*D", "Casino UX5", "Casino TZZ", "Casino Basic", "HG Calc++", "HG Productive", "HG GO-ON"];

autocomplete(document.getElementById("searchField"), modulles);