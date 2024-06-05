function highlight() {
    //Write your code here
  let strong=document.querySelectorAll('strong')
	 strong.forEach(element => {
        element.style.color = 'green';
    });

}


function return_normal() {
    //Write your code here
let strong=document.querySelectorAll('strong')
     strong.forEach(element => {
        element.style.color = 'black';
    });

}
