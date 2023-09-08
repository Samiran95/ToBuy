let othForm = document.querySelector(".other-important-form");
let othSubmit = document.querySelector(".other-add");
let othContent = document.querySelector(".others-list")

function othAdd(){
    let obj = {
        name : othForm[0].value,
        quantity : othForm[1].value,
        metric : othForm[2].value,
        category : othForm[3].value,

    }

    fetch(api,{
        method:"POST",
        body:JSON.stringify(obj)
    })
    .then(res => res.text())
    .then(data => {
        othRead()
        alert(data)
        othForm.reset()
    });
}



function othRead() {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let oth = data.content;
            let othContents = oth.map(each => {
                
                if(each[4]=="Others"){



                return `
                <div class="others-content">
                    <div class="others-content-left">
                        <div class="others-content-left-left">
                            <div class="others-icon">
                                <i class="fa-solid fa-shop"></i>
                            </div>
                        </div>
                        <div class="others-content-left-right">
                            <div class="others-content-left-upper">${each[1]}</div>
                            <div class="others-content-left-lower">${each[2]}&nbsp${each[3]}</div>
                        </div>

                    </div>
                    <div class="others-content-right" onclick="delData(${each[0]})"><i class="fa-solid fa-trash" id="other-delete"></i>
                    </div>
                </div>
        
        
        `
         } })
            othContent.innerHTML= othContents.join("");
        })
}
othRead()
