'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarForma(){
    forma2.classList.toggle('circulo')
}

function mudarCor(){
    forma1.classList.toggle('purple')
}
function mudarImg(){
    forma3.classList.toggle('mdimg')
}
function diminuir(){
    forma4.classList.toggle('diminuir')
}
function retangulo(){
    forma5.classList.toggle('retangulo')
}
function girar(){
    forma6.classList.toggle('girar')
}
function loader(){
    forma7.classList.toggle('loader')
}
function translate(){
    forma8.classList.toggle('translate')
}
forma1.addEventListener('click',mudarCor)
forma2.addEventListener('click',mudarForma)
forma3.addEventListener('click', mudarImg)
forma4.addEventListener('click', diminuir)
forma5.addEventListener('click', retangulo)
forma6.addEventListener('click', girar)
forma7.addEventListener('click', loader)
forma8.addEventListener('click', translate)
