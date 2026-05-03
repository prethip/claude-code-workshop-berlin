# Claude Code Workshop — Berlin

Welcome! In the next 2 hours you'll build and deploy your own website using Claude Code.

## What you'll build

Pick one of these starter templates:

- **`templates/portfolio/`** — personal portfolio (about, projects, contact)
- **`templates/landing/`** — small-business landing page (hero, services, contact)

By the end of the workshop, your site will be live on the internet at a Vercel URL you can share.

## Before the workshop

You should have received a setup email with the account checklist (GitHub, Claude, Vercel). If you missed it, ping the organizer.

## Getting started (during the workshop)

1. **Fork this repo** to your own GitHub account (top-right "Fork" button).
2. **Open in Codespaces**: on your fork, click the green "Code" button → "Codespaces" tab → "Create codespace on main". Wait ~60 seconds for the environment to boot.
3. **Pick your template** in the Codespace terminal:
   ```bash
   cd templates/portfolio   # or: cd templates/landing
   npm install
   npm run dev
   ```
4. Click the "Open in Browser" popup that appears (port 3000) — that's your live preview.
5. **Open Claude Code** in a second terminal:
   ```bash
   claude
   ```
6. Start chatting. Try: *"Change the headline to say 'Hi, I'm [your name]'"*

## Where to go after the workshop

See [docs/04-next-steps.md](./docs/04-next-steps.md) for custom slash commands, MCP servers, skills, and ideas for extending your site.
