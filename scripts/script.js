function calculate() {
    var valuea = document.getElementById('valuea')
    var valueb = document.getElementById('valueb')
    var valuec = document.getElementById('valuec')
    var resx1x2 = document.getElementById('resultx1x2')
   
    var a = Number.parseInt(valuea.value)
    var b = Number.parseInt(valueb.value)
    var c = Number.parseInt(valuec.value)
    var resultx1 = (- b + Math.sqrt(b**2 - 4 * a * c)) / (2 * a)
    var resultx2 = (- b - Math.sqrt(b**2 - 4 * a * c)) / (2 * a)
    resx1x2.innerText = `O resultado de x1 é ${resultx1} e de x2 é ${resultx2}`

    
}
