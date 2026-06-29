window.onload = function () {
    alert("Bem-vindo ao portal da Seleção da Noruega!")
}

let titulo = document.getElementById("titulo")

titulo.onmouseover = function () {
    titulo.style.color = "red"
}

titulo.onmouseout = function () {
    titulo.style.color = "white"
}

titulo.onclick = function () {
    alert("Noruega! Rumo à primeira conquista!")
}

let curiosidade = document.getElementById("curiosidade")

curiosidade.ondblclick = function () {

    curiosidade.innerHTML =
    "A maior vitória da Noruega foi por 12 a 0 contra a Finlândia em 1946."

}

let imagem = document.getElementById("imagem")

imagem.onclick = function () {

    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2H42BD61omlRPbJJGAMj5YeFI2FDeat3Il6JfiRCuftQEMGXR8MgrCoW&s=10"

}

imagem.onmouseover = function () {

    imagem.style.width = "900px"

}

imagem.onmouseout = function () {

    imagem.style.width = "800px"

}