//Задача №1

let block = document.getElementById('my-block');
let wrap = document.getElementById('wrap');
let p = document.createElement('p');

block.onmousemove=function(e){
	p.innerHTML = e.offsetX + 'x' + e.offsetY;
	p.style.textAlign = "center";
	wrap.appendChild(p);
}

//Задача №2
let folder = document.getElementById('folder');
folder.addEventListener("dblclick", myScript);

function myScript(){
	folder.style.backgroundImage = "url(img/open.png)";
	folder.style.backgroundSize = "cover"; 
}

//Задача №3
let boxWrap = document.getElementById('box-wrap');

for(let i = 0; i < 400; i++){
	let div = document.createElement('div');
	div.classList.add('my-box');
	boxWrap.appendChild(div);
	toRound(div);
}
function toRound(b){
	b.addEventListener("mouseover", function (){round(b)});
}
function round(a){
	a.style.borderRadius = '50%';
	a.style.transition = 'all .5s';
}

//Задача №4
let photoWrap = document.getElementById('for-img');
let photo = document.getElementsByClassName('all-img__photo');

Array.from(photo).forEach(function(element) {
      element.addEventListener('click', function (){change(element)});
    });
function change(f){
     let src = f.getAttribute('src');
     photoWrap.style.background = 'url(' + src + ') no-repeat'; 
     photoWrap.style.backgroundSize = 'contain'; 
 }

 //Задача №5

    let mybox = document.getElementById('down');
    mybox.style.transform = "translateY(0px)";
    mybox.addEventListener('click', function(){toDown(mybox)});

function toDown(m){
    let val = mybox.style.transform;
	let valN = parseInt(val.replace(/\D+/g,""));
	let tt = valN + 100;
 	m.style.transform = "translateY(" + tt + "px)";
 }


//Задача №6

let trig = document.getElementById('trig-wrap__box');
let count = 0;
trig.addEventListener('click', function(){move(trig)});

function move(move){
	count = count + 1;
    if(count === 1){
        move.style.margin = "0 auto";
        console.log(count);
        return count;
    } else if(count === 2){
        move.style.marginRight = "0";
        console.log(count);
        return count;
    } else if(count === 3){
    	count = 0;
        move.style.marginLeft = "0";
        console.log(count);
        return count;
    }
}