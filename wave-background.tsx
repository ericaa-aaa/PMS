export function WaveBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M400,0 C500,100 700,150 800,100 L800,600 L0,600 L0,200 C100,250 300,-50 400,0Z"
        fill="rgba(0,0,0,0.02)"
      />
      <path
        d="M0,300 C150,250 350,350 500,280 C650,210 750,320 800,300 L800,600 L0,600Z"
        fill="rgba(0,0,0,0.02)"
      />
      <path
        d="M0,400 C200,350 300,450 500,400 C700,350 750,420 800,400 L800,600 L0,600Z"
        fill="rgba(0,0,0,0.015)"
      />
    </svg>
  )
}
