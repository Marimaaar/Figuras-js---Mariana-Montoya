//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x25292A);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();//PARA MOSTRAR EN LA PANTALLA LA IMAGEN QUE SE RENDERIZA
renderer.setSize( window.innerWidth, window.innerHeight);//tamaño de la escena
document.body.appendChild( renderer.domElement );//llamar el JS del HTML

const geometry = new THREE.ConeGeometry( 4, 6, 10 );//definir la geometría
const material = new THREE.MeshMatcapMaterial();//.Mesh es el tipo de material al usar, en este material con imagen
const TextureLoader = new THREE.TextureLoader();//Para cargar la textura
const matcap = TextureLoader.load ('../img/luna.jpg') //El matcap es la capa del material a usar que va a ser la img
material.matcap = matcap //ejecutar ese matcap

const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 10;
camera.position.x = 0;
camera.position.y = 0;


//animacion
function animate() {
	requestAnimationFrame( animate );

	cone.rotation.y += 0.07;

	renderer.render( scene, camera );
};
animate();