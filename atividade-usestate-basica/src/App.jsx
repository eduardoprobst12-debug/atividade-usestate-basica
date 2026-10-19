import { useState } from "react";

export default function App() {

  const [contador, setContador] = useState(0);


  function aumentar() {
    setContador((valorAnterior) => {
      if (valorAnterior >= 10) return valorAnterior; 
      return valorAnterior + 1;
    });
  }


  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }


  function resetar() {
    setContador(0);
  }


  const [visivel, setVisivel] = useState(false);


  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px" }}>
      <h1>Exercícios de React useState</h1>


      <section style={{ marginBottom: "30px", borderBottom: "1px solid #ccc", pb: "10px" }}>
        <h2>Missão 1 + Desafio Extra — Contador</h2>
        <p>Valor atual: <strong>{contador}</strong></p>

        {contador === 10 && (
          <p style={{ color: "green", fontWeight: "bold" }}>🎉 Meta atingida (10)!</p>
        )}

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={aumentar}>Aumentar</button>
          <button onClick={diminuir}>Voltar um</button>
          <button onClick={resetar}>Zerar</button>
        </div>
      </section>


      <section style={{ marginBottom: "30px", borderBottom: "1px solid #ccc", pb: "10px" }}>
        <h2>Missão 2 — Mostrar e Esconder Aviso</h2>
        <button onClick={() => setVisivel(!visivel)}>
          Alternar aviso
        </button>


        {visivel && <p style={{ color: "blue" }}>O aviso está visível.</p>}
      </section>


      <section style={{ marginBottom: "30px" }}>
        <h2>Desafio Final — Cartão de Boas-Vindas</h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
          <input
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Digite seu nome"
            style={{ padding: "8px" }}
          />

          <button onClick={() => setMostrarSaudacao(!mostrarSaudacao)}>
            {mostrarSaudacao ? "Esconder Saudação" : "Mostrar Saudação"}
          </button>
        </div>


        {mostrarSaudacao && (
          <p style={{ marginTop: "15px", fontSize: "1.2rem" }}>
            Olá, <strong>{nome || "visitante"}</strong>!
          </p>
        )}
      </section>
    </div>
  );
}