function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  //pegar a imagem
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png") //modifica/altera um atributo
  } else {
    //se tiver sem o light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
