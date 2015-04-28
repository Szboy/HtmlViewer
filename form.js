function getwords(){
	ErrorOutput = document.getElementById('error');
	textbox = document.getElementById('words');
	if ((textbox.value).indexOf("</") >= 0) {
		OpenWindow=window.open("", "newwindow");
		OpenWindow.document.write(textbox.value)
		self.name="main"
 		ErrorOutput.innerHTML=""
	} else {
		ErrorOutput.innerHTML="Error: No html entered"
	}
}