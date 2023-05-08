  function useRequest(limit, callback){
    var xhr = new XMLHttpRequest();
    xhr.open('get', `https://picsum.photos/v2/list?limit=${limit}`);
  
    xhr.onload = function(){
      if(xhr.status != 200){
        resultContainer.textContent = `Ошибка! Статус ответа: ${xhr.status}`;
      } else {
        const result = JSON.parse(xhr.response);
        if(callback) {
          callback(result);
        }
      }
    }
  
    xhr.onerror = function(){
      resultContainer.textContent = `Ошибка! Статус ответа: ${xhr.status}`;
    }
  
    xhr.send();
  }
  
  function displayResult(apiData){
    let cards = '';
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src = "${item.download_url}"
            class = "card-image">
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
  
    resultContainer.innerHTML = cards;
  }
  
  const btn = document.querySelector('button');
  const numberInput = document.querySelector('input');
  resultContainer = document.getElementById('resultContainer');
  
  btn.addEventListener('click', ()=>{
    const number = Number(numberInput.value);
    if (!(number >= 1 && number <= 10)) {
      resultContainer.textContent = 'Число вне диапазона от 1 до 10.'; 
  } else {
      useRequest(number, displayResult)
  }
  });