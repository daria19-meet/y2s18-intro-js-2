function askColor(){
	var color=prompt("Choose a color for the background!");
	var body=document.getElementsByTagName("body");
	body[0].style.backgroundColor=color;
}