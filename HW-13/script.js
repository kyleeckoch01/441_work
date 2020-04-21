var scene = new THREE.Scene()
scene.overrideMaterial = new THREE.MeshBasicMaterial({
    color: 'black'
});
scene.background = new THREE.Color('white');
var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, .1, 1000)
var renderer = new THREE.WebGLRenderer()
var geometry = new THREE.BoxGeometry();
var pink = new THREE.MeshBasicMaterial({
    color: 'red'
});

var cube1 = new THREE.Mesh(geometry, pink);
cube1.scale.set(50, 50,50);
cube1.position.x = -150;
cube1.position.y = 150;
scene.add(cube1);

var cube2 = new THREE.Mesh(geometry, pink);
cube2.scale.set(50, 50,50);
cube2.position.x = 150;
cube2.position.y = 150;
cube2.position.z = 0;
scene.add(cube2);

camera.position.x = 150;
camera.position.y = -150;
camera.position.z = 0;

renderer.setClearColor(0xdddddd)
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)
var loader = new THREE.GLTFLoader();

loader.load('/models/doughnuts2.glb', function(gltf) {
    scene.add(gltf.scene);
}, undefined, function(error) {
    console.error(error);
});

var rotation = 0

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 'red'
});
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

var mouseX;
var mouseY;
onmousemove = function(e){
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function spinCamera() {
    rotation += 0.05;
    camera.position.z = Math.sin(rotation) * (mouseY);
    camera.position.x = Math.cos(rotation) * (mouseX);
    camera.lookAt(scene.position)
}

var render = function() {
    requestAnimationFrame(render);
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;
    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
    spinCamera();
    renderer.render(scene, camera);
};
render();
