


let valor0 = 0
let valor1 = 1
let valor2 = 2
let valor3 = 3
let valor4 = 4
let valor5 = 5
let valor6 = 6
let valor7 = 7
let valor8 = 8
let valor9 = 9
 

    function asignador(valor){
        
        escritoA = document.getElementById('digitado').innerHTML+= valor
       
        
    }

   



function bsuma() {
        escritoB = document.getElementById('digitado').textContent
       
         opNumerico= "+"
         limpiar()
      
}

function bresta() {
        escritoC = document.getElementById('digitado').textContent
        opNumerico="-"
        limpiar()
}

function bmultiplicador() {
         escritoD = document.getElementById('digitado').textContent
        opNumerico= "*"
        limpiar()
}

function bdividir() {
        escritoE = document.getElementById('digitado').textContent
        opNumerico= "/"
        limpiar()
}

function limpiar() {
         document.getElementById('digitado').innerHTML= ""
}





function resultado() {
    
    switch (opNumerico) {
             case "+":
             total = parseFloat(escritoA)+ parseFloat(escritoB)
            
            break;
    
            case "-":
                total = parseFloat(escritoC)-parseFloat(escritoA)
               
            break;

            case "*":
                total = parseFloat( escritoA)*parseFloat (escritoD)
           
            break;

            case "/":
                total = parseFloat (escritoE)/parseFloat( escritoA)
               
            break;
    }

    document.getElementById('digitado').innerHTML = total
    
}
