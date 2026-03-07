import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertCircle,
  Briefcase,
  Calendar,
  InboxIcon,
  Loader2,
  LogOut,
  Mail,
  MessageSquare,
  RefreshCw,
  User,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { ContactSubmission } from "../backend";
import { ServiceInterest } from "../backend";
import { useGetAllSubmissions } from "../hooks/useQueries";

// ── helpers ──────────────────────────────────────────────────────────────────

const SERVICE_LABELS: Record<ServiceInterest, string> = {
  [ServiceInterest.socialMediaManagement]: "Social Media Management",
  [ServiceInterest.seo]: "SEO",
  [ServiceInterest.paidAds]: "Paid Ads",
  [ServiceInterest.googleAds]: "Google Ads",
  [ServiceInterest.consulting]: "1:1 Consulting",
  [ServiceInterest.workshop]: "Workshop",
};

const SERVICE_COLORS: Record<ServiceInterest, string> = {
  [ServiceInterest.socialMediaManagement]:
    "bg-blue-500/15 text-blue-300 border-blue-500/25",
  [ServiceInterest.seo]:
    "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  [ServiceInterest.paidAds]:
    "bg-violet-500/15 text-violet-300 border-violet-500/25",
  [ServiceInterest.googleAds]:
    "bg-amber-500/15 text-amber-300 border-amber-500/25",
  [ServiceInterest.consulting]:
    "bg-rose-500/15 text-rose-300 border-rose-500/25",
  [ServiceInterest.workshop]: "bg-sky-500/15 text-sky-300 border-sky-500/25",
};

