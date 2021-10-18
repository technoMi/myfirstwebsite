const button = document.querySelector(".button")

button?.addEventListener("click", (event) => {
   event.preventDefault();
   const userName = document.getElementsByTagName("input")[0].value;
   console.log(userName);
})