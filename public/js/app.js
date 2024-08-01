const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const address = search.value;
  messageOne.style.color = "black";
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetchWhetherData(address);
});

const fetchWhetherData = (address) => {
  return fetch(`http://localhost:3000/weather?address=${address}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          search.value = "";
          messageOne.textContent = data.error;
          messageOne.style.color = "red";
        } else {
          search.value = "";
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    }
  );
};
