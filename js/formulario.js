(function() {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")

    // btn.addEventListener("click", function (e){
       
    // })

    formCadastro.addEventListener("submit", function(e){
        console.log(txtTitulo.value)
        if(!txtTitulo.value){
            showErrorMessage("preencha todos os campos", function(){
                txtTitulo.focus()
            })
            e.preventDefault()
            txtTitulo.focus()
        }
    })

    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

    function showErrorMessage(msg, cb){
        // alert(msg)
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        feedbackMessageCloseBtn.focus()

        function hideErrorMessage(){
            console.log("clicando close")
            feedbackMessage.classList.remove("show")

            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyboardOnBtn)
            
            if (typeof cb === "function"){
                cb()
            }
        }

        function pressedKeyboardOnBtn(e){
            console.log(e.keyCode)
        }

        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)

        feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyboardOnBtn)

    }


    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
    
    mostrarNumero(maxima)

    // contadorContainer.removeAttribute("style")
    contadorContainer.style.display = "block"

    function checkLength(){
        let numeroLetrasDigitadas = this.value.length
        let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
        resta.textContent = caractersRestantes
    }

    function mostrarNumero(n){
        resta.textContent = n
    }

    txtDescricao.addEventListener("input", checkLength)
    
    btn.disabled = true

    const chkAceito = document.getElementById("chkAceito")
    chkAceito.addEventListener("change", function(){
        btn.disabled = !this.checked
    })


    
})()