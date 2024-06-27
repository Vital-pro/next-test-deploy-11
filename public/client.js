let latInput = document.querySelector('#lat');
let lonInput = document.querySelector('#lon');

let loadBtn = document.querySelector('#load');
console.log(latInput.value);
loadBtn.addEventListener('click', () => {
  fetch(
    `https://next-test-deploy-11.vercel.app/data?lat=37.37&lon=37.37}`
  )
    .then((res) => res.json())
    .then((resJson) => {
      // console.log(resJson);
      document.querySelector('h2').innerHTML =
        resJson.city + ' ' + resJson.temperature;
    });
});
