import React from 'react';
import './App.css';
import logo from './image.png'; // Certifique-se de que a image está no diretório correto

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Parada do Espeto Logo" className="App-logo" />
        <h1>Parada do Espeto</h1>
      </header>
      <nav className="App-nav">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#contato">Contato</a>
      </nav>
      <div className="App-container">
        <section id="home" className="App-section">
          <h2>Bem-vindo à Parada do Espeto!</h2>
          <p>Os melhores espetinhos da cidade, feitos com ingredientes frescos e selecionados.</p>
        </section>
        <section id="menu" className="App-section">
          <h2>Nosso Menu</h2>
          <div className="menu-item">
            <h3>Espetinho de Carne</h3>
            <img src="https://via.placeholder.com/300x200?text=Espetinho+de+Carne" alt="Espetinho de Carne" className="menu-image" />
            <p>Delicioso espetinho de carne bovina, temperado e grelhado na brasa.</p>
          </div>
          <div className="menu-item">
            <h3>Espetinho de Frango</h3>
            <img src="https://via.placeholder.com/300x200?text=Espetinho+de+Frango" alt="Espetinho de Frango" className="menu-image" />
            <p>Suculento espetinho de frango, marinado e grelhado na perfeição.</p>
          </div>
          <div className="menu-item">
            <h3>Espetinho de Vegetais</h3>
            <img src="https://via.placeholder.com/300x200?text=Espetinho+de+Vegetais" alt="Espetinho de Vegetais" className="menu-image" />
            <p>Espetinho saudável com uma variedade de vegetais frescos.</p>
          </div>
          <div className="menu-item">
            <h3>Espetinho de Camarão</h3>
            <img src="https://via.placeholder.com/300x200?text=Espetinho+de+Camarão" alt="Espetinho de Camarão" className="menu-image" />
            <p>Delicioso espetinho de camarão grelhado, temperado com ervas finas.</p>
          </div>
          <div className="menu-item">
            <h3>Espetinho de Linguiça</h3>
            <img src="https://via.placeholder.com/300x200?text=Espetinho+de+Linguiça" alt="Espetinho de Linguiça" className="menu-image" />
            <p>Saboroso espetinho de linguiça artesanal, grelhado na brasa.</p>
          </div>
          <div className="menu-item">
            <h3>Espetinho de Queijo</h3>
            <img src="https://via.placeholder.com/300x200?text=Espetinho+de+Queijo" alt="Espetinho de Queijo" className="menu-image" />
            <p>Delicioso espetinho de queijo coalho, grelhado na brasa.</p>
          </div>
          <div className="menu-item">
            <h3>Espetinho de Coração</h3>
            <img src="https://via.placeholder.com/300x200?text=Espetinho+de+Coração" alt="Espetinho de Coração" className="menu-image" />
            <p>Saboroso espetinho de coração de frango, temperado e grelhado na brasa.</p>
          </div>
        </section>
        <section id="contato" className="App-section">
          <h2>Contato</h2>
          <p>Telefone: (11) 1234-5678</p>
          <p>Email: contato@paradadoespeto.com.br</p>
        </section>
      </div>
      <footer className="App-footer">
        <p>&copy; 2025 Parada do Espeto. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;