import { useState } from "react";

export default function App() {

  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((valorAnterior) => valorAnterior + 1);
  }

  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }


  const [visivel, setVisivel] = useState(false);


  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Exercícios de React - useState</h1>


      <section style={{ marginBottom: "20px" }}>
        <h2>Missão 1 — Contador</h2>
        <p>Valor atual: {contador}</p>
        <button onClick={aumentar} style={{ marginRight: "10px" }}>
          Aumentar
        </button>
        <button onClick={diminuir}>
          Voltar um
        </button>
      </section>

      <hr />


      <section style={{ marginBottom: "20px" }}>
        <h2>Missão 2 — Mostrar e esconder um aviso</h2>
        <button onClick={() => setVisivel(!visivel)}>
          Alternar aviso
        </button>
        {visivel && <p>O aviso está visível.</p>}
      </section>

      <hr />


      <section style={{ marginBottom: "20px" }}>
        <h2>Missão 3 — Saudação com campo de texto</h2>
        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Digite seu nome"
        />
        <p>Olá, {nome || "visitante"}!</p>
      </section>

      <hr />


      <section style={{ marginBottom: "20px" }}>
        <h2>Desafio Final — Cartão de boas-vindas</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "250px" }}>
          <input
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Digite seu nome"
          />

          <button onClick={() => setMostrarSaudacao(!mostrarSaudacao)}>
            {mostrarSaudacao ? "Esconder Saudação" : "Mostrar Saudação"}
          </button>
        </div>

        {mostrarSaudacao && (
          <p>
            Olá, {nome || "visitante"}!
          </p>
        )}
      </section>
    </div>
  );
}