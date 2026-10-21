# Operations Guide

## Daily checks

1. Confirm the world remains greeted.
2. Confirm the approved response is delivered consistently.
3. Review the Grafana dashboard, preferably while nodding thoughtfully.
4. Avoid changing the greeting without an approved RFC.

## Deployment

```bash
docker compose up --build -d
curl --fail http://localhost:8080/health
```

A deployment is complete only when the health response is operational and the approved response is being served.

## Capacity planning

GGP currently supports all known world-scale greeting workloads. If load approaches one request per second, schedule a quarterly architecture review and order more stickers.

## Disaster recovery

The system’s source of truth is encoded in `src/server.js`, protected by automated tests, CI, version control, containers, an ADR, an incident process, and a reasonable amount of nervousness.
