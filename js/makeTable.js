//Function for creating a table within Javascript
//Whenever you have the output ready to print out, call the maketablcell() function
//maketablehead() can be called at the beginning, or whenever it makes sense

function maketablehead() { //this function create TH with "Name" and "Score" as titles
	var y = document.createElement("TR");
	y.setAttribute("id", "myTr");
	document.getElementById("myTable").appendChild(y);
	
	var z = document.createElement("TH");
	var t = document.createTextNode("Name");
	z.appendChild(t);
	document.getElementById("myTr").appendChild(z);
	
	var z = document.createElement("TH");
	var t = document.createTextNode("Score");
	z.appendChild(t);
	document.getElementById("myTr").appendChild(z);
}

function maketablecell(a,b){ //2 variables will be the name of player and their score
	var y = document.createElement("TR");
	y.setAttribute("id", d);
	document.getElementById("myTable").appendChild(y);
	
	var z = document.createElement("TD");
	var t = document.createTextNode(a);
	z.appendChild(t);
	document.getElementById(d).appendChild(z);
	
	var z = document.createElement("TD");
	var t = document.createTextNode(b);
	z.appendChild(t);
	document.getElementById(d).appendChild(z);

}