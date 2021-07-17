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
const listt=searchBar.querySelector('#listt');

//adding event listners 
// button.addEventListener('click',get);

searchBox.addEventListener('keyup',(e)=>{ //search box reasults
    console.log(e.target.value)
    if(e.target.value===''){ //to check if empty string is entered
        const listt=searchBar.querySelector('#listt');
        if(listt!=null){
            listt.remove();
        }
       return; 
    }else{
    // gering list of all food releated to search
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
    }
})

searchBar.addEventListener('click',(e)=>{ //gating info about food clicked 
    if(e.target.id>0){
        console.log(e.target.id);
        localStorage.setItem('id',e.target.id);
        location.href='./foodInfo.html'
    }
    // get(e.target.id);
})

