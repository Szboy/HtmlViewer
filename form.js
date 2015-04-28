function getwords(){
	myOutput= document.getElementById('output');
	ErrorOutput = document.getElementById('error');
	textbox = document.getElementById('words');
	if (textbox.value.indexOf("</") >= 0) {
 		myOutput.innerHTML= textbox.value
 		ErrorOutput.innerHTML=""
	} else {
		myOutput.innerHTML= ""
		ErrorOutput.innerHTML="Error: No html entered"
	}
}