// Model.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

const Avatar = (props) => {
  const { nodes, materials } = useGLTF('public\model (1).glb'); // Update with your GLB file path

  return (
    <mesh
      {...props}
      geometry={nodes.YourMeshName.geometry}
      material={materials.YourMaterialName}
      position={[0, 0, 0]} // Change the position as needed
      rotation={[Math.PI / 4, Math.PI / 4, 0]} // Example rotation in radians
      scale={[1, 1, 1]} // Adjust scale as needed
    >
      {/* You can also add children or additional transformations here if needed */}
    </mesh>
  );
};

export default Avatar;
