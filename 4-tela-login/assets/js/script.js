const mode = documemt.getElementById("mode_icon");
const form = documemt.getElementById("login_form");

mode.addEventListener("click", () => {
  if (mode.classList.contains("fa-moon")) {
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");

    form.classList.add("dark");
    return;
  }
  mode.classList.add("fa-sun");
  mode.classList.remove("fa-moon");
  form.classList.add("dark");
});


