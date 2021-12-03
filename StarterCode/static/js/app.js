// from data.js
var tableData = data;

// Viewing the available data frp, JS
console.log(tableData);

// Create References
var tbody = d3.select("tbody");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "comments"]
