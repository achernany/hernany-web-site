import { Typography, Accent } from "../components/ui/Typography";
import { cn } from "../lib/cn";
import "./LotoBolaCaseStudy.css";

/* ============================================================
   CasePlaceholder — local helper
   Replace each .cs-placeholder with <img> or <video>.
   The `id` matches the asset ID (e.g., "LB-HERO-01").
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
   LotoBolaSections
   Pure content component — no header, no footer, no Container.
   Used by both the standalone page and SelectedWorkDetail.
   ============================================================ */

export function LotoBolaSections() {
  return (
    <div className="cs-body">

      {/* ════════════════════════════════════════════
          S1 — HERO
          ════════════════════════════════════════════ */}
      <section className="cs-section cs-section--hero" id="hero">

        <div className="cs-hero-text">
          <Typography variant="micro" tone="muted">
            Selected Work — Case Study
          </Typography>
          <Typography variant="h1">LotoBola</Typography>
          <Typography variant="bodyLg" tone="secondary">
            <Accent>Designing a lottery ecosystem</Accent> across retail, operations,
            web, communication, and service touchpoints.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            LotoBola became the clearest expression of how I work across layers:
            framing services, structuring product logic, designing interfaces,
            and translating complex operational needs into coherent user experiences.
          </Typography>
        </div>

        {/* asset-slot: LB-HERO-01 — Replace with system overview mosaic / composed hero image */}
        <CasePlaceholder id="LB-HERO-01" ratio="hero" hint="System overview — composed mosaic" />

        <div className="cs-meta">
          <div className="cs-meta__item">
            <p className="cs-meta__label">Role</p>
            <p className="cs-meta__value">Product Designer / UX·UI / Service Design</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Scope</p>
            <p className="cs-meta__value">
              Service architecture, product flows, retail experience, website,
              admin tooling, communication templates, design system foundations
            </p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Focus</p>
            <p className="cs-meta__value">
              Lottery ecosystem design across digital and assisted channels
            </p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Output</p>
            <p className="cs-meta__value">
              Website, retail app flows, admin concepts, mailings,
              blog/content structure, system foundations
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S2 — THE CASE IN ONE MINUTE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="overview">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">01 — Overview</Typography>
          <Typography variant="h2">The case in one minute</Typography>
          <Typography variant="bodyLg" tone="secondary">
            LotoBola was conceived as more than a digital product. It was an ecosystem
            with public-facing, assisted, operational, and administrative dimensions.
            The challenge was not only to make interfaces usable, but to build coherence
            across touchpoints, clarify the experience, support retail interactions,
            and create foundations for scale.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-blocks">
            <div className="cs-block">
              <Typography variant="h3">What it was</Typography>
              <Typography variant="bodyMd" tone="secondary">
                A lottery ecosystem combining public entry points, service flows,
                retail support, operational logic, and communication surfaces.
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">What I was solving</Typography>
              <Typography variant="bodyMd" tone="secondary">
                A fragmented, multi-layered experience that needed to work across
                users, internal teams, and assisted environments.
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">Why it mattered</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Because trust, clarity, operational viability, and scalability
                all depended on the system working as one connected experience.
              </Typography>
            </div>
          </div>
          {/* asset-slot: LB-OVERVIEW-01 — Replace with ecosystem diagram / service map */}
          <CasePlaceholder id="LB-OVERVIEW-01" ratio="landscape" hint="Ecosystem diagram" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S3 — THE REAL CHALLENGE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="challenge">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">02 — Challenge</Typography>
          <Typography variant="h2">The real challenge</Typography>
          <Typography variant="bodyLg" tone="secondary">
            This was never just a UI exercise. Designing for a lottery ecosystem
            meant dealing with trust, comprehension, participation flows, operational
            constraints, retail realities, communication consistency, and long-term
            scalability. The problem was systemic: different surfaces, different actors,
            different levels of assistance, and different business needs had to align
            into one experience logic.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-callout">
            <Typography variant="bodyLg" tone="secondary">
              <Accent>A lottery product is not just a screen problem.</Accent>{" "}
              It is a service problem, an operations problem, a communication problem,
              and a systems problem.
            </Typography>
          </div>
          <div className="cs-split">
            {/* asset-slot: LB-CHALLENGE-01 — Replace with challenge framing / complexity map */}
            <CasePlaceholder id="LB-CHALLENGE-01" ratio="landscape" hint="Challenge framing" />
            {/* asset-slot: LB-CHALLENGE-02 — Replace with stakeholder or actor mapping */}
            <CasePlaceholder id="LB-CHALLENGE-02" ratio="landscape" hint="Actor / stakeholder mapping" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S4 — SCOPE AND SYSTEM ARCHITECTURE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="scope">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">03 — Scope</Typography>
          <Typography variant="h2">Scope and system architecture</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The project expanded across multiple fronts: the public website,
            retail-facing flows, administrative and operational thinking,
            communication templates, content structures, and design system
            foundations. What mattered was not only designing each part,
            but making sure each part belonged to the same ecosystem.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-module-grid">
            <div className="cs-module-item">
              <span className="cs-module-item__index">01</span>
              {/* asset-slot: LB-MODULE-01 — Replace with website surface thumbnail */}
              <CasePlaceholder id="LB-MODULE-01" ratio="landscape" hint="Website" className="cs-module-item__placeholder" />
              <Typography variant="h3">Website</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Public-facing entry point. Explains the product, builds trust, drives participation.
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">02</span>
              {/* asset-slot: LB-MODULE-02 — Replace with retail/POS surface thumbnail */}
              <CasePlaceholder id="LB-MODULE-02" ratio="landscape" hint="Retail experience" className="cs-module-item__placeholder" />
              <Typography variant="h3">Retail experience</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Assisted flows and POS interactions designed for real retail contexts.
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">03</span>
              {/* asset-slot: LB-MODULE-03 — Replace with admin/operations surface thumbnail */}
              <CasePlaceholder id="LB-MODULE-03" ratio="landscape" hint="Admin / operations" className="cs-module-item__placeholder" />
              <Typography variant="h3">Admin / operations</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Internal visibility, control, and operational tooling for daily management.
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">04</span>
              {/* asset-slot: LB-MODULE-04 — Replace with email/mailing template thumbnail */}
              <CasePlaceholder id="LB-MODULE-04" ratio="landscape" hint="Mailings" className="cs-module-item__placeholder" />
              <Typography variant="h3">Mailings</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Structured email templates supporting communication consistency and repeatability.
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">05</span>
              {/* asset-slot: LB-MODULE-05 — Replace with blog/content surface thumbnail */}
              <CasePlaceholder id="LB-MODULE-05" ratio="landscape" hint="Blog / content" className="cs-module-item__placeholder" />
              <Typography variant="h3">Blog / content</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Content surfaces for explanation, engagement, and ecosystem coherence.
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">06</span>
              {/* asset-slot: LB-MODULE-06 — Replace with design system documentation thumbnail */}
              <CasePlaceholder id="LB-MODULE-06" ratio="landscape" hint="Design system" className="cs-module-item__placeholder" />
              <Typography variant="h3">Design system</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Shared foundations aligning patterns, components, and visual language across all surfaces.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S5 — INPUTS, RESEARCH, AND EARLY FOUNDATIONS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="foundations">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">04 — Foundations</Typography>
          <Typography variant="h2">Inputs, research, and early foundations</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The project was shaped by a mix of business ambition, marketing inputs,
            operational realities, early technical considerations, benchmark references,
            and exploratory design work. Rather than starting from isolated screens,
            the work began with context: what needed to exist, who needed it,
            how it would operate, and what the system had to communicate.
          </Typography>
        </div>
        <div className="cs-section-content">
          <ul className="cs-list">
            <li className="cs-list__item">Initial business and marketing briefs</li>
            <li className="cs-list__item">Competitive and visual references</li>
            <li className="cs-list__item">Early exploration materials</li>
            <li className="cs-list__item">Integration and flow documentation</li>
            <li className="cs-list__item">Strategic expectations and commercial framing</li>
          </ul>
          <div className="cs-stagger">
            {/* asset-slot: LB-FOUNDATION-01 — Replace with brief / business input documentation */}
            <CasePlaceholder id="LB-FOUNDATION-01" ratio="landscape" hint="Business brief" />
            {/* asset-slot: LB-FOUNDATION-02 — Replace with benchmark / reference board */}
            <CasePlaceholder id="LB-FOUNDATION-02" ratio="portrait" hint="Benchmark references" />
            {/* asset-slot: LB-FOUNDATION-03 — Replace with early exploration / sketches */}
            <CasePlaceholder id="LB-FOUNDATION-03" ratio="portrait" hint="Early exploration" />
            {/* asset-slot: LB-FOUNDATION-04 — Replace with flow / integration documentation */}
            <CasePlaceholder id="LB-FOUNDATION-04" ratio="landscape" hint="Flow documentation" />
          </div>
          <Typography variant="micro" tone="muted">
            Early inputs helped frame the ecosystem before visual consistency
            and interaction patterns were formalized.
          </Typography>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S6 — SERVICE ARCHITECTURE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="service">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">05 — Service Design</Typography>
          <Typography variant="h2">Service architecture</Typography>
          <Typography variant="bodyLg" tone="secondary">
            At the core of the project was the need to understand the service
            as a connected sequence of interactions rather than as isolated interfaces.
            Users, internal teams, and assisted retail dynamics all shaped the
            architecture of the experience. Mapping journeys and operational
            relationships helped surface where the experience needed clarity,
            support, continuity, and control.
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: LB-SERVICE-01 — Replace with full journey map / service blueprint (wide format) */}
          <CasePlaceholder id="LB-SERVICE-01" ratio="wide" hint="Journey map / service blueprint" />
          <div className="cs-subhead">
            <Typography variant="h3">From touchpoints to service logic</Typography>
            <Typography variant="bodyLg" tone="secondary">
              The value of the work was not only in screen design, but in organizing
              how the system held together across channels and moments.
            </Typography>
          </div>
          <div className="cs-supporting">
            <div className="cs-supporting-item">
              {/* asset-slot: LB-SERVICE-02 — Replace with touchpoint map or channel overview */}
              <CasePlaceholder id="LB-SERVICE-02" ratio="card" hint="Touchpoint map" />
              <p className="cs-caption">Channel overview and touchpoint mapping</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-SERVICE-03 — Replace with user flow or journey detail */}
              <CasePlaceholder id="LB-SERVICE-03" ratio="card" hint="User journey detail" />
              <p className="cs-caption">Customer journey — key moments</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-SERVICE-04 — Replace with operational logic or backstage diagram */}
              <CasePlaceholder id="LB-SERVICE-04" ratio="card" hint="Operational logic" />
              <p className="cs-caption">Backstage operations and support logic</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S7 — DESIGNING THE CUSTOMER-FACING EXPERIENCE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="customer">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">06 — Customer Experience</Typography>
          <Typography variant="h2">Designing the customer-facing experience</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The public experience had to balance clarity, legitimacy, simplicity,
            and engagement. It needed to explain the product, reduce ambiguity,
            and make participation feel understandable and trustworthy. The visual
            and structural decisions here were closely tied to comprehension and confidence.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-blocks">
            <div className="cs-block">
              <Typography variant="h3">Public entry points</Typography>
              <Typography variant="bodyMd" tone="secondary">
                The website and public-facing surfaces had to orient, explain,
                and establish trust from the first contact.
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">Clarity and trust</Typography>
              <Typography variant="bodyMd" tone="secondary">
                The interface needed to reduce friction by making the experience
                legible and credible at every step.
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">Conversion through understanding</Typography>
              <Typography variant="bodyMd" tone="secondary">
                The goal was not only visual polish, but better comprehension
                of what the product was and how users could move through it.
              </Typography>
            </div>
          </div>
          {/* asset-slot: LB-WEB-01 — Replace with full website showcase / hero screen */}
          <CasePlaceholder id="LB-WEB-01" ratio="landscape" hint="Website showcase — full page" />
          <div className="cs-three-up">
            {/* asset-slot: LB-WEB-02 — Replace with homepage or landing section detail */}
            <CasePlaceholder id="LB-WEB-02" ratio="portrait" hint="Landing / homepage" />
            {/* asset-slot: LB-WEB-03 — Replace with product explanation or participation flow */}
            <CasePlaceholder id="LB-WEB-03" ratio="portrait" hint="Product flow / participation" />
            {/* asset-slot: LB-WEB-04 — Replace with trust element, results, or confirmation UI */}
            <CasePlaceholder id="LB-WEB-04" ratio="portrait" hint="Trust / results / confirmation" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S8 — RETAIL EXPERIENCE AND ASSISTED FLOWS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="retail">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">07 — Retail & Channels</Typography>
          <Typography variant="h2">Retail experience and assisted flows</Typography>
          <Typography variant="bodyLg" tone="secondary">
            One of the most important aspects of the project was designing for assisted
            and retail-based interactions. This required a different kind of clarity:
            not only user-facing simplicity, but operational usefulness in real contexts
            of support, mediation, and execution. The experience had to translate across
            channels while remaining coherent.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">Designing beyond self-service</Typography>
            <Typography variant="bodyLg" tone="secondary">
              Retail environments introduced different needs, different rhythms,
              and different constraints. The work here focused on making flows
              understandable, structured, and viable in assisted contexts.
            </Typography>
          </div>
          {/* asset-slot: LB-RETAIL-01 — Replace with wide retail interface or POS overview */}
          <CasePlaceholder id="LB-RETAIL-01" ratio="wide" hint="Retail interface / POS overview" />
          <div className="cs-four-up">
            <div className="cs-supporting-item">
              {/* asset-slot: LB-RETAIL-02 — Replace with retail flow step 1 */}
              <CasePlaceholder id="LB-RETAIL-02" ratio="portrait" hint="Flow — step 01" />
              <p className="cs-caption">Entry and product selection</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-RETAIL-03 — Replace with retail flow step 2 */}
              <CasePlaceholder id="LB-RETAIL-03" ratio="portrait" hint="Flow — step 02" />
              <p className="cs-caption">Confirmation and assisted validation</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-RETAIL-04 — Replace with retail flow step 3 */}
              <CasePlaceholder id="LB-RETAIL-04" ratio="portrait" hint="Flow — step 03" />
              <p className="cs-caption">Transaction and receipt</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-RETAIL-05 — Replace with retail flow step 4 / edge cases */}
              <CasePlaceholder id="LB-RETAIL-05" ratio="portrait" hint="Flow — step 04" />
              <p className="cs-caption">Error handling and operator support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S9 — ADMIN AND OPERATIONAL THINKING
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="admin">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">08 — Operations</Typography>
          <Typography variant="h2">Admin and operational thinking</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The project also involved thinking through internal visibility,
            control, and operational usability. Even at an early stage, the
            administrative layer mattered because the ecosystem could not rely
            only on customer-facing design. Internal flows, management logic,
            and operational clarity were part of the overall experience.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">Designing for daily operation</Typography>
            <Typography variant="bodyLg" tone="secondary">
              This layer was important not because it was visually dominant,
              but because it supported the system behind the visible experience.
            </Typography>
          </div>
          {/* asset-slot: LB-ADMIN-01 — Replace with featured admin dashboard or control panel */}
          <CasePlaceholder id="LB-ADMIN-01" ratio="landscape" hint="Admin dashboard / control panel" />
          <div className="cs-split">
            {/* asset-slot: LB-ADMIN-02 — Replace with admin list view, reporting, or data table */}
            <CasePlaceholder id="LB-ADMIN-02" ratio="landscape" hint="Admin — list view / reporting" />
            {/* asset-slot: LB-ADMIN-03 — Replace with operational flow or management UI */}
            <CasePlaceholder id="LB-ADMIN-03" ratio="landscape" hint="Operational flow / management" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S10 — COMMUNICATION SYSTEM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="communications">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">09 — Communication</Typography>
          <Typography variant="h2">Communication system</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The ecosystem also needed consistency in how it communicated beyond
            core interfaces. Email templates, blog structures, and content modules
            extended the product language and supported trust, continuity, and
            brand coherence across touchpoints.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-split">
            <div>
              <Typography variant="h3">Mailings</Typography>
              <Typography variant="bodyLg" tone="secondary" as="p">
                Structured templates helped support communication consistency
                and repeatability across the full lifecycle of user interactions.
              </Typography>
            </div>
            <div>
              <Typography variant="h3">Blog and content</Typography>
              <Typography variant="bodyLg" tone="secondary" as="p">
                Content surfaces played a role in explanation, engagement,
                and ecosystem coherence — extending the product into narrative.
              </Typography>
            </div>
          </div>
          <div className="cs-split">
            {/* asset-slot: LB-COMMS-01 — Replace with email template design */}
            <CasePlaceholder id="LB-COMMS-01" ratio="portrait" hint="Email template — mailing" />
            {/* asset-slot: LB-COMMS-02 — Replace with blog / content surface design */}
            <CasePlaceholder id="LB-COMMS-02" ratio="portrait" hint="Blog / content surface" />
          </div>
          {/* asset-slot: LB-COMMS-03 — Replace with full-width communication overview or brand consistency spread */}
          <CasePlaceholder id="LB-COMMS-03" ratio="wide" hint="Communication system — full spread" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S11 — BUILDING THE DESIGN SYSTEM FOUNDATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="design-system">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">10 — Design System</Typography>
          <Typography variant="h2">Building the design system foundation</Typography>
          <Typography variant="bodyLg" tone="secondary">
            Because the project extended across multiple surfaces, consistency
            could not depend on manually repeated design decisions. A system
            foundation was necessary to align patterns, visual language, reusable
            modules, and interface behavior across the ecosystem.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">Designing for coherence at scale</Typography>
            <Typography variant="bodyLg" tone="secondary">
              The design system work helped connect products, communication surfaces,
              and future expansion under one shared logic.
            </Typography>
          </div>
          {/* asset-slot: LB-DS-01 — Replace with design system overview / component library spread */}
          <CasePlaceholder id="LB-DS-01" ratio="landscape" hint="Design system — component library" />
          <div className="cs-three-up">
            {/* asset-slot: LB-DS-02 — Replace with typography / color tokens documentation */}
            <CasePlaceholder id="LB-DS-02" ratio="card" hint="Typography & color tokens" />
            {/* asset-slot: LB-DS-03 — Replace with component documentation / pattern library */}
            <CasePlaceholder id="LB-DS-03" ratio="card" hint="Component patterns" />
            {/* asset-slot: LB-DS-04 — Replace with spacing / layout / grid documentation */}
            <CasePlaceholder id="LB-DS-04" ratio="card" hint="Spacing & layout grid" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S12 — ITERATION AND EVOLUTION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="iteration">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">11 — Process</Typography>
          <Typography variant="h2">Iteration and evolution</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The work evolved through multiple phases, references, explorations,
            and design directions. Showing that evolution matters because it reveals
            how the project was shaped, challenged, and refined over time rather
            than appearing as a single polished output.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">From early exploration to structured ecosystem</Typography>
          </div>
          <div className="cs-iter-grid">
            <div className="cs-iter-item">
              {/* asset-slot: LB-ITER-01 — Replace with early direction / first explorations */}
              <CasePlaceholder id="LB-ITER-01" ratio="landscape" hint="Early direction" />
              <p className="cs-iter-label">Early direction</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: LB-ITER-02 — Replace with intermediate structure / refined concepts */}
              <CasePlaceholder id="LB-ITER-02" ratio="landscape" hint="Intermediate structure" />
              <p className="cs-iter-label">Intermediate structure</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: LB-ITER-03 — Replace with refined flow / late-stage direction */}
              <CasePlaceholder id="LB-ITER-03" ratio="landscape" hint="Refined flow" />
              <p className="cs-iter-label">Refined flow</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: LB-ITER-04 — Replace with system-level consistency / final direction */}
              <CasePlaceholder id="LB-ITER-04" ratio="landscape" hint="System-level consistency" />
              <p className="cs-iter-label">System-level consistency</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S13 — IMPACT, VALUE, AND WHAT THE WORK ENABLED
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="impact">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">12 — Outcomes</Typography>
          <Typography variant="h2">Impact, value, and what the work enabled</Typography>
          <Typography variant="bodyLg" tone="secondary">
            Even when not every layer is measured in the same way, the work created
            value by aligning the ecosystem, clarifying product logic, supporting
            operations, and creating a stronger base for future implementation and
            scale. The significance of the project lies not only in final screens,
            but in the structure it gave to the product and service.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-value-grid">
            <div className="cs-value-block">
              <Typography variant="h3">Ecosystem coherence</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Different touchpoints were brought into one clearer experience logic,
                reducing fragmentation across channels and teams.
              </Typography>
            </div>
            <div className="cs-value-block">
              <Typography variant="h3">Operational support</Typography>
              <Typography variant="bodyMd" tone="secondary">
                The work helped make assisted, internal, and public-facing interactions
                more understandable and viable in real operational contexts.
              </Typography>
            </div>
            <div className="cs-value-block">
              <Typography variant="h3">Scalable foundation</Typography>
              <Typography variant="bodyMd" tone="secondary">
                The system was designed with future consistency and growth in mind,
                reducing the cost of future design and development decisions.
              </Typography>
            </div>
          </div>
          <div className="cs-evidence">
            {/* asset-slot: LB-IMPACT-01 — Replace with metrics, KPIs, or outcome summary */}
            <CasePlaceholder id="LB-IMPACT-01" ratio="landscape" hint="Metrics / outcome data" />
            {/* asset-slot: LB-IMPACT-02 — Replace with supporting evidence / comparative view */}
            <CasePlaceholder id="LB-IMPACT-02" ratio="square" hint="Supporting evidence" />
            {/* asset-slot: LB-IMPACT-03 — Replace with before/after, adoption, or validation data */}
            <CasePlaceholder id="LB-IMPACT-03" ratio="square" hint="Before / after or validation" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S14 — WHAT THIS PROJECT REPRESENTS IN MY PRACTICE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="reflection">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">13 — Reflection</Typography>
          <Typography variant="h2">What this project represents in my practice</Typography>
          <Typography variant="bodyLg" tone="secondary">
            LotoBola marked a shift in my work. It pushed my practice beyond
            interface-making into service orchestration, product framing,
            operational design, and systems thinking. More than any other project,
            it reflects how I approach complex design problems today: across layers,
            across teams, and across touchpoints.
          </Typography>
        </div>
        <div className="cs-section-content">
          <Typography variant="bodyLg" tone="secondary" as="p">
            It remains the clearest expression of my transition into a more senior,
            systemic,{" "}
            <Accent>product-and-service-oriented design practice.</Accent>
          </Typography>
          {/* asset-slot: LB-CLOSING-01 — Replace with strong closing visual / composed final image */}
          <CasePlaceholder id="LB-CLOSING-01" ratio="landscape" hint="Closing visual — composed final" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S15 — ROLE AND COLLABORATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="credits">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">14 — Role & Credits</Typography>
          <Typography variant="h2">Role and collaboration</Typography>
          <Typography variant="bodyLg" tone="secondary">
            This case reflects a multi-layered design contribution across strategy,
            flows, interfaces, systems, and structure. Final implementation, business
            definition, technical dependencies, and operational decisions involved
            collaboration across different actors and stages.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-role-grid">
            <div className="cs-role-item">
              <p className="cs-role-item__label">My role</p>
              <p className="cs-role-item__value">
                Product Designer — leading UX/UI, service design, and systems thinking
                across all surfaces.
              </p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">Design areas covered</p>
              <p className="cs-role-item__value">
                Service architecture · UX flows · Visual design · Admin tooling ·
                Communication templates · Design system foundations
              </p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">Collaborative dimensions</p>
              <p className="cs-role-item__value">
                Business strategy, marketing, technical feasibility, retail operations,
                and content were handled in coordination with stakeholders.
              </p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">Notes on scope / stage</p>
              <p className="cs-role-item__value">
                Some areas were exploratory or conceptual at the time of this work.
                Final implementation details varied by surface and phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ANNEXES — Supporting research and process materials
          ════════════════════════════════════════════ */}
      <div className="cs-annex" id="annexes">
        <div className="cs-annex-head">
          <Typography variant="micro" tone="muted">Annex — Process materials</Typography>
          <Typography variant="h2">Supporting research and process materials</Typography>
          <Typography variant="bodyLg" tone="secondary">
            Additional documentation, references, and process artifacts that
            informed the work. These materials are secondary to the main narrative
            and intended for deeper review.
          </Typography>
        </div>
        <div className="cs-annex-grid">
          <div className="cs-annex-card">
            {/* asset-slot: LB-ANNEX-01 — Replace with journey map documentation */}
            <CasePlaceholder id="LB-ANNEX-01" ratio="card" hint="Journey maps" />
            <Typography variant="micro" tone="muted">Journey maps</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: LB-ANNEX-02 — Replace with Notion documentation screenshots */}
            <CasePlaceholder id="LB-ANNEX-02" ratio="card" hint="Notion documentation" />
            <Typography variant="micro" tone="muted">Notion documentation</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: LB-ANNEX-03 — Replace with benchmark reference board */}
            <CasePlaceholder id="LB-ANNEX-03" ratio="card" hint="Benchmark references" />
            <Typography variant="micro" tone="muted">Benchmark references</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: LB-ANNEX-04 — Replace with additional flow captures */}
            <CasePlaceholder id="LB-ANNEX-04" ratio="card" hint="Additional flow captures" />
            <Typography variant="micro" tone="muted">Additional flow captures</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: LB-ANNEX-05 — Replace with process snapshots / working files */}
            <CasePlaceholder id="LB-ANNEX-05" ratio="card" hint="Process snapshots" />
            <Typography variant="micro" tone="muted">Process snapshots</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: LB-ANNEX-06 — Replace with additional materials / extras */}
            <CasePlaceholder id="LB-ANNEX-06" ratio="card" hint="Additional materials" />
            <Typography variant="micro" tone="muted">Additional materials</Typography>
          </div>
        </div>
      </div>

    </div>
  );
}
