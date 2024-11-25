    
//Requerimiento 2.1 
//No entendi lo requerido y con los elementos juntos de los requerimientos 2 y 3 juntos
//en una hoja de js no funciona ya que tiene error por que los elementos de un html no estan en el otro.
//asi que hice lo que creo entendi e intente hacerlo funcionar con lo que encontre.
if (document.getElementById("ele1")){
    const ele = document.getElementById("ele1");
ele.addEventListener("click", (event) => pintar(event, 'yellow'))
}

//Requerimiento 2.3
function pintar(event, color = 'green') {
    const elemento = event.target;
    elemento.style.backgroundColor = color;
}

//Requerimiento 3
if (document.getElementById("box1")){
    const box1 = document.getElementById("box1")
box1.addEventListener("click", (event) =>pintar(event, 'black'));
}
if (document.getElementById("box2")){
    const box2 = document.getElementById("box2")
box2.addEventListener("click", (event) =>pintar(event, 'black'));
}
if (document.getElementById("box3")){
    const box3 = document.getElementById("box3")
box3.addEventListener("click", (event) =>pintar(event, 'black'));
}
if (document.getElementById("box4")){
    const box4 = document.getElementById("box4")
box4.addEventListener("click", (event) =>pintar(event, 'black'));
}

//Requerimiento 3, teclas y colores
let keyColor;
if (document.querySelector("#key")){
    const keyDiv = document.querySelector("#key");
    const cont = document.querySelector("#cont");

    document.addEventListener('keydown', function (event) {
        if (event.key === 'a') {
            keyColor = "pink";
        } else if (event.key === 's') {
            keyColor = "orange";
        } else if (event.key === 'd') {
            keyColor = "lightblue";
        } else if (event.key === 'q') {
            if(document.getElementById("divFinal")){
                const divFinal = document.getElementById("divFinal");
                divFinal.parentElement.removeChild(divFinal);
                console.log("holi")
            }
            divFinal = document.createElement("div");
            divFinal.setAttribute("id", "divFinal");
            divFinal.style.width = "200px"
            divFinal.style.height = "200px"
            divFinal.style.border = "solid 2px black"
            divFinal.style.backgroundColor = "purple";
            cont.appendChild(divFinal);
        } else if (event.key === 'w') {
            if(document.getElementById("divFinal")){
                const divFinal = document.getElementById("divFinal");
                divFinal.parentElement.removeChild(divFinal);
            }
            divFinal = document.createElement("div");
            divFinal.setAttribute("id", "divFinal");
            divFinal.style.width = "200px"
            divFinal.style.height = "200px"
            divFinal.style.border = "solid 2px black"
            divFinal.style.backgroundColor = "gray";
            cont.appendChild(divFinal);
        } else if (event.key === 'e') {
            if(document.getElementById("divFinal")){
                const divFinal = document.getElementById("divFinal");
                divFinal.parentElement.removeChild(divFinal);
                console.log("holi")
            }
            divFinal = document.createElement("div");
            divFinal.setAttribute("id", "divFinal");
            divFinal.style.width = "200px"
            divFinal.style.height = "200px"
            divFinal.style.border = "solid 2px black"
            divFinal.style.backgroundColor = "brown";
            cont.appendChild(divFinal);
        }
        keyDiv.style.backgroundColor = keyColor;
        })
}
