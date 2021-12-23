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





// // // generate callback 
// function generate_event(arg, callback) {
// 	callback("Slavik" + " \neach other item")
// }	


// // callback 
// function run_e_callback(name = "default") {
// 	console.log('i can see you again \n' + name)
// }

// generate_event("can you see there args", run_e_callback)