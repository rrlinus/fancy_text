let text=document.querySelector('h1')
let textString=text.textContent;
const arr=textString.split('');
console.log(arr)
text.textContent=''
for(let i=0;i<arr.length;i++){
    text.innerHTML +=`<span> ${arr[i]}</span>`
}
let char=0;
let timer=setInterval(onTick,50);

function onTick(){
    const span=document.querySelectorAll('span')[char]

    span.classList.add('fade');
    char++;
    if(char==arr.length){
        clearInterval(timer)
        timer=null;
        return;
    }
    

}