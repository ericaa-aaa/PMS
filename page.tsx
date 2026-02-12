import Image from "next/image"
import { LoginForm } from "@/components/login-form"
import { WaveBackground } from "@/components/wave-background"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="relative w-full max-w-[850px] bg-card rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[480px]">
        {/* Left side - Hotel image */}
        <div className="relative w-full md:w-[45%] min-h-[200px] md:min-h-full">
          <Image
            src="/images/hotel-interior.jpg"
            alt="Luxury hotel interior with pool"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Login form */}
        <div className="relative w-full md:w-[55%] flex flex-col items-center justify-center px-8 py-10 md:py-8">
          {/* Wave decorations */}
          <WaveBackground />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 w-full">
            {/* Logo / Brand */}
            <div className="text-center select-none">
              <p className="text-sm font-light tracking-[0.35em] text-muted-foreground uppercase">
                Integrity
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground leading-none -mt-0.5">
                PMS
              </h1>
            </div>

            {/* Login Form */}
            <LoginForm />

            {/* Copyright */}
            <p className="text-[10px] text-muted-foreground mt-2">
              Copyright &copy; 2018-2024 IntegrityHub. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
