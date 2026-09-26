# Release preparation — 2026-09-26

## Completed

- Standalone React/Vite edition with local persistence; no original server authentication or cloud database dependencies.
- Clean source export, without the original Git history, hosting metadata, environment files, database files, user records, build output or node_modules.
- Fresh dependency installation with the included frozen lockfile completed.
- TypeScript check and production static build passed.
- Vocabulary checks passed: 2,100 stable entries, 4,200 bilingual examples, all memory cues, 6,300 option sets, deck counts and daily review behavior.
- Speech-adapter checks passed: normal/slow routing, cancellation and stale callback handling. This does not verify audible pronunciation on real devices.
- Local persistence checks passed: reloadable snapshots, duplicate events, neutral hints, mastery and restoration, serialized concurrent writes, quota failures and rejection of corrupt data without overwriting it.
- Targeted source scan found no private deployment hostname/project ID, workspace path, private-key header or common GitHub/OpenAI secret format. This is a scoped preparation check, not a comprehensive security audit.
- Lexique upstream license confirmed as CC BY-SA 4.0; existing attribution and transformation notes retained. MIT is scoped to application code; learning data is separately licensed.
- Dictionary reference URLs retained; source pages, recordings and full dictionary text are not distributed.

## Remaining / limitations

- Public repository: https://github.com/ChengTang62/mot-a-mot. See PUBLISH.md for publishing a fork.
- A new browser screenshot and end-to-end browser run were attempted but could not run because the browser binary download failed in the preparation environment. No screenshot or successful browser-test claim is included.
- The app uses a complete vocabulary bundle; the production build warns about a JavaScript chunk larger than 500 kB (about 330 kB compressed). Lazy loading is a future optimization.
- Linguistic accuracy is not guaranteed by coverage tests. Community/native-speaker review remains valuable.
- The standalone release has local progress only, with no cloud import, sync or backup UI.
