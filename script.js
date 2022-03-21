//form n table are created by DOM method
"use strict";

// creating a container or main div element
var container = document.createElement("div");
container.className = "container p-5";

// creating header
var heading = document.createElement("div");
heading.className = "h2";
heading.innerHTML = "DOM FORM";
heading.style.textAlign = "center";
heading.style.backgroundColor = "lightgrey";
heading.style.padding = "10px";

//creating form
let form = document.createElement("form");
form.className = "p-5";

//creating or defining function to be called when request is made.
//creating form text and number elements
function createForm_text(labelName, type, id) {
  let div = document.createElement("div");
  div.className = "form-group row";

  let label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = labelName;
  label.className = "col-3 col-form-label ml-4";

  let input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.placeholder = labelName;
  input.className = "col-8 form-control";

  div.append(label, input);
  return div;
}

//creating form radio and checkbox elements
function createForm_select(labelName, type, name) {
  var div = document.createElement("div");
  div.className = "form-check";

  var label = document.createElement("label");
  label.setAttribute("for", labelName);
  label.className = "form-check-label";
  label.innerHTML = labelName;
  var input = document.createElement("input");
  input.type = type;
  input.className = "form-check-input";
  input.id = labelName;
  input.value = labelName;
  input.name = name;

  div.append(input, label);
  return div;
}

var div1 = document.createElement("div");
div1.className = "col-6 ";
function createSelectbox_R(labelName) {
  var fieldset = document.createElement("fieldset");
  fieldset.className = "form-group";

  var div = document.createElement("div");
  div.className = "row";

  var legend = document.createElement("legend");
  legend.className = "col-form-label col-4 ml-4";
  legend.innerHTML = labelName;

  fieldset.append(div);
  div.append(legend, div1);
  return fieldset;
}

var div2 = document.createElement("div");
div2.className = "col-6";
function createSelectbox_C(labelName) {
  var fieldset = document.createElement("fieldset");
  fieldset.className = "form-group";

  var div = document.createElement("div");
  div.className = "row";

  var legend = document.createElement("legend");
  legend.className = "col-form-label col-4 ml-4";
  legend.innerHTML = labelName;

  fieldset.append(div);
  div.append(legend, div2);
  return fieldset;
}

//creating a button to display form input in table
function createButton() {
  var div = document.createElement("div");
  div.className = "row offset-10";

  var btn = document.createElement("button");
  btn.textContent = "Submit";
  btn.type = "button";
  btn.className = "btn btn-primary btn-lg text-center mt-5";
  btn.onclick = action;

  div.append(btn);
  return div;
}

//calling back above function and adding elements to one another to create a DOM form
let fname = createForm_text("First Name", "text", "fname");
let lname = createForm_text("Last Name ", "text", "lname");
let address = createForm_text("Address ", "text", "address");
let pincode = createForm_text("Pincode ", "number", "pin");
let gender = createSelectbox_R("Gender");
let male = createForm_select("Male", "radio", "gender");
let female = createForm_select("Female", "radio", "gender");
let others = createForm_select("Others", "radio", "gender");
let food = createSelectbox_C("Choice of food");
let pizza = createForm_select("Pizza", "checkbox", "food");
let burger = createForm_select("Burger", "checkbox", "food");
let fries = createForm_select("Fries", "checkbox", "food");
let nuggets = createForm_select("Nuggets", "checkbox", "food");
let popcorn = createForm_select("Popcorn", "checkbox", "food");
let state = createForm_text("State", "text", "state");
let country = createForm_text("Country", "text", "country");
let submit = createButton();

div1.append(male, female, others);
div2.append(pizza, burger, fries, nuggets, popcorn);
form.append(
  fname,
  lname,
  address,
  pincode,
  gender,
  food,
  state,
  country,
  submit
);

//creating a table ,so when action() button is clicked, datawill be stored in table
var divtable = document.createElement("div");
divtable.className = "row";

var table = document.createElement("table");
table.className = "mt-5 table table-striped";

var thead = document.createElement("thead");

var tbody = document.createElement("tbody");
var tr = document.createElement("tr");

var th1 = document.createElement("th");
th1.innerHTML = "First Name";
var th2 = document.createElement("th");
th2.innerHTML = "Last Name";
var th3 = document.createElement("th");
th3.innerHTML = "Address";
var th4 = document.createElement("th");
th4.innerHTML = "Pincode";
var th5 = document.createElement("th");
th5.innerHTML = "Gender";
var th6 = document.createElement("th");
th6.innerHTML = "Choice of food";
var th7 = document.createElement("th");
th7.innerHTML = "State";
var th8 = document.createElement("th");
th8.innerHTML = "Country";

table.append(thead, tbody);
thead.append(tr);
tr.append(th1, th2, th3, th4, th5, th6, th7, th8);
divtable.append(table);
document.body.append(container);
container.append(heading, form, divtable);

//callin action(),which work as submit button for our form.
function action() {
  var foodValue = [];
  var data_food = document.getElementsByName("food");
  for (let i = 0; i < data_food.length; i++) {
    if (data_food[i].checked) foodValue.push(data_food[i].value);
    //pushing the no.of food select to an array then checking whether total food is atleast 2 or not.
  }
  var genderValue = [];
  var data_gender = document.getElementsByName("gender");
  for (let i = 0; i < data_gender.length; i++) {
    if (data_gender[i].checked == true) genderValue.push(data_gender[i].value);
    //checking if radio button is checked or not.
  }

  var fn = document.getElementById("fname").value;
  var ln = document.getElementById("lname").value;
  var addr = document.getElementById("address").value;
  var pcode = document.getElementById("pin").value;
  let st = document.getElementById("state").value;
  let ctry = document.getElementById("country").value;
  if (!fn) {
    alert("Please Enter First Name");
  } else if (!ln) {
    alert("Please Enter Last Name");
  } else if (!addr) {
    alert("Please Enter Address");
  } else if (pcode.length !== 6) {
    //if pincode digits = 6 ,data will be passed to next statement otherwise it will alert.
    alert("Please Enter 6 Digits pin code");
  } else if (genderValue.length != 1) {
    //if radio button is checked,data will be passed to next statement otherwise it will alert.
    alert("Please select Gender");
  } else if (foodValue.length < 2) {
    //if checkbox is checked atleast 2 ,data will be passed to next statement otherwise it will alert.
    alert("Please select atleast two food");
  } else if (!st) {
    alert("Please Enter State");
  } else if (!ctry) {
    alert("Please Enter Country");
  } else {
    let tablebody = document.querySelector("tbody");
    var trow = tablebody.insertRow(0);
    var cell1 = trow.insertCell(0);
    var cell2 = trow.insertCell(1);
    var cell3 = trow.insertCell(2);
    var cell4 = trow.insertCell(3);
    var cell5 = trow.insertCell(4);
    var cell6 = trow.insertCell(5);
    var cell7 = trow.insertCell(6);
    var cell8 = trow.insertCell(7);
    cell1.innerHTML = fn;
    cell2.innerHTML = ln;
    cell3.innerHTML = addr;
    cell4.innerHTML = pcode;
    cell7.innerHTML = st;
    cell8.innerHTML = ctry;
    cell6.innerHTML = foodValue;
    cell5.innerHTML = genderValue;

    alert("Thank You, Form's data is saved.!!!");
    form.reset(); //reset the form if every data is collected.
  }
}
