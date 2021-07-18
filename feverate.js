// Cashing the DOM
const fevList=document.querySelector('#fevList');
const homeButton=document.querySelector('#home');

// retreving Data and dynamically adding element to HTML
let listElement=JSON.parse(localStorage.getItem('fev'));
let fragment=document.createDocumentFragment(); //to improve performance by avoiding rendering every time a element is added
console.log(listElement);

for(let i in listElement){
    console.log(i);
    let listItem=document.createElement('li');
    let button=document.createElement('button');
    button.setAttribute('id',i);
    button.appendChild(document.createTextNode('remove'));
    listItem.appendChild(document.createTextNode(listElement[i]));
    listItem.appendChild(button);
    listItem.setAttribute('id',i);
    fragment.appendChild(listItem);
}

fevList.append(fragment); // append fragment to ul all at once performance improvement

// adding Event Listners

fevList.addEventListener('click',(e)=>{
    let clickedElement=e.target;
    // console.log(clickedElement.tagName);
    if(clickedElement.tagName==='BUTTON'){ //remove element 
        delete listElement[clickedElement.id];
        localStorage.setItem('fev',JSON.stringify(listElement));
        clickedElement.parentElement.remove()
    }else if(clickedElement.tagName==='LI'){ //if clicked on list item take to info page of item;
        localStorage.setItem('id',clickedElement.id);
        location.href='./foodInfo.html';
    }
})

homeButton.addEventListener('click',()=>{
    location.href='./index.html';
})