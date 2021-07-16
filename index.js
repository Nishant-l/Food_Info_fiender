// data
let data;
let imgSrc,namee;

// cashing dom
const button=document.getElementById('button');
const imgEle=document.querySelector('img');
const nameEle=document.querySelector('#name');
const searchBox=document.querySelector('#searchBox');
const searchList=document.querySelector('#searchList');
const searchBar=document.querySelector('#searchBar');

//adding event listners 
button.addEventListener('click',get);
searchBox.addEventListener('keyup',(e)=>{
    console.log(e.target.value)
    if(e.target.value===''){
        const listt=searchBar.querySelector('#listt');
        if(listt!=null){
            listt.remove();
        }
       return; 
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`)
    .then(res=>{
        return res.json()
    })
    .then((data)=>{
        return data.meals;
    })
    .then((data)=>{
        data=data.map((ele)=>{
            let temp={
                id:ele.idMeal,
                name:ele.strMeal
            };
            return temp;
        })
        return data
    })
    .then((data)=>{
        // data.map((e)=>{
        //     console.log(e.name);
        // })
        let list=document.createElement('ul');
        list.setAttribute('id','listt');
        data.map((e)=>{
            let node=document.createElement('li');
            node.appendChild(document.createTextNode(e.name));
            node.setAttribute('id',e.id);
            list.appendChild(node);
        })
        return list;
    })
    .then((data)=>{
        const listt=searchBar.querySelector('#listt');
        if(listt!=null)
            listt.remove();
        searchBar.appendChild(data);
    })
    .catch(()=>{
        const listt=searchBar.querySelector('#listt');
        if(listt!=null)
            listt.remove();
    })
})

searchBar.addEventListener('click',(e)=>{
    console.log(e.target.id);
    get(e.target.id);
})

function get(id){
    fetch(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res=>res.json())
    .then((data)=>{
        data=data.meals[0];
        imgEle.setAttribute('src',data.strMealThumb);
        nameEle.textContent=data.strMeal;
        }
    )
}

