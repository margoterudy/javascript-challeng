// from data.js
var dataTable = data;

// TEST 
// tbody.append("tr").append("td").text("Hello!");

// //FORMAT AND FILTER BUTTONS plus addl buttons (code from level 1)
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldState = d3.select("#state");
var inputFieldCountry = d3.select("#country");
var inputFieldShape = d3.select("#shape");
var inputFieldComments = d3.select("#comments");




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


  ////////FILTER BUTTONS/////


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


// state
  var inputState = inputFieldState.property("value").toLowerCase().trim();
  // console.log(inputState)

  var filterState = dataTable.filter(dataTable => dataTable.state === inputState);
// console.log(filterState) 


  ////country
  var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
  // console.log(inputCountry)

  var filterCountry = dataTable.filter(dataTable => dataTable.country === inputCountry);
  // console.log(filterCountry) // 


// ////shape
  var inputShape = inputFieldShape.property("value").toLowerCase().trim();
  // console.log(inputShape)

  var filterShape =dataTable.filter(dataTable => dataTable.shape === inputShape);
  //console.log(filterShape) //  

   //////////////////////////////////////I cannot find the error in the console to call the comments. it gives error message at search
    // ////comments
  var inputComments = inputFieldComments.property("value").toLowerCase().trim();
  // // console.log(inputDuration)

  var filterComments =dataTable.filter(dataTable => dataTable.comments === inputComments);
  // // console.log(filterComments) // 

////////////////////////////////////////////////////////////////////////////////////// 
  var filterCombinedData = dataTable.filter(dataTable => 

    dataTable.datetime === inputDate &&
    dataTable.city === inputCity &&
    dataTable.state === inputState &&
    dataTable.country === inputCountry &&
    dataTable.shape === inputShape &&
    dataTable.comments === inputComments
    );


  // console.log(filterCombinedData) works add other tables here
 

  //Filter data and clean all categories for search - add here too
  $tbody.html("");
  let response = {
      filterDate, filterCity,  filterCombinedData, filterState, filterCountry, filterShape, filterComments
  }

  if(response.filterCombinedData.length !== 0) {
    addData(filterCombinedData);
}

//respond to call add here 2x
else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0 || response.filterState.length !== 0 || response.filterCountry.length !== 0 || response.filterShape.length !== 0 || response.filterComments.length !== 0))) {
  addData(filterDate) || addData(filterCity) || addData (filterState) || addData (filterCountry) || addData (filterShape) || addData (filterComments) ;
}

    // add comment if not sightings
else {
  $tbody.append("tr").append("td").text("There is nothing here! I say GOOD DAY SIR!!!");
}
})



