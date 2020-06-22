var i=0;
var images=[];
images[0]="../../assets/images/back1_03.png"
images[1]="../../assets/images/back2_02.png"
images[2]="../../assets/images/back1_03.png"
images[3]="../../assets/images/back2_02.png"
images[4]="../../assets/images/man_06.png"

function changeImg(){
	document.slide.src=images[i];
	if(i<images.length-1)
	{
		i++;
	}
	else{
		i=0;
	}
}
    setInterval(changeImg,2000);
    
    setInterval("changeText()", 2000);
    function changeText(){
		var x=document.getElementById("text");

       
        if(x.innerHTML=="amazing team leads")
		x.innerHTML="the best collaborating team";
		else if(x.innerHTML=="the best collaborating team")
		x.innerHTML="nice working atmosphere";
		else if(x.innerHTML=="nice working atmosphere")
        x.innerHTML="good team members";
        else if(x.innerHTML=="good team members")
		x.innerHTML="an amazing ceo";
		else x.innerHTML="amazing team leads";
		
		if(x.style.color=="white")
		x.style.color="red";
		else if(x.style.color=="red")
		x.style.color="blue";
		else x.style.color="white";

	}

var string="Nagendra & Sai Krishna.....";
var strArray=string.split();

function animate(){
	if(strArray.length > 0){
		document.getElementById("animation").innerHTML += strArray.shift();
	}
	else{
document.getElementById("animation").innerHTML="";
	 strArray=string.split("");
		}
		setTimeout(animate,150);

}

function vanish(){
	document.getElementById("nag").style.display="none";
	document.getElementById("det").style.display="block";

}
function come(){
	document.getElementById("nag").style.display="block";
	document.getElementById("det").style.display="none";

}




	

           
            








