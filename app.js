//Sanjay Mamidi
//6/3/2019
// from data.js

var tableData = data;
// YOUR CODE HERE!

// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use D3 to select the table
var table = d3.select(id = "ufo-table");
//Console.log the weather data from data.js
data.forEach(function (ufodata) {
  //console.log(ufodata);
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(function ([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  })
});

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime").node().value;



//This inline function does all the work of saving the date selection and traversing 
// thru the data set to get only the right data 
button.on("click", function () {
  d3.event.preventDefault();
  //Redraw the webpage by renoving the older data.
  var trows = document.querySelector('tbody');
  while (trows.firstChild) {
    trows.removeChild(trows.firstChild);
  }
//get the selection date.
  inputField = d3.select("#datetime").node().value;
  //console.log(inputField);
  var value, key, i;
 //Now iterate thru the dataset
  for (i in tableData) {
    //only choose those dictonary values that meet the date critera
    if (tableData[i].datetime == inputField) {
      var row = tbody.append("tr");
      //refresh the webpage
      Object.entries(tableData[i]).forEach(function ([key, value]) {
        //     // Append a cell to the row for each value
        //     // in the weather report object
        var cell = row.append("td");
        // console.log(value);
        cell.text(value);
      });
    }
  };
});

 var SinputField = d3.select("#Datesort");
 SinputField.on("change", function() {
   var vcheck = d3.select("#Datesort").node().checked;
if (vcheck == true) {
      console.log("true");
    }
 else if  (vcheck == false) {
      console.log("false");
    }

 });

