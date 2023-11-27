window.addEventListener("load", function () {
    document
      .getElementById("btnCadastrar")
      .addEventListener("click", validarCadastro);
  
    function validarCadastro() {
      var user = document.getElementById("txtUser");
      var pwd = document.getElementById("txtPwd");
      var checkPwd = document.getElementById("txtCheckPwd");
  
      if (!user.value || !pwd.value || !checkPwd.value) {
        alertWifi(`Preencha todos os campos!`, false, 0, "", 30, "");
      } else if (pwd.value !== checkPwd.value) {
        alertWifi(`Senha e confirmar senha diferentes. Tente novamente!`, false, 0, "", 30, "");
      } else if (!validarUsuario(user.value)) {
        alertWifi(`Nome de usuário inválido. Informe um usuário contendo de  5 a 20 caracteres alfanuméricos`, false, 0, "", 30, "");
      } else if (!validarSenha(pwd.value)) {
        alertWifi(`Senha inválida. Informe uma senha contendo de 4 a 12 letras, números e/ou um dos seguintes símbolos: + - * / @ &".`, false, 0, "", 30, "");
      } else {
        cadastrarUsuario(user.value, pwd.value);
      }
    }
  
    function validarUsuario(usuario) {
      var regexUsuario = /^[a-zA-Z0-9]{5,20}$/;
      return regexUsuario.test(usuario);
    }
  
    function validarSenha(senha) {
      var regexSenha = /^[a-zA-Z0-9+*\/@&]{4,12}$/;
      return regexSenha.test(senha);
    }
  
    function cadastrarUsuario(user, pwd) {
      var usuario = { nome: user, senha: pwd };
  
      var usuarios = localStorage.getItem("usuarios");
  
      if (!usuarios) {
        usuarios = [usuario];
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alertWifi(`Usuário cadastrado com sucesso!`, false, 0, "", 30, "");
      } else if (podeCadastrar(user)) {
        usuarios = JSON.parse(usuarios);
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alertWifi(`Usuário cadastrado com sucesso!`, false, 0, "", 30, "");
      } else {
        alertWifi(`Usuário já existe. Tente novamente!`, false, 0, "", 30, "");
      }
    }
  
    function podeCadastrar(user) {
      var usuarios = localStorage.getItem("usuarios");
      usuarios = JSON.parse(usuarios);
      var achou = false;
      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome == user) {
          achou = true;
          break;
        }
      }
      return !achou;
    }
  });
  