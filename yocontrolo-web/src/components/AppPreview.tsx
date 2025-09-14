'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface MobileModelProps {
  textures: string[];
  interval?: number;
}

const MobileModel: React.FC<MobileModelProps> = ({ textures, interval = 3000 }) => {
  const gltf = useGLTF('/mobile.glb');
  const [currentTextureIndex, setCurrentTextureIndex] = useState(0);

  // Animación de rotación
  useFrame(({ clock }) => {
    gltf.scene.rotation.y = Math.sin(clock.getElapsedTime() / 4) * 0.2;
    gltf.scene.rotation.x = Math.sin(clock.getElapsedTime() / 8) * 0.1;
  });

  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.set(0, -0.1, 0);

  // Cambiar imágenes automáticamente
  useEffect(() => {
    if (textures.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentTextureIndex((prev) => (prev + 1) % textures.length);
    }, interval);
    return () => clearInterval(timer);
  }, [textures, interval]);

  // Aplicar textura solo al centro de las mallas (zona de pantalla) y efecto metálico
  useEffect(() => {
    if (textures.length === 0) return;

    const textureLoader = new THREE.TextureLoader();

    textureLoader.load(textures[currentTextureIndex], (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.flipY = false;
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;

      // Detectar si la imagen es cuadrada
      const isSquare = texture.image.width === texture.image.height;

      if (isSquare) {
        // 👉 Caso LOGO: mostrar centrado sin deformar
        const scale = 8;
        texture.repeat.set(-scale, -scale); // Volteo X/Y
        texture.offset.set(1 - (1.5 - scale) / 2, 2 - (1 - scale) / 2);
      } else {
        // 👉 Caso SCREENSHOT
        const imageAspect = texture.image.width / texture.image.height;
        const screenAspect = 1;

        if (screenAspect > imageAspect) {
          const scale = imageAspect / screenAspect;
          texture.repeat.x = scale;
          texture.offset.x = (1 - scale) / 2;
        } else {
          const scale = screenAspect / imageAspect;
          texture.repeat.y *= scale;
          texture.offset.y = 1 - (1 - scale) / 2;
        }
      }

      const screenMeshes = ['Cube004_1', 'Cube009_1', 'Cube001', 'Cube014'];

      gltf.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;

          // Si es pantalla, usamos textura
          if (screenMeshes.includes(mesh.name)) {
            mesh.material = new THREE.MeshStandardMaterial({
              map: texture,
              metalness: 0, // sin metal para la pantalla
              roughness: 0.8,
              side: THREE.FrontSide,
            });
          } else {
            // Para el resto del móvil, efecto metálico brillante
            mesh.material = new THREE.MeshStandardMaterial({
              color: 0xf0f0f0, // ✨ plata brillante (casi blanco)
              metalness: 1.0,  // ✨ metalizado al máximo
              roughness: 0.05, // ✨ súper suave = reflejos intensos
              envMapIntensity: 2.0, // ✨ reflejos del entorno más fuertes
              side: THREE.FrontSide,
            });
          }

          mesh.material.needsUpdate = true;
        }
      });
    });
  }, [currentTextureIndex, textures, gltf.scene]);

  return <primitive object={gltf.scene} />;
};

interface AppPreviewProps {
  screenshots: string[];
}

const AppPreview: React.FC<AppPreviewProps> = ({ screenshots }) => {
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const canvasRef = useRef<HTMLDivElement>(null);
   // Detectar doble tap para habilitar scroll
  useEffect(() => {
    if (!canvasRef.current) return;

    let lastTap = 0;

    const handleDoubleTap = (e: TouchEvent) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;

      if (tapLength < 300 && tapLength > 0) {
        // Doble tap detectado
        setControlsEnabled((prev) => !prev); // Alterna control
      }

      lastTap = currentTime;
    };

    const canvasEl = canvasRef.current;
    canvasEl.addEventListener('touchend', handleDoubleTap);

    return () => {
      canvasEl.removeEventListener('touchend', handleDoubleTap);
    };
  }, []);
  return (
    <section
      className="py-20 px-4 transition-colors duration-500 
                 bg-white dark:bg-[linear-gradient(to_right,#3b82f6,#8b5cf6)]"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Mira la app en acción
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-100 max-w-2xl mx-auto">
          Interactúa con nuestra PWA y visualiza cómo gestionar tus finanzas de manera rápida y segura.
        </p>
      </div>
      <div className="w-full h-[500px] md:h-[600px]">
        <Canvas
          camera={{ position: [0, 0, 0.4], fov: 35 }}
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
          }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[3, 3, 2]} intensity={3.0} />
          <directionalLight position={[-2, 2, -1]} intensity={2.5} color="#ffffff" />
          <directionalLight position={[0, -1, 1]} intensity={2.0} color="#4f9eff" />
          <directionalLight position={[1, -2, 0]} intensity={1.8} color="#ffffff" />
          <spotLight position={[1, 4, 3]} intensity={4.0} angle={0.4} penumbra={0.3} />
          <spotLight position={[-1, 2, -2]} intensity={3.5} angle={0.5} penumbra={0.4} color="#ff6b6b" />
          <spotLight position={[2, -1, 1]} intensity={3.0} angle={0.6} penumbra={0.2} color="#00ff88" />
          <pointLight position={[0, 0, 3]} intensity={2.0} />
          <pointLight position={[-3, 1, 0]} intensity={1.5} color="#ffaa00" />
          <Suspense fallback={null}>
            <MobileModel textures={screenshots} interval={4000} />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan
            screenSpacePanning
            autoRotate
            autoRotateSpeed={5}
            enabled={controlsEnabled}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default AppPreview;