import React from 'react';
import "../styles/components/pages/Shop.css";

function Shop() {
  return (
    <div>
      <h2>Tienda de Videojuegos</h2>
      <section className="shop">
        <div className="catalogo">
          <img src="images/juego1.jpg" alt="Juego 1" />
          <h2>Ghost of Tsushima</h2>
          <p>Precio: $40,00</p>
          <button>Comprar</button>
        </div>
        <div className="catalogo">
          <img src="images/juego2.jpg" alt="Juego 2" />
          <h2>Helldivers 2</h2>
          <p>Precio: $39,99</p>
          <button>Comprar</button>
        </div>

        <div className="catalogo">
          <img src="images/juego3.jpg" alt="Juego 3" />
          <h2>No Rest for the Wicked</h2>
          <p>Precio: $39,99</p>
          <button>Comprar</button>
        </div>

        <div className="catalogo">
          <img src="images/juego4.jpg" alt="Juego 4" />
          <h2>Hades II</h2>
          <p>Precio: $20,00</p>
          <button>Comprar</button>
        </div>
      </section>
    </div>
  );
}

export default Shop;
