import { OrbitControls, PerspectiveCamera, useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";

function Model() {
  // Load the model with animations
  const { scene, animations } = useGLTF("model (1).glb");
  const { actions } = useAnimations(animations, scene);

  // Start the animation
  useEffect(() => {
    if (actions) {
      console.log(animations)
      actions["Flexing_Arm_Clean"]?.play();  // Replace "AnimationName" with your actual animation name
    }
  }, [actions]);

  return <primitive object={scene} scale={[3,3,3]} position={[0,-4,0]}  />;
}

const Hero = () => {
  
  return (
    <section id='hero' className="min-h-screen justify-center relative items-start flex flex-col">
      <div className="w-full mx-auto flex flex-1 flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center">
          Hi, I'm Birat
        </p>
        <p className="text-center lg:text-4xl text-2xl font-semibold bg-gradient-to-r from-[#BEC1CF] via-[#D5D8EA] to-[#D5D8EA] bg-clip-text text-transparent">
          Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.
        </p>
      </div>
      <div className="h-1/2 top-1/2 absolute w-full ">
        <Canvas>
        <PerspectiveCamera
            makeDefault
            fov={35} // Field of view
            position={[0, 0, 5]} // Position the camera
            near={0.1} // Near clipping plane
            far={1000} // Far clipping plane
          />
          <ambientLight intensity={1} />
          <pointLight position={[0,0,5]} />
          <Model  />
          <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;


