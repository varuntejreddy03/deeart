type LogoTextProps = {
  size?: "sm" | "md" | "lg";
  light?: boolean;
};

export function LogoText({ size = "md", light = true }: LogoTextProps) {
  const sizes = {
    sm: { main: 26, sub: 7.5, gap: 2 },
    md: { main: 30, sub: 8.5, gap: 2 },
    lg: { main: 36, sub: 9, gap: 3 }
  };

  const s = sizes[size];
  const color = light ? "#FFFFFF" : "#111111";

  return (
    <span className="flex flex-col items-start leading-none select-none">
      <span style={{ fontSize: s.main, lineHeight: 1 }}>
        <span style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, color, fontSize: s.main * 1.1 }}>
          Dee-
        </span>
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color, fontSize: s.main * 1.05 }}>
          A
        </span>
        <span style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, color: "#E53535", fontSize: s.main * 1.15, marginLeft: -s.main * 0.03 }}>
          R
        </span>
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color, fontSize: s.main * 1.05, marginLeft: -s.main * 0.02 }}>
          T
        </span>
      </span>
      <span
        style={{
          fontSize: s.sub,
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 400,
          color: light ? "#D4AF37" : "#555555",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginTop: s.gap,
          whiteSpace: "nowrap"
        }}
      >
        Crafting personalized spaces
      </span>
    </span>
  );
}
