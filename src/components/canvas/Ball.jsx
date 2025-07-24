import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isAnimated }) => {
  const [decal] = useTexture([imgUrl]);

  const BallMesh = () => (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </>
  );

  return isAnimated ? (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <BallMesh />
    </Float>
  ) : (
    <BallMesh />
  );
};

const BallCanvas = ({ icon }) => {
  const [isLargeDevice, setIsLargeDevice] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeDevice(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreenSize(); // initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isAnimated={isLargeDevice} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
