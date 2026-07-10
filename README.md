# CV Angular

Personal résumé/CV single-page app built in Angular, with English/Spanish switching and downloadable PDF resumes.

## Why

A static résumé PDF doesn't scale well across sections (education, experience, projects, skills) or languages. This turns the CV into a navigable site with per-section routes and instant EN/ES switching, while still offering the PDF for recruiters who just want a file.

## Features

- 5 lazy-loaded feature modules: Home, Education, Experience, About Me, Projects — each with its own routing module, loaded on demand
- English/Spanish i18n via `@ngx-translate/core`, JSON translation files in `assets/i18n`, flag-icon language switcher
- Downloadable CV PDFs in both languages (`CVRichard2019-en.pdf`, `CVRichard2019-es.pdf`)
- Angular Material + CDK components, FontAwesome icons
- Shared `core` module (navbar/footer) and `shared` module (Material wrapper) separating cross-cutting UI from feature modules

## Tech stack

- Angular 8 (CLI 8.2.1, TypeScript 3.5)
- Angular Material 8 + CDK
- `@ngx-translate/core` + `http-loader` for i18n
- FontAwesome (`@fortawesome/*` + legacy `font-awesome`)
- Karma/Jasmine for unit tests, Protractor for e2e, TSLint

No backend — `environment.prod.ts` has no API config, purely static content.

## Architecture

`AppModule` bootstraps `CoreModule` (navbar/footer, always loaded) and wires `TranslateModule` with an HTTP loader reading JSON from `assets/i18n`. `AppRoutingModule` lazy-loads each feature module by path (`home`, `education`, `experience`, `about-me`, `projects`), with a wildcard redirect to `home`. `SharedModule` centralizes the Angular Material imports used across features.

## Setup

```bash
npm install
npm start        # ng serve, http://localhost:4200
npm run build    # production build
npm test         # Karma/Jasmine unit tests
```

## What I'd improve

- Upgrade off Angular 8 (EOL) — Material, CDK, and CLI are all several major versions behind
- Migrate TSLint → ESLint (TSLint is deprecated)
- Add a live deployment (currently none configured in-repo)
- Replace the duplicated FontAwesome setup (`@fortawesome/*` and legacy `font-awesome` package both present) with one

## Contributing

This is a personal CV project, but issues/PRs on structure or accessibility are welcome.

## License

No license file present.
