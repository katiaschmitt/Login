function fazerLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    const usuarioSalvo = localStorage.getItem("usuarioCadastro");

    if (usuario === "" || senha === "") {
      mensagem.textContent = "Por favor, preencha todos os campos.";
      mensagem.className = "erro";
      return;
    }

    if (usuario === usuarioSalvo && senha === "1234") {
      mensagem.textContent = "Login realizado com sucesso!";
      mensagem.className = "sucesso";
     
      // window.location.href = "imc.html"
      window.location.href = "cadastro.html"
      
    } else {
      mensagem.textContent = "Usuário ou senha inválidos!!!!";
      mensagem.className = "erro";
    }
  }