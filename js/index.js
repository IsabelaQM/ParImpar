window.addEventListener("load", function () {
  document.getElementById("btnEntrar").addEventListener("click", verificarLogin);

  function verificarLogin() {
    var user = document.getElementById("txtUser").value;
    var pwd = document.getElementById("txtPwd").value;
    var vetUsuarios;

    if (user == "" || pwd == "") 
      alertWifi("Preencha todos os campos",false,0,"",30,"");
    else{
      vetUsuarios = localStorage.getItem("usuarios");

      // Se não houver nenhum usuário cadastrado
      if(!vetUsuarios) alertWifi("Ainda não há nenhum usuário cadastrado",false,0,"",40,"");

      else{
        // String -> Vetor
        vetUsuarios = JSON.parse(vetUsuarios);
        var achou = false;
        for(i=0;i<vetUsuarios.length;i++){
          if(vetUsuarios[i].nome == user && vetUsuarios[i].senha == pwd){
            achou = true;
            break; 
          }
        }

        if(achou == true){
          alertWifi("Usuário encontrado",false,0,"",30,"");
          window.open("jogo.html","_self");
        }
        else alertWifi("Usuário não encontrado",false,0,"",40,"");

      }
    }
  }
});
