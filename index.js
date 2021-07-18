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
searchBox.addEventListener('keyup',(e)=>{ //search box reasults
    console.log(e.target.value)
    let fev=localStorage.getItem('fev');
    console.log(fev+'----------------------------')
    fev=JSON.parse(fev);
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
            let list=document.createElement('ul');
            list.setAttribute('id','listt');
            for(let e of data){
                let node=document.createElement('li');
                let button=document.createElement('button');
                button.append(document.createTextNode('addToFev'));
                button.setAttribute('id',e.id);
                node.appendChild(document.createTextNode(e.name));
                console.log
                if(fev==null||fev.hasOwnProperty(e.id)==false){
                    node.appendChild(button);}
                node.setAttribute('id',e.id);
                list.appendChild(node);
            }
            // data.map((e)=>{
            //     let node=document.createElement('li');
            //     // let icon=document.createElement('img');
            //     // icon.setAttribute('src','./static_assets/star_outline_black_24dp.svg');
            //     // icon.setAttribute('class','fev_button');
            //     let button=document.createElement('button');
            //     button.append(document.createTextNode('addToFev'));
            //     button.setAttribute('id',e.id);
            //     node.appendChild(document.createTextNode(e.name));
            //     node.appendChild(button);
            //     // node.appendChild(icon);
            //     node.setAttribute('id',e.id);
            //     list.appendChild(node);
            // })
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
    console.log(e.target.tagName);
    if(e.target.id>0 && e.target.tagName!='BUTTON'){
        console.log(e.target.id);
        localStorage.setItem('id',e.target.id);
        location.href='./foodInfo.html'
    }
    else if(e.target.tagName==='BUTTON'){
        let fev=localStorage.getItem('fev');
        if(fev==null){
            let tempp={};
            tempp[e.target.id]=true;
            localStorage.setItem('fev',JSON.stringify(tempp));
        }else{
            fev=JSON.parse(fev);
            fev[e.target.id]=true;
            localStorage.setItem('fev',JSON.stringify(fev));
            console.log(fev);
        }
    }
})

