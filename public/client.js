let latInput = document.querySelector('#lat');
let lonInput = document.querySelector('#lon');

let loadBtn = document.querySelector('#load');
console.log(latInput.value);
loadBtn.addEventListener('click', () => {
  fetch(`/data?lat=37.26&lon=37.26`)
    .then((res) => res.json())
    .then((resJson) => {
      // console.log(resJson);
      document.querySelector('h2').innerHTML =
        resJson.city + ' ' + resJson.temperature;
    });
});
