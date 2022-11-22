let itemListID = 1;
let itemListTrNum = 1;

function addToList() {
	let newItem = new Object;
	newItem.iD = itemListID++;
	newItem.name = document.getElementsByName("itemName")[0].value;
	newItem.price = parseInt(document.getElementsByName("itemPrice")[0].value);

	if (newItem.name === "" || isNaN(newItem.price)) {
		itemListID--;
		return;
	}

	let tr = document.createElement("tr");
	document.getElementById("itemListTable").appendChild(tr);
	let td = document.createElement("td");
	td.innerHTML = newItem.iD + ".";
	document.getElementsByTagName("tr")[itemListTrNum].appendChild(td);
	td = document.createElement("td");
	td.innerHTML = newItem.name;
	document.getElementsByTagName("tr")[itemListTrNum].appendChild(td);
	td = document.createElement("td");
	td.innerHTML = newItem.price + "p.";
	document.getElementsByTagName("tr")[itemListTrNum++].appendChild(td);

	document.getElementsByName("itemName")[0].value = "";
	document.getElementsByName("itemPrice")[0].value = "";
}

let cartID = 1;
let i = 0;
let cartArr = [];

function addToCart() {
	let cartTrNum = itemListTrNum+i;

	let listTrNum = parseInt(document.getElementsByName("lineNum")[0].value);
	let savedListItem = new Object;
	savedListItem.iD = cartID++;
	savedListItem.name = document.getElementsByTagName("td")[3*(listTrNum-1)+1].innerHTML;
	savedListItem.price = parseInt(document.getElementsByTagName("td")[3*(listTrNum-1)+2].innerHTML);
	cartArr.push(savedListItem);
	
	if (savedListItem.name === "" || isNaN(savedListItem.price)) {
		cartID--;
		return;
	}

	let tr = document.createElement("tr");
	document.getElementById("cartTable").appendChild(tr);
	let td = document.createElement("td");
	td.innerHTML = savedListItem.iD + ".";
	document.getElementsByTagName("tr")[cartTrNum+1].appendChild(td);
	td = document.createElement("td");
	td.innerHTML = savedListItem.name;
	document.getElementsByTagName("tr")[cartTrNum+1].appendChild(td);
	td = document.createElement("td");
	td.innerHTML = savedListItem.price + "p.";
	document.getElementsByTagName("tr")[(cartTrNum+1)].appendChild(td);
	i++;

	document.getElementsByName("lineNum")[0].value = "";

}

function calcOrderSum() {
	let orderSum = 0;
	for (let i = 0; i < cartArr.length; i++) {
		orderSum += cartArr[i].price;
	}
	document.getElementById("orderSum").innerHTML = orderSum;
}