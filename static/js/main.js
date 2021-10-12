let predict_btn = document.querySelector(".predict-btn")
predict_btn.addEventListener("click",function(){
    console.log("get called")
	var form_data = new FormData(document.querySelector("#note-form"));
    predict_btn.style.display = "none"
    document.querySelector(".loader").style.display = "block"
    const otherParam = {
    	body: form_data,
    	method: "POST"
    }
    fetch("/predict",otherParam).then(data=>{
    	return data.text()
    }).then(res=>{
        document.querySelector("#result").classList.add("result-display")
    	document.querySelector("#result").innerHTML = res
        document.querySelector("#result").style.display = "block"
        document.querySelector(".loader").style.display = "none"
    }).catch(error=>console.log(error))
})



