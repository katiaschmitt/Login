async function cadastrarAluno() {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const cep = document.getElementById("cep").value;
    const mensagem = document.getElementById("mensagem");
   
     if (nome === "" || isNaN(idade) || cep === "") {
          mensagem.textContent = "Por favor, preencha todos os campos.";
          mensagem.className = "erro";
          return;
    }
    const url = `https://localhost:44359/api/Aluno/InserirDadosAluno`;
   
    const aluno = {
      nome: nome,
      idade: idade,
      cep: cep
    };
   
      try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
      });
   
      if (res.ok) {
        const data = await res.json();
        mensagem.textContent = "Aluno cadastrado com sucesso!";
        mensagem.className = "sucesso";
      } else {
        mensagem.textContent = `Erro ao cadastrar aluno: ${res.status}`;
        mensagem.className = "erro";
      }
    } catch (error) {
      mensagem.textContent = "Erro ao conectar com a API.";
      mensagem.className = "erro";
    }
   
  }