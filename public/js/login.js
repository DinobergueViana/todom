// capturar os elementos das paginas 
// e armazena-los em constantes


const tfEmail = document.getElementById('email');
const tfSenha = document.getElementById('senha');
const btLogin = document.getElementById('btnLogin');
const formLogin = document.getElementById('formLogin');

const login = (email, senha) => {
    // construir string json que vai ser enviada
    let strJson = JSON.stringify({email,senha})

    // enviar requisição
    fetch("/login", {
        method: "POST",
        body: strJson,
        headers: {
            "Content-Type": "application/json"
        }
    });
}

// associar a execução da função a submissão do formulario 'logar'
// btLogin.addEventListener(
//     "click",
//     () => {
//         login(tfEmail.value, tfSenha.value);
//     }
// );

formLogin.addEventListener(
    "submit",
    (evt) => {
        console.log(evt);
        evt.preventDefault();
        login(tfEmail.value, tfSenha.value);
    }
)