# Incident Runbook: Greeting Degradation

## Severity model

| Severity | Condition | Response |
| --- | --- | --- |
| SEV-1 | The world is not greeted | Mobilize immediately |
| SEV-2 | Greeting response exceeds 500 ms | Investigate with composure |
| SEV-3 | Monitoring cannot prove greeting health | Open a ticket and a dashboard |
| SEV-0 | Response fidelity is uncertain | Freeze deployments; convene the review group |

## Initial response

1. Confirm the symptom using `curl http://localhost:8080/health`.
2. Establish an incident channel named `#inc-greeting-fidelity`.
3. Record the observed response exactly. Do not paraphrase under pressure.
4. Inspect the service health and metrics contracts.
5. Roll back to the last approved release if fidelity is uncertain.

## Communication template

> We are investigating elevated uncertainty in global greeting delivery. The approved response remains our highest priority. Next update in 15 minutes, or sooner if the world has been adequately greeted.

## Resolution criteria

- `/` renders the approved greeting.
- `/health` is operational.
- Metrics report normal service health.
- The incident commander has had a glass of water.
