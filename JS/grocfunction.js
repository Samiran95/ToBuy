let api = "https://script.google.com/macros/s/AKfycbzqcAr5iX6yO51NseJ1Y5icotGQMa2PNV6ySZjkso5DkVd_-TmsFD0Q8A_oNg8QOd1kDQ/exec";
let grocForm = document.querySelector(".grocery-important-form");
let grocSubmit = document.querySelector(".grocery-add");
let grocContent = document.querySelector(".groceries-list");

function grocAdd() {
    let obj = {
        name: grocForm[0].value,
        quantity: grocForm[1].value,
        metric: grocForm[2].value,
        category: grocForm[3].value,

    }

    fetch(api, {
        method: "POST",
        body: JSON.stringify(obj)
    })
        .then(res => res.text())
        .then(data => {
            grocRead()
            alert(data)
            grocForm.reset()
        });
}


function grocRead() {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let groc = data.content;
            let grocContents = groc.map(each => {

                if(each[4]=="Groceries"){


                return `
                <div class="groceries-content">
                <div class="groceries-content-left">
                    <div class="groceries-content-left-left">
                        <div class="groceries-icon">
                            <i class="fa-solid fa-apple-whole"></i>
                        </div>
                    </div>
                    <div class="groceries-content-left-right">
                        <div class="groceries-content-left-upper">${each[1]}</div>
                        <div class="groceries-content-left-lower">${each[2]}&nbsp${each[3]}</div>
                    </div>

                </div>
                <div class="groceries-content-right" onclick="delData(${each[0]})"><i class="fa-solid fa-trash"
                        id="grocery-delete"></i></div>
            </div>
        
        
        `
         } })
            grocContent.innerHTML= grocContents.join("");
            console.log(data.count[1][0])
        })
}
grocRead()

function delData(id){
    fetch(api+`?del=true&id=${id}`)
    .then(res=>res.text())
    .then(data=>{
        grocRead()
        othRead()
        alert(data)
    })
}

