const cero = document.getElementById('0')
const uno = document.getElementById('1')
const dos = document.getElementById('2')
const tres = document.getElementById('3')
const cuatro = document.getElementById('4')
const cinco = document.getElementById('5')
const seis = document.getElementById('6')
const siete = document.getElementById('7')
const ocho = document.getElementById('8')
const nueve = document.getElementById('9')
//operadores
const suma =  document.getElementById('plus')
const resta =  document.getElementById('minus')
const multiple =  document.getElementById('multiple')
const dividir =  document.getElementById('divition')    
 
const setNumbers = [cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve]
const setOperator = [ suma, resta, multiple, dividir]

 
let claseEtiqueta = '.dato1' 

for (let i = 0; i < setNumbers.length; i++) {
  setNumbers[i].addEventListener('click', () => {
    document.querySelector(claseEtiqueta).innerHTML += setNumbers[i].innerHTML
    setOperator[0].addEventListener('click', ()=>{
        document.querySelector('.dato2').innerHTML = setOperator[0]['innerHTML']
            claseEtiqueta = '.dato3'
    })
    setOperator[1].addEventListener('click', ()=>{
        document.querySelector('.dato2').innerHTML = setOperator[1]['innerHTML']
        claseEtiqueta = '.dato3'
    })
    setOperator[2].addEventListener('click', ()=>{
        document.querySelector('.dato2').innerHTML = setOperator[2]['innerHTML']
        claseEtiqueta = '.dato3'
    })
    setOperator[3].addEventListener('click', ()=>{
        document.querySelector('.dato2').innerHTML = setOperator[3]['innerHTML']
        claseEtiqueta = '.dato3'
})
    
  })
}
 


//Función que calcula
 
const resultado = document.getElementById('result')
resultado.addEventListener('click', ()=>{
 
       let a = parseFloat(document.querySelector('.dato1').innerHTML)
       let op = document.querySelector('.dato2').innerHTML
       let b = parseFloat(document.querySelector('.dato3').innerHTML)
       
 
        if (op == '+') {
           rsuma = a+b
            document.querySelector('.dato4').innerHTML= '= ' + rsuma
        }else if (op == '-'){
            rresta = a-b
            document.querySelector('.dato4').innerHTML= '= ' + rresta
            
        }else if(op == '*'){
            rmultiplica = a*b
            document.querySelector('.dato4').innerHTML = '= ' + rmultiplica
        }
        else if(op == '/'){
            rmultiplica = a/b
            document.querySelector('.dato4').innerHTML = '= ' + rmultiplica
        }   
 
     
})

let resetear = document.getElementById('reset')
resetear.addEventListener('click', ()=>{
    document.querySelector('.dato1').innerHTML = ''
    document.querySelector('.dato2').innerHTML = ''
    document.querySelector('.dato3').innerHTML = ''
    document.querySelector('.dato4').innerHTML = ''
    claseEtiqueta = '.dato1' 

})


 

 


 





