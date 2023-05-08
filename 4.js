const button = document.querySelector('button');

const useRequest = (height, width, cb) => {
  fetch(`https://picsum.photos/${height}/${width}`)
    .then(response => {
      if(cb){
        cb(response.url);
      }
    })
}

function displayResult(url){
  const img = `
    <div class="img">
    <img src = "${url}">
    </div>
`;

  resultContainer.innerHTML = img;
}

button.addEventListener('click', ()=>{
  const inputValue1 = Number(document.getElementById('input1').value);
  const inputValue2 = Number(document.getElementById('input2').value);
  if(inputValue1 >= 100 && inputValue1 <= 300 && inputValue2 >= 100 && inputValue2 <= 300){
    useRequest(inputValue1, inputValue2, displayResult);
  } else {
    document.getElementById('resultContainer').textContent = 'одно из чисел вне диапазона от 100 до 300';
  }
})
