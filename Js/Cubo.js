//escenario
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../img/MarioBross.png', function(texture){
	scene.background = texture;
})


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshMatcapMaterial();
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load ('../img/ladrillo.jpg')
material.matcap = matcap
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


var control = new THREE.OrbitControls (camera, renderer.domElement);

camera.position.z = 8;
camera.position.x = 0;
camera.position.y = -0.5;


//animacion
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	renderer.render( scene, camera );
};
animate();