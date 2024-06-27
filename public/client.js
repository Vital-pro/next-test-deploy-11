let latInput = document.querySelector('#lat');
let lonInput = document.querySelector('#lon');

let loadBtn = document.querySelector('#load');
console.log(latInput.value);
loadBtn.addEventListener('click', () => {
  fetch(`/api/data?lat=${latInput.value}&lon=${lonInput.value}`)
    .then((res) => res.json())
    .then((resJson) => {
      // console.log(resJson);
      document.querySelector('h2').innerHTML =
        resJson.city + ' ' + resJson.temperature;
    });
});


// let btnTimeOut = document.querySelector('#timeOut');
// btnTimeOut.addEventListener('click', () => {
//   setTimeout(() => {
//     console.log(2)
//   }, 5000);
// })