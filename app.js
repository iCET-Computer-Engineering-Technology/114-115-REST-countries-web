console.log("JS");

let countriesArrayList = [];

let index = 0;

function loadCountries(){
    let countriesList = document.getElementById("countriesList");
 
    let body = "";
    
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(dataList=>{
        countriesArrayList=dataList;
        loadModalData();
        dataList.forEach((element,index) => {
            
            body+=`
                               <div class="col">
                        <div class="card shadow-sm">
                            <img src="${element.flags.png}" alt="">
                            <div class="card-body">
                            <h4>${element.name.common}</h4>
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to
                                    additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                       <button type="button" class="btn btn-warning show-more" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="loadModalData(${index})">View More-></button>
                                    </div>
                                    <small class="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                        <!-- Modal -->

            `
        });



        countriesList.innerHTML=body;
    })
}


async function loadModalData(index){
    // console.log("modal");
    let modalBody = document.getElementById("modal-body");
    // console.log(modalBody);

    console.log(countriesArrayList[index]);

    modalBody.innerHTML = `<img src="${countriesArrayList[index].flags.png}" alt="">`

  
}


function search(){
    let searchTxt = document.getElementById("txtSearch").value;
    console.log(searchTxt);
    fetch(`https://restcountries.com/v3.1/name/${searchTxt}`).then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    
}


loadCountries();





