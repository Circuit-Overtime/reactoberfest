# PR ownership demo

Companion repository for **"Why Hacktoberfest Stopped Counting Pull Requests in
the Age of AI Agents: A Maintainer's View"** at React Kolkata, 24 October 2026.

One issue, two pull requests, both created on purpose for the talk:

- **PR A** compiles and passes CI, but changes seven files and never tests the
  behaviour the issue asked for.
- **PR B** changes one component, adds a test that fails before the fix and
  passes after it, explains its decision and responds to review.

No real contributor's work is shown.

```bash
npm install
npm test        # run the tests
npm run dev     # run the app
```

## The five-star check

1. **Intent:** is this what the project actually asked for?
2. **Scope:** is the change smaller than the review it creates?
3. **Evidence:** does something fail before and pass after?
4. **Understanding:** can you explain every decision without the agent?
5. **Ownership:** will you still be here when the review comes back?
