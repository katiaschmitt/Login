async function converterMoeda() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("origem").value;
    const to = document.getElementById("destino").value;
    const resultado = document.getElementById("resultado");
   
    if (!amount || amount <= 0) {
      resultado.textContent = "Digite um valor válido.";
      return;
    }
   
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;
   
    try {
      const res = await fetch(url);
      const data = await res.json();
      const valorConvertido = data.rates[to].toFixed(2);
      resultado.textContent = `${amount} ${from} = ${valorConvertido} ${to}`;
    } catch (error) {
      resultado.textContent = "Erro na conversão.";
     
    }
  }
   