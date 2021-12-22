/*
* Javascript Ready
* other scripts
* 2020year
*/

/*opan*/
let button = document.querySelector(".but").onclick = showMenu
let menu   = document.querySelector(".show_m")
menu.style.display = "none"

function showMenu() {
	if (menu.style.display == "none") {
		menu.style.display = "block"
	} else {
		menu.style.display = "none"
	}
}

