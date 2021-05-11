

// Home animation 


const text= document.querySelector('.test');
const strText= text.textContent;
const splitText= strText.split('');
text.textContent="";
let space= "<br/>";
for( let i=0; i<splitText.length; i++){
    if(splitText[i]!=" "){
        text.innerHTML+="<span>" + splitText[i] + "</span>";
    }
    else {
        text.innerHTML+='<span>' +space+ '</span>';
    }
}

let char=0;
let timer= setInterval(onTick, 50);

function onTick(){
    const span= text.querySelectorAll('#dev span')[char];
    span.classList.add('fade');
    char++;
    if(char===splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer= "";
}

