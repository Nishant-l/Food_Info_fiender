// Healper functions
(function get(id){
    const imgEle=document.querySelector('img');
    const nameEle=document.querySelector('#name');
    fetch(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${localStorage.id}`)
    .then((res)=>{
        // location.href='./index2.html'
        return res.json()
    })
    .then((data)=>{
        data=data.meals[0];
        imgEle.setAttribute('src',data.strMealThumb);
        nameEle.textContent=data.strMeal;
    })
    // .then(()=>{
    //     const listt=searchBar.querySelector('#listt');
    //         if(listt!=null)
    //             listt.remove();
    // })
})();

// cashing the dom
const homePage=document.querySelector('#HomePage');

// adding event listners
homePage.addEventListener('click',()=>{
    location.href='./index.html';
})