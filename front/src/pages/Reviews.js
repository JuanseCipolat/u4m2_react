import React from 'react';
import "../styles/components/pages/Reviews.css";

function Reviews() {
  return (
    <div>
      <h2>Reviews</h2>
      <div className="review-box">
        <img src="images/review1.jpg" alt="Review 1" className="review-img" />
        <h3>Analizamos la versión next gen de Fallout 4</h3>
        <p>
          Fallout 4 se actualiza y añade nuevos contenidos, misiones y mejoras
          gráficas y de rendimiento en PS5, Xbox SeriesX/S y PC
        </p>
      </div>
      <div className="review-box">
        <img src="images/review2.jpg" alt="Review 2" className="review-img" />
        <h3>Análisis de TopSpin 2K25</h3>
        <p>
          Hemos esperado muchos años la vuelta de Top Spin y TopSpin 2K25 es en
          parte lo que esperábamos pero también nos ha defraudado fuera del
          terreno jugable, donde sí brilla
        </p>
      </div>
      <div className="review-box">
        <img src="images/review3.jpg" alt="Review 3" className="review-img" />
        <h3>Corsair HS80 RGB Wireless - Análisis</h3>
        <p>
          Unos auriculares perfectos para el gaming, con un diseño sobrio y
          eficiente. Una experiencia de sonido premium algo empañada por una
          batería que podía haber sido un poco mejor. Es cualquier caso, estoy
          seguro que los HS80 serán un buen fichaje para tu setup
        </p>
      </div>
    </div>
  );
}

export default Reviews;
