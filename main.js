import * as THREE from "three";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//axes helper
const axeshelper = new THREE.AxesHelper(2);
scene.add(axeshelper);

// cube.scale.x = 2;
// cube.scale.y = 2;
// cube.scale.z = 2;

//sacale
cube.scale.set(2, 1, 2);

//rotation
cube.rotation.y = Math.PI * 0.23;
cube.rotation.x = Math.PI * 0.23;
cube.rotation.z = Math.PI * 0.23;

camera.position.z = 7;
camera.position.x = 2;
// camera.lookAt(new THREE.Vector3(1, 0, 1));
camera.lookAt(cube.position);

function animate() {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
