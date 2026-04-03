# Contributing

## Setup

```bash
git clone https://github.com/your-username/developer-portfolio.git
cd developer-portfolio
npm install
cp .env.example .env.local   # then fill in your Sanity credentials
npm run dev
```

## Workflow

1. Fork the repo and create a branch: `git checkout -b fix/your-fix` or `feat/your-feature`
2. Make your changes and run `npm run lint` before committing
3. Open a pull request with a short description of what changed and why

## Commit style

Use [conventional commits](https://www.conventionalcommits.org/):

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation only
- `style:` formatting, no logic change
- `refactor:` restructuring without behaviour change

## Reporting issues

Please include steps to reproduce, expected vs actual behaviour, and your Node version. Screenshots help for UI issues.
