import react from "react"
import image1 from  '../../assets/imgs/GodOfWar.jpg'
import image2 from  '../../assets/imgs/minecraft.jpg'
import image3 from  '../../assets/imgs/RedRedemption.jpg'
import image4 from  '../../assets/imgs/Resident8.jpg'
import logo from '../../assets/imgs/logoPlay.png'

const products = [
    {id: 1,stock:10,img:image1,title: 'God Of War ' ,edad:"+18",description:'Este nuevo juego continúa la historia protagonizada por Kratos, presentando como escenario un ambiente totalmente distinto al de la antigua Grecia. Este juego ubica a Kratos en las tierras nórdicas de escandinavia (lo que los vikingos llamarían Midgard), regida por los dioses de Asgard. No solo el personaje sino también su equipamiento cambia bastante. Sus espadas de caos han sido reemplazadas por un hacha, se lo ve con una larga barba que lo acerca a la estética de un vikingo, su carácter se ha serenado bastante y va acompañado de su hijo, Atreus. El juego se estrenó el 20 de abril de 2018, en exclusiva para la consola PlayStation 4.',price:7000, console:logo,plataforma:"ps"},
    {id: 2,stock:12,img:image2,title: 'Minecraft' ,edad:"+6",description:'Minecraft es un juego de mundo abierto, y no tiene un fin claramente definido. Esto permite una gran libertad en cuanto a la elección de su forma de jugar. A pesar de ello, el juego posee un sistema que otorga logros por completar ciertas acciones.La cámara es en primera persona, aunque los jugadores tienen la posibilidad de cambiarla a una perspectiva de tercera persona en cualquier momento.​El juego se centra en la colocación y destrucción de bloques, siendo que este se compone de objetos tridimensionales cúbicos, colocados sobre un patrón de rejilla fija. Estos cubos o bloques representan principalmente distintos elementos de la naturaleza, como tierra, piedra, minerales, troncos, entre otros.Los jugadores son libres de desplazarse por su entorno y modificarlo mediante la creación, recolección y transporte de los bloques que componen al juego, los cuales solo pueden ser colocados respetando la rejilla fija del juego.Los jugadores crean granjas, que son estructuras y mecanismos para conseguir un determinado material más fácil (por ejemplo una granja que genera oro automáticamente). En el juego se pueden encontrar estructuras especiales como aldeas, galerías mineras, templos marinos, pirámides y templos selváticos.',price:8500, console:logo,plataforma:"xbox"},
    {id: 3,stock:7,img:image3,title: 'Red Dead Redemption 2 ',edad:"+18",description:' Red Dead Redemption 2 es un juego de acción y aventura, jugado tanto como primera como tercera persona, ambientado en el lejano oeste estadounidense y desarrollado en un entorno de mundo abierto con una versión ficticia del oeste, el medio oeste y el sur de los Estados Unidos en 1899, durante la segunda mitad de la era del Salvaje Oeste y el final de la era, a comienzos del siglo XX.8​ El juego presenta componentes para un jugador y para jugadores múltiples en línea, este último lanzado bajo Red Dead Online. Durante la mayor parte del juego, el jugador controla al forajido Arthur Morgan, un miembro de la banda dirigida por Van der Linde, mientras completa numerosas misiones (escenarios lineales con objetivos establecidos) para progresar en la historia. Durante el epílogo del mismo, el jugador controla a John Marston, protagonista del primer videojuego. Fuera de las misiones, el jugador (tanto con Morgan como con Marston) puede recorrer libremente su mundo interactivo. El jugador puede participar en combates y duelos con enemigos usando ataques cuerpo a cuerpo, armas de fuego, objetos arrojadizos o explosivos.',price:4500, console:logo,plataforma:"pc"},
    {id: 4,stock:15,img:image4,title: 'Resdiden Evil Village',edad:"+18",description:'Resident Evil Village es un videojuego perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom. La Octava entrega de la serie principal de Resident Evil y secuela narrativa de Resident Evil 7: Biohazard del año 2017, el videojuego sigue a Ethan Winters, quien, después de un fatídico encuentro con Chris Redfield, se encuentra en un pueblo lleno de criaturas mutantes en un esfuerzo por encontrar a su hija secuestrada. Si bien Village mantiene los elementos fundamentales de terror de supervivencia de la serie, el videojuego adopta un estilo de videojuego más orientado a la acción en comparación con su predecesor.    Resident Evil Village también incluye un modo multijugador en línea. El videojuego se anunció en el evento de revelación de la PlayStation 5 en junio de 2020 y se lanzó el 7 de mayo de 2021 para Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X / S y Stadia.El videojuego recibió críticas generalmente favorables.',price:10000, console:logo,plataforma:"complementos"},

]

const promesa = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(products) 
    },1000)

})

function getProducts(){
    return promesa;
}

export{
    getProducts,
}