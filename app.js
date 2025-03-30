console.log("JS");

function loadCountries(){
    let countriesList = document.getElementById("countriesList");
    let body = "";
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(dataList=>{
        dataList.forEach(element => {
            body+=`
                               <div class="col">
                        <div class="card shadow-sm">
                            <img src="${element.flags.png}" alt="">
                            <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to
                                    additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small class="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
            `
            
        });

        countriesList.innerHTML=body;
    })
}


loadCountries();