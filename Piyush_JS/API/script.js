const city_name = document.getElementById("_name");
const country = document.getElementById("_country");
const temp = document.getElementById("_temp");

const location_input = document.getElementById("location");
const click = document.getElementById("click");

async function getData(city_name) {
  let data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=89674fc9db8a4c98929114034250811&q=${city_name}&aqi=yes`
  );
  //   console.log(typeof data);
  //   console.log(data);
  let promise = await data.json();
  //   console.log(typeof promise);
  //   console.log(promise);
  return promise;
}
location;

click.addEventListener("click", async () => {
  //   city_name = location_input.value;
  const values = await getData(location_input.value);
  city_name.innerText = `City: ${values.location.name}`;
  country.innerText = `Country: ${values.location.country}`;
  temp.innerText = `Temp: ${values.current.temp_c}°c`;
});
