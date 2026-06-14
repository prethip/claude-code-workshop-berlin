# Setup guide — before the workshop

*Please complete this before you arrive.* This guide installs everything you need on your own laptop so we can spend the workshop building, not troubleshooting.

It takes about **15–20 minutes** and needs **no coding experience** — every step is copy-and-paste.

> **If anything below doesn't work, don't worry.** Come **20–30 minutes early** on the day and we'll fix it together — it's much easier in person. You can also email us beforehand (see *Need help before the workshop?* at the bottom).
>
> **And there's a safety net:** if the tools simply won't install on your laptop (work restrictions, an older operating system, anything at all), we have a ready-to-use **GitHub Codespace** for the workshop — a full environment that runs **in your web browser** with everything already installed, nothing to set up. For that backup you only need a **free GitHub account** and your **Claude plan**. So even if setup doesn't go smoothly, come anyway — we'll get you working on the day.

**You'll install four things:**

1. **Node.js** (includes **npm**) — runs the website you'll build.
2. **Git** — the "save history" tool. *(On Windows, Claude Code also needs this to run at all.)*
3. **GitHub CLI** (`gh`) — connects your laptop to GitHub.
4. **Claude Code** — the AI assistant you'll talk to.

The trick to keeping this simple: we use your computer's **package manager** — one tool that installs the others and **automatically picks the right version for your machine**, so you never have to figure out "x64 or ARM64".

> Pick your operating system below and follow only that section.

---

## Windows

There are **two ways** to install on Windows. **Path A (winget) is the easiest — try it first.** Use **Path B (direct installers)** only if winget isn't available or doesn't work.

### Path A — winget (recommended)

winget is a package manager built into Windows 11 and recent Windows 10. It installs each tool and **automatically picks the right version for your laptop (Intel or ARM)** — so you never choose "x64 or ARM64".

**Step 1 — Open PowerShell.** Click **Start**, type `PowerShell`, and press Enter. A blue window opens. (The top-left should read `PS C:\…`.)

**Step 2 — Install Node, Git, and GitHub CLI.** Paste these three lines, pressing Enter after each. Say **Yes** if Windows asks for permission.

```powershell
winget install OpenJS.NodeJS.LTS
winget install Git.Git
winget install GitHub.cli
```

**Step 3 — Restart the terminal.** **Close the PowerShell window and open a new one.** This is important — the new tools only appear in a fresh window.

**Step 4 — Install Claude Code.**

```powershell
npm install -g @anthropic-ai/claude-code
```

Now skip ahead to **"Check it all worked"**.

