function addBook() {
	//append child()
	var input = document.getElementById("bookName").value;

	var checkList= document.getElementById("books");

	if(input != "")
	{

		var node = document.createElement("LI");
		var text = document.createTextNode(input);
		node.appendChild(text);
		node.id = input;

		checkList.appendChild(node);
	}
	console.log(checkList.innerHTML);
}


function addToFront() {

	var input = document.getElementById("bookName").value;

	var checkList= document.getElementById("books");

	if(input != "")
	{

		var node = document.createElement("LI");
		var text = document.createTextNode(input);
		node.appendChild(text);
		node.id = input;

		checkList.insertBefore(node, checkList.childNodes[0]);
	}
	console.log(checkList.innerHTML);
}


function removeBook()
{
	var checkList = document.getElementById("books");
	var input = document.getElementById("removeName").value;
	var one = document.getElementById(input);

	console.log(input);
	console.log(one);

	//checkList if books has a child node.
	if (checkList.hasChildNodes() && (one != null)) {
		console.log("test01")
		checkList.removeChild(one);

	}




	console.log(checkList.innerHTML);
	
}