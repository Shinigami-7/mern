let par = document.getElementById('fpara')
function changes(){
    par.textContent = "This is Shinigami";
}

par.addEventListener('click',changes);

// par.removeEventListener('click',changes);  // remove event from the code 

let anc = document.getElementById('fanchor');
anc.addEventListener('click',function(event){
    event.preventDefault();
    anc.textContent = "Clicking is done";
})


// let p=document.querySelectorAll('p');
function paras(event){
    alert("The context is : "+event.target.textContent);
}

// for(let i=0;i<=p.length;i++){
//     let para=p[i];
//     para.addEventListener('click',paras);
// }


let mydiv = document.getElementById('paras');
mydiv.addEventListener('click',paras); 