> **`winget` not recognized?** Install **App Installer** from the Microsoft Store (that's what provides winget), then retry — or use Path B below.

### Path B — Direct installers (no winget)

You'll download and run four installers. First, find out whether your PC is **x64** or **ARM** so you pick the right files:

> **Start → Settings → System → About**, and look at **"System type"**. It says either **"x64-based"** (the vast majority of laptops) or **"ARM-based"**. Remember which one — you'll need it twice below.

1. **Node.js** — go to <https://nodejs.org>, click the **LTS** button, and download the **Windows Installer (.msi)** matching your system type. Run it and click **Next** through the steps (keep **"Add to PATH"** checked).
2. **Git** — go to <https://git-scm.com/download/win>, download the **64-bit Git for Windows** installer (or the ARM one), run it, and accept all the defaults. *(Claude Code can't run on Windows without this.)*
3. **GitHub CLI** — go to <https://github.com/cli/cli/releases/latest>, download the installer ending in **`_windows_amd64.msi`** (or **`_arm64.msi`** for ARM), and run it.
4. **Claude Code** — open a **new** PowerShell window and paste:
   ```powershell
   irm https://claude.ai/install.ps1 | iex
   ```
   *(Or, since you installed Node in step 1: `npm install -g @anthropic-ai/claude-code`.)*

Then **open a fresh terminal** and continue to **"Check it all worked"**.

---

## Mac

Mac doesn't come with a package manager, so we install one called **Homebrew** first. After that, one command installs everything.

**Step 1 — Open Terminal.** Press `Cmd + Space`, type `Terminal`, and press Enter.

**Step 2 — Install Homebrew.** Paste this line and press Enter. It will ask for your Mac password (typing shows nothing — that's normal) and may take a few minutes.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

When it finishes, it may print **"Next steps"** with one or two extra lines to paste. If it does, **copy and paste those lines** too — they let your Mac find Homebrew. (On Apple-chip Macs these add Homebrew to your PATH.)

**Step 3 — Install Node, Git, and GitHub CLI.**

```bash
brew install node git gh
```

Homebrew automatically installs the right version for your chip (Intel **or** Apple Silicon).

**Step 4 — Install Claude Code.**

```bash
npm install -g @anthropic-ai/claude-code
```

> **Permission error (`EACCES`)?** Use the official installer instead: `curl -fsSL https://claude.ai/install.sh | bash`, then open a new Terminal.

---

## Check it all worked (Mac & Windows)

Open a **fresh terminal** and run these one at a time:

```bash
node -v
npm -v
git --version
gh --version
claude --version
```

Each should print a version number — no "command not found". For `node`, anything **v18 or higher** is fine. If `claude --version` prints something like `2.1.x`, **you're done installing.** 🎉

For a deeper health check, you can also run `claude doctor`.

---

## Sign in once (recommended)

You need a **paid Claude plan** — **Claude Pro** ($20/month) is plenty (Max also works). Get it at **<https://claude.ai>** → *Settings → Plans*.

Then start Claude Code once to log in:

```bash
claude
```

The first time, it opens your browser to sign in. Approve it, return to the terminal, and type `/exit` to leave. Doing this now means you arrive already logged in. (Signing in locally is straightforward — the browser pop-up works normally on your own laptop.)

*Optional:* connect GitHub too while you're here — run `gh auth login` and choose **GitHub.com → HTTPS → Login with a web browser**.

---

## Optional: get comfortable with the terminal

You **don't** need to learn the terminal before the workshop — we walk through it together. But if you'd like a gentle head start, these are beginner-friendly intros. You only need the basics: *what the terminal is, and how to type a command and press Enter.*

- 🎥 **Mac:** [Absolute Beginner Guide to the macOS Terminal](https://www.youtube.com/watch?v=aKRYQsKR46I) (video)
- 📖 **Windows:** [Introduction to the Windows Command Prompt](https://www.bleepingcomputer.com/tutorials/windows-command-prompt-introduction/) (short read)
- 📖 **Either system:** [Command Line for Beginners — freeCodeCamp handbook](https://www.freecodecamp.org/news/command-line-for-beginners/)

---

## Pre-workshop checklist

- [ ] `node -v` shows v18 or higher
- [ ] `npm -v` shows a version
- [ ] `git --version` shows a version
- [ ] `gh --version` shows a version
- [ ] `claude --version` shows a version
- [ ] You have an active **Claude Pro/Max** plan
- [ ] *(Optional)* You ran `claude` once and signed in

---

## Troubleshooting

Most issues are one of these. If none fix it, **come early** — bring your laptop as-is.

### "command not found" / "not recognized" right after installing

The terminal hasn't picked up the new tools yet. **Close it and open a new one.** Still failing? Restart your laptop and try once more.

### Windows: `winget` is not recognized

Install **App Installer** from the Microsoft Store (that's what provides winget), then retry. On older Windows 10 it may be missing.

### Windows: Claude Code installed but won't run

Claude Code needs **Git for Windows** (it runs commands through Git Bash). Make sure `git --version` works — if not, run `winget install Git.Git`, restart the terminal, and try again.

### Mac: Homebrew finishes but `brew` is "command not found"

You missed the **"Next steps"** lines Homebrew printed. Re-run the Homebrew install command, scroll up to those lines, and paste them. (They add Homebrew to your PATH.)

### Mac: red `EACCES` / "permission denied" during the Claude Code install

Use the official installer: `curl -fsSL https://claude.ai/install.sh | bash`, then open a new Terminal and run `claude --version`.

### On a work laptop / company network?

Corporate firewalls sometimes block these downloads. Try home Wi-Fi or a phone hotspot, or ask IT to allow `nodejs.org`, `github.com`, and `claude.ai`. If it's locked down, just come early — we have a browser-based backup.

---

## What to bring on the day

- **Laptop** + **charger**
- **Text for your site**, written in advance — your name, a short bio, project/service descriptions, a tagline. The clearer you are, the more time we spend on design.
- **Optional: 2–4 images** (a photo, a logo, screenshots) saved on your laptop.

---

## Need help before the workshop?

1. Re-read **Troubleshooting** — it covers almost everything.
2. Run `claude doctor` and note what it says.
3. **Email us** a screenshot of the error — or just come **20–30 minutes early** and we'll fix it in person.

See you soon!

---

*Official references: Node.js — <https://nodejs.org> · Homebrew — <https://brew.sh> · Git — <https://git-scm.com> · Claude Code docs — <https://code.claude.com/docs>*

Next: [Terminal basics →](./01-terminal-basics.md)
