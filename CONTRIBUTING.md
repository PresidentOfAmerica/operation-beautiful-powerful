# Contributing to Global Greeting Platform

We welcome contributions that improve reliability, observability, and the general seriousness of the platform.

## Before opening a pull request

- Run `npm test`.
- Preserve the approved greeting-delivery standard.
- Update affected runbooks, SLOs, ADRs, and dashboards.
- Include a rollback plan for any response-level modification.

## Pull request template

```text
## Change summary

## Customer impact

## Greeting-delivery impact
- [ ] Approved response behavior is preserved
- [ ] Monitoring and documentation are current
- [ ] I have read ADR-001 and accept its authority

## Rollback plan

## Evidence
```

Changes to the approved response require two maintainer approvals and a documented rollback plan.
