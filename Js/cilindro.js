//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x25292A);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();//PARA MOSTRAR EN LA PANTALLA LA IMAGEN QUE SE RENDERIZA
renderer.setSize( window.innerWidth, window.innerHeight);//tamaño de la escena
document.body.appendChild( renderer.domElement );//llamar el JS del HTML

const geometry = new THREE.CylinderGeometry( 10, 7, 8, 8, 1 );
const material = new THREE.MeshMatcapMaterial( {color: 0xffff00} );
const TextureLoader = new THREE.TextureLoader();//Para cargar la textura
const matcap = TextureLoader.load ('../img/aguita.jpg') //El matcap es la capa del material a usar que va a ser la img
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );
material.matcap = matcap //ejecutar ese matcap



camera.position.z = 30;
camera.position.x = 0;
camera.position.y = 0;


//animacion
function animate() {
	requestAnimationFrame( animate );

	cylinder.rotation.y += 0.05;
	cylinder.rotation.x += 0.05;

	renderer.render( scene, camera );
};
animate();