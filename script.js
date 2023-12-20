function clicar(){

    var idade = (new Date().getFullYear()) - Number(window.document.getElementById('anoatual').value)
    var sexo = window.document.getElementById('sex').value.toUpperCase().trim()
    var erro = window.document.getElementById('erro')
    var main = window.document.getElementsByTagName('main')[0]
    var img = window.document.getElementById('img')
    var p = window.document.getElementById('form')

    if(sexo != 'MASCULINO' && sexo !=  'FEMININO' || idade < 0 || idade > 120){
        erro.innerHTML = 'Digite os dados corretamente!!'
        main.style.height = '270px'
        p.innerHTML = ''
        img.src = ''
    }
    else{
        main.style.height = '550px'
        erro.innerHTML = ''

        if(sexo === 'MASCULINO'){
            p.innerHTML = `É um homem com ${idade} anos`
            if(idade >= 0 && idade <= 7){
                img.src = 'Imagens/BebeH1.jpg'
            }
            else if(idade >= 8 && idade <= 13){
                img.src = 'Imagens/CriancaH1.jpg'
            }
            else if(idade >= 14 && idade <= 17){
                img.src = 'Imagens/AdolescenteH1.jpg'
            }
            else if(idade >= 18 && idade <= 40){
                img.src = 'Imagens/AdultoH1.jpg'
            }
            else{
                img.src = 'Imagens/IdosoH1.jpg'
            }
        }
        else{
            p.innerHTML = `É uma mulher com ${idade} anos`
            if(idade >= 0 && idade <= 7){
                img.src = 'Imagens/BebeM1.jpg'
            }
            else if(idade >= 8 && idade <= 13){
                img.src = 'Imagens/CriancaM1.jpg'
            }
            else if(idade >= 14 && idade <= 17){
                img.src = 'Imagens/AdolescenteM1.jpg'
            }
            else if(idade >= 18 && idade <= 40){
                img.src = 'Imagens/AdultoM1.jpg'
            }
            else{
                img.src = 'Imagens/IdosoM1.jpg'
            }
        }

    }

    
}
