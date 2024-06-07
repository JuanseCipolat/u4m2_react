import React from 'react';

const Home = () => {
  return (
    <div>
      <header>
        <div>
          <img src="images/logo.jpg" width="100px" alt="Frecuencia Gamer" />
          <h1>Frecuencia Gamer</h1>
        </div>
      </header>
      <main>
        <h2>Noticias destacadas</h2>
        <div className="noticias-destacadas">
          <img src="images/noticia1.jpg" alt="Noticia 1" />
          <h3>Xbox Game Pass tiene un gran problema y necesita juegos como GTA VI y CoD para ser sostenible</h3>
          <p>
            A inicios de esta semana, se dio a conocer que Tango Gameworks, Arkane Austin y Alpha Dog Games cerraron sus puertas, mientras que Roundhouse Games formará parte de ZeniMax Online Studios. ¿Quién tiene la culpa de esta desafortunada situación? Un exempleado de Microsoft lo tiene claro.
            En un extenso mensaje que compartió en su cuenta de LinkedIn, el exlíder senior de relaciones públicas de Microsoft, Brad Hilderbrand, compartió su opinión sobre la reciente clausura de los 4 estudios de Bethesda. En particular, culpa a 2 factores de este escenario catastrófico: Xbox Game Pass y la compra de Activision Blizzard.
            Desde hace años, se discute el impacto que tiene Xbox Game Pass en los videojuegos que conforman su catálogo. Aunque algunos estudios apoyan este modelo de negocio y argumentan que sus títulos alcanzan nuevas alturas tras unirse al servicio, otros afirman que afectan negativamente el rendimiento de los títulos.
          </p>
          <a href="#" className="leer-mas">Leer más</a>
        </div>

        <div className="noticias-destacadas">
          <img src="images/noticia2.jpg" alt="Noticia 2" />
          <h3>Jugador ya capturó todas las criaturas posibles de Pokémon GO</h3>
          <p>
            Si tu objetivo es capturar todos los Pokémon de Pokémon GO, ya tienes un ejemplo a seguir, pues ftb_hodor, usuario de reddit, comentó que ya cuenta con todas las criaturas existentes en Estados Unidos en su Pokédex."5 Pokémon todavía no están en el juego y otros 3 son exclusivos de ciertas regiones, así que no están disponibles en Estados Unidos", explicó el maestro Pokémon.
            Por ahora, ftb_hodor no cuenta con Farfetch'd, Mr Mine y Kangaskhan, que son exclusivos de Asia, Europa y Australia, respectivamente. Evidentemente, tampoco cuenta con las 3 aves legendarias, Mewtwo y Ditto.
            Así pues, aunque su colección todavía no está completa, es el primer jugador en tener la increíble cantidad de 142 Pokémon en su poder. Para lograr esta meta, ftb_hodor caminó 153.2 kilómetros.
          </p>
          <a href="#" className="leer-mas">Leer más</a>
        </div>

        <div className="noticias-destacadas">
          <img src="images/noticia3.jpg" alt="Noticia 2" />
          <h3>RUMOR: una nueva película live-action de Resident Evil está en camino</h3>
          <p>
            Nos llegan noticias interesantes para todos los fanáticos de Resident Evil, ya que está circulando un rumor que afirma que la franquicia de Capcom volverá al cine con una nueva adaptación live-action.
            Como seguramente recordarás, la última película de la saga que se llamó Resident Evil: Welcome to Raccoon City no fue muy bien recibida por la comunidad y aún se tiene la sensación de que se puede hacer algo mejor.
            Ahora, un informe de Insider Fandom mencionó que Screen Gems, un estudio propiedad de Sony, está cerca de terminar un guión para una nueva película de Resident Evil. Sin embargo, no se sabe si se tratará de una secuela del último live-action o si tomará una dirección diferente.
          </p>
          <a href="#" className="leer-mas">Leer más</a>
        </div>

        <div className="container">
          <div className="ultimoslanzamientos">
            <h2>Últimos Lanzamientos</h2>
            <div>
              <h3>Hades 2</h3>
              <p>
                Hades 2 es un roguelike de acción desarrollado y publicado por Supergiant Games para PC. El éxito juego de acción ambientado en la mitología griega y con un espectacular combate hack and slash regresa con una esperada continuación en la que nos tenemos que enfrentar al Titán del Tiempo, en un roguelike con personajes carismáticos, un apartado gráfico muy cuidado y unas batallas que nos engancharán durante decenas de horas.
              </p>
              <a href="#" className="leer-mas">Leer más</a>
            </div>
            <div>
              <h3>V Rising</h3>
              <p>
                V Rising es un juego de acción y rol desarrollado y publicado por Stunlock Studios para PlayStation 5 y PC. Ponte en la piel de un vampiro en esta aventura de acción, supervivencia y RPG, en un oscuro y enorme mundo de fantasía gótica que debemos explorar buscando recursos para fabricar y construir, combatiendo contra todo tipo de criaturas al estilo Diablo, mientras gestionamos nuestra sed de sangre y evitamos la dañina luz del sol con el fin de levantar un castillo vampírico.
              </p>
              <a href="#" className="leer-mas">Leer más</a>
            </div>
            <div>
              <h3>Animal Well</h3>
              <p>
                Animal Well es un juego de acción y plataformas desarrollado por Billy Basso y publicado por Bigmode para PlayStation 5, Nintendo Switch y PC. Un metroidvania en 2D con un bonito apartado gráfico estilo pixel art inspirado en clásicos de Nintendo como Zelda y Metroid, con plataformas, puzles, elementos de survival horror, supervivencia y repleto de secretos.
              </p>
              <a href="#" className="leer-mas">Leer más</a>
            </div>
          </div>

          <div className="reviews-main">
            <h2>Reviews</h2>
            <div>
              <h3>Analizamos la versión next gen de Fallout 4</h3>
              <p>Fallout 4 se actualiza y añade nuevos contenidos, misiones y mejoras gráficas y de rendimiento en PS5, Xbox SeriesX/S y PC</p>
            </div>
            <div>
              <h3>Análisis de TopSpin 2K25</h3>
              <p>Hemos esperado muchos años la vuelta de Top Spin y TopSpin 2K25 es en parte lo que esperábamos pero también nos ha defraudado fuera del terreno jugable, donde sí brilla</p>
            </div>
            <div>
              <h3>Corsair HS80 RGB Wireless - Análisis</h3>
              <p>Unos auriculares perfectos para el gaming, con un diseño sobrio y eficiente. Una experiencia de sonido premium algo empañada por una batería que podía haber sido un poco mejor. Es cualquier caso, estoy seguro que los HS80 serán un buen fichaje para tu setup</p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2024 Frecuencia Gamer. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
