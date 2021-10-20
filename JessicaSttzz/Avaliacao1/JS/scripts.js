
let nomeUsuario = getCookie("username");
if (nomeUsuario.length)
    document.getElementById('nomeUsuario').innerHTML = nomeUsuario;
else
    document.getElementById('nomeUsuario').innerHTML = "Usuário não autenticado";

function fazLogin() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (login.length == 0 || senha.length == 0)
    {
        alert('Informe os dados de autenticação');
        return;
    }

    document.cookie = "username=" + login;
      
    document.getElementById('nomeUsuario').innerHTML = login;
        
    window.location.replace("PrimeiraPagina.html");
}

function getCookie(pNome) {
    vetorCookie = document.cookie.split(';');

    for (i = 0; i < vetorCookie.length; i++) {
        linhaVetor = vetorCookie[i].trim();
        if (linhaVetor.indexOf(pNome+"=") == 0) {
            return linhaVetor.substring(pNome.length+1, linhaVetor.length);
        }
    }

    return "";
}
