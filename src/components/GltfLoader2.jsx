import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function My3DModel() {
  const model = useGLTF('public\robot_playground.glb'); // Replace with your model file path

  return (
    <primitive 
      object={model.scene} 
      position={[0, 0, 0]}  // Center the model
      scale={[1, 1, 1]}     // Adjust the scale if needed
    />
  );
}

function Scene() {
  return (
    <Canvas flat camera={{fov:45, near:0.1, far:50, positioin:[0,1,9]}} >
      <ambientLight intensity={1}/>

      <My3DModel />

      {/* Orbit Controls */}
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
