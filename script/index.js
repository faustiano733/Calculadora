import { operations } from "./operations.js"
window.addEventListener('DOMContentLoaded',()=>{
    
    const screen = document.getElementById('screen')
    const glass = document.getElementById('glass')
    const keyboard = document.getElementById('keyboard')
    const numbers = document.getElementById('numbers')
    const operators = document.getElementById('operators')
    const clean = document.getElementById('clean')
    const erase = document.getElementById('erase')
    const operatorsList = ['/','*','-','+','=','.']

    const write = (letter) =>{
        glass.innerText += letter
    }
    
    clean.addEventListener('click',()=>glass.innerText='')

    erase.addEventListener('click',()=>{
        glass.innerText = glass.innerText.slice(0,-1)
    })
    for(let i = 9 ;i >= -2;i--){
        const div = document.createElement('div')
        div.classList.add('key')
        div.innerText = i >= 0 ? i:operatorsList[i + operatorsList.length]
        if(div.innerText !== "=") div.addEventListener('click',()=>write(div.innerText))
        if(div.innerText === '=') div.addEventListener('click',()=>{
            const [a,operator,b] = glass.innerText.split('\n')
            write(`\n = ${operations[operator](a,b)}`)
        })
        numbers.appendChild(div)
    }

    for(let i = 0;i<operatorsList.length - 2;i++){
        const div = document.createElement('div')
        div.innerText = operatorsList[i]
        div.addEventListener('click',()=>write(`\n${div.innerText}\n`))
        div.classList.add('key')
        operators.appendChild(div)
    }
    
})