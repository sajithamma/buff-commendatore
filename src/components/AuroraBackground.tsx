import { useEffect, useRef } from "preact/hooks";
import * as THREE from "three";

export function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create ribbon curves
    const ribbons: { mesh: THREE.Mesh; speed: number; phaseX: number; phaseY: number; baseY: number }[] = [];

    const ribbonConfigs = [
      { color: new THREE.Color(0xaf52de), opacity: 0.06, y: 0.3, width: 0.4, speed: 0.15, phaseX: 0, phaseY: 0 },
      { color: new THREE.Color(0x007aff), opacity: 0.05, y: -0.2, width: 0.35, speed: 0.12, phaseX: 2, phaseY: 1 },
      { color: new THREE.Color(0x34c759), opacity: 0.03, y: -0.8, width: 0.3, speed: 0.1, phaseX: 4, phaseY: 3 },
    ];

    ribbonConfigs.forEach((config) => {
      const segments = 200;
      const geometry = new THREE.PlaneGeometry(8, config.width, segments, 1);

      const material = new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: config.color },
          uOpacity: { value: config.opacity },
          uPhaseX: { value: config.phaseX },
          uPhaseY: { value: config.phaseY },
        },
        vertexShader: `
          uniform float uTime;
          uniform float uPhaseX;
          uniform float uPhaseY;
          varying vec2 vUv;
          varying float vWave;

          void main() {
            vUv = uv;
            vec3 pos = position;

            // Primary wave
            float wave1 = sin(pos.x * 1.5 + uTime * 0.4 + uPhaseX) * 0.3;
            // Secondary wave for organic feel
            float wave2 = sin(pos.x * 0.8 + uTime * 0.25 + uPhaseY) * 0.15;
            // Tertiary high-freq ripple
            float wave3 = sin(pos.x * 3.0 + uTime * 0.6) * 0.05;

            pos.y += wave1 + wave2 + wave3;
            // Gentle Z undulation for depth
            pos.z += sin(pos.x * 1.2 + uTime * 0.3) * 0.15;

            vWave = wave1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uOpacity;
          varying vec2 vUv;
          varying float vWave;

          void main() {
            // Fade edges horizontally
            float fadeX = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x);
            // Fade edges vertically (thin ribbon center bright)
            float fadeY = 1.0 - pow(abs(vUv.y - 0.5) * 2.0, 2.0);
            // Brighter at wave peaks
            float waveBright = 1.0 + vWave * 0.5;

            float alpha = uOpacity * fadeX * fadeY * waveBright;
            gl_FragColor = vec4(uColor, alpha);
          }
        `,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = config.y;
      scene.add(mesh);

      ribbons.push({
        mesh,
        speed: config.speed,
        phaseX: config.phaseX,
        phaseY: config.phaseY,
        baseY: config.y,
      });
    });

    // Animation loop
    let animFrame: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animFrame = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      ribbons.forEach((ribbon) => {
        const mat = ribbon.mesh.material as THREE.ShaderMaterial;
        mat.uniforms.uTime.value = elapsed;
        // Slow vertical drift
        ribbon.mesh.position.y = ribbon.baseY + Math.sin(elapsed * 0.08 + ribbon.phaseX) * 0.1;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} class="aurora-bg" />;
}
