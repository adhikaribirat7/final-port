import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./GltfLoader";

const HeroSection = () => {
  const [dpr, setDpr] = useState(window.devicePixelRatio || 1);

  useEffect(() => {
    const updateDpr = () => {
      setDpr(window.devicePixelRatio || 1);
    };

    window.addEventListener("resize", updateDpr);
    return () => window.removeEventListener("resize", updateDpr);
  }, []);
  

  return (
    <div id='hero' className="flex bg-black lg:flex-row h-[100vh] flex-col w-full">
      <div className="flex-1 flex flex-col p-3 border-2 h-[100%] text-white items-center justify-center">
        <div className="h-[100%] flex flex-col items-start justify-center gap-9">
          <span className="text-5xl font-semibold">HELLO, I'M</span>
          <span className="text-4xl font-semibold">Birat Adhikari</span>
          <span className="text-2xl font-semibold">
            Freelance UI designer, Fullstack developer. I create
            seamless web experiences for end-users.
          </span>
          <div className="flex lg:flex-row flex-col w-full justify-evenly gap-2 h-12">
            <button className="border-2 flex-1 text-xl">About Me</button>
            <button className="border-2 flex-1 text-xl">Projects</button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Canvas
        style={{height:'100%', width:'100%'}}
          dpr={dpr}

          camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 200 }}
        >
          <ambientLight intensity={6} />
          <directionalLight position={[0, 5, 5]} />
          <Suspense fallback="no model">
            <Model position={[0, -4, -5]} scale={[0.8, 0.8, 0.8]} />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default HeroSection;
