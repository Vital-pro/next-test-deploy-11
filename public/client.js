let latInput = document.querySelector('#lat');
let lonInput = document.querySelector('#lon');

let loadBtn = document.querySelector('#load');
console.log(latInput.value);
loadBtn.addEventListener('click', () => {
  // (fetch`/api/data?lat=${latInput.value}&lon=${lonInput.value}`) //todo так будет работать и в prod, НЕОТНОСительный путь!, если бэк и фронт будут на ОДНОМ хостинге
  fetch(
    `https://next-test-deploy-11.vercel.app/api/data?lat=${latInput.value}&lon=${lonInput.value}`
  )
    // todo такой fetch можно отправить прямо с client-a, ссоответсвтенно, поменяв при этом и данные для отображения
    // todo // resJson.name + ' ' + resJson.main.temp + ' °C';
    // fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=${latInput.value}&lon=${lonInput.value}&appid=325f30978fbd6d014691785ced717615&units=metric`
    // )
    .then((res) => res.json())
    .then((resJson) => {
      // console.log(resJson);
      document.querySelector('h2').innerHTML =
        // resJson.city + ' ' + resJson.temperature + ' °C';
        `City: ${resJson.city} temperature: ${resJson.temperature} °C`;
    });
});


// let btnTimeOut = document.querySelector('#timeOut');
// btnTimeOut.addEventListener('click', () => {
//   setTimeout(() => {
//     console.log(2)
//   }, 5000);
// })