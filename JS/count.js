let grocCount = document.querySelector(".grocery-count");
let othCount = document.querySelector(".other-count");
let allCount = document.querySelector(".count-container");
let noItems = document.querySelector(".no-items");



    fetch(api)
        .then(res => res.json())
        .then(data1 => {
            let countAll = data1.count;

            grocCount.innerHTML = countAll[1][0]
            othCount.innerHTML = countAll[1][1]
            allCount.innerHTML = countAll[1][2]
            
            

        })