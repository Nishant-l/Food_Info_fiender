// data
let data;
let imgSrc,namee;

// cashing dom
const button=document.getElementById('button');
const imgEle=document.querySelector('img');
const nameEle=document.querySelector('#name');
//adding event listners 
button.addEventListener('click',get)


function get(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res=>res.json())
    .then((data)=>{
        data=data.meals[0];
        imgEle.setAttribute('src',data.strMealThumb);
        nameEle.textContent=data.strMeal;
        }
    )
}

