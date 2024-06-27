// async function getData() {
//   let res = await fetch('http://localhost:3333/data');
//   let resJson = await res.json();
//   console.log(resJson)
//   document.querySelector('h2').innerHTML = resJson.city + ' ' + resJson.temperature;
// }

// getData();

let latInput = document.querySelector('#lat');
let lonInput = document.querySelector('#lon');

let loadBtn = document.querySelector('#load');
console.log(latInput.value);
loadBtn.addEventListener('click', () => {
  fetch(`http://localhost:3333/data?lat=${latInput.value}&lon=${lonInput.value}`)
    .then((res) => res.json())
    .then((resJson) => {
      // console.log(resJson);
      document.querySelector('h2').innerHTML =
        resJson.city + ' ' + resJson.temperature;
    });
});
