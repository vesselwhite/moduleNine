const useRequest = (page, limit, cb) => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then(response => { return response.json()})
        .then(data => { 
            console.log(data)
            if(cb){
                cb(data);
            }
        })
}
  
function displayResult(urlCollection){
    let cards = '';
    for(item of urlCollection){
        const img = `
        <div class="img">
            <img class = "img__item"src = "${item.download_url}">
            <p>${item.author}</p>
        </div>
        `;
        cards+= img;;
    }
    
    resultContainer.innerHTML = cards;
    localStorage.setItem("myKey", cards);
}

const btn = document.querySelector('button');
const resultContainer = document.querySelector('#resultContainer');

btn.addEventListener('click', ()=>{
    const pageInput = document.getElementById('page').value;
    const limitInput = document.getElementById('limit').value;
    if(!(pageInput>=1 && pageInput<=10)){
        resultContainer.textContent = "Номер страницы вне диапазона от 1 до 10";
        if(!(limitInput>=1 && limitInput<=10)){
            resultContainer.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
        }
    } else if(!(limitInput>=1 && limitInput<=10)){
        resultContainer.textContent = "Лимит вне диапазона от 1 до 10";
    } else {
        useRequest(pageInput, limitInput, displayResult);
    }
})

if(!resultContainer.innerHTML){
    resultContainer.innerHTML = localStorage.myKey;
}