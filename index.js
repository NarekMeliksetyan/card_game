let container = document.querySelector('.container');
let x=true;
let count= new Array(12).fill(0);

function shuffle(array) {
	 array.sort(() => Math.random() - 0.5);
}


container.addEventListener('click', function (evt) {
	
	 if(x===true)
	 {   
		

		if(evt.target.matches('.gameCard')) {
			
		  let arrayFromCollection = [...container.children];
		  shuffle(arrayFromCollection);
	      container.append(...arrayFromCollection);
		  gameCardShuffle();
		
		  let iVal = evt.target.textContent;
			if(!(count.includes(iVal))){
				count[+iVal-1]=iVal;
			  if(!(count.includes(0))){
				 winnFoo()
				}
			} else{  drawGameEnd()  };
	  	
	}
}
})


container.style.transform = "rotateY(720deg)"
function gameCardShuffle(){
	if(container.style.transform === "rotateY(720deg)"){
		container.style.transform = "rotateY(360deg)"
		container.style.transition ="1s"
	}else{container.style.transform = "rotateY(720deg)";
	container.style.transition = "1s"}
		
	}
function drawGameEnd(){
		let image = new Image(400, 500);
	    image.className="center"
		image.src = 'GO.jpg.png';
		document.body.appendChild(image);
		button()
	 x=false
}

function winnFoo(){
	 	let myImage = new Image(250,350);
	 	myImage.className="center"
	 	myImage.src ='winn.jpeg.jpg' ;
     	document.body.appendChild(myImage);
	 	button()
	 x=false
     
}
 
function button(){
  let btn = document.createElement("BUTTON");
  btn.className="btn"
  btn.innerHTML = "TRY AGAIN"
  document.body.appendChild(btn)

     btn.addEventListener('click', function (evt) {
		 x=true
		 count.fill(0);
	  document.querySelector(".center").remove();
	  document.querySelector(".btn").remove();
	 })

	 btn.addEventListener("mouseenter", ()=>{
		 btn.style.padding=" 30px 40px"
		 btn.style.borderRadius="50px"
	 })

	 btn.addEventListener("mouseleave",()=>{
		btn.style.padding=" 20px 30px"
		btn.style.borderRadius="35px"	
	 })
}









