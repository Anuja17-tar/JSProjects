//Web Page crawler

let a = document;
// a = document.all;
// a = document.forms[0];
// a = document.body
// a = document.links;
//
// a=document.images[0];
let link = "harry";


a = document.links[0].href;

let b = a.toString();

if(b.includes(link)){
    console.log(a);
}
// single Element selectors
let element = document.getElementById('first');
//element =element.className;
// element = element.childNodes;
// element = element.parentNode
 element.innerHTML =`<b>Hi</b>`
 element.innerText = 'Hello'

// console.log(element.innerText)

let sel = document.querySelector('#first')
sel = document.querySelector('.child')
sel = document.querySelector('h1')
// console.log(sel)

// Multi Element Selectors
 let elems = document.getElementsByClassName('container')
 
//  console.log(elems[0].getElementsByClassName('child'))
elems = document.getElementsByTagName('div')
// to iterate 
Array.from(elems).forEach(function(element){
    element.style.color = 'blue'
})
// console.log(elems)

element = document.querySelector('.container')
let nodeName = element.childNodes[1].nodeName;
let nodeType = element.childNodes[6].nodeType;
console.log(nodeName)
console.log(nodeType)
// console.log(element)
console.log(element.firstChild)
console.log(element.lastChild)
console.log(element.firstElementChild)
console.log(element.lastElementChild)
console.log(element.firstElementChild.nextElementSibling)

let newElement = document.createElement('div')
newElement.innerHTML =`<b> Hi, I created this </b>`
newElement.className = 'child'
newElement.id = 'second'
newElement.setAttribute('title','mytitle')

element.appendChild(newElement)

let hElement = document.createElement('h1')
hElement.innerText='Go to code with harrry';
let aElement = document.createElement('a');
aElement.innerHTML = 'Code'
aElement.setAttribute('href', 'https://www.codewithharry.com/')
element.appendChild(hElement)
element.appendChild(aElement)