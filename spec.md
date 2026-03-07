# Ascendrix

## Current State
- Full marketing website with Hero, Services, Stats, WhyAscendrix, Testimonials, ContactForm, FAQ, Footer
- Backend stores contact form submissions (name, email, message, serviceInterest, timestamp) via `submitContactForm`
- `getAllSubmissions()` query exists but no UI to view leads
- No authentication or admin protection

## Requested Changes (Diff)

### Add
- Admin dashboard page at route `/admin` (protected by a simple password)
- Password login screen before showing leads
- Leads table showing: name, email, service, message, date/time
- Lead count summary at top
- Ability to view full message in a modal/dialog

### Modify
- App.tsx: add routing so `/admin` shows the admin dashboard, all other routes show the main site
- Navbar: no changes needed

### Remove
- Nothing removed

## Implementation Plan
1. Add react-router-dom for client-side routing (check if already present)
2. Create `AdminLogin.tsx` — password input form (hardcoded password "ascendrix2024" stored only in frontend)
3. Create `AdminDashboard.tsx` — fetches `getAllSubmissions()`, displays leads in a table with: name, email, service interest label, truncated message, formatted date; clicking a row opens a dialog with full details
4. Create `AdminPage.tsx` — wraps login + dashboard with local auth state (sessionStorage)
5. Update `App.tsx` to use hash-based routing: `#/admin` renders AdminPage, default renders main site
6. No backend changes needed — `getAllSubmissions()` is already public
