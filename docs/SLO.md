# Service Level Objectives

## Scope

These objectives govern delivery of the approved greeting response.

## Indicators

| Indicator | Definition | Target |
| --- | --- | ---: |
| Greeting availability | Successful `/health` responses | 99.999% monthly |
| Response fidelity | Responses equal to the approved standard | 100.000% |
| Detection latency | Time from greeting silence to awareness | < 60 s |
| Recovery time | Time from unapproved response change to rollback | < 15 min |

## Error budget

The monthly error budget allows approximately 26 seconds of greeting unavailability. Response-fidelity changes have no budget.

## Escalation

Breach of availability or response-fidelity objectives: page the Greeting Reliability Team and notify Communications.
