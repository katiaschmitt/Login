async function converterMoeda() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from-currency").value;
    const to = document.getElementById("to-currency").value;
    const mensagem = document.getElementById("mensagem2");
   
    if (!amount || amount <= 0) {
      mensagem.textContent = "Digite um valor válido.";
      return;
    }
   
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;
   
    try {
      const res = await fetch(url);
      const data = await res.json();
      const valorConvertido = data.rates[to].toFixed(2);
      mensagem.textContent = `${amount} ${from} = ${valorConvertido} ${to}`;
    } catch (error) {
      mensagem.textContent = "Erro na conversão.";
     
    }
  }
   