function formatDate(timestamp: bigint): string {
  return new Date(Number(timestamp / 1_000_000n)).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function truncate(text: string, max = 60): string {
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

// ── sub-components ───────────────────────────────────────────────────────────

function LeadDetailDialog({
  lead,
  open,
  onClose,
}: {
  lead: ContactSubmission | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!lead) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        data-ocid="admin.dialog"
        className="bg-card border-border text-foreground max-w-lg"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-lg font-bold text-foreground flex items-center gap-2">
            <User size={18} className="text-electric" />
            Lead Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pt-1">
          {/* Name & Email */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <User size={11} />
                Name
              </div>
              <p className="text-sm font-medium text-foreground">{lead.name}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <Mail size={11} />
                Email
              </div>
              <p className="text-sm font-medium text-foreground break-all">
                {lead.email}
              </p>
            </div>
          </div>

          {/* Service */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <Briefcase size={11} />
              Service Interest
            </div>
            <div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${SERVICE_COLORS[lead.serviceInterest]}`}
              >
                {SERVICE_LABELS[lead.serviceInterest] ?? lead.serviceInterest}
              </span>
            </div>
          </div>

          {/* Date */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <Calendar size={11} />
              Submitted
            </div>
            <p className="text-sm text-foreground">
              {formatDate(lead.timestamp)}
            </p>
          </div>

          {/* Message */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <MessageSquare size={11} />
              Message
            </div>
            <div className="rounded-lg bg-secondary border border-border p-3">
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                {lead.message}
              </p>
            </div>
          </div>

          {/* Reply CTA */}
          <a
            href={`mailto:${lead.email}?subject=Re: Your Ascendrix enquiry`}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-electric/10 border border-electric/25 text-electric text-sm font-semibold hover:bg-electric/20 transition-colors"
          >
            <Mail size={15} />
            Reply via Email
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ── main component ────────────────────────────────────────────────────────────

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const {
    data: leads = [],
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useGetAllSubmissions();
  const [selected, setSelected] = useState<ContactSubmission | null>(null);

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    onLogout();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Top accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-electric to-transparent" />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-electric/15 border border-electric/25 flex items-center justify-center">
              <Users size={16} className="text-electric" />
            </div>
            <div>
              <h1 className="font-display text-base font-bold text-foreground leading-tight">
                Leads Dashboard
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Ascendrix · Contact Form Submissions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Lead count badge */}
            {!isLoading && !isError && (
              <Badge className="bg-electric/15 text-electric border-electric/25 text-xs font-semibold px-2.5 py-0.5 hidden sm:inline-flex">
                {leads.length} {leads.length === 1 ? "lead" : "leads"}
              </Badge>
            )}

            <Button
              data-ocid="admin.secondary_button"
              variant="outline"
              size="sm"
              onClick={() => refetch()}
              disabled={isFetching}
              className="border-border hover:border-electric text-muted-foreground hover:text-foreground gap-2 text-xs"
            >
              <RefreshCw
                size={13}
                className={isFetching ? "animate-spin" : ""}
              />
              <span className="hidden sm:inline">Refresh</span>
            </Button>

            <Button
              data-ocid="admin.cancel_button"
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-foreground gap-2 text-xs"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Loading state */}
        {isLoading && (
          <div
            data-ocid="admin.loading_state"
            className="flex flex-col items-center justify-center py-24 gap-4"
          >
            <Loader2 size={32} className="text-electric animate-spin" />
            <p className="text-muted-foreground text-sm">
              Loading submissions…
            </p>
          </div>
        )}

        {/* Error state */}
        {isError && !isLoading && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <div className="w-14 h-14 rounded-xl bg-destructive/10 border border-destructive/25 flex items-center justify-center">
              <AlertCircle size={24} className="text-destructive" />
            </div>
            <p className="text-foreground font-semibold">
              Failed to load leads
            </p>
            <p className="text-muted-foreground text-sm text-center max-w-xs">
              Could not fetch submissions from the backend. Try refreshing.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => refetch()}
              className="border-border hover:border-electric mt-1"
            >
              <RefreshCw size={13} className="mr-2" />
              Try Again
            </Button>
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !isError && leads.length === 0 && (
          <motion.div
            data-ocid="admin.empty_state"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center">
              <InboxIcon size={28} className="text-electric/60" />
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-foreground text-lg">
                No leads yet
              </p>
              <p className="text-muted-foreground text-sm mt-1 max-w-xs">
                When someone fills out the contact form on the website, their
                submission will appear here.
              </p>
            </div>
          </motion.div>
        )}

        {/* Table */}
        {!isLoading && !isError && leads.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-border bg-card overflow-hidden"
          >
            {/* Mobile lead count */}
            <div className="px-4 py-3 border-b border-border flex items-center justify-between sm:hidden">
              <span className="text-xs text-muted-foreground font-medium">
                {leads.length} submission{leads.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-muted-foreground text-xs font-semibold uppercase tracking-wider w-10 pl-4">
                      #
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                      Name
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs font-semibold uppercase tracking-wider hidden sm:table-cell">
                      Email
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs font-semibold uppercase tracking-wider hidden md:table-cell">
                      Service
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs font-semibold uppercase tracking-wider hidden lg:table-cell">
                      Message
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs font-semibold uppercase tracking-wider hidden sm:table-cell text-right pr-4">
                      Date
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <AnimatePresence>
                    {[...leads]
                      .sort((a, b) => Number(b.timestamp) - Number(a.timestamp))
                      .map((lead, idx) => (
                        <motion.tr
                          key={`${lead.email}-${lead.timestamp}`}
                          data-ocid={`admin.row.${idx + 1}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.04 }}
                          onClick={() => setSelected(lead)}
                          className="cursor-pointer border-border hover:bg-secondary/60 transition-colors group"
                        >
                          <TableCell className="pl-4 text-muted-foreground text-xs font-mono">
                            {idx + 1}
                          </TableCell>
                          <TableCell className="font-medium text-foreground text-sm">
                            {lead.name}
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm hidden sm:table-cell">
                            {lead.email}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${SERVICE_COLORS[lead.serviceInterest]}`}
                            >
                              {SERVICE_LABELS[lead.serviceInterest] ??
                                lead.serviceInterest}
                            </span>
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm hidden lg:table-cell max-w-xs">
                            {truncate(lead.message)}
                          </TableCell>
                          <TableCell className="text-muted-foreground text-xs hidden sm:table-cell text-right pr-4 whitespace-nowrap">
                            {formatDate(lead.timestamp)}
                          </TableCell>
                        </motion.tr>
                      ))}
                  </AnimatePresence>
                </TableBody>
              </Table>
            </div>
          </motion.div>
        )}

        {/* Instructions card */}
        {!isLoading && !isError && (
          <div className="mt-6 rounded-xl border border-electric/15 bg-electric/5 p-4 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-electric/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mail size={15} className="text-electric" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-0.5">
                How to respond to a lead
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click any row to view the full message. Use the{" "}
                <span className="text-electric font-medium">
                  Reply via Email
                </span>{" "}
                button to open your email client with their address pre-filled.
                New leads appear at the top — click{" "}
                <span className="text-electric font-medium">Refresh</span> to
                check for the latest submissions.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Lead detail dialog */}
      <LeadDetailDialog
        lead={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
