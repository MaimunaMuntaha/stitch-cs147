import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "rgba(59,130,246,0.4)", // soft blue
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "multiply",
        transition: "transform 0.08s ease-out, background-color 0.2s ease-out",
        zIndex: 9999,
      }}
    />
  );
}
