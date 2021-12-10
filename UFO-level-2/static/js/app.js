// from data.js
var dataTable = data;

// TEST 
// tbody.append("tr").append("td").text("Hello!");

// //FORMAT AND FILTER BUTTON (code from level 1)
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Input the data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

//Add dataTable
addData(dataTable);


//Create eventListener for button
button.on("click", () => {

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
else {
  $tbody.append("tr").append("td").text("There is nothing here! I say GOOD DAY SIR!!!");
}
})



