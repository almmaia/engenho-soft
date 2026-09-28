import { useEffect, useRef } from "react";

const vertexShader = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform vec2 resolution;
  uniform vec2 pointer;
  uniform float time;
  uniform float scroll;

  float line(float value, float width) {
    return smoothstep(width, 0.0, abs(value));
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    uv.x += 0.22;

    float perspective = 1.0 / max(0.32, 1.32 - uv.y * 0.2);
    vec2 p = uv * perspective;
    p += (pointer - 0.5) * vec2(0.17, -0.11);

    float drift = time * 0.11 + scroll * 0.9;
    float waveA = sin(p.x * 3.1 + drift) * 0.18;
    float waveB = sin(p.x * 6.7 - drift * 1.3) * 0.055;
    float waveC = cos(p.x * 11.0 + drift * 0.7) * 0.018;
    float surface = waveA + waveB + waveC;

    float contour = 0.0;
    for (float i = 0.0; i < 13.0; i++) {
      float offset = (i - 6.0) * 0.105;
      contour += line(p.y - surface - offset, 0.008 + i * 0.00025);
    }

    float vertical = line(fract((p.x + drift * 0.07) * 4.0) - 0.5, 0.012);
    vertical *= smoothstep(0.9, 0.1, abs(p.y - surface));

    float pulse = 0.55 + 0.45 * sin(time * 0.8 + p.x * 2.0);
    vec3 graphite = vec3(0.16, 0.20, 0.24);
    vec3 electric = vec3(0.28, 0.39, 0.46);
    vec3 silver = vec3(0.72, 0.77, 0.81);
    vec3 color = mix(graphite, silver, smoothstep(-0.35, 0.8, p.x));
    color = mix(color, electric, pulse * 0.16);

    float energy = contour * (0.34 + pulse * 0.27) + vertical * 0.09;
    float glow = exp(-4.2 * abs(p.y - surface)) * 0.10;
    float vignette = smoothstep(1.65, 0.2, length(uv * vec2(0.72, 0.92)));
    float rightFade = smoothstep(-0.9, 0.25, uv.x);
    float alpha = (energy + glow) * vignette * rightFade;

    gl_FragColor = vec4(color * (energy + glow * 0.7), clamp(alpha, 0.0, 0.82));
  }
`;

function createShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function DigitalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    });
    if (!canvas || !gl) return;

    const vertex = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return;

    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      resolution: gl.getUniformLocation(program, "resolution"),
      pointer: gl.getUniformLocation(program, "pointer"),
      time: gl.getUniformLocation(program, "time"),
      scroll: gl.getUniformLocation(program, "scroll"),
    };

    const targetPointer = { x: 0.72, y: 0.5 };
    const currentPointer = { ...targetPointer };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
      const width = Math.floor(canvas.clientWidth * ratio);
      const height = Math.floor(canvas.clientHeight * ratio);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetPointer.x = event.clientX / window.innerWidth;
      targetPointer.y = 1 - event.clientY / window.innerHeight;
    };

    const startedAt = performance.now();
    const render = (now: number) => {
      resize();
      currentPointer.x += (targetPointer.x - currentPointer.x) * 0.035;
      currentPointer.y += (targetPointer.y - currentPointer.y) * 0.035;
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
      gl.uniform2f(uniforms.pointer, currentPointer.x, currentPointer.y);
      gl.uniform1f(uniforms.time, reducedMotion ? 0 : (now - startedAt) / 1000);
      gl.uniform1f(
        uniforms.scroll,
        window.scrollY / Math.max(window.innerHeight, 1),
      );
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.cancelAnimationFrame(frame);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} className="digital-field" aria-hidden="true" />;
}

export default DigitalField;
