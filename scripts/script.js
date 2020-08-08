/* function calculate2() {
    var valuea = document.getElementById('valuea')
    var valueb = document.getElementById('valueb')
    var valuec = document.getElementById('valuec')
    var resx1x2 = document.getElementById('resultx1x2')
   
    var a = Number.parseInt(valuea.value)
    var b = Number.parseInt(valueb.value)
    var c = Number.parseInt(valuec.value)
    var resultx1 = (- b + Math.sqrt(b**2 - 4 * a * c)) / (2 * a)
    var resultx2 = (- b - Math.sqrt(b**2 - 4 * a * c)) / (2 * a)
    

    if (resultx1 === resultx2) {
        resx1x2.innerText = `Sua equação possue apenas uma raiz real e seu valor é: ${resultx1}`
    } else {
        resx1x2.innerText = `O resultado de x1 é ${resultx1} e de x2 é ${resultx2}`
    }
    
} */



function calculate() {
    var valuea1 = document.getElementById('valuea1')
    var valuea2 = document.getElementById('valuea2')
    var valueb1 = document.getElementById('valueb1')
    var valueb2 = document.getElementById('valueb2')
    var valuec1 = document.getElementById('valuec1')
    var valuec2 = document.getElementById('valuec2')
    var valuea1float = Number.parseInt(valuea1.value)
    var valuea2float = Number.parseInt(valuea2.value)
    var valueb1float = Number.parseInt(valueb1.value)
    var valueb2float = Number.parseInt(valueb2.value)
    var valuec1float = Number.parseInt(valuec1.value)
    var valuec2float = Number.parseInt(valuec2.value)


    if (valuea2float === NaN) {
        valuea2float === 1
    }

    if (valueb2float === NaN) {
        valueb2float === 1
    }

    if (valuec2float === NaN) {
        valuec2float === 1
    }

    var a = valuea1float / valuea2float
    var b = valueb1float / valueb2float
    var c = valuec1float / valuec2float


    var resultx1 = (- b + Math.sqrt(b**2 - 4 * a * c)) / (2 * a)
    var resultx2 = (- b - Math.sqrt(b**2 - 4 * a * c)) / (2 * a)

    if (resultx1 === resultx2) {
        results.innerText = `Sua equação possue apenas uma raiz real e seu valor é: ${resultx1}`
    } else {
        results.innerText = `O resultado de x1 é ${resultx1} e de x2 é ${resultx2}`
    }

}
