$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ExcelImportTest.feature");
formatter.feature({
  "line": 1,
  "name": "District Camera Tests",
  "description": "",
  "id": "district-camera-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3796422542,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "District Camera Login Test",
  "description": "",
  "id": "district-camera-tests;district-camera-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "The user navigates to URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user clicks -Used Gear- tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user captures all the data and throws into new created Excel sheet each time",
  "keyword": "Then "
});
formatter.match({
  "location": "ExcelImportTest.the_user_navigates_to_URL()"
});
formatter.result({
  "duration": 7949030907,
  "status": "passed"
});
formatter.match({
  "location": "ExcelImportTest.the_user_clicks_Used_Gear_tab()"
});
formatter.result({
  "duration": 6722485927,
  "status": "passed"
});
formatter.match({
  "location": "ExcelImportTest.the_user_captures_all_the_data_and_throws_into_new_created_Excel_sheet_each_time()"
});
formatter.result({
  "duration": 13832933500,
  "status": "passed"
});
formatter.after({
  "duration": 1237389223,
  "status": "passed"
});
});