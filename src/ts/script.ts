const button = document.querySelector(".button")

buttonForm?.addEventListener("click", (event) => {
   event.preventDefault();
   const userMessage = document.getElementsByTagName("input")[0].value;
   console.log("Сообщение: ", userMessage);
})