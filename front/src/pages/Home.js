import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/components/pages/Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      <main>
        <section className="news-carousel">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="images/noticia1.jpg" alt="Noticia 1" />
              <div className="carousel-caption">
                <h3>Xbox Game Pass tiene un gran problema y necesita juegos como GTA VI y CoD para ser sostenible</h3>
                <button onClick={() => navigate('/Noticias')}>Leer más</button> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/noticia2.jpg" alt="Noticia 2" />
              <div className="carousel-caption">
                <h3>Jugador ya capturó todas las criaturas posibles de Pokémon GO</h3>
                <button onClick={() => navigate('/Noticias')}>Leer más</button> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/noticia3.jpg" alt="Noticia 3" />
              <div className="carousel-caption">
                <h3>RUMOR: una nueva película live-action de Resident Evil está en camino</h3>
                <button onClick={() => navigate('/Noticias')}>Leer más</button> 
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <div className="home-sections">
          <div className="ultimoslanzamientos">
            <h2>Últimos Lanzamientos</h2>
            <div className="lanzamiento">
              <h3>Hades 2</h3>
              <p>
                Hades 2 es un roguelike de acción desarrollado y publicado por Supergiant Games para PC. El éxito juego de acción ambientado en la mitología griega y con un espectacular combate hack and slash regresa con una esperada continuación en la que nos tenemos que enfrentar al Titán del Tiempo, en un roguelike con personajes carismáticos, un apartado gráfico muy cuidado y unas batallas que nos engancharán durante decenas de horas.
              </p>
            </div>
            <div className="lanzamiento">
              <h3>V Rising</h3>
              <p>
                V Rising es un juego de acción y rol desarrollado y publicado por Stunlock Studios para PlayStation 5 y PC. Ponte en la piel de un vampiro en esta aventura de acción, supervivencia y RPG, en un oscuro y enorme mundo de fantasía gótica que debemos explorar buscando recursos para fabricar y construir, combatiendo contra todo tipo de criaturas al estilo Diablo, mientras gestionamos nuestra sed de sangre y evitamos la dañina luz del sol con el fin de levantar un castillo vampírico.
              </p>
            </div>
            <div className="lanzamiento">
              <h3>Animal Well</h3>
              <p>
                Animal Well es un juego de acción y plataformas desarrollado por Billy Basso y publicado por Bigmode para PlayStation 5, Nintendo Switch y PC. Un metroidvania en 2D con un bonito apartado gráfico estilo pixel art inspirado en clásicos de Nintendo como Zelda y Metroid, con plataformas, puzles, elementos de survival horror, supervivencia y repleto de secretos.
              </p>
            </div>
          </div>

          <div className="reviews-main">
            <h2>Reviews</h2>
            <div className="review">
              <h3>Analizamos la versión next gen de Fallout 4</h3>
              <p>Fallout 4 se actualiza y añade nuevos contenidos, misiones y mejoras gráficas y de rendimiento en PS5, Xbox SeriesX/S y PC</p>
              <a href="#" onClick={() => navigate('/Reviews')} className="leer-mas">Leer más</a> 
            </div>
            <div className="review">
              <h3>Análisis de TopSpin 2K25</h3>
              <p>Hemos esperado muchos años la vuelta de Top Spin y TopSpin 2K25 es en parte lo que esperábamos pero también nos ha defraudado fuera del terreno jugable, donde sí brilla</p>
              <a href="#" onClick={() => navigate('/Reviews')} className="leer-mas">Leer más</a> 
            </div>
            <div className="review">
              <h3>Corsair HS80 RGB Wireless - Análisis</h3>
              <p>Unos auriculares perfectos para el gaming, con un diseño sobrio y eficiente. Una experiencia de sonido premium algo empañada por una batería que podía haber sido un poco mejor. Es cualquier caso, estoy seguro que los HS80 serán un buen fichaje para tu setup</p>
              <a href="#" onClick={() => navigate('/Reviews')} className="leer-mas">Leer más</a> 
            </div>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  );
}

export default Home;