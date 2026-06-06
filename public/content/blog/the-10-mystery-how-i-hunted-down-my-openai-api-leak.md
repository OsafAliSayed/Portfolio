---
author: Osaf Ali Sayed
date: 2026-06-03 15:14:00+05:30
description: Drained OpenAI account. Clean logs. Flawless code. So where did the leak
  come from? I went full detective on my own server to find out.
image: /uploads/gemini_generated_image_y5bu7by5bu7by5bu.webp
tags:
- openai
- debugging
- logtracing
- vercel
- open-claw
title: 'The $10 Mystery: How I Hunted Down My OpenAI API Leak'
views: '10'
---
# The $10 Mystery: How I Hunted Down My OpenAI API Leak

*A murder mystery. Except the victim was my wallet.*

- - -

It started with a broken project.

I opened [noah.osafalisayed.com](http://noah.osafalisayed.com) and the request just... failed. No helpful error, no obvious clue. I went to check my OpenAI account and saw it — zero balance. Completely drained. And that's when the spiral started.

Here's the thing. This wasn't some rushed side project I threw together with AI-generated code and vibes. I wrote noah myself, line by line, specifically because I'd been watching security incident after security incident roll through the AI world. I *knew* about API leaks. I was careful. Or so I thought.

So yeah. Down the rabbit hole I went.

- - -

## First Stop: Blame Yourself

The first thing your brain does in these moments is panic and point fingers in every direction. Mine pointed straight at myself.

*Why didn't I set up better logging? Did my laptop get compromised? Did this happen on Vercel's end — they've had a rough few months 🤔. Wait... did I push the API key to GitHub? Am I actually that guy?* 😂

It's a very specific kind of stress, this one. You're not just dealing with a bug. You're dealing with the possibility that something you built — or something about *you* — failed in a way that had real consequences.

The first logical place to check was Vercel logs. So I did.

Nothing.

![vercel's logs](/uploads/2026-06-03_15-31.webp "vercel's logs")

Not "some logs, nothing suspicious." I mean the logs were so clean it looked like the project had been sitting in total silence. Ghost town. It almost felt like the project itself was embarrassed on my behalf 😂.

- - -

## Okay, Let's Get Smarter About This

Standing in front of empty logs isn't useful. I needed a different angle.

OpenAI keeps usage records. Detailed ones. So I pulled them up and started filtering by date range instead of just staring at the total. And that's when the story got interesting.

![open-ai usage logs](/uploads/2026-06-03_15-33.webp "open-ai usage logs")

The exposure didn't happen recently. It had already kicked off on **March 31, 2026**. Every single day after that, $0.73 was quietly draining out. For two to three weeks straight. By the time I noticed, the account was dead.

Two questions immediately: why $0.73 specifically, and why did it stop after two weeks?

The first answer is obvious in hindsight — that was just the burn rate of whatever was running. The second answer? The account hit $0 and OpenAI stopped responding. That's the other reason. We'll get to the full picture in a bit.

- - -

## Bringing In the Second Opinion

While I was digging through usage logs, I wanted to rule out the most obvious suspect: my own code.

I gave Claude the full context of what was happening and pointed it at my repo. The task was simple — find any leak, any exposure, anything that could explain this. I wanted a second set of eyes that wouldn't miss something I was too close to see.

![claude's verdict](/uploads/2026-06-03_15-35.webp "claude's verdict")

The verdict came back: *the code looks fine. No obvious exposure here. Could be on the maintainer side — Vercel, OpenAI, something upstream.*

That actually made me pause. Because here's something I should tell you about right now, and I learned this the hard way.

**Never paste your actual API keys into an AI chat.** Not for setup help, not for debugging, not even in a "just this once" situation. Use a dummy key, get through the setup, then replace it manually afterward. If an AI system ever has your real keys and a data leak happens on their end, your keys are out there. Use a placeholder. Always.

So I checked. Were there any data leaks from AI providers between April 1 and April 18? Any known incidents that could explain this?

Nothing. No leaks, no incidents, nothing that matched the window.

- - -

## Widen the Net

Okay. Code is clean. No upstream breach. But OpenAI's usage data doesn't lie — something was burning through that account.

This is when I stopped assuming it was noah. 

Maybe the leak wasn't coming from that project at all. Maybe something else entirely was using that API key. I went back to the OpenAI dashboard and started going through it differently — API key by API key, filtered to that April 1–18 window.

And there it was.

**open-claw.** 🙂

Anti-climactic? A little. The why though is actually kind of interesting.

- - -

## The Culprit Was a Heartbeat

![open-claw project logs from open-ai](/uploads/2026-06-03_15-38.webp "open-claw project logs from open-ai")

During the open-claw boom — when everyone and their tech-adjacent uncle was setting it up — I spun up an instance on my personal server. Got partway through the setup and then just... walked away from it. Left it mid-configuration and never came back.

Here's what I didn't know. During the setup process, open-claw sends a request to your AI provider — OpenAI in this case — to verify the connection is live. Think of it like a **heartbeat** in a master-slave server model. It pings, it waits for a response, it confirms the link is active.

Except I never finished the setup. So there was no confirmation. No "setup complete." The system just kept sending that heartbeat. Again and again. Every day. For weeks. Each ping cost money. Small money, but it adds up fast when it's running on a loop with no human watching it.

It kept going until **April 27, 2026**, which is when I finally took down the instance. That's also why it stopped — not because the attacker gave up, not because of some external fix, but because I killed the server.

No breach. No compromised laptop. No leaked key on GitHub. Just an incomplete setup silently burning through $10 over three weeks.

- - -

## What This Actually Looks Like as an Engineer

I want to sit with this for a second, because the process here matters more than the punchline.

This is what real incident investigation looks like. You start with chaos — a broken project, a drained account, and five theories all screaming at you at once. You don't solve it by guessing. You go question by question, narrow it down, eliminate the impossible, and whatever's left — however anticlimactic — is your answer.

Vercel logs → clean. GitHub → clean. Code audit → clean. Data breach search → nothing. Scope widens. Check by API key. Found it.

That's the process. With more experience, the mystery starts to shrink — you develop instincts, you know where to look first, you've seen enough patterns that the signal-to-noise ratio improves. I remember seeing one of [ThePrimeagen](https://github.com/ThePrimeagen) videos were he said:

> To me the mystery of programming has disappeared.

With the amount of experience he has I am sure he sees a problem and his brain directly points him to a right trace path. Once in a while there will be something that will be new to you and you will wonder? how did that happen? and when you figure that out, the satisfaction of solving that mystery will be like nothing else.

There is something genuinely irreplaceable about sitting with a production problem, following the thread, and finally landing on *exactly* what happened. You can use AI to write code, to audit it, to speed up a hundred different things. But when something breaks in production — really breaks, in a way that matters — solving that mystery yourself is the whole point.

This is why software engineering is worth it.

- - -

## The Stuff I Should Have Done Earlier

A few things I'm changing immediately, and honestly you probably should too.

Never put real API keys in AI chats. Use a dummy key to get through the setup, then replace it manually. The risk isn't worth the convenience.

OpenAI has hard spend limits. They exist. I didn't use them. A $5 hard cap would have ended this story in day one. Set it and forget it.

And if you're spinning up a server setup you don't finish — take it down. Don't leave a half-configured service running and assume nothing will happen. Something will happen. Slowly. Quietly. For three weeks straight.

- - -

*$10. Three weeks. One abandoned open-claw setup. The most anti-climactic end to the most dramatic investigation I've put myself through this year.*

*Still totally worth it.*
