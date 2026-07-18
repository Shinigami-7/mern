let a = document.querySelector('#para');
a.innerHTML = '<p> yo ho ho </p>';  // replace the current content with this in that id


let fheading = document.createElement('h1');   // creating the new heading
fheading.textContent = "This is Shinigami" // adding the content in heading
let btag = document.querySelector('body');
btag.appendChild(fheading);  //adding the new heading at last


let cont = document.querySelector("#container");
let newelement = document.createElement("span");
newelement.textContent = "This is added text"
cont.insertAdjacentElement('beforebegin',newelement); // to add the content at the top of the container

let child = document.querySelector("#spara");
cont.removeChild(child); // remove child element from the parent cont element