import { Typography, Accent } from "../components/ui/Typography";
import { cn } from "../lib/cn";
import "./LotoBolaCaseStudy.css";

/* ============================================================
   CasePlaceholder — local helper
   Replace each .cs-placeholder with <img> or <video>.
   The `id` matches the asset ID (e.g., "ALAZ-HERO-01").
   ============================================================ */

type PlaceholderRatio = "hero" | "wide" | "landscape" | "portrait" | "card" | "square";

interface CasePlaceholderProps {
  id: string;
  ratio?: PlaceholderRatio;
  caption?: string;
  hint?: string;
  className?: string;
}

function CasePlaceholder({ id, ratio = "landscape", caption, hint, className }: CasePlaceholderProps) {
  return (
    // asset-slot: {id} — swap this <div> for <img src="..." alt="..." /> or <video>
    <figure className={cn("cs-ph-wrap", className)}>
      <div
        className={cn("cs-placeholder", `cs-placeholder--${ratio}`)}
        aria-label={`Visual placeholder: ${id}`}
        role="img"
      >
        <span className="cs-placeholder__id">{id}</span>
        {hint && <span className="cs-placeholder__hint">{hint}</span>}
      </div>
      {caption && <figcaption className="cs-caption">{caption}</figcaption>}
    </figure>
  );
}

/* ============================================================
   AlazSections
   Pure content component — no header, no footer, no Container.
   Used by SelectedWorkDetail when slug === "alaz".
   ============================================================ */

export function AlazSections() {
  return (
    <div className="cs-body">

      {/* ── 0. HERO ──────────────────────────────────────────── */}
      <section className="cs-section cs-section--hero">
        <CasePlaceholder
          id="ALAZ-HERO-01"
          ratio="hero"
          hint="Full-bleed brand shot — ALAZ office environment or multi-project overview composition"
        />
        <div className="cs-hero-caption">
          <Typography variant="micro">
            <Accent>ALAZ — Three Products. One Consultancy.</Accent>
          </Typography>
        </div>
      </section>

      {/* ── 1. CONTEXT & ROLE ────────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            01 — Context
          </Typography>
          <Typography variant="h2">
            A Consultancy That Ships
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            <Accent>ALAZ is a boutique product and technology consultancy</Accent> specializing in regulated industries, operational systems, and product-led transformations. Engagements span discovery to delivery — embedded with clients from strategy through implementation.
          </Typography>
          <Typography variant="bodyMd">
            During this engagement period I worked as a product design lead across three simultaneous client programs: Wetrax (sports tech), Clínica San Felipe (healthcare digital services), and EGCAPP (government-adjacent SaaS). Each project carried unique operational constraints, regulatory context, and delivery pressures — demanding radically different approaches from the same foundational toolkit.
          </Typography>
          <Typography variant="bodyMd">
            What unified the work was a consistent discipline: map the constraint before designing the surface. Understand the stakeholder model before proposing a flow. Deliver something that works inside the real system, not the ideal one.
          </Typography>
        </div>

        {/* Metadata */}
        <div className="cs-meta cs-meta--3col">
          <div className="cs-meta__item">
            <span className="cs-meta__label">ROLE</span>
            <span className="cs-meta__value">Product Design Lead (Embedded Consultant)</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">CLIENTS</span>
            <span className="cs-meta__value">Wetrax · Clínica San Felipe · EGCAPP</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">SCOPE</span>
            <span className="cs-meta__value">Service Design · Discovery · UX Architecture · Delivery Ops</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">TIMELINE</span>
            <span className="cs-meta__value">Ongoing multi-engagement</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">INDUSTRIES</span>
            <span className="cs-meta__value">Sports Tech · Healthcare · Public Sector SaaS</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">FORMAT</span>
            <span className="cs-meta__value">Embedded consultancy · Parallel delivery</span>
          </div>
        </div>

        <CasePlaceholder
          id="ALAZ-01-01"
          ratio="landscape"
          caption="ALAZ delivery posture — working model across simultaneous client programs"
          hint="Diagram or photo: consultant embedded in client team, working across 3 parallel engagements"
        />
      </section>

      {/* ── 2. THREE PROJECTS AT A GLANCE ────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            02 — Projects
          </Typography>
          <Typography variant="h2">
            Three Contexts, One Toolkit
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            Each project surfaced a different type of design challenge. Wetrax demanded fast iteration on consumer-facing sports experiences. Clínica San Felipe required careful navigation of institutional constraints and regulated health data flows. EGCAPP required translating public-sector logic into usable SaaS interfaces.
          </Typography>
        </div>

        {/* Three project overview cards */}
        <div className="cs-grid cs-grid--3col">
          <CasePlaceholder
            id="ALAZ-02-01"
            ratio="card"
            caption="Wetrax — Sports tech consumer platform"
            hint="Project overview card: Wetrax logo + key product surface thumbnail"
          />
          <CasePlaceholder
            id="ALAZ-02-02"
            ratio="card"
            caption="Clínica San Felipe — Healthcare digital services"
            hint="Project overview card: Clínica San Felipe brand + patient-facing interface"
          />
          <CasePlaceholder
            id="ALAZ-02-03"
            ratio="card"
            caption="EGCAPP — Government-adjacent SaaS"
            hint="Project overview card: EGCAPP interface or workflow overview"
          />
        </div>
      </section>

      {/* ── 3. WETRAX ────────────────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            03 — Project One
          </Typography>
          <Typography variant="h2">
            Wetrax: Sports Engagement Under Speed
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            <Accent>Wetrax is a sports technology platform</Accent> connecting athletes, coaches, and fans through performance tracking, live event integration, and community features. The challenge: build and iterate fast enough to stay ahead of a competitive sports-tech window — without sacrificing the quality signals that retained users.
          </Typography>
          <Typography variant="bodyMd">
            The work centered on rationalizing a growing feature backlog into a coherent product experience. Discovery revealed fragmented onboarding, unclear value proposition hierarchy, and a notification system that created more noise than signal. Each issue was addressed through rapid design sprints with close engineering alignment.
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-03-01"
          ratio="wide"
          caption="Wetrax — main product surface and brand system"
          hint="Wide shot: Wetrax app overview, key screens laid out across device frames"
        />

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">Onboarding Rationalization</Typography>
          <Typography variant="bodyMd">
            The original onboarding flow required 11 steps before a user saw any real product value. Through session analysis and user interviews, the critical path was collapsed to 4 steps — deferring optional profile completion to post-activation. Completion rate improved materially within the first two sprint cycles post-launch.
          </Typography>
        </div>

        <div className="cs-grid cs-grid--2col">
          <CasePlaceholder
            id="ALAZ-03-02"
            ratio="portrait"
            caption="Before: 11-step onboarding — user drop-off analysis"
            hint="Before/after or annotated flow showing original onboarding complexity"
          />
          <CasePlaceholder
            id="ALAZ-03-03"
            ratio="portrait"
            caption="After: Rationalized 4-step path to first value"
            hint="Redesigned onboarding flow — minimal, value-first structure"
          />
        </div>

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">Notification Architecture</Typography>
          <Typography variant="bodyMd">
            Wetrax had accumulated a mix of marketing pushes, system events, and social signals into a single notification layer. A triage framework was designed to categorize signals by urgency and relevance — informing a new notification center UX that users could actually parse and act on.
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-03-04"
          ratio="landscape"
          caption="Wetrax notification center — signal hierarchy and interaction design"
          hint="Notification center UI with categorized alerts: live events, social, system"
        />
      </section>

      {/* ── 4. CLÍNICA SAN FELIPE ────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            04 — Project Two
          </Typography>
          <Typography variant="h2">
            Clínica San Felipe: Healthcare Flows Under Institutional Constraint
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            <Accent>Clínica San Felipe is a private healthcare institution</Accent> operating multiple outpatient and specialty services across Lima. The digital transformation mandate was clear — but the institutional environment was complex: legacy EMR integrations, privacy regulation (Ley de Protección de Datos), and deeply embedded administrative workflows that had resisted change for years.
          </Typography>
          <Typography variant="bodyMd">
            The engagement focused on patient-facing digital services: appointment scheduling, lab result access, and post-consultation communication. Each surface required careful mapping of the data flows available from existing systems, and designing experiences that felt modern to patients without requiring infrastructure the clinic wasn't ready to build.
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-04-01"
          ratio="wide"
          caption="Clínica San Felipe — patient portal and digital service surfaces"
          hint="Wide: Patient-facing interface — appointment booking, results, communications"
        />

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">Service Blueprinting First</Typography>
          <Typography variant="bodyMd">
            Before any screen was designed, a full service blueprint was built mapping the patient journey across digital touchpoints and backstage systems. This revealed three critical failure points — moments where patient expectation and system capability diverged most sharply. These became the design priority sequence.
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-04-02"
          ratio="landscape"
          caption="Service blueprint — patient journey mapped to backstage systems and failure points"
          hint="Service blueprint artifact: swimlane diagram, patient vs system vs staff layers"
        />

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">Appointment Scheduling UX</Typography>
          <Typography variant="bodyMd">
            The scheduling flow had to bridge availability data from a legacy HIS system through a middleware layer — introducing latency and occasional inconsistency. The design solution implemented optimistic UI patterns and clear system-state communication, so patients always understood what was confirmed vs. pending — without the clinic needing to replace the backend.
          </Typography>
        </div>

        <div className="cs-grid cs-grid--2col">
          <CasePlaceholder
            id="ALAZ-04-03"
            ratio="portrait"
            caption="Scheduling flow — specialty selection through confirmation"
            hint="Mobile screens: doctor selection, time slot picker, confirmation state"
          />
          <CasePlaceholder
            id="ALAZ-04-04"
            ratio="portrait"
            caption="Lab results access — secure, progressive disclosure pattern"
            hint="Results screen with privacy-aware reveal interaction and download action"
          />
        </div>
      </section>

      {/* ── 5. EGCAPP ────────────────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            05 — Project Three
          </Typography>
          <Typography variant="h2">
            EGCAPP: Public-Sector Logic in SaaS Form
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            <Accent>EGCAPP is a SaaS platform serving government-adjacent organizations</Accent> — municipalities, public agencies, and regulated entities — with operational management tooling: procurement workflows, compliance tracking, and internal reporting. The core challenge was translating complex public-sector logic into interfaces that frontline staff could actually operate without training overhead.
          </Typography>
          <Typography variant="bodyMd">
            Procurement processes in particular involved multi-actor approval chains, mandatory documentation stages, and compliance checkpoints — each with its own validation logic. The existing interface treated these as flat forms. The redesign restructured the experience around process stages, surfacing the right controls at the right moment and making compliance status visible at all times.
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-05-01"
          ratio="wide"
          caption="EGCAPP — procurement and compliance management platform"
          hint="Wide: EGCAPP dashboard, workflow overview, procurement tracker"
        />

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">Workflow-First IA</Typography>
          <Typography variant="bodyMd">
            Traditional IA organizes around feature categories. EGCAPP required an IA organized around roles and process stages — what a procurement officer needs during initiation is completely different from what they need during review or closure. Role-aware navigation was the structural solution, reducing cognitive overhead for each persona.
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-05-02"
          ratio="landscape"
          caption="Role-aware IA — navigation organized by process stage, not feature category"
          hint="IA diagram: role × stage matrix driving navigation structure"
        />

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">Compliance Visibility System</Typography>
          <Typography variant="bodyMd">
            One of the most critical unmet needs was real-time compliance status awareness. Staff were manually checking requirements against external documents. The design introduced an inline compliance tracker — persistent, contextual, and actionable — that surfaced exactly what was missing before submission, not after rejection.
          </Typography>
        </div>

        <div className="cs-grid cs-grid--2col">
          <CasePlaceholder
            id="ALAZ-05-03"
            ratio="portrait"
            caption="Procurement workflow — stage-gated interface with compliance checkpoint"
            hint="Desktop UI: procurement stage view, document checklist, approval actions"
          />
          <CasePlaceholder
            id="ALAZ-05-04"
            ratio="portrait"
            caption="Inline compliance tracker — missing requirements surfaced before submission"
            hint="Compliance panel with status indicators, required docs, and resolution CTAs"
          />
        </div>
      </section>

      {/* ── 6. CROSS-PROJECT PATTERNS ────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            06 — Patterns
          </Typography>
          <Typography variant="h2">
            What Ran Across All Three
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            Three industries, three product contexts, three client cultures. Yet the same design problems surfaced in all of them — because they shared the same root cause: <Accent>systems designed around internal logic, not human behavior.</Accent>
          </Typography>
          <Typography variant="bodyMd">
            In every engagement, the most valuable early deliverable was a constraint map — not a wireframe. Understanding what the system could and could not do, where data was reliable and where it wasn't, which stakeholders had actual authority versus perceived authority. This groundwork compressed the downstream design cycle and reduced rework significantly.
          </Typography>
          <Typography variant="bodyMd">
            The second recurring pattern was process visibility. Whether it was a patient tracking an appointment, a procurement officer checking compliance, or a Wetrax user watching a live event — each needed to understand where they were in a process and what came next. Designing that visibility into the interface — rather than assuming users would infer it — was the single highest-leverage intervention across all three products.
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-06-01"
          ratio="wide"
          caption="Pattern matrix — shared design problems and solutions across three projects"
          hint="Cross-project diagram: constraint mapping → process visibility → delivery alignment"
        />

        <CasePlaceholder
          id="ALAZ-06-02"
          ratio="landscape"
          caption="Constraint mapping artifact — used at project kickoff across all three engagements"
          hint="Constraint map template or filled artifact from one of the three projects"
        />
      </section>

      {/* ── 7. DELIVERY SYSTEM ───────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            07 — Delivery
          </Typography>
          <Typography variant="h2">
            Operating Across Parallel Engagements
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            Running three simultaneous engagements from within a consultancy requires a delivery system, not just good intentions. The operational model was built around four disciplines: <Accent>rhythm, documentation, handoff quality, and scope containment.</Accent>
          </Typography>
          <Typography variant="bodyMd">
            Each client ran on a weekly cycle — discovery and alignment on Mondays, execution mid-week, review and handoff Fridays. Documentation was non-negotiable: every decision was recorded with its rationale, so clients retained institutional knowledge even as the engagement scope shifted. Handoff artifacts were designed for engineers, not other designers — annotated, edge-case-aware, and directly implementable.
          </Typography>
          <Typography variant="bodyMd">
            Scope containment was the hardest discipline. Each client naturally wanted more than the engagement could deliver. The mechanism was explicit prioritization artifacts — a single-page scope snapshot updated weekly, shared with stakeholders — that kept the focus on what would move the most important metric before the next checkpoint.
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-07-01"
          ratio="landscape"
          caption="Delivery rhythm — weekly cadence across three parallel client engagements"
          hint="Timeline or calendar diagram showing parallel engagement cadences"
        />

        <CasePlaceholder
          id="ALAZ-07-02"
          ratio="landscape"
          caption="Handoff artifact example — annotated, engineering-ready, edge-case documented"
          hint="Figma handoff screen with redlines, component specs, interaction notes"
        />
      </section>

      {/* ── 8. OUTCOMES ──────────────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            08 — Outcomes
          </Typography>
          <Typography variant="h2">
            What Shipped and What Changed
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            All three projects delivered to production within their engagement windows. The measure of success varied by client — but in each case, the primary design objective was met: <Accent>the system became easier to operate for the people who had to use it every day.</Accent>
          </Typography>
        </div>

        {/* Outcome metrics grid */}
        <div className="cs-meta cs-meta--3col">
          <div className="cs-meta__item">
            <span className="cs-meta__label">WETRAX</span>
            <span className="cs-meta__value">Onboarding completion +↑ · Notification open rate stabilized · 4-step critical path shipped</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">CLÍNICA SAN FELIPE</span>
            <span className="cs-meta__value">Patient scheduling self-service live · Lab results digital delivery · Zero backend replacement required</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">EGCAPP</span>
            <span className="cs-meta__value">Procurement flow redesign shipped · Role-aware IA implemented · Compliance rejection rate reduced</span>
          </div>
        </div>

        <CasePlaceholder
          id="ALAZ-08-01"
          ratio="wide"
          caption="Shipped product surfaces — Wetrax, Clínica San Felipe and EGCAPP in production"
          hint="Side-by-side: production screens from all three platforms post-delivery"
        />

        <CasePlaceholder
          id="ALAZ-08-02"
          ratio="landscape"
          caption="Impact summary — key metrics and qualitative outcomes per engagement"
          hint="Infographic or table: project × metric × outcome, clean visual format"
        />
      </section>

      {/* ── 9. REFLECTIONS ───────────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            09 — Reflections
          </Typography>
          <Typography variant="h2">
            What Consultancy-Scale Delivery Teaches
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            Working embedded inside a consultancy — across industries, simultaneously — compresses design maturity faster than almost any other environment. There's no room for process theater. Every deliverable has to earn its place against real deadline pressure and real stakeholder resistance.
          </Typography>
          <Typography variant="bodyMd">
            The most important lesson across these three engagements was that <Accent>design leverage comes from understanding the constraint, not from escaping it.</Accent> Wetrax couldn't rebuild its backend. The clinic couldn't change its HIS. EGCAPP couldn't simplify public-sector compliance. The best design worked with those realities, not despite them — and found the highest-impact intervention within the space that actually existed.
          </Typography>
          <Typography variant="bodyMd">
            The second lesson was about trust accumulation. In each project, the first deliverable that matched the client's actual needs — not what they initially said they needed — was the one that unlocked real design authority. That shift, from vendor to partner, is where the most meaningful product work happens.
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-09-01"
          ratio="landscape"
          caption="Working session — constraint mapping with client stakeholders"
          hint="Photo or illustration: workshop moment, whiteboard artifacts, collaborative working session"
        />
      </section>

      {/* ── ANNEXES ──────────────────────────────────────────── */}
      <section className="cs-section cs-section--annexes">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            Annexes
          </Typography>
          <Typography variant="h2">Process Artifacts</Typography>
          <Typography variant="bodyMd">
            Supporting documentation, research outputs, and delivery artifacts from all three engagements.
          </Typography>
        </header>

        <div className="cs-grid cs-grid--2col">
          <CasePlaceholder
            id="ALAZ-ANNEX-01"
            ratio="landscape"
            caption="Annex A — Constraint map template: used at kickoff across all three projects"
            hint="Annotated constraint mapping artifact: systems, data, regulatory, stakeholder axes"
          />
          <CasePlaceholder
            id="ALAZ-ANNEX-02"
            ratio="landscape"
            caption="Annex B — Wetrax: user interview synthesis and insight clustering"
            hint="Affinity diagram or insight cards from Wetrax discovery sessions"
          />
          <CasePlaceholder
            id="ALAZ-ANNEX-03"
            ratio="landscape"
            caption="Annex C — Clínica San Felipe: full service blueprint artifact"
            hint="Complete service blueprint: patient journey + backstage systems + failure points"
          />
          <CasePlaceholder
            id="ALAZ-ANNEX-04"
            ratio="landscape"
            caption="Annex D — EGCAPP: IA tree and role-stage navigation matrix"
            hint="IA artifact: role × stage navigation structure, color-coded by permission level"
          />
          <CasePlaceholder
            id="ALAZ-ANNEX-05"
            ratio="landscape"
            caption="Annex E — Scope snapshot format: weekly alignment artifact used across engagements"
            hint="One-page scope snapshot template: priority queue, active work, deferred items"
          />
          <CasePlaceholder
            id="ALAZ-ANNEX-06"
            ratio="landscape"
            caption="Annex F — Cross-project handoff quality standards and annotation system"
            hint="Handoff guide: annotation conventions, edge case documentation format, component specs"
          />
        </div>
      </section>

    </div>
  );
}
