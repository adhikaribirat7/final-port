import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/scene.gltf');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Start playing the first animation in the glTF file, if it exists
    if (actions && animations.length > 0) {
      actions[animations[0].name].play();
    }

    // Optional cleanup if animations need to stop when component unmounts
    return () => {
      if (actions && animations.length > 0) {
        actions[animations[0].name].stop();
      }
    };
  }, [actions, animations]);

  return (
    <group ref={group} {...props}  dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="c6711bfb0e7247bb85962a2188e7ddeefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="CUERPO" position={[0.989, 20.594, 12.949]}>
                  <group name="ALA_DERE" position={[36.129, 42.067, -12.949]}>
                    <mesh name="ALA_DERE_ALA_DERE_0" geometry={nodes.ALA_DERE_ALA_DERE_0.geometry} material={materials.ALA_DERE} />
                  </group>
                  <group name="ALA_IZ" position={[-36.182, 43.524, -12.949]}>
                    <mesh name="ALA_IZ_ALA_IZ_0" geometry={nodes.ALA_IZ_ALA_IZ_0.geometry} material={materials.ALA_IZ} />
                  </group>
                  <group name="OJO" position={[12.002, 44.556, 18.715]}>
                    <mesh name="OJO_OJO_0" geometry={nodes.OJO_OJO_0.geometry} material={materials.material} />
                  </group>
                  <group name="OJO_1" position={[-10.959, 44.411, 20.132]}>
                    <mesh name="OJO_1_OJO_1_0" geometry={nodes.OJO_1_OJO_1_0.geometry} material={materials.OJO_1} />
                  </group>
                  <group name="CUERPO_BOT" position={[-0.989, 1.265, -12.949]}>
                    <mesh name="CUERPO_BOT_CUERPO_BOT_0" geometry={nodes.CUERPO_BOT_CUERPO_BOT_0.geometry} material={materials.CUERPO_BOT} />
                    <mesh name="CUERPO_BOT_CUERPO_BOT_0_1" geometry={nodes.CUERPO_BOT_CUERPO_BOT_0_1.geometry} material={materials.CUERPO_BOT} />
                  </group>
                </group>
                <group name="RUEDA_MACHINE" position={[0, 20.909, 0]}>
                  <mesh name="RUEDA_MACHINE_RUEDA_MACHINE_0" geometry={nodes.RUEDA_MACHINE_RUEDA_MACHINE_0.geometry} material={materials.RUEDA_MACHINE} />
                </group>
                <group name="BASE_PISO" position={[0, 0.475, 0]}>
                  <mesh name="BASE_PISO_BASE_PISO_0" geometry={nodes.BASE_PISO_BASE_PISO_0.geometry} material={materials.BASE_PISO} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');
