function getDataUser() {
  const dataUser = localStorage.getItem("user");
  if (dataUser) {
    const conData = JSON.parse(dataUser);

    const imgElm = document.getElementById("img_user");
    imgElm.src = conData.imgUrl;

    const usernameElm = document.getElementById("username");
    usernameElm.innerHTML = conData.username;
  } else {
    window.location.href = "index.html";
  }
}
getDataUser();

function onLogout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
