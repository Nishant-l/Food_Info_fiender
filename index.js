// data
let data;
let imgSrc,namee;

// cashing dom
const button=document.getElementById('button');
const imgEle=document.querySelector('img');
const nameEle=document.querySelector('#name');
//adding event listners 
button.addEventListener('click',get)

// defining functions on event listners
function get(){
    const xhrRequest=new XMLHttpRequest();
    xhrRequest.onload=function(){
        data=JSON.parse(xhrRequest.response);
        data=data.meals[0];
        imgEle.setAttribute('src',data.strMealThumb);
        nameEle.textContent=data.strMeal;
        // vedEle.setAttribute('src',data.strYoutube);
        console.log(data.strYoutube);

    }

    xhrRequest.open('get','https://www.themealdb.com/api/json/v1/1/random.php');
    xhrRequest.send();
}

console.log(data,'###############');
