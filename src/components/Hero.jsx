import {
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";

function Model() {
  const { scene, animations } = useGLTF("model (1).glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      actions["Flexing_Arm_Clean"]?.play();
    }
  }, [actions]);

  return <primitive object={scene} scale={[3, 3, 3]} position={[0, -4, 0]} />;
}

const Hero = () => {
  const greetingRef = useRef(null);
  const jobTitleRef = useRef(null);

  useEffect(() => {
    const fadeInAnimation = () => {
      // Fade-in and translate effect for greeting text
      gsap.fromTo(
        greetingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );

      // Simple rainbow gradient effect for job title
      gsap.fromTo(
        jobTitleRef.current,
        { backgroundPosition: "0% 50%" },
        {
          backgroundPosition: "200% 50%",
          duration: 4,
          ease: "linear",
          repeat: -1,
        }
      );
    };

    // Observer to detect when the elements enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fadeInAnimation();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (greetingRef.current) observer.observe(greetingRef.current);
    if (jobTitleRef.current) observer.observe(jobTitleRef.current);

    return () => {
      if (greetingRef.current) observer.unobserve(greetingRef.current);
      if (jobTitleRef.current) observer.unobserve(jobTitleRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen justify-center relative items-start flex flex-col"
    >
      <div className="w-full mx-auto flex flex-1 flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3">
        <p
          ref={greetingRef}
          className="sm:text-3xl text-2xl font-medium text-white text-center"
        >
          Hi, I'm Birat
        </p>
        <p
          ref={jobTitleRef}
          className="text-center lg:text-4xl text-2xl font-semibold bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF)",
            backgroundSize: "200% 200%",
          }}
        >
          Freelance UI designer, Fullstack developer. I create seamless web
          experiences for end-users.
        </p>
      </div>
      
      <div className="h-1/2 top-1/2 absolute w-full">
        <Canvas>
          <PerspectiveCamera
            makeDefault
            fov={35}
            position={[0, 0, 5]}
            near={0.1}
            far={1000}
          />
          <ambientLight intensity={1} />
          <pointLight position={[0, 0, 5]} />
          <Model />
          <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
