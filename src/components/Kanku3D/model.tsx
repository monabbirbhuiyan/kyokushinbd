// components/ModelViewer.tsx
"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { FBXLoader } from "three-stdlib";

export default function ModelViewer() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountNode ? mountNode.clientWidth / mountNode.clientHeight : 1,
      0.1,
      1000
    );
    camera.position.set(0.15, 0, 7); // Move the camera back to view more of the model

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountNode ? mountNode.clientWidth : window.innerWidth,
      mountNode ? mountNode.clientHeight : window.innerHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);

    if (mountNode) {
      mountNode.appendChild(renderer.domElement);
    }

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    // Load and position the FBX model
    const loader = new FBXLoader();
    loader.load("/assets/kanku.fbx", (object) => {
      object.scale.set(0.017, 0.017, 0.017); // Adjust the scale to fit the viewport
      object.position.set(0, 0, 0); // Center the model
      scene.add(object);

      // Handle mouse movement for rotation
      const handleMouseMove = (event: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const mouseX = (event.clientX / innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / innerHeight) * 2 + 1;

        object.rotation.y = mouseX * 0.5;
        object.rotation.x = -mouseY * 0.5;
      };

      window.addEventListener("mousemove", handleMouseMove);

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    });

    const handleResize = () => {
      if (mountNode) {
        const width = mountNode.clientWidth;
        const height = mountNode.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="flex items-center justify-center w-full h-full"
    ></div>
  );
}
