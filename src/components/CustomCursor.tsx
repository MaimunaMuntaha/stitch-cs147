import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    // detect hover over interactive elements
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .clickable, input, textarea")) {
        setHovering(true);
      }
    };
    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .clickable, input, textarea")) {
        setHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: hovering ? "60px" : "40px", // grows on hover
        height: hovering ? "60px" : "40px",
        borderRadius: "50%",
        border: "2px solid black",
        backgroundColor: "transparent",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition:
          "width 0.2s ease-out, height 0.2s ease-out, transform 0.08s ease-out",
        zIndex: 9999,
      }}
    />
  );
}
