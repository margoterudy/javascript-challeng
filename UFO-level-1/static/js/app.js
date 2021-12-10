// from data.js
var dataTable = data;

// Viewing the available data frp, JS
console.log(dataTable);

// Create References
var tbody = d3.select("tbody");

// TEST 
// tbody.append("tr").append("td").text("Hello!");

//FORMAT AND FILTER BUTTON
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldComments = d3.select("#comments");
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

//Event listener for button
button.on("click", () => {

    d3.event.preventDefault();

    var inputDate = inputFieldDate.property("value").trim();
    
    // test
    // console.log(inputDate)

    //Filter data and clean 
    var filterDate = dataTable.filter(dataTable => dataTable.datetime === inputDate);
    $tbody.html("");


    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // add comment if not sightings
        else {
            $tbody.append("tr").append("td").text("There is NOTHING here! I SAY, GOOD DAY SIR");
        }
})




