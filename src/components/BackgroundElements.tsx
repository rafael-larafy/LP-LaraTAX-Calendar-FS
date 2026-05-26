export default function BackgroundElements() {
  return (
    <>
      {/* Orbs */}
      <div className="fixed rounded-full pointer-events-none z-0 blur-[80px] w-[500px] h-[500px] -top-[15%] left-1/2 -translate-x-1/2 bg-[radial-gradient(circle,rgba(53,185,215,0.15)_0%,transparent_70%)]" />
      <div className="fixed rounded-full pointer-events-none z-0 blur-[80px] w-[350px] h-[350px] bottom-[5%] left-[10%] bg-[radial-gradient(circle,rgba(53,185,215,0.08)_0%,transparent_70%)]" />
      <div className="fixed rounded-full pointer-events-none z-0 blur-[80px] w-[300px] h-[300px] bottom-[10%] right-[5%] bg-[radial-gradient(circle,rgba(53,185,215,0.06)_0%,transparent_70%)]" />

      {/* Grid Pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(53,185,215,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(53,185,215,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Floating Decorations */}
      <div
        className="fixed border border-cyan/8 rounded-xl pointer-events-none z-0 w-[120px] h-[120px] top-[15%] left-[6%] animate-float"
        style={{ "--r": "15deg" } as React.CSSProperties}
      />
      <div
        className="fixed border border-cyan/8 rounded-xl pointer-events-none z-0 w-[80px] h-[80px] top-[25%] right-[8%] animate-float-reverse"
        style={{ "--r": "-20deg" } as React.CSSProperties}
      />
      <div
        className="fixed border border-cyan/8 rounded-xl pointer-events-none z-0 w-[60px] h-[60px] bottom-[20%] left-[12%] animate-float-slow"
        style={{ "--r": "40deg" } as React.CSSProperties}
      />
      <div
        className="fixed border border-cyan/8 rounded-full pointer-events-none z-0 w-[100px] h-[100px] bottom-[15%] right-[10%] animate-float-circle"
        style={{ "--r": "0deg" } as React.CSSProperties}
      />
    </>
  );
}
