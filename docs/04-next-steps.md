# Where to go next

You've shipped a website. Here's what to explore once you're ready to go further.

## 1. Custom slash commands

Slash commands are reusable prompts you can call with `/name` in Claude Code. Add `.claude/commands/refresh-copy.md` to your repo:

```
Rewrite all the copy on the homepage in a more {{tone}} tone. Don't change the structure or layout — just the words.
```

Now in Claude Code: `/refresh-copy` → it asks for tone → rewrites your homepage.

## 2. MCP servers

MCP (Model Context Protocol) lets Claude connect to your other tools — Notion, Google Drive, Linear, Figma, etc. Useful for:

- Pulling content from a doc into your site
- Generating pages from spreadsheet data
- Reading design tokens from Figma

Start here: https://docs.claude.com/en/docs/claude-code/mcp

## 3. Skills

Skills are bundled instructions Claude can invoke when relevant. The Anthropic skills repo has examples for PDF generation, slide decks, brand guidelines, and more.

## 4. Going further with your site

- **Add a blog**: ask Claude to add a `/blog` route with markdown posts.
- **Add analytics**: Vercel Analytics is free and built in.
- **Custom domain**: $10–15/year, configurable in the Vercel dashboard.
- **Contact forms**: hook up Formspree or Vercel's built-in form handlers.
- **CMS**: connect Sanity or Contentlayer if you want to edit content without touching code.

## 5. Keep using Claude Code

The same workflow you used today works on any codebase — your work projects, side projects, or just exploring open-source repos. The mental model ("describe what I want, review the change, commit") transfers.
