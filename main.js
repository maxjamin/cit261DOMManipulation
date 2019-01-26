
var incrText = 3;

function addBook() {
	//append child()
	var input = document.getElementById("bookName").value;
	var author = document.getElementById("authorName").value;
	var textBox = document.getElementById("textBox").value;
	var checkList= document.getElementById("books");
	console.log(text);

	if(input != "")
	{

		var node = document.createElement("LI");
		var text = document.createTextNode(input);
		node.appendChild(text);
		node.id = input;

		var node01 = document.createElement("UL");
		var text01 = document.createTextNode(" ");
		node01.appendChild(text01);

		var node02 = document.createElement("LI");
		var text02 = document.createTextNode(author);
		node02.appendChild(text02);
		node02.id = author;

		var node03 = document.createElement("LI");
		var text03 = document.createTextNode(textBox);
		node03.appendChild(text03);
		node03.id = "textBox" + incrText;

		node01.appendChild(node02);
		node01.appendChild(node03);
		node.appendChild(node01);
		checkList.appendChild(node);

	}
	console.log(checkList.innerHTML);
	incrText += 1;
}


function addToFront() {

	var input = document.getElementById("bookName").value;
	var author = document.getElementById("authorName").value;
	var textBox = document.getElementById("textBox").value;
	var checkList= document.getElementById("books");

	var checkList= document.getElementById("books");

	if(input != "")
	{

		var node = document.createElement("LI");
		var text = document.createTextNode(input);
		node.appendChild(text);
		node.id = input;

		var node01 = document.createElement("UL");
		var text01 = document.createTextNode(" ");
		node01.appendChild(text01);

		var node02 = document.createElement("LI");
		var text02 = document.createTextNode(author);
		node02.appendChild(text02);
		node02.id = author;

		var node03 = document.createElement("LI");
		var text03 = document.createTextNode(textBox);
		node03.appendChild(text03);
		node03.id = "textBox" + incrText;

		node01.appendChild(node02);
		node01.appendChild(node03);
		node.appendChild(node01);

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