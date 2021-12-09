// from data.js USED CODE FROM LEVEL ONE 
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

//Create event listeners (from 3rd lesson of JS)
//We can use the `on` function in d3 to attach an event to the handler function
button.on("click",() => {

        d3.event.preventDefault();

        var inputDate = inputFieldDate.property("value").trim();
        // console.log(inputDate)

        var inputCity = inputFieldCity.property("value").toLowerCase().trim();
        // console.log(inputCity)

        var filterDate = dataTable.filter(dataTable => dataTable.datetime === inputDate);
        // console.log(filterDate)

        var filterCity = dataTable.filter(dataTable => dataTable.city === inputCity);
        // console.log(filterCity)

        var filterCombinedData = dataTable.filter(dataTable => dataTable.datetime === inputDate && dataTable.city === inputCity);
        // console.log(filterCombinedData)

  //Filter data and clean 
  var filterDate = dataTable.filter(dataTable => dataTable.datetime === inputDate);
  $tbody.html("");


  let response = {
    filterDate, filterCity, filterCombinedData
}
if(response.filterCombinedData.length !== 0) {
  addData(filterCombinedData);
}
else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
addData(filterDate) || addData(filterCity);
}

  // add comment if not sightings
      else {
          $tbody.append("tr").append("td").text("There is NOTHING here! I SAY, GOOD DAY SIR");
      }
})



