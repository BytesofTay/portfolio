# Tayllor Robertson Portfolio

A focused portfolio for backend engineering, AI engineering, and technical product work.

**Live portfolio:** add deployment URL here  
**LinkedIn:** https://www.linkedin.com/in/tayllor-hazel-robertson/  
**Contact:** tayllor.robertson@gmail.com

## Featured work

- **SignalForge Health AI** — Python/FastAPI health-tech services exploring RAG, vector search, and LLM integrations.
- **HealthSignals** — read-only SwiftUI and HealthKit dashboard presenting 32 health metrics with privacy-conscious states.
- **Questline** — TypeScript/React habit-game MVP with quests, progression, and leaderboards.
- **STEM Pathfinder** — LAUSD magnet-school discovery tool with ranked matches, map exploration, and saved schools.

## Run locally

```bash
npm ci
npm start
```

Open http://localhost:3000. Run the production checks with `npm test -- --watchAll=false` and `npm run build`.

## CI/CD

GitHub Actions runs the test suite and production build on every push and pull request. Deploy the generated `build/` directory with Netlify, Vercel, or GitHub Pages.
