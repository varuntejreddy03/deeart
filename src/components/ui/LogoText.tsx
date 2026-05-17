type LogoTextProps = {
  size?: "sm" | "md" | "lg";
  light?: boolean;
};

export function LogoText({ size = "md", light = true }: LogoTextProps) {
  const sizes = {
    sm: { main: 22, sub: 7, gap: 2 },
    md: { main: 30, sub: 9, gap: 4 },
    lg: { main: 40, sub: 11, gap: 5 }
  };

  const s = sizes[size];
  const color = light ? "#FDFCFA" : "#111111";

  return (
    <span className="flex flex-col items-start leading-none select-none">
      <span style={{ fontSize: s.main, lineHeight: 1, position: "relative" }}>
        <span
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 700,
            color,
            fontSize: s.main * 1.1
          }}
        >
          Dee-
        </span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            color,
            fontSize: s.main * 1.05,
            letterSpacing: "-0.02em"
          }}
        >
          A
        </span>
        <span
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 700,
            color: "#D93A16",
            fontSize: s.main * 1.2,
            marginLeft: -s.main * 0.06
          }}
        >
          R
        </span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            color,
            fontSize: s.main * 1.05,
            letterSpacing: "0.03em",
            marginLeft: -s.main * 0.04
          }}
        >
          T
        </span>
      </span>
      <span
        style={{
          fontSize: s.sub,
          fontFamily: "sans-serif",
          fontWeight: 400,
          color: light ? "#C8A96E" : "#555555",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          marginTop: s.gap,
          display: "block"
        }}
      >
        Modular & Interiors
      </span>
    </span>
  );
}
