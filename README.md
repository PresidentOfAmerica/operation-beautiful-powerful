# Global Greeting Platform

> **Reliable first impressions, at any scale.**

[![Greeting Assurance](https://img.shields.io/github/actions/workflow/status/PresidentOfAmerica/production-grade-hello-world/greeting-assurance.yml?label=greeting%20assurance)](../../actions)
[![Availability](https://img.shields.io/badge/availability-99.999%25-brightgreen)](docs/SLO.md)
[![Operational maturity](https://img.shields.io/badge/operational%20maturity-excessive-blueviolet)](docs/OPERATIONS.md)

The **Global Greeting Platform (GGP)** is a fault-tolerant, observable, horizontally scalable greeting-delivery platform. It ensures the world receives an approved response accurately, consistently, and with an appropriate amount of infrastructure.

## The problem

At small scale, a greeting can be delivered informally. At global scale, informal greetings create unacceptable ambiguity:

- Was the world greeted?
- Was the response observable?
- Was it cached?
- What is our recovery objective if the response becomes unavailable?
- Has the approved delivery contract been preserved?

GGP answers these questions with confidence.

## Quickstart

### Option A — hosted development environment

Use the green **Code → Create codespace** button above. The platform provisions a complete development environment, forwards the Greeting Surface, and opens it in your browser.

### Option B — production-like local deployment

Prerequisite: [Docker Desktop](https://www.docker.com/products/docker-desktop/).

```bash
git clone https://github.com/PresidentOfAmerica/production-grade-hello-world.git
cd production-grade-hello-world
docker compose up --build
```

Then visit:

| Surface | URL | Purpose |
| --- | --- | --- |
| Greeting Surface | http://localhost:8080 | Customer-facing response delivery |
| Greeting Observability Console | http://localhost:3000 | Dashboard and operational archaeology |
| Metrics Backend | http://localhost:9090 | Evidence that the response is measurable |
| Health Contract | http://localhost:8080/health | Machine-readable reassurance |

> **Default Grafana credentials:** `greeting-admin` / `greeting-admin`. They are deliberately unsuitable for anything except a local joke.

### Option C — bare-metal emergency mode

```bash
npm install
npm start
```

This path is appropriate only where the full operational stack is unavailable or where one has made a conscious decision to live dangerously.

## Architecture

```text
                 ┌──────────────────────────┐
                 │   Greeting Surface User  │
                 └────────────┬─────────────┘
                              │ HTTP
                  ┌───────────▼───────────┐
                  │    Greeting API       │
                  │  approved response    │
                  └───┬───────────────┬───┘
                      │               │
            ┌─────────▼──────┐  ┌─────▼─────────┐
            │ Greeting Cache │  │ Greeting DB   │
            │     Redis      │  │ PostgreSQL    │
            └────────────────┘  └───────────────┘
                      │
             ┌────────▼────────┐
             │   Prometheus    │
             └────────┬────────┘
                      │
                ┌─────▼─────┐
                │  Grafana  │
                └───────────┘
```

The response is intentionally small. The surrounding system is intentionally prepared for a future in which it is not.

## Reliability commitments

| Objective | Target | Current state |
| --- | ---: | --- |
| Greeting availability | 99.999% | Operational |
| Response fidelity | 100.00% | Verified |
| Time to detect greeting silence | < 60 seconds | Instrumented |
| Time to recover from an unapproved response change | < 15 minutes | Documented |
| Unnecessary component count | At least 4 | Exceeded |

See the full [Service Level Objectives](docs/SLO.md).

## Interface contract

### `GET /`

Delivers the approved greeting through the primary presentation surface.

### `GET /health`

Returns the platform’s operational state and response-fidelity status.

### `GET /metrics`

Exports Prometheus-compatible telemetry for greeting delivery and active incidents.

## Operating the platform

- For an active greeting incident, consult the [Incident Runbook](docs/INCIDENT-RUNBOOK.md).
- For normal operations, see [Operations](docs/OPERATIONS.md).
- For the delivery-standard decision, see [ADR-001](docs/ADR-001-canonical-greeting.md).
- For our reliability posture, see [SLOs](docs/SLO.md).
- For the formal change process, see [Contributing](CONTRIBUTING.md).

## Security

GGP follows defense-in-depth principles:

1. It exposes no customer data.
2. It stores no customer data.
3. It has no reason to expose or store customer data.
4. It nevertheless has a [security policy](SECURITY.md).

## Frequently anticipated questions

**Why does a greeting require a database?** Resilience is a journey, not a query plan.

**Why does it require a cache?** Some responses are read more than once.

**Why is Grafana included?** If a greeting occurs without a dashboard, can we prove it delighted anyone?

**What does the service actually deliver?** Run it in a suitably prepared environment and find out.

## License

MIT. Please reuse responsibly, especially around impression-critical workloads.
