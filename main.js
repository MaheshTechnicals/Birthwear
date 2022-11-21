let footer = document.querySelector(".foot")
let year = new Date().getFullYear()
let copyright = document.createElement("p")
copyright.innerHTML = `<span style="color:white;">© ${year}</span> <a href="https://birthwear.in" style="text-decoration:none; color:white;">Birthwear.in</a>`
footer.appendChild(copyright)