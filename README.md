# Operation Beautiful Powerful

> A coordinated runtime for the orderly execution of a very small but unusually important thing.

[![Assurance pipeline](https://img.shields.io/badge/assurance%20pipeline-nominal-2a7f62)](../../actions)
[![Operational posture](https://img.shields.io/badge/operational%20posture-deliberate-4055a8)](docs/OPERATIONS.md)
[![Availability target](https://img.shields.io/badge/availability-99.999%25-2a7f62)](docs/SLO.md)
[![Change class](https://img.shields.io/badge/change%20class-controlled-d88b30)]

Operation Beautiful Powerful (OBP) is an opinionated execution environment for high-consequence primary-surface delivery. It coordinates policy, readiness, regional intent, telemetry, and post-execution traceability across a compact but deliberately governed operational boundary.

The system was designed around one non-negotiable premise: some outcomes are too important to leave to an unstructured process.

## What this repository contains

This repository contains the reference implementation, its deployment topology, the associated assurance materials, and enough operational documentation to establish that the matter has been considered from several angles.

It does **not** attempt to explain the primary business artifact in advance. That is by design. Run the platform through an approved path and evaluate the delivered result in context.

### Current operational capabilities

| Capability domain | Status | Notes |
| --- | --- | --- |
| Primary-surface execution | Available | Gated by runtime readiness |
| Distributed readiness | Available | Regions may be logical, physical, or aspirational |
| Assurance sequencing | Enforced | Completion precedes exposure |
| Operator visibility | Available | More visibility than most events warrant |
| Recovery documentation | Available | See the relevant material before needing it |
| Measurement | Available | The system can account for itself |
| Interpretive guidance | Intentionally limited | Avoid premature conclusions |

## Entry paths

Choose the entry path that best matches your local appetite for ceremony.

### Option A: hosted development environment

1. Open the repository on GitHub.
2. Select **Code**.
3. Select the **Codespaces** tab.
4. Select **Create codespace on main**.
5. When the environment is ready, open the terminal and run:

   ```bash
   npm start
   ```

6. Open the forwarded port **8080** in a regular browser tab.

The development environment provisions the required runtime automatically. No local installation, container management, or justification memo is required.

### Option B: local source checkout

Use this path when you would like the system to inhabit your own machine.

```bash
git clone https://github.com/PresidentOfAmerica/operation-beautiful-powerful.git
cd operation-beautiful-powerful
npm install
npm start
```

Open the primary surface at:

```text
http://localhost:8080
```

### Option C: production-shaped deployment

Use this path when the surrounding infrastructure is part of the experience.

Prerequisite: [Docker Desktop](https://www.docker.com/products/docker-desktop/).

```bash
git clone https://github.com/PresidentOfAmerica/operation-beautiful-powerful.git
cd operation-beautiful-powerful
docker compose up --build
```

Once the stack has settled, the following interfaces are expected to exist:

| Interface | URL | Intended use |
| --- | --- | --- |
| Primary delivery surface | http://localhost:8080 | Observe the controlled execution sequence |
| Operations console | http://localhost:3000 | Review visualization infrastructure |
| Metrics collection point | http://localhost:9090 | Confirm that telemetry has somewhere to go |
| Readiness contract | http://localhost:8080/health | Establish machine-readable confidence |
| Diagnostic contract | http://localhost:8080/diagnostics | Inspect the readiness model |
| Metrics contract | http://localhost:8080/metrics | Connect additional measurement systems if necessary |

> The bundled observability console is intended for local use. Its initial administrative credentials are defined in the Compose configuration. Change them before presenting this environment as evidence of serious production governance.

## Execution model

OBP follows a staged execution model. The individual stages are intentionally easy to observe and intentionally difficult to skip.

```text
┌───────────────────────────────────────────────────────────────────────┐
│                      OPERATION BEAUTIFUL POWERFUL                      │
│                                                                       │
│  intent ──► readiness ──► verification ──► authorization ──► output  │
│     │             │                │                 │               │
│     └─────────────┴────────────────┴─────────────────┴───────────────┘
│                                  │                                    │
│                     evidence, telemetry, and records                  │
└───────────────────────────────────────────────────────────────────────┘
```

### Phase 0: contextual alignment

The platform establishes the boundary in which it is operating. This includes runtime identity, environmental assumptions, and a brief moment of institutional self-awareness.

### Phase 1: controlled initialization

The execution plane loads its approved configuration and validates the presence of the components it would prefer to have available. A component may be considered present even when its practical necessity is open to discussion.

### Phase 2: readiness evaluation

The platform performs a sequenced review of delivery conditions. Each result contributes to the accumulated confidence posture. The visual pacing is part of the interface contract.

### Phase 3: authorization

Once the platform has satisfied its own requirements, the execution state transitions from preparatory to externally observable.

### Phase 4: primary-surface delivery

The primary result is exposed only after the preceding phases complete. This ordering is non-negotiable because it is documented.

### Phase 5: post-execution quiet period

The platform remains available for inspection. Operators are encouraged to resist making changes immediately after a successful outcome, as this can complicate the narrative.

## Architectural position

The architecture distinguishes between the **delivery boundary**, the **assurance boundary**, and the **interpretive boundary**.

```text
                                      ┌───────────────────────────┐
                                      │   Primary Surface Client  │
                                      └─────────────┬─────────────┘
                                                    │
                                       governed HTTP ingress
                                                    │
                         ┌──────────────────────────▼──────────────────────────┐
                         │            Operation Beautiful Powerful             │
                         │                                                       │
                         │  policy │ sequencing │ delivery │ contracts │ trace  │
                         └─────┬─────────┬──────────┬───────────┬──────────────┘
                               │         │          │           │
              ┌────────────────▼─┐  ┌────▼────┐ ┌───▼────┐ ┌────▼─────────────┐
              │ State substrate  │  │ Cache   │ │ Metrics│ │ Visualization     │
              │ PostgreSQL       │  │ Redis   │ │ backend│ │ workspace         │
              └──────────────────┘  └─────────┘ └────────┘ └──────────────────┘
```

The reference topology includes components that provide different forms of reassurance:

| Component | Position | Primary contribution |
| --- | --- | --- |
| Node runtime | Execution plane | Hosts the controlled sequence |
| PostgreSQL | State substrate | Makes persistence available should it become philosophically necessary |
| Redis | Temporal substrate | Provides a place for short-lived certainty |
| Prometheus | Measurement plane | Converts events into numbers |
| Grafana | Interpretation plane | Converts numbers into panels |
| GitHub Actions | Assurance plane | Repeats checks in an official setting |
| Dev Container | Environment plane | Avoids a local setup conversation |

## Operational contract

The platform exposes a small set of contracts. Their presence should not be interpreted as a request to automate every part of the experience.

| Contract | Method | Description |
| --- | --- | --- |
| `/` | `GET` | Primary human-facing surface |
| `/health` | `GET` | Runtime readiness and general confidence posture |
| `/diagnostics` | `GET` | Current structured diagnostic representation |
| `/metrics` | `GET` | Prometheus-compatible operational measurements |

### Readiness semantics

A healthy result means that the runtime has reached its expected operating state. It does not make a judgment about whether the observer is emotionally prepared for the primary surface.

### Diagnostic semantics

The diagnostic contract reports the system's view of completion. It should be used to inform, not replace, direct observation.

### Measurement semantics

Metrics exist to support responsible operational storytelling. The presence of a time series does not, by itself, demonstrate the importance of the thing being measured.

## Deployment notes

### Supported environments

The reference implementation is routinely exercised in the following contexts:

| Environment | Expected path | Notes |
| --- | --- | --- |
| GitHub Codespaces | Option A | Recommended for first contact |
| Local Node.js | Option B | Suitable for direct execution |
| Local Compose | Option C | Suitable for people who read architecture diagrams recreationally |
| Container orchestration platforms | Adapt Option C | The repository does not prevent additional ceremony |

### Port allocation

| Port | Allocation | Exposure guidance |
| ---: | --- | --- |
| 8080 | Primary runtime | Open for local inspection |
| 3000 | Visualization environment | Optional, but conspicuous |
| 9090 | Metrics endpoint | Useful when a collector needs a collector |
| 5432 | State substrate | Internal by default |
| 6379 | Temporal substrate | Internal by default |

### Configuration posture

The reference environment is intentionally self-contained. Do not confuse self-containment with a claim that every included component is required for every possible interpretation of the workload.

## Governance materials

The documents below establish the project’s operational posture. Read them in any order that creates confidence.

| Material | Purpose |
| --- | --- |
| [Operations guide](docs/OPERATIONS.md) | Normal operating procedures and escalation context |
| [Service objectives](docs/SLO.md) | Reliability targets and evidence expectations |
| [Incident runbook](docs/INCIDENT-RUNBOOK.md) | What to do if the primary surface behaves unexpectedly |
| Architecture decision record | The decision basis for the delivery standard |
| [Change index](docs/RFC-INDEX.md) | Formalized change context |
| [Contribution guide](CONTRIBUTING.md) | Requirements for participants who wish to improve matters |
| [Security policy](SECURITY.md) | Acknowledgment that security exists |

## Assurance and change control

Changes to the primary delivery path should be treated as controlled changes, even when the diff is small enough to fit in a single line.

Before creating a pull request:

```bash
npm test
```

Before presenting a deployment as ready:

```bash
npm test
npm start
```

Before declaring an incident resolved:

1. Observe the primary surface.
2. Consult the relevant contract.
3. Determine whether the issue is operational, interpretive, or merely surprising.
4. Record only the amount of detail appropriate to the seriousness of the situation.

## Frequently deferred questions

### What does it do?

The approved answer is available through the primary surface.

### Why are there several supporting systems?

The platform uses separation of concerns. Some concerns are more separated than others.

### Is the complete deployment required?

No. The execution environment can operate in a minimal local configuration. The complete deployment exists for teams that prefer their first encounter to be properly contextualized.

### How long should initial execution take?

Allow the platform to complete its own process. Avoid refreshing the page, skipping ahead, or attempting to infer the final state from source files.

### Can I change it?

The repository accepts contributions subject to the documented change process. This is more useful than it sounds.

### Is there a roadmap?

The project has a direction, a governance structure, and no public obligation to make either legible.

## Security posture

OBP follows a proportionate security model:

1. The reference runtime does not request external credentials for primary execution.
2. Local deployment values are local deployment values.
3. The security policy exists because a platform without one creates difficult questions in meetings.
4. Responsible disclosure remains welcome, including disclosures regarding conceptual overreach.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Submissions that materially simplify the platform may require unusually strong justification.

## License

MIT. Use the platform responsibly, document your assumptions, and avoid characterizing a successful execution as trivial.