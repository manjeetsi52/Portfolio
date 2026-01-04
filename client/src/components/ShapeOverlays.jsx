import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import gsap from "gsap";

const ShapeOverlay = forwardRef((_, ref) => {
  const pathsRef = useRef([]);
  const tlRef = useRef(null);

  const numPoints = 10;
  const delayPointsMax = 0.3;
  const delayPerPath = 0.25;
  const duration = 0.9;

  const [isOpened, setIsOpened] = useState(false);
  const pointsDelay = useRef([]);
  const allPoints = useRef([]);

  useEffect(() => {
    const numPaths = pathsRef.current.length;

    allPoints.current = Array.from({ length: numPaths }, () =>
      new Array(numPoints).fill(100)
    );

    tlRef.current = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.inOut", duration },
      onUpdate: render,
    });

    return () => tlRef.current?.kill();
  }, []);

  useImperativeHandle(ref, () => ({
    open(onComplete) {
      setIsOpened(true);
      animate(onComplete);
    },
  }));

  const animate = (onComplete) => {
    const tl = tlRef.current;
    tl.clear();

    for (let i = 0; i < numPoints; i++) {
      pointsDelay.current[i] = Math.random() * delayPointsMax;
    }

    const numPaths = pathsRef.current.length;

    for (let i = 0; i < numPaths; i++) {
      const points = allPoints.current[i];
      const pathDelay = delayPerPath * i;

      for (let j = 0; j < numPoints; j++) {
        tl.to(points, { [j]: 0 }, pointsDelay.current[j] + pathDelay);
      }
    }

    if (onComplete) tl.eventCallback("onComplete", onComplete);
    tl.play(0);
  };

  const render = () => {
    pathsRef.current.forEach((path, i) => {
      const points = allPoints.current[i];
      let d = `M 0 0 V ${points[0]} C`;

      for (let j = 0; j < numPoints - 1; j++) {
        const p = ((j + 1) / (numPoints - 1)) * 100;
        const cp = p - 100 / (numPoints - 1) / 2;
        d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
      }

      d += ` V 100 H 0`;
      path.setAttribute("d", d);
    });
  };

  return (
    <svg
      className="shape-overlays"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F5A0" />
          <stop offset="100%" stopColor="#00D9F5" />
        </linearGradient>
      </defs>

      {[0, 1].map((_, i) => (
        <path
          key={i}
          ref={(el) => (pathsRef.current[i] = el)}
          fill="url(#gradient1)"
        />
      ))}
    </svg>
  );
});

export default ShapeOverlay;
