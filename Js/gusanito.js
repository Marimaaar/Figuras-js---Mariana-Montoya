//escena
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();
loader.load('../img/jueguito.png', function(texture){
	scene.background = texture;
})

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();//PARA MOSTRAR EN LA PANTALLA LA IMAGEN QUE SE RENDERIZA
renderer.setSize( window.innerWidth, window.innerHeight);//tamaño de la escena
document.body.appendChild( renderer.domElement );//llamar el JS del HTML

const geometry = new THREE.TorusKnotGeometry( 2.5, 1.5, 32, 4, 6, 5 );//definir la geometría
const material = new THREE.MeshMatcapMaterial();//.Mesh es el tipo de material al usar, en este material con imagen
const TextureLoader = new THREE.TextureLoader();//Para cargar la textura
const matcap = TextureLoader.load ('../img/luna.jpg') //El matcap es la capa del material a usar que va a ser la img
material.matcap = matcap //ejecutar ese matcap
material.flatShading = true;//ponerle sombra a la geometría
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

const geometry2 = new THREE.TorusKnotGeometry( 2.5, 1.5, 32, 4, 6, 5 );//definir la geometría
const material2 = new THREE.MeshMatcapMaterial();//.Mesh es el tipo de material al usar, en este material con imagen
const TextureLoader2 = new THREE.TextureLoader();//Para cargar la textura
const matcap2 = TextureLoader.load ('../img/luna.jpg') //El matcap es la capa del material a usar que va a ser la img
material2.matcap = matcap //ejecutar ese matcap
material2.flatShading = true;
const torusKnot2 = new THREE.Mesh( geometry2, material2 );
scene.add( torusKnot2 );

const geometry3 = new THREE.TorusKnotGeometry( 2.5, 1.5, 32, 4, 6, 5 );//definir la geometría
const material3 = new THREE.MeshMatcapMaterial();//.Mesh es el tipo de material al usar, en este material con imagen
const TextureLoader3 = new THREE.TextureLoader();//Para cargar la textura
const matcap3 = TextureLoader.load ('../img/luna.jpg') //El matcap es la capa del material a usar que va a ser la img
material3.matcap = matcap //ejecutar ese matcap
material3.flatShading = true;
const torusKnot3 = new THREE.Mesh( geometry3, material3 );
scene.add( torusKnot3 );

const geometry4 = new THREE.TorusKnotGeometry( 2.5, 1.5, 32, 4, 6, 5 );//definir la geometría
const material4 = new THREE.MeshMatcapMaterial();//.Mesh es el tipo de material al usar, en este material con imagen
const TextureLoader4 = new THREE.TextureLoader();//Para cargar la textura
const matcap4 = TextureLoader.load ('../img/luna.jpg') //El matcap es la capa del material a usar que va a ser la img
material4.matcap = matcap //ejecutar ese matcap
material4.flatShading = true;
const torusKnot4 = new THREE.Mesh( geometry4, material4 );
scene.add( torusKnot4 );

let objects = [torusKnot, torusKnot2, torusKnot3, torusKnot4]

torusKnot.position.x = 10;
torusKnot2.position.x = -4;
torusKnot3.position.x = 22;
torusKnot4.position.x = -20;

//controles
/* var control = new THREE.OrbitControls (camera, renderer.domElement);
control.minDistance = 3;
control.maxDistance = 10; */

/* const control = new THREE.PointerLockControls (camera, renderer.domElement);
document.getElementById('btnplay') .onclick = () => {
	control.lock();
} */

var controls = new THREE.DragControls([torusKnot, torusKnot2, torusKnot3, torusKnot4 ], camera, renderer.domElement)

//posiciones de cámara
camera.position.z = 20;
camera.position.x = 0;
camera.position.y = 0;


//animacion
function animate() {
	requestAnimationFrame( animate );

	torusKnot.rotation.y += 0.07;
    torusKnot.rotation.z += 0.07;
    torusKnot.rotation.x += 0.07;
	torusKnot2.rotation.y += 0.07;
    torusKnot2.rotation.z += 0.07;
    torusKnot2.rotation.x += 0.07;
	torusKnot3.rotation.y += 0.07;
    torusKnot3.rotation.z += 0.07;
    torusKnot3.rotation.x += 0.07;
	torusKnot4.rotation.y += 0.07;
    torusKnot4.rotation.z += 0.07;
    torusKnot4.rotation.x += 0.07;

	renderer.render( scene, camera );
};
animate();