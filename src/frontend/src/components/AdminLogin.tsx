import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Eye, EyeOff, Loader2, Lock } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const ADMIN_PASSWORD = "ascendrix2024";

interface AdminLoginProps {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate a brief delay for UX feedback
    await new Promise((r) => setTimeout(r, 500));

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("adminAuth", "true");
      onLogin();
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-electric/8 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm"
      >
        {/* Card */}
        <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
          {/* Top accent line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-electric to-transparent" />

          <div className="p-8">
            {/* Logo / Brand */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-14 h-14 rounded-xl bg-electric/15 border border-electric/25 flex items-center justify-center mb-4">
                <Lock size={24} className="text-electric" />
              </div>
              <div className="text-center">
                <h1 className="font-display text-xl font-bold text-foreground tracking-tight">
                  Ascendrix Admin
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Leads Dashboard — Sign in to continue
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="admin-password"
                  className="text-sm text-muted-foreground font-medium"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="admin-password"
                    data-ocid="admin.input"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter admin password"
                    required
                    autoComplete="current-password"
                    className="bg-secondary border-border focus:border-electric focus-visible:ring-electric/30 text-foreground placeholder:text-muted-foreground/50 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Error message */}
              {error && (
                <motion.div
                  data-ocid="admin.error_state"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm"
                >
                  <AlertCircle size={15} className="flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              <Button
                data-ocid="admin.submit_button"
                type="submit"
                disabled={isLoading || !password}
                className="w-full bg-electric hover:bg-electric-bright text-white font-bold py-5 text-sm rounded-md glow-blue-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    Signing in…
                  </span>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4 opacity-50">
          Ascendrix Internal Dashboard · Authorised Access Only
        </p>
      </motion.div>
    </div>
  );
}
