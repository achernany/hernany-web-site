import { Typography, Accent } from "../components/ui/Typography";
import { cn } from "../lib/cn";
import "./LotoBolaCaseStudy.css";

/* ============================================================
   CasePlaceholder — local helper
   Replace each .cs-placeholder with <img> or <video>.
   The `id` matches the asset ID (e.g., "EVA-HERO-01").
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
   EvaSections
   Pure content component — no header, no footer, no Container.
   Used by SelectedWorkDetail when slug === "eva".
   ============================================================ */

export function EvaSections() {
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
          <Typography variant="h1">EVA</Typography>
          <Typography variant="bodyLg" tone="secondary">
            <Accent>Humanizing the virtual campus experience</Accent> through guided,
            community-aware UX.
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            EVA was part of a broader effort to evolve a virtual campus from a functional academic
            platform into a more human, more guided, and more connected digital environment. My
            contribution focused on login, password recovery, and especially notifications —
            treating them not as isolated screens, but as essential moments in how students orient
            themselves inside academic life.
          </Typography>
        </div>

        {/* asset-slot: EVA-HERO-01 — Replace with composed platform mosaic / hero overview */}
        <CasePlaceholder id="EVA-HERO-01" ratio="hero" hint="Composed platform mosaic — hero overview" />

        {/* Metadata strip — 6 fields, 3-col on desktop for readability */}
        <div className="cs-meta cs-meta--3col">
          <div className="cs-meta__item">
            <p className="cs-meta__label">Role</p>
            <p className="cs-meta__value">UX/UI Lead for assigned streams</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Scope</p>
            <p className="cs-meta__value">
              Research synthesis, hypothesis definition, user validation, login redesign, password
              recovery redesign, notification system design, prototyping, testing, and handoff
            </p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Focus</p>
            <p className="cs-meta__value">
              Humanizing the virtual campus experience through guided access and clearer
              communication
            </p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Institution</p>
            <p className="cs-meta__value">InLearning Institutes</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Brands involved</p>
            <p className="cs-meta__value">IDAT, ZEGEL, IPAE, Corriente Alterna</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">Output</p>
            <p className="cs-meta__value">
              Login redesign, password recovery flows, notification system, prototypes, testing
              outputs, and implementation-ready handoff
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S2 — THE CASE IN ONE MINUTE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="overview">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">02 — Overview</Typography>
          <Typography variant="h2">The case in one minute</Typography>
          <Typography variant="bodyMd" tone="secondary">
            EVA was a virtual campus platform used across InLearning Institutes in Peru. Originally
            shaped by the urgency of pandemic-driven virtual education, it later became the focus
            of a broader redesign effort aimed at making the platform feel more coherent, more
            human, and more aligned with the social and academic reality of campus life.
          </Typography>
        </div>

        <div className="cs-blocks">
          <div className="cs-block">
            <Typography variant="micro" tone="muted">What it was</Typography>
            <Typography variant="bodyMd" tone="secondary">
              A virtual campus platform for students, teachers, and academic staff across multiple
              institutions.
            </Typography>
          </div>
          <div className="cs-block">
            <Typography variant="micro" tone="muted">What changed</Typography>
            <Typography variant="bodyMd" tone="secondary">
              The redesign moved key parts of the experience away from a purely functional model
              toward a more guided and community-aware digital environment.
            </Typography>
          </div>
          <div className="cs-block">
            <Typography variant="micro" tone="muted">Why it mattered</Typography>
            <Typography variant="bodyMd" tone="secondary">
              Because academic platforms are not only tools for tasks. They also shape orientation,
              belonging, communication, and the emotional tone of learning.
            </Typography>
          </div>
        </div>

        {/* asset-slot: EVA-OVERVIEW-01 — Replace with system/platform overview diagram */}
        <CasePlaceholder
          id="EVA-OVERVIEW-01"
          ratio="wide"
          hint="Platform overview or system diagram"
        />
      </section>

      {/* ════════════════════════════════════════════
          S3 — THE CONTEXT
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="context">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">03 — Context</Typography>
          <Typography variant="h2">The context</Typography>
          <Typography variant="bodyMd" tone="secondary">
            EVA emerged after the pandemic as part of a broader effort to move beyond emergency
            virtual learning tools and build a more stable institutional platform. What had
            initially been handled through Zoom and other urgent solutions became a longer-term
            digital education problem: how to create a virtual campus that could support academic
            life more meaningfully.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            The redesign effort brought together multiple teams working on different parts of the
            platform — including home, onboarding, design system, academic flows, and other key
            areas. My team focused on login, password recovery, and notifications, while staying
            aligned with the broader product vision and the internal teams responsible for business
            and platform continuity.
          </Typography>
        </div>

        <div className="cs-split">
          {/* asset-slot: EVA-CONTEXT-01 — Replace with institutional or platform context visual */}
          <CasePlaceholder id="EVA-CONTEXT-01" ratio="landscape" hint="Institutional context — platform background" />
          {/* asset-slot: EVA-CONTEXT-02 — Replace with team / redesign effort reference */}
          <CasePlaceholder id="EVA-CONTEXT-02" ratio="landscape" hint="Redesign effort — multi-team context" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S4 — THE THESIS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="thesis">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">04 — Thesis</Typography>
          <Typography variant="h2">The thesis</Typography>
          <Typography variant="bodyMd" tone="secondary">
            The central idea behind the redesign was not simply to improve usability in isolated
            flows. It was to make the virtual campus feel more like a real campus: a place where
            students are guided, informed, connected, and continuously oriented rather than left
            alone inside a cold administrative interface.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            That meant designing for more than efficiency. It meant thinking about tone,
            visibility, communication, and how digital moments — such as login or notifications —
            could support a stronger sense of clarity, presence, and academic continuity.
          </Typography>
        </div>

        <div className="cs-callout">
          <Typography variant="bodyLg" tone="secondary">
            The goal was not just to make EVA easier to use. It was to make it feel more human.
          </Typography>
        </div>

        {/* asset-slot: EVA-THESIS-01 — Replace with concept/vision diagram or mood reference */}
        <CasePlaceholder
          id="EVA-THESIS-01"
          ratio="wide"
          hint="Concept or vision — campus feeling vs. cold portal"
        />
      </section>

      {/* ════════════════════════════════════════════
          S5 — MY ROLE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="role">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">05 — Role</Typography>
          <Typography variant="h2">My role</Typography>
          <Typography variant="bodyMd" tone="secondary">
            I led the work on my assigned streams across research interpretation, hypothesis
            building, validation, UX/UI definition, prototyping, testing, and final handoff. My
            core focus areas were login, password recovery, and notifications — with notifications
            becoming the most strategic and complex intervention within my scope.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            I also collaborated closely with the other teams working on adjacent parts of the
            platform, as well as the internal InLearning counterpart and the business-oriented
            stakeholders guiding the broader redesign effort. This was important because
            consistency across the platform depended on continuous coordination, not isolated
            screen design.
          </Typography>
        </div>

        <div className="cs-blocks">
          <div className="cs-block">
            <Typography variant="micro" tone="muted">Research and hypothesis framing</Typography>
            <Typography variant="bodyMd" tone="secondary">
              Reviewing available user research, pain points, interviews, and internal findings to
              define the right direction.
            </Typography>
          </div>
          <div className="cs-block">
            <Typography variant="micro" tone="muted">UX and UI design</Typography>
            <Typography variant="bodyMd" tone="secondary">
              Designing the assigned flows and translating a broader platform vision into usable,
              consistent interface decisions.
            </Typography>
          </div>
          <div className="cs-block">
            <Typography variant="micro" tone="muted">Validation and iteration</Typography>
            <Typography variant="bodyMd" tone="secondary">
              Testing ideas with users, refining proposals, and aligning decisions with internal
              stakeholders.
            </Typography>
          </div>
        </div>

        <div className="cs-blocks">
          <div className="cs-block">
            <Typography variant="micro" tone="muted">Cross-team coherence</Typography>
            <Typography variant="bodyMd" tone="secondary">
              Working with parallel teams and the internal counterpart to keep the experience
              aligned across the platform.
            </Typography>
          </div>
        </div>

        {/* asset-slot: EVA-ROLE-01 — Optional: replace with contribution map or role diagram */}
        <CasePlaceholder
          id="EVA-ROLE-01"
          ratio="landscape"
          hint="Optional — contribution map or role overview"
        />
      </section>

      {/* ════════════════════════════════════════════
          S6 — THE PROCESS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="process">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">06 — Process</Typography>
          <Typography variant="h2">The process</Typography>
          <Typography variant="bodyMd" tone="secondary">
            The work followed a structured product-design process. The internal team had already
            conducted substantial discovery work — including interviews, surveys, and pain-point
            mapping across the platform. Based on the streams assigned to us, the next step was to
            review those findings, formulate hypotheses, and validate whether the proposed
            direction actually addressed the problems users were experiencing.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            From there, the work moved through low-fidelity definition, stakeholder alignment,
            medium- and high-fidelity design, prototype creation, user testing, refinement, and
            final handoff documentation. The process was collaborative, iterative, and grounded in
            both research and implementation urgency.
          </Typography>
        </div>

        <div className="cs-subhead">
          <Typography variant="micro" tone="muted">
            From internal discovery to tested redesign proposals
          </Typography>
        </div>

        {/* Process sequence — 4 steps */}
        <div className="cs-four-up">
          <div className="cs-iter-item">
            {/* asset-slot: EVA-PROCESS-01 — Research inputs phase */}
            <CasePlaceholder id="EVA-PROCESS-01" ratio="card" hint="Research inputs" />
            <p className="cs-iter-label">Research inputs</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-PROCESS-02 — Hypothesis and direction phase */}
            <CasePlaceholder id="EVA-PROCESS-02" ratio="card" hint="Hypothesis and direction" />
            <p className="cs-iter-label">Hypothesis and direction</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-PROCESS-03 — Prototype and testing phase */}
            <CasePlaceholder id="EVA-PROCESS-03" ratio="card" hint="Prototype and testing" />
            <p className="cs-iter-label">Prototype and testing</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-PROCESS-04 — Refinement and handoff phase */}
            <CasePlaceholder id="EVA-PROCESS-04" ratio="card" hint="Refinement and handoff" />
            <p className="cs-iter-label">Refinement and handoff</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S7 — MAPPING THE PLATFORM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="mapping">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">07 — Platform scope</Typography>
          <Typography variant="h2">Mapping the platform</Typography>
          <Typography variant="bodyMd" tone="secondary">
            EVA was more than a single interface. It included academic dashboards, course access,
            notifications, onboarding, user profiles, reading and repository sections, newsletters,
            and other digital touchpoints related to academic life. My contribution sat inside that
            larger ecosystem, but had a direct effect on how users entered, recovered access to,
            and stayed informed within the platform.
          </Typography>
        </div>

        {/* Module map — 6 labeled visual slots */}
        <div className="cs-module-grid">
          <div className="cs-module-item">
            <p className="cs-module-item__index">01</p>
            {/* asset-slot: EVA-SCOPE-01 — Login module */}
            <CasePlaceholder id="EVA-SCOPE-01" ratio="landscape" hint="Login module" className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">Login</Typography>
          </div>
          <div className="cs-module-item">
            <p className="cs-module-item__index">02</p>
            {/* asset-slot: EVA-SCOPE-02 — Password recovery module */}
            <CasePlaceholder id="EVA-SCOPE-02" ratio="landscape" hint="Password recovery" className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">Password recovery</Typography>
          </div>
          <div className="cs-module-item">
            <p className="cs-module-item__index">03</p>
            {/* asset-slot: EVA-SCOPE-03 — Notifications module */}
            <CasePlaceholder id="EVA-SCOPE-03" ratio="landscape" hint="Notifications" className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">Notifications</Typography>
          </div>
          <div className="cs-module-item">
            <p className="cs-module-item__index">04</p>
            {/* asset-slot: EVA-SCOPE-04 — Home and community layer */}
            <CasePlaceholder id="EVA-SCOPE-04" ratio="landscape" hint="Home and community layer" className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">Home and community layer</Typography>
          </div>
          <div className="cs-module-item">
            <p className="cs-module-item__index">05</p>
            {/* asset-slot: EVA-SCOPE-05 — Academic dashboard */}
            <CasePlaceholder id="EVA-SCOPE-05" ratio="landscape" hint="Academic dashboard" className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">Academic dashboard</Typography>
          </div>
          <div className="cs-module-item">
            <p className="cs-module-item__index">06</p>
            {/* asset-slot: EVA-SCOPE-06 — Learning and repository spaces */}
            <CasePlaceholder id="EVA-SCOPE-06" ratio="landscape" hint="Learning and repository spaces" className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">Learning and repository spaces</Typography>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S8 — DESIGNING ACCESS: LOGIN
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="login">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">08 — Access</Typography>
          <Typography variant="h2">Designing access: login</Typography>
          <Typography variant="bodyMd" tone="secondary">
            The login redesign was not about reinventing a familiar pattern. It was about making
            access feel more coherent, more mature, and more institutionally aligned. The previous
            version felt visually weak and inconsistent with the tone the platform was trying to
            establish. The redesign therefore focused on visual clarity, stronger institutional
            character, and a more sober, credible presentation.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            This was especially important because EVA served different institutions with different
            identities. The login experience needed to feel standardized enough to be coherent,
            yet flexible enough to preserve each institution's sense of identity.
          </Typography>
        </div>

        <div className="cs-subhead">
          <Typography variant="micro" tone="muted">
            A familiar pattern, redesigned for coherence and tone
          </Typography>
        </div>

        {/* asset-slot: EVA-LOGIN-01 — Main login redesign / featured view */}
        <CasePlaceholder
          id="EVA-LOGIN-01"
          ratio="landscape"
          hint="Login redesign — featured view"
        />

        <div className="cs-split">
          {/* asset-slot: EVA-LOGIN-02 — Login detail / institution variant */}
          <CasePlaceholder id="EVA-LOGIN-02" ratio="portrait" hint="Login detail or institution variant" />
          {/* asset-slot: EVA-LOGIN-03 — Login supporting state or comparison */}
          <CasePlaceholder id="EVA-LOGIN-03" ratio="portrait" hint="Login supporting state or comparison" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S9 — DESIGNING ACCESS: PASSWORD RECOVERY
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="recovery">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">09 — Access</Typography>
          <Typography variant="h2">Designing access: password recovery</Typography>
          <Typography variant="bodyMd" tone="secondary">
            Password recovery was treated as a high-frequency utility flow that needed clarity
            more than novelty. The design avoided unnecessary complexity and instead focused on
            making the process feel intuitive, standard, and easy to resolve through familiar
            interaction patterns.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            Rather than overdesigning a known task, the redesign aligned the flow with user
            expectations, reduced friction, and brought it visually into the same language as the
            rest of the platform.
          </Typography>
        </div>

        <div className="cs-subhead">
          <Typography variant="micro" tone="muted">Standard patterns, reduced friction</Typography>
        </div>

        {/* asset-slot: EVA-RECOVERY-01 — Password recovery flow overview */}
        <CasePlaceholder
          id="EVA-RECOVERY-01"
          ratio="wide"
          hint="Password recovery flow — full sequence"
        />

        <div className="cs-split">
          {/* asset-slot: EVA-RECOVERY-02 — Recovery step detail */}
          <CasePlaceholder id="EVA-RECOVERY-02" ratio="portrait" hint="Recovery step detail" />
          {/* asset-slot: EVA-RECOVERY-03 — Recovery confirmation or error state */}
          <CasePlaceholder id="EVA-RECOVERY-03" ratio="portrait" hint="Recovery confirmation or error state" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S10 — THE CORE INTERVENTION: NOTIFICATIONS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="notifications">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">10 — Core intervention</Typography>
          <Typography variant="h2">The core intervention: notifications</Typography>
          <Typography variant="bodyMd" tone="secondary">
            Notifications became the most strategic part of my contribution because they addressed
            a real gap in how the platform communicated with students. Before this intervention,
            there was no clear asynchronous space where academic, financial, and institutional
            information could reach users in a way that felt structured, visible, and manageable.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            The challenge was not simply adding notifications. It was creating a system that could
            support many kinds of information without overwhelming the user. Academic alerts,
            grades, payment reminders, deadlines, updates, and promotional or institutional
            messages all competed for attention. The design therefore had to establish hierarchy,
            clarity, and a stronger sense of user control.
          </Typography>
        </div>

        <div className="cs-callout">
          <Typography variant="bodyLg" tone="secondary">
            Notifications were not a feature add-on. They were a new communication layer between
            the institution and the student.
          </Typography>
        </div>

        {/* asset-slot: EVA-NOTIF-01 — Featured notifications overview / composed view */}
        <CasePlaceholder
          id="EVA-NOTIF-01"
          ratio="landscape"
          hint="Notifications — featured composed view"
        />
      </section>

      {/* ════════════════════════════════════════════
          S11 — DESIGNING THE NOTIFICATION SYSTEM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="notif-system">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">11 — System design</Typography>
          <Typography variant="h2">Designing the notification system</Typography>
          <Typography variant="bodyMd" tone="secondary">
            One of the most important decisions was not to turn notifications into a full
            standalone page. Instead, the system was designed as a dropdown layer that could be
            accessed quickly and remain integrated with the everyday use of the platform. This
            made notifications feel present and useful without turning them into a heavy
            destination flow.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            The interaction design also had to define priorities, unread and read states,
            categories, empty states, and preference logic. The system needed to support a large
            range of use cases while still helping users feel in control of what mattered to them.
          </Typography>
        </div>

        <div className="cs-subhead">
          <Typography variant="micro" tone="muted">
            Balancing institutional needs and user control
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            The business side wanted strong communication reach, but the user experience could not
            become an overload machine. The final design created a structure where some
            notifications were active by default while still allowing users to manage aspects of
            their notification experience more selectively.
          </Typography>
        </div>

        {/* asset-slot: EVA-NOTIF-02 — Full system flow / notification architecture */}
        <CasePlaceholder
          id="EVA-NOTIF-02"
          ratio="wide"
          hint="Notification system flow — architecture overview"
        />

        {/* Notification states and interaction detail — 4 cards */}
        <div className="cs-four-up">
          <div className="cs-iter-item">
            {/* asset-slot: EVA-NOTIF-03 — Unread / read states */}
            <CasePlaceholder id="EVA-NOTIF-03" ratio="portrait" hint="Unread / read states" />
            <p className="cs-iter-label">Unread and read states</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-NOTIF-04 — Categories and hierarchy */}
            <CasePlaceholder id="EVA-NOTIF-04" ratio="portrait" hint="Categories and hierarchy" />
            <p className="cs-iter-label">Categories and hierarchy</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-NOTIF-05 — Empty state */}
            <CasePlaceholder id="EVA-NOTIF-05" ratio="portrait" hint="Empty state" />
            <p className="cs-iter-label">Empty state</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-NOTIF-06 — Preference / management logic */}
            <CasePlaceholder id="EVA-NOTIF-06" ratio="portrait" hint="Preference and management" />
            <p className="cs-iter-label">Preference logic</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S12 — HUMANIZING THE TONE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="tone">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">12 — Tone and guidance</Typography>
          <Typography variant="h2">Humanizing the tone of the platform</Typography>
          <Typography variant="bodyMd" tone="secondary">
            A key part of the redesign was making EVA feel less mechanical and more supportive.
            This was reflected not only in interface structure, but also in tone of voice,
            onboarding logic, and the idea of EVA as a more guiding presence inside the platform.
            The product needed to do more than display tasks. It needed to orient and accompany
            students in a way that felt clearer and more human.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            This was especially relevant in education, where confusion and distance can quickly
            turn a platform into a source of frustration rather than support. Small moments —
            such as how a student logs in, receives information, or understands what to do next —
            contribute directly to that broader emotional experience.
          </Typography>
        </div>

        {/* asset-slot: EVA-TONE-01 — Tone and guidance concept / featured view */}
        <CasePlaceholder
          id="EVA-TONE-01"
          ratio="landscape"
          hint="Tone and guidance — platform voice concept"
        />

        <div className="cs-split">
          {/* asset-slot: EVA-TONE-02 — Tone detail or onboarding moment */}
          <CasePlaceholder id="EVA-TONE-02" ratio="landscape" hint="Tone detail or onboarding moment" />
          {/* asset-slot: EVA-TONE-03 — EVA as guiding presence reference */}
          <CasePlaceholder id="EVA-TONE-03" ratio="landscape" hint="EVA as guiding presence" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S13 — RESEARCH, VALIDATION, AND TESTING
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="research">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">13 — Research and validation</Typography>
          <Typography variant="h2">Research, validation, and testing</Typography>
          <Typography variant="bodyMd" tone="secondary">
            The redesign was grounded in both prior internal research and direct validation work
            during the project. Existing interviews, surveys, and internal findings gave the team
            a starting point, but each stream still required hypothesis definition and targeted
            testing to confirm whether the proposed solutions were actually working.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            This meant validating assumptions with users, gathering insights from testing sessions,
            and refining the designs before final delivery. The work therefore balanced
            institutional goals with observable user behavior and feedback.
          </Typography>
        </div>

        {/* asset-slot: EVA-RESEARCH-01 — Research overview / testing session reference */}
        <CasePlaceholder
          id="EVA-RESEARCH-01"
          ratio="hero"
          hint="Research overview — testing and synthesis"
        />

        <div className="cs-three-up">
          {/* asset-slot: EVA-RESEARCH-02 — Interview or survey reference */}
          <CasePlaceholder id="EVA-RESEARCH-02" ratio="card" hint="Interview or survey reference" />
          {/* asset-slot: EVA-RESEARCH-03 — Testing session or findings */}
          <CasePlaceholder id="EVA-RESEARCH-03" ratio="card" hint="Testing session or findings" />
          {/* asset-slot: EVA-RESEARCH-04 — Iteration output from validation */}
          <CasePlaceholder id="EVA-RESEARCH-04" ratio="card" hint="Iteration output from validation" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S14 — DESIGNING FOR CONSISTENCY
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="consistency">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">14 — Platform consistency</Typography>
          <Typography variant="h2">Designing for consistency across a shared platform</Typography>
          <Typography variant="bodyMd" tone="secondary">
            Because the redesign was distributed across multiple teams and streams, consistency
            was an essential concern. Each intervention had to make sense on its own, but also
            feel aligned with the wider EVA experience. This required ongoing coordination with
            adjacent teams, internal platform counterparts, and the broader design and product
            effort shaping the virtual campus.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            The value of the work therefore also came from keeping local decisions connected to a
            larger platform language rather than solving each screen in isolation.
          </Typography>
        </div>

        {/* asset-slot: EVA-CONSISTENCY-01 — Consistency or design system reference */}
        <CasePlaceholder
          id="EVA-CONSISTENCY-01"
          ratio="wide"
          hint="Consistency — cross-team alignment or design system reference"
        />
      </section>

      {/* ════════════════════════════════════════════
          S15 — BEFORE AND AFTER
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="before-after">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">15 — Transformation</Typography>
          <Typography variant="h2">Before and after</Typography>
          <Typography variant="bodyMd" tone="secondary">
            The redesign improved clarity, institutional tone, visual consistency, and the user's
            ability to understand what required attention. In particular, notifications created a
            clearer layer of communication that helped students stay informed without depending
            entirely on disconnected channels or passive discovery inside the platform.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            The result was a platform experience that felt more mature, more coordinated, and more
            supportive in the everyday routines of academic life.
          </Typography>
        </div>

        {/* Before / After pairs */}
        <div className="cs-split">
          <div className="cs-iter-item">
            {/* asset-slot: EVA-BEFOREAFTER-01 — Before state (login / access) */}
            <CasePlaceholder id="EVA-BEFOREAFTER-01" ratio="landscape" hint="Before — login or access" />
            <p className="cs-iter-label">Before</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-BEFOREAFTER-02 — After state (login / access redesign) */}
            <CasePlaceholder id="EVA-BEFOREAFTER-02" ratio="landscape" hint="After — login redesign" />
            <p className="cs-iter-label">After</p>
          </div>
        </div>

        <div className="cs-split">
          <div className="cs-iter-item">
            {/* asset-slot: EVA-BEFOREAFTER-03 — Before state (notifications) */}
            <CasePlaceholder id="EVA-BEFOREAFTER-03" ratio="landscape" hint="Before — no notification layer" />
            <p className="cs-iter-label">Before</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-BEFOREAFTER-04 — After state (notification system) */}
            <CasePlaceholder id="EVA-BEFOREAFTER-04" ratio="landscape" hint="After — notification system" />
            <p className="cs-iter-label">After</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S16 — OUTCOMES AND IMPLEMENTATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="outcomes">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">16 — Outcomes</Typography>
          <Typography variant="h2">Outcomes and implementation</Typography>
          <Typography variant="bodyMd" tone="secondary">
            The full scope of my assigned streams was implemented. This mattered because the work
            was not only exploratory or speculative; it became part of the actual platform
            experience. The redesign improved access clarity, strengthened the institutional tone
            of the platform, and introduced a new notification layer that helped students
            understand what required attention more quickly.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            More broadly, the project contributed to a platform that felt less fragmented and more
            human in the way it addressed students. It showed how educational UX can support not
            only tasks, but also guidance, continuity, and a stronger sense of digital academic
            presence.
          </Typography>
        </div>

        <div className="cs-value-grid">
          <div className="cs-value-block">
            <Typography variant="micro" tone="muted">Clearer access</Typography>
            <Typography variant="bodyMd" tone="secondary">
              Login and recovery flows became more coherent and visually aligned with the platform.
            </Typography>
          </div>
          <div className="cs-value-block">
            <Typography variant="micro" tone="muted">Stronger communication</Typography>
            <Typography variant="bodyMd" tone="secondary">
              Notifications introduced a more structured asynchronous dialogue between the
              institution and the student.
            </Typography>
          </div>
          <div className="cs-value-block">
            <Typography variant="micro" tone="muted">More human experience</Typography>
            <Typography variant="bodyMd" tone="secondary">
              The redesign contributed to a platform that felt more supportive, more
              understandable, and more institutionally coherent.
            </Typography>
          </div>
        </div>

        <div className="cs-three-up">
          {/* asset-slot: EVA-IMPACT-01 — Implementation or live product reference */}
          <CasePlaceholder id="EVA-IMPACT-01" ratio="landscape" hint="Implementation or live product reference" />
          {/* asset-slot: EVA-IMPACT-02 — Outcome or value detail */}
          <CasePlaceholder id="EVA-IMPACT-02" ratio="landscape" hint="Outcome or value detail" />
          {/* asset-slot: EVA-IMPACT-03 — Supporting evidence or delivery reference */}
          <CasePlaceholder id="EVA-IMPACT-03" ratio="landscape" hint="Supporting evidence or delivery reference" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S17 — WHAT THIS REPRESENTS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="practice">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">17 — Practice</Typography>
          <Typography variant="h2">What this project represents in my practice</Typography>
          <Typography variant="bodyMd" tone="secondary">
            EVA reflects an important part of my design practice: working at the intersection of
            education, human behavior, interface systems, and product thinking. It is a case where
            UX was not only about task completion, but about making a digital environment feel
            more oriented, more relational, and more aligned with the lived reality of its users.
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            It remains one of the clearest examples of how I approach design as both functional
            structure and human mediation.
          </Typography>
        </div>

        {/* asset-slot: EVA-CLOSING-01 — Closing hero / platform composed view */}
        <CasePlaceholder
          id="EVA-CLOSING-01"
          ratio="hero"
          hint="Closing hero — composed platform view"
        />
      </section>

      {/* ════════════════════════════════════════════
          S18 — ROLE AND COLLABORATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="collaboration">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">18 — Credits</Typography>
          <Typography variant="h2">Role and collaboration</Typography>
          <Typography variant="bodyMd" tone="secondary">
            This case reflects my leadership and execution across the assigned streams of login,
            password recovery, and notifications — including research interpretation, hypothesis
            framing, UX/UI design, validation, iteration, and final handoff. The project was
            developed in coordination with adjacent external teams, the internal InLearning
            counterpart, and the business-oriented stakeholders guiding the redesign effort.
          </Typography>
        </div>

        <div className="cs-role-grid">
          <div className="cs-role-item">
            <p className="cs-role-item__label">My role</p>
            <p className="cs-role-item__value">
              Lead design across my assigned streams, including research-driven direction,
              UX/UI definition, testing, and delivery.
            </p>
          </div>
          <div className="cs-role-item">
            <p className="cs-role-item__label">Assigned scope</p>
            <p className="cs-role-item__value">Login, password recovery, and notifications.</p>
          </div>
          <div className="cs-role-item">
            <p className="cs-role-item__label">Collaboration</p>
            <p className="cs-role-item__value">
              Cross-team coordination with other redesign streams, internal platform
              representatives, and business stakeholders.
            </p>
          </div>
          <div className="cs-role-item">
            <p className="cs-role-item__label">Implementation</p>
            <p className="cs-role-item__value">
              The full scope of my streams was implemented in the live product.
            </p>
          </div>
        </div>

        {/* asset-slot: EVA-CREDITS-01 — Optional: team or collaboration reference */}
        <CasePlaceholder
          id="EVA-CREDITS-01"
          ratio="landscape"
          hint="Optional — team or collaboration reference"
        />
      </section>

      {/* ════════════════════════════════════════════
          ANNEXES — Supporting research and process materials
          ════════════════════════════════════════════ */}
      <section className="cs-section cs-annex" id="annexes">
        <div className="cs-annex-head">
          <Typography variant="micro" tone="muted">Supporting materials</Typography>
          <Typography variant="h3">Supporting research and process materials</Typography>
          <Typography variant="bodyMd" tone="secondary">
            Reference materials, wireframes, research outputs, and early explorations that
            supported the redesign process.
          </Typography>
        </div>

        <div className="cs-annex-grid">
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-01 — Wireframes */}
            <CasePlaceholder id="EVA-ANNEX-01" ratio="card" hint="Wireframes" />
            <p className="cs-caption">Wireframes</p>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-02 — Research summaries */}
            <CasePlaceholder id="EVA-ANNEX-02" ratio="card" hint="Research summaries" />
            <p className="cs-caption">Research summaries</p>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-03 — Interview clips or stills */}
            <CasePlaceholder id="EVA-ANNEX-03" ratio="card" hint="Interview clips or stills" />
            <p className="cs-caption">Interview clips or stills</p>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-04 — Benchmark references */}
            <CasePlaceholder id="EVA-ANNEX-04" ratio="card" hint="Benchmark references" />
            <p className="cs-caption">Benchmark references</p>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-05 — Early explorations */}
            <CasePlaceholder id="EVA-ANNEX-05" ratio="card" hint="Early explorations" />
            <p className="cs-caption">Early explorations</p>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-06 — Handoff documentation */}
            <CasePlaceholder id="EVA-ANNEX-06" ratio="card" hint="Handoff documentation" />
            <p className="cs-caption">Handoff documentation</p>
          </div>
        </div>
      </section>

    </div>
  );
}
