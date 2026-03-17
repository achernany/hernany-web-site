import { Typography, Accent } from "../components/ui/Typography";
import { cn } from "../lib/cn";
import "./LotoBolaCaseStudy.css";

/* ============================================================
   CasePlaceholder — local helper
   Replace each .cs-placeholder with <img> or <video>.
   The `id` matches the asset ID (e.g., "PZ-HERO-01").
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
   PlayzonBetSections
   Pure content component — no header, no footer, no Container.
   Used by SelectedWorkDetail when slug === "playzonbet".
   ============================================================ */

export function PlayzonBetSections() {
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
          <Typography variant="h1">PlayzonBet</Typography>
          <Typography variant="bodyLg" tone="secondary">
            <Accent>Transforming a betting platform</Accent> under regulatory, technical,
            and operational constraints.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            PlayzonBet became a product redesign shaped by real pressure: legal urgency,
            provider limitations, operational complexity, mobile-first usage, and the need
            to evolve a weak frontend into a more controlled and credible digital experience.
          </Typography>
        </div>

        {/* asset-slot: PZ-HERO-01 — Replace with product mosaic / composed hero */}
        <CasePlaceholder id="PZ-HERO-01" ratio="hero" hint="Product mosaic — composed hero" />

        <div className="cs-meta cs-meta--5col">
          <div className="cs-meta__item">
            <p className="cs-meta__label">Role</p>
            <p className="cs-meta__value">Product Designer / UX·UI</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Scope</p>
            <p className="cs-meta__value">
              Product redesign, compliance flows, registration UX, sportsbook adaptation,
              mobile-first navigation, content structure, CMS logic, frontend control layer
            </p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Focus</p>
            <p className="cs-meta__value">
              Transforming a provider-dependent betting platform into a more controlled,
              compliant, and maintainable product experience
            </p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Providers</p>
            <p className="cs-meta__value">Madmen · EveryMatrix · Optimove · Strapi</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Output</p>
            <p className="cs-meta__value">
              Website redesign, registration wizard, account/wallet improvements, promotions
              and content logic, sportsbook shell adaptation, CMS structure, mobile-first improvements
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
            PlayzonBet was a redesign and relaunch of a sportsbook and casino platform for the
            Peruvian market. The project replaced a weak and difficult-to-maintain frontend with
            a more controlled product layer shaped by compliance needs, operational realities,
            mobile-first behavior, and stronger brand credibility.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-blocks">
            <div className="cs-block">
              <Typography variant="h3">What it was</Typography>
              <Typography variant="bodyMd" tone="secondary">
                A redesign of a live betting and casino platform operating under third-party
                infrastructure and growing legal demands.
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">What changed</Typography>
              <Typography variant="bodyMd" tone="secondary">
                The product moved from a basic and hard-to-manage frontend toward a more
                structured, branded, and maintainable experience.
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">Why it mattered</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Because the previous setup was limiting product quality, day-to-day operations,
                legal compliance, and user trust.
              </Typography>
            </div>
          </div>
          {/* asset-slot: PZ-OVERVIEW-01 — Replace with system overview / overview diagram */}
          <CasePlaceholder id="PZ-OVERVIEW-01" ratio="landscape" hint="System overview / overview diagram" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S3 — THE CONTEXT
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="context">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">02 — Context</Typography>
          <Typography variant="h2">The context</Typography>
          <Typography variant="bodyLg" tone="secondary">
            PlayzonBet was a digital betting and casino product for the Peruvian market. At the
            time of redesign, the business wanted to relaunch the platform with a stronger visual
            position, better user experience, and more control over the frontend. The existing setup
            depended heavily on EveryMatrix, which provided the sportsbook, casino feeds, backoffice
            infrastructure, and an embedded frontend model that was too limited for the business's needs.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            The moment was especially critical because Peru was updating its regulatory requirements
            for betting platforms. Registration, identity validation, responsible gaming,
            self-suspension, and account control features would all need to meet higher standards.
            The redesign therefore became both a business opportunity and an operational necessity.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-split">
            {/* asset-slot: PZ-CONTEXT-01 — Replace with market and business context */}
            <CasePlaceholder id="PZ-CONTEXT-01" ratio="landscape" hint="Market and business context" />
            {/* asset-slot: PZ-CONTEXT-02 — Replace with regulatory landscape */}
            <CasePlaceholder id="PZ-CONTEXT-02" ratio="landscape" hint="Regulatory landscape" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S4 — THE REAL PROBLEM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="problem">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">03 — Problem</Typography>
          <Typography variant="h2">The real problem</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The visible issue was that the platform looked outdated, generic, and below the
            standard the business wanted to project. But the deeper problem was structural.
            The frontend was difficult to maintain, content operations were cumbersome,
            promotions were hard to manage, and many customer-facing processes lacked flexibility.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            At the same time, the upcoming legal requirements made it clear that the old setup
            would not be enough. The business needed a product layer it could control more directly
            — one that could support a more robust registration process, clearer account management,
            stronger responsible gaming mechanisms, and more agile daily operations.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-callout">
            <Typography variant="bodyLg" tone="secondary">
              <Accent>The issue was not just poor UI.</Accent>{" "}
              It was dependency, compliance risk, operational friction, and product fragility.
            </Typography>
          </div>
          <div className="cs-split">
            {/* asset-slot: PZ-PROBLEM-01 — Replace with before — existing platform issues */}
            <CasePlaceholder id="PZ-PROBLEM-01" ratio="landscape" hint="Before — existing platform issues" />
            {/* asset-slot: PZ-PROBLEM-02 — Replace with after — redesigned experience */}
            <CasePlaceholder id="PZ-PROBLEM-02" ratio="landscape" hint="After — redesigned experience" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S5 — CONSTRAINTS THAT SHAPED THE PRODUCT
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="constraints">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">04 — Constraints</Typography>
          <Typography variant="h2">Constraints that shaped the product</Typography>
          <Typography variant="bodyLg" tone="secondary">
            This redesign took place under layered constraints. The sportsbook and live sportsbook
            core came from the provider and could not be redesigned freely. Legal requirements for
            registration and account protection were non-negotiable. Time pressure was high, internal
            stakeholders had different priorities, and more than ninety percent of usage happened on
            mobile. The work therefore required designing under dependency, not from a blank canvas.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">What we could control, influence, and adapt</Typography>
            <Typography variant="bodyLg" tone="secondary">
              The challenge was not to imagine an ideal system without limits, but to improve what
              users actually experienced while aligning business ambition, provider capabilities,
              technical feasibility, and legal obligations.
            </Typography>
          </div>
          {/* asset-slot: PZ-CONSTRAINTS-01 — Replace with control / influence / fixed layers diagram */}
          <CasePlaceholder id="PZ-CONSTRAINTS-01" ratio="landscape" hint="Control / influence / fixed layers diagram" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S6 — MY ROLE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="contribution">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">05 — Contribution</Typography>
          <Typography variant="h2">My role</Typography>
          <Typography variant="bodyLg" tone="secondary">
            I was hired as a UX/UI designer, but the scope quickly became broader. I worked across
            discovery, requirements synthesis, flow design, interface structure, implementation
            prioritization, and cross-team alignment. The role involved translating needs from
            operations, legal, compliance, CRM, customer service, finance, marketing, and ownership
            into a coherent product direction.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            I also worked directly with development and external providers to understand
            implementation limits, integration possibilities, and content-management needs.
            This included continuous coordination with Madmen, EveryMatrix, Optimove, and the
            teams involved in frontend delivery and platform integration.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-split">
            <div className="cs-block">
              <Typography variant="h3">Discovery and alignment</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Gathering requirements across internal areas and identifying opportunities
                for improvement.
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">Product and flow definition</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Turning operational, legal, and user requirements into structured journeys
                and interface logic.
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">UX/UI design</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Designing the new frontend experience, mobile behaviors, account logic,
                and branded product surfaces.
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">Implementation prioritization</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Defining what to build first and how to align the work with technical
                feasibility and launch constraints.
              </Typography>
            </div>
          </div>
          {/* asset-slot: PZ-ROLE-01 — Replace with team and collaboration context */}
          <CasePlaceholder id="PZ-ROLE-01" ratio="card" hint="Team and collaboration context" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S7 — MAPPING THE PRODUCT ECOSYSTEM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="scope">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">06 — Product Scope</Typography>
          <Typography variant="h2">Mapping the product ecosystem</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The project touched multiple layers of the experience: public-facing pages,
            sportsbook access, account and wallet information, promotions, registration and
            verification, responsible gaming controls, customer support surfaces, content
            management, and mobile navigation patterns. What mattered was not only redesigning
            isolated pages, but improving the coherence of the product as a whole.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-module-grid">
            <div className="cs-module-item">
              <span className="cs-module-item__index">01</span>
              {/* asset-slot: PZ-SCOPE-01 — Replace with public-facing website thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-01" ratio="landscape" hint="Public-facing website" className="cs-module-item__placeholder" />
              <Typography variant="h3">Public-facing website</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Landing, promotions, game access, and brand-facing surfaces that set the
                first impression.
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">02</span>
              {/* asset-slot: PZ-SCOPE-02 — Replace with registration and verification thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-02" ratio="landscape" hint="Registration and verification" className="cs-module-item__placeholder" />
              <Typography variant="h3">Registration and verification</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Compliance-critical onboarding flow with stepped structure, identity validation,
                and responsible gaming entry.
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">03</span>
              {/* asset-slot: PZ-SCOPE-03 — Replace with sportsbook shell thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-03" ratio="landscape" hint="Sportsbook shell" className="cs-module-item__placeholder" />
              <Typography variant="h3">Sportsbook shell</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Navigation shell and visual adaptation around the provider-embedded sportsbook engine.
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">04</span>
              {/* asset-slot: PZ-SCOPE-04 — Replace with account and wallet thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-04" ratio="landscape" hint="Account and wallet" className="cs-module-item__placeholder" />
              <Typography variant="h3">Account and wallet</Typography>
              <Typography variant="bodyMd" tone="secondary">
                User account visibility, deposit and withdrawal flows, balance information,
                and self-management controls.
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">05</span>
              {/* asset-slot: PZ-SCOPE-05 — Replace with promotions and communication thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-05" ratio="landscape" hint="Promotions and communication" className="cs-module-item__placeholder" />
              <Typography variant="h3">Promotions and communication</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Bonus surfaces, free-spin communication, CRM touchpoints, and editorial
                promotion management.
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">06</span>
              {/* asset-slot: PZ-SCOPE-06 — Replace with CMS and content logic thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-06" ratio="landscape" hint="CMS and content logic" className="cs-module-item__placeholder" />
              <Typography variant="h3">CMS and content logic</Typography>
              <Typography variant="bodyMd" tone="secondary">
                Strapi-backed content structure enabling editorial flexibility, legal text
                updates, and recurring page management.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S8 — COMPLIANCE AS A DESIGN DRIVER
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="compliance">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">07 — Compliance</Typography>
          <Typography variant="h2">Compliance as a design driver</Typography>
          <Typography variant="bodyLg" tone="secondary">
            One of the most defining aspects of the redesign was the legal update in Peru.
            The previous model allowed users to enter the platform with minimal information
            and complete the rest later. That approach was no longer viable. New requirements
            demanded stronger identity validation, age checks, responsible gaming support,
            self-suspension options, account blocking mechanisms, and visible
            compliance-related communication.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            This changed the design problem significantly. Registration could no longer be
            treated as a quick entry point. It had to become a controlled, transparent, and
            confidence-building process that still felt manageable for the user.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-callout">
            <Typography variant="bodyLg" tone="secondary">
              <Accent>Compliance was not a side requirement.</Accent>{" "}
              It was one of the main drivers of the product redesign.
            </Typography>
          </div>
          {/* asset-slot: PZ-COMPLIANCE-01 — Replace with compliance flow / regulatory requirements map */}
          <CasePlaceholder id="PZ-COMPLIANCE-01" ratio="wide" hint="Compliance flow / regulatory requirements map" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S9 — REDESIGNING REGISTRATION AND VERIFICATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="registration">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">08 — Registration</Typography>
          <Typography variant="h2">Redesigning registration and verification</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The registration flow had to become more rigorous without becoming unnecessarily
            overwhelming. To address this, the experience was structured as a step-based wizard
            that clarified progress, grouped information more intelligently, and made a more
            demanding legal process feel clearer and more guided.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            The flow also supported progressive validation logic. Identity checks, age validation,
            and security-related verification could be staged more clearly, helping reduce ambiguity
            while aligning with the legal and technical realities of the platform.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">Turning a heavier process into a more understandable one</Typography>
          </div>
          {/* asset-slot: PZ-REG-01 — Replace with registration wizard — full flow overview */}
          <CasePlaceholder id="PZ-REG-01" ratio="wide" hint="Registration wizard — full flow overview" />
          <div className="cs-four-up">
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-REG-02 — Replace with step 01 — account basics */}
              <CasePlaceholder id="PZ-REG-02" ratio="portrait" hint="Step 01 — Account basics" />
              <p className="cs-caption">Personal information and account creation</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-REG-03 — Replace with step 02 — identity */}
              <CasePlaceholder id="PZ-REG-03" ratio="portrait" hint="Step 02 — Identity" />
              <p className="cs-caption">Identity validation and age check</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-REG-04 — Replace with step 03 — security */}
              <CasePlaceholder id="PZ-REG-04" ratio="portrait" hint="Step 03 — Security" />
              <p className="cs-caption">Password, security, and confirmation</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-REG-05 — Replace with step 04 — compliance */}
              <CasePlaceholder id="PZ-REG-05" ratio="portrait" hint="Step 04 — Compliance" />
              <p className="cs-caption">Responsible gaming and legal agreements</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S10 — TAKING CONTROL OF THE FRONTEND
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="frontend-control">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">09 — Frontend Control</Typography>
          <Typography variant="h2">Taking control of the frontend</Typography>
          <Typography variant="bodyLg" tone="secondary">
            A major part of the redesign was the move toward a more controlled frontend layer.
            The previous setup made content operations and product adjustments unnecessarily
            difficult. By redesigning the product around a frontend the business could shape
            more directly, the team gained more agility over structure, communication, and
            daily management.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            This was especially important for promotions, informational content, legal text,
            buttons, editorial changes, and other recurring surfaces that could not remain
            trapped inside a rigid provider-facing setup.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">From provider dependency to a more controllable product layer</Typography>
          </div>
          <div className="cs-three-up">
            {/* asset-slot: PZ-ARCH-01 — Replace with architecture — before vs after */}
            <CasePlaceholder id="PZ-ARCH-01" ratio="landscape" hint="Architecture — before vs after" />
            {/* asset-slot: PZ-ARCH-02 — Replace with frontend ownership structure */}
            <CasePlaceholder id="PZ-ARCH-02" ratio="landscape" hint="Frontend ownership structure" />
            {/* asset-slot: PZ-ARCH-03 — Replace with editable zones / content governance */}
            <CasePlaceholder id="PZ-ARCH-03" ratio="landscape" hint="Editable zones / content governance" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S11 — DESIGNING FOR DAILY OPERATIONS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="operations">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">10 — Operations</Typography>
          <Typography variant="h2">Designing for daily operations</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The redesign also had to support how the platform operated every day. Promotions,
            free-spin communication, user status visibility, account information, and
            support-related interactions all depended on the frontend being easier to manage
            and easier to understand. In the old setup, many of these processes were far too
            manual or hard to surface clearly.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            A better product experience therefore meant more than visual polish. It meant making
            recurring interactions more maintainable, more visible, and more usable for both
            the business and the user.
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: PZ-OPS-01 — Replace with operations — featured surface */}
          <CasePlaceholder id="PZ-OPS-01" ratio="landscape" hint="Operations — featured surface" />
          <div className="cs-three-up">
            {/* asset-slot: PZ-OPS-02 — Replace with promotions management */}
            <CasePlaceholder id="PZ-OPS-02" ratio="card" hint="Promotions management" />
            {/* asset-slot: PZ-OPS-03 — Replace with account and status visibility */}
            <CasePlaceholder id="PZ-OPS-03" ratio="card" hint="Account and status visibility" />
            {/* asset-slot: PZ-OPS-04 — Replace with support and recurring flows */}
            <CasePlaceholder id="PZ-OPS-04" ratio="card" hint="Support and recurring flows" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S12 — WORKING WITH A THIRD-PARTY SPORTSBOOK
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="sportsbook">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">11 — Sportsbook</Typography>
          <Typography variant="h2">Working with a third-party sportsbook</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The sportsbook and live sportsbook core were embedded from the provider and could
            not be redesigned freely at a functional level. That meant the work had to focus on
            adaptation, shell alignment, surrounding navigation, and visual consistency rather
            than full control of the core betting engine.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            Even within those limits, it was still possible to improve the perceived coherence
            of the experience. The redesign pushed for better alignment between the embedded
            sportsbook and the rest of the product, especially in mobile navigation, category
            access, and top-level visual integration.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">Improving what users experienced without owning the whole system</Typography>
          </div>
          {/* asset-slot: PZ-SB-01 — Replace with sportsbook — before/after adaptation */}
          <CasePlaceholder id="PZ-SB-01" ratio="landscape" hint="Sportsbook — before/after adaptation" />
          <div className="cs-three-up">
            {/* asset-slot: PZ-SB-02 — Replace with mobile navigation alignment */}
            <CasePlaceholder id="PZ-SB-02" ratio="card" hint="Mobile navigation alignment" />
            {/* asset-slot: PZ-SB-03 — Replace with category and sport access */}
            <CasePlaceholder id="PZ-SB-03" ratio="card" hint="Category and sport access" />
            {/* asset-slot: PZ-SB-04 — Replace with visual integration — shell/provider boundary */}
            <CasePlaceholder id="PZ-SB-04" ratio="card" hint="Visual integration — shell/provider boundary" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S13 — MOBILE-FIRST EXPERIENCE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="mobile">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">12 — Mobile</Typography>
          <Typography variant="h2">Mobile-first experience</Typography>
          <Typography variant="bodyLg" tone="secondary">
            Because the overwhelming majority of usage happened on mobile, navigation and
            access patterns became central to the redesign. The work included improvements
            to category browsing, navbar behavior, account access, deposit and withdrawal
            visibility, and the overall clarity of key actions on smaller screens.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            This part of the work mattered not only because of scale, but because mobile was
            where usability and friction had the greatest operational consequences.
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: PZ-MOBILE-01 — Replace with mobile — flagship showcase */}
          <CasePlaceholder id="PZ-MOBILE-01" ratio="portrait" hint="Mobile — flagship showcase" />
          <div className="cs-four-up">
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-MOBILE-02 — Replace with mobile nav / bottom bar */}
              <CasePlaceholder id="PZ-MOBILE-02" ratio="portrait" hint="Mobile nav / bottom bar" />
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-MOBILE-03 — Replace with account / wallet access */}
              <CasePlaceholder id="PZ-MOBILE-03" ratio="portrait" hint="Account / wallet access" />
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-MOBILE-04 — Replace with deposit / withdrawal flow */}
              <CasePlaceholder id="PZ-MOBILE-04" ratio="portrait" hint="Deposit / withdrawal flow" />
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-MOBILE-05 — Replace with promotions on mobile */}
              <CasePlaceholder id="PZ-MOBILE-05" ratio="portrait" hint="Promotions on mobile" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S14 — BRAND, LOOK & FEEL, AND MARKET POSITIONING
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="brand">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">13 — Brand</Typography>
          <Typography variant="h2">Brand, look and feel, and market positioning</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The previous product felt visually weak for the audience the business wanted to
            attract. The redesign therefore needed to support a stronger perception of trust,
            quality, and maturity. This was not only a visual preference — it was part of
            making the product feel more aligned with a more premium and higher-ticket positioning.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            The result was a more intentional visual language, one that helped the platform
            feel less generic and more commercially credible in a highly competitive market.
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: PZ-BRAND-01 — Replace with brand — visual identity upgrade */}
          <CasePlaceholder id="PZ-BRAND-01" ratio="landscape" hint="Brand — visual identity upgrade" />
          <div className="cs-split">
            {/* asset-slot: PZ-BRAND-02 — Replace with visual language — components and style */}
            <CasePlaceholder id="PZ-BRAND-02" ratio="landscape" hint="Visual language — components and style" />
            {/* asset-slot: PZ-BRAND-03 — Replace with market positioning — tone and feel */}
            <CasePlaceholder id="PZ-BRAND-03" ratio="landscape" hint="Market positioning — tone and feel" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S15 — DESIGNING THE CMS AND CONTENT LOGIC
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="cms">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">14 — Content &amp; CMS</Typography>
          <Typography variant="h2">Designing the CMS and content logic</Typography>
          <Typography variant="bodyLg" tone="secondary">
            Content flexibility became a key part of the redesign. The new frontend had to
            support a structure where promotions, texts, buttons, legal sections, logos,
            informational modules, and other recurring surfaces could be managed more
            effectively. This brought Strapi into the design problem — not just as a technical
            detail, but as part of the product's operational logic.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            Designing the frontend therefore also meant thinking through what should be
            editable, how content should map to interface structure, and how recurring
            publishing needs could be supported more sustainably.
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: PZ-CMS-01 — Replace with CMS / content logic — full overview */}
          <CasePlaceholder id="PZ-CMS-01" ratio="wide" hint="CMS / content logic — full overview" />
          <div className="cs-split">
            {/* asset-slot: PZ-CMS-02 — Replace with Strapi content model */}
            <CasePlaceholder id="PZ-CMS-02" ratio="landscape" hint="Strapi content model" />
            {/* asset-slot: PZ-CMS-03 — Replace with editable zones mapping */}
            <CasePlaceholder id="PZ-CMS-03" ratio="landscape" hint="Editable zones mapping" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S16 — ITERATION, TRADE-OFFS, AND WHAT CHANGED
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="iteration">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">15 — Process</Typography>
          <Typography variant="h2">Iteration, trade-offs, and what changed</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The product evolved through repeated adjustments, especially around registration,
            legal requirements, mobile behavior, and how much could realistically be adapted
            within provider constraints. Some ideas moved forward, others were reduced for
            launch, and some remained exploratory.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            Not everything was built at once. Tournament concepts and broader rewards or
            affiliate ideas remained outside the first implemented scope, while the core
            launch focused on compliance, usability, maintainability, and stronger product
            coherence.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">Designing under pressure means deciding what matters now and what can wait</Typography>
          </div>
          <div className="cs-iter-grid">
            <div className="cs-iter-item">
              {/* asset-slot: PZ-ITER-01 — Replace with early direction */}
              <CasePlaceholder id="PZ-ITER-01" ratio="landscape" hint="Early direction" />
              <p className="cs-iter-label">Early direction</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: PZ-ITER-02 — Replace with refined structure */}
              <CasePlaceholder id="PZ-ITER-02" ratio="landscape" hint="Refined structure" />
              <p className="cs-iter-label">Refined structure</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: PZ-ITER-03 — Replace with launch-ready solution */}
              <CasePlaceholder id="PZ-ITER-03" ratio="landscape" hint="Launch-ready solution" />
              <p className="cs-iter-label">Launch-ready solution</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: PZ-ITER-04 — Replace with later evolution */}
              <CasePlaceholder id="PZ-ITER-04" ratio="landscape" hint="Later evolution" />
              <p className="cs-iter-label">Later evolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S17 — OUTCOMES AND BUSINESS VALUE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="outcomes">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">16 — Outcomes</Typography>
          <Typography variant="h2">Outcomes and business value</Typography>
          <Typography variant="bodyLg" tone="secondary">
            The redesign helped make the platform easier to operate, stronger in its visual
            presentation, more aligned with the new legal requirements, and better structured
            for future iteration. It also helped the business move away from a more fragile
            frontend model toward a more manageable product layer.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            The project also created value beyond the business itself. The implementation became
            a useful reference for partners working within the Peruvian market context, especially
            around validation requirements and integration realities for betting platforms under
            new regulation.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-value-grid">
            <div className="cs-value-block">
              <Typography variant="h3">Operational improvement</Typography>
              <Typography variant="bodyMd" tone="secondary">
                The platform became easier to maintain and better suited for recurring content
                and account-related flows.
              </Typography>
            </div>
            <div className="cs-value-block">
              <Typography variant="h3">Product credibility</Typography>
              <Typography variant="bodyMd" tone="secondary">
                The redesign helped the platform feel more mature, more usable, and more
                commercially competitive.
              </Typography>
            </div>
            <div className="cs-value-block">
              <Typography variant="h3">Growth support</Typography>
              <Typography variant="bodyMd" tone="secondary">
                The new structure supported improved user experience and coincided with stronger
                product traction — from roughly 6–8k active users to around 16k.
              </Typography>
            </div>
          </div>
          <div className="cs-evidence">
            {/* asset-slot: PZ-IMPACT-01 — Replace with metrics / growth data */}
            <CasePlaceholder id="PZ-IMPACT-01" ratio="landscape" hint="Metrics / growth data" />
            {/* asset-slot: PZ-IMPACT-02 — Replace with platform quality evidence */}
            <CasePlaceholder id="PZ-IMPACT-02" ratio="square" hint="Platform quality evidence" />
            {/* asset-slot: PZ-IMPACT-03 — Replace with compliance validation */}
            <CasePlaceholder id="PZ-IMPACT-03" ratio="square" hint="Compliance validation" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S18 — WHAT THIS PROJECT REPRESENTS IN MY PRACTICE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="reflection">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">17 — Reflection</Typography>
          <Typography variant="h2">What this project represents in my practice</Typography>
          <Typography variant="bodyLg" tone="secondary">
            PlayzonBet represents my ability to redesign a live digital product under real-world
            pressure: legal requirements, provider limitations, technical constraints, operational
            needs, and business ambition all had to be resolved within one product direction.
            More than a visual redesign, it became an exercise in product transformation through
            UX structure, interface clarity, and systems-aware decision-making.
          </Typography>
        </div>
        <div className="cs-section-content">
          <Typography variant="bodyLg" tone="secondary" as="p">
            It remains one of the clearest examples of my work at the intersection of UX, UI,
            product thinking, frontend awareness, and{" "}
            <Accent>operational reality.</Accent>
          </Typography>
          {/* asset-slot: PZ-CLOSING-01 — Replace with closing visual — composed final */}
          <CasePlaceholder id="PZ-CLOSING-01" ratio="landscape" hint="Closing visual — composed final" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S19 — ROLE AND COLLABORATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="credits">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">18 — Role &amp; Credits</Typography>
          <Typography variant="h2">Role and collaboration</Typography>
          <Typography variant="bodyLg" tone="secondary">
            This case reflects a cross-functional product design contribution involving
            discovery, requirements synthesis, flow design, interface design, prioritization,
            implementation alignment, and collaboration across legal, compliance, operations,
            CRM, marketing, finance, ownership, development, and external providers.
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-role-grid">
            <div className="cs-role-item">
              <p className="cs-role-item__label">My role</p>
              <p className="cs-role-item__value">
                End-to-end UX/UI design, flow definition, product structure, prioritization,
                and implementation alignment.
              </p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">Collaborative dimensions</p>
              <p className="cs-role-item__value">
                Legal, compliance, CRM, marketing, operations, finance, provider coordination,
                and development delivery.
              </p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">External partners</p>
              <p className="cs-role-item__value">Madmen · EveryMatrix · Optimove · Strapi</p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">Notes on scope</p>
              <p className="cs-role-item__value">
                The sportsbook core remained provider-controlled. Surrounding experience layers,
                content structure, compliance flows, and visual/product coherence became the
                primary design areas.
              </p>
            </div>
          </div>
          {/* asset-slot: PZ-CREDITS-01 — Replace with team / collaboration context */}
          <CasePlaceholder id="PZ-CREDITS-01" ratio="card" hint="Team / collaboration context" />
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
            Additional documentation, references, and process artifacts. These materials are
            secondary to the main narrative and intended for deeper review.
          </Typography>
        </div>
        <div className="cs-annex-grid">
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-01 — Replace with old frontend captures */}
            <CasePlaceholder id="PZ-ANNEX-01" ratio="card" hint="Old frontend captures" />
            <Typography variant="micro" tone="muted">Old frontend captures</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-02 — Replace with registration logic and validation diagrams */}
            <CasePlaceholder id="PZ-ANNEX-02" ratio="card" hint="Registration logic diagrams" />
            <Typography variant="micro" tone="muted">Registration logic and validation diagrams</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-03 — Replace with sportsbook adaptation comparisons */}
            <CasePlaceholder id="PZ-ANNEX-03" ratio="card" hint="Sportsbook adaptation comparisons" />
            <Typography variant="micro" tone="muted">Sportsbook adaptation comparisons</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-04 — Replace with CMS content structure */}
            <CasePlaceholder id="PZ-ANNEX-04" ratio="card" hint="CMS content structure" />
            <Typography variant="micro" tone="muted">CMS and content structure</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-05 — Replace with exploratory concepts not shipped */}
            <CasePlaceholder id="PZ-ANNEX-05" ratio="card" hint="Exploratory concepts" />
            <Typography variant="micro" tone="muted">Exploratory concepts not shipped</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-06 — Replace with mobile and operational screens */}
            <CasePlaceholder id="PZ-ANNEX-06" ratio="card" hint="Mobile and operational screens" />
            <Typography variant="micro" tone="muted">Additional mobile and operational screens</Typography>
          </div>
        </div>
      </div>

    </div>
  );
}
