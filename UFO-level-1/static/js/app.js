// from data.js
var dataTable = data;

// Viewing the available data frp, JS
console.log(dataTable);

// Create References
var tbody = d3.select("tbody");

// TEST 
// tbody.append("tr").append("td").text("Hello!");

//FORMAT AND BUTTON
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "comments"]

//Insert Data into HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

//add Data table
addData(dataTable);





