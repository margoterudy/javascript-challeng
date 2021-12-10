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

////date
  var inputDate = inputFieldDate.property("value").trim();
    // test
    // console.log(inputDate) works

  var filterDate = dataTable.filter(dataTable => dataTable.datetime === inputDate);
    // console.log(filterDate)

    //////city
  var inputCity = inputFieldCity.property("value").toLowerCase().trim();
  // console.log(inputCity)

  var filterCity = dataTable.filter(dataTable => dataTable.city === inputCity);
  // console.log(filterCity) works


//////////////////////////////////////so far the above work do not touch


//state
  // var inputState = inputFieldState.property("string").toLowerCase().trim();
  // // console.log(inputState)

  // var filterState = dataTable.filter(dataTable => dataTable.state === inputState);
// console.log(filterState) does NOT work


  // ////country
  // var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
  // // console.log(inputCountry)

  // var filterCountry = dataTable.filter(dataTable => dataTable.city === inputCountry);
  // // console.log(filterCountry) // // console.log(filterState) does NOT work



////////////////////////////////////////////////////////////////////////////////////// below works 
  var filterCombinedData = dataTable.filter(dataTable => dataTable.datetime === inputDate && dataTable.city === inputCity);
  // console.log(filterCombinedData) works
 

  //Filter data and clean 
  $tbody.html("");
  let response = {
      filterDate, filterCity,  filterCombinedData
  }
  if(response.filterCombinedData.length !== 0) {
    addData(filterCombinedData);
}
else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
  addData(filterDate) || addData(filterCity);
}

    // add comment if not sightings
else {
  $tbody.append("tr").append("td").text("There is nothing here! I say GOOD DAY SIR!!!");
}
})



