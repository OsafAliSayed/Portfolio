---
title: I Built This From Scratch. Here's the Honest Version.
date: 2026-06-02T18:10:00.000+05:30
author: Osaf Ali Sayed
tags:
  - systemdesign
  - architecture
  - learning
  - ""
image: /uploads/zcng7tzzflew5ahhuhr5.webp
views: "0"
---
# I Built This From Scratch. Here's the Honest Version.

Not a tech stack post. I hate those.

This is about the real decisions, the real mistakes, and the things I learned that I couldn't have picked up from any tutorial or any job where I was just closing tickets and collecting a salary.

Ecomlytix is a data-intensive analytics platform. 20,000 to 40,000 records pulled daily, multiple data sources, complex sync logic, a team at different experience levels. I built it from scratch. Every architecture call, every migration on production, every time something broke — that was on me.

Here's what happened.

- - -

## What I Got Right

![dashboard screenshot 1](/uploads/uwz7qgconvnfviicxre0.webp "dashboard screenshot 1")

### Locking Down Permissions and RBAC Early

One of the most important decisions we made was building the permissions and RBAC (Role-Based Access Control) system before we touched any real features. I've seen teams skip this entirely. They build everything and then bolt on permissions as an afterthought - and then they spend weeks going back and reworking things they thought were finished.

We didn't do that. Every feature that came after was born inside this structure. Developers didn't have to think hard about whether they were handling permissions correctly — the architecture made it hard to get it wrong.

The documentation mattered just as much as the architecture itself. I made sure to document not just how the system worked, but where to extend it. When new developers joined, they weren't guessing. They had a clear map. This sounds obvious. Almost nobody actually does it.

### Building a Reconciliation System

![dashboard screenshot 2](/uploads/emhcblukcflphl4akgdk.webp "dashboard screenshot 2")

When you're pulling 20,000 to 40,000 records daily across dozens of columns from multiple sources, accuracy isn't optional. And this is something AI genuinely cannot help with at this scale — the volume, the number of columns, the context — it would just hallucinate. I knew from the start we needed something purpose-built for this.

So I built a reconciliation system. It ran daily, generated reports on the full dataset, and pinpointed exactly where data had drifted and where issues had occurred. Not a nice-to-have. It's what gave us any confidence in our sync logic at all. Without it we'd have been flying blind, wondering why numbers looked off two weeks after something broke.

### Servers, Not Platforms

![dashboard screenshot 3](/uploads/evmcfggddk7uqjtx59q2.webp "dashboard screenshot 3")

Some teams would have looked at this project and shipped it to Vercel because that's the easy call. I understood early on we couldn't. Not because Vercel is bad — it does what it's meant to do. But we had too many system-level requirements. Queue workers, background jobs, scaling that would come faster than I expected.

We went with servers. Frontend, backend, workers, queues, databases — cleanly separated. More work upfront, but every decision that followed benefited from having this foundation. You cannot retrofit infrastructure control after the fact.

### CI/CD Pipelines

I can't even count how many times I've SSHed into a server to deploy manually. Every single time you do that, you lose time and introduce risk. A wrong command, a missed environment variable — it compounds.

Setting up CI/CD with GitHub Actions was one of the best things we did. New developers didn't have to think about deployments at all. And for me — I actually got to review PRs and write code again instead of babysitting a deployment. That alone paid for every hour it took to set up.

### Scripts as a Safety Net

When you're setting up a distributed system and CI/CD isn't fully ready yet, you need something to fall back on. Targeted scripts that can fix a specific issue if something goes sideways. Not a replacement for CI/CD — a bridge while you're building towards it. That bridge came through for us more than once.

### The Team

None of this would have happened without the people. I worked with juniors, seniors, everyone in between. Senior engineers caught things I missed. Junior engineers asked questions that forced us to explain ourselves — and explaining things always surfaces assumptions you didn't know you were making. Different experience levels make a project sharper. Communication ends up doing more of the work than the code.

- - -

## What I Learned

### Next.js Was the Wrong Call

We went with Next.js without stopping to ask if it was actually the right tool for us. Looking back — it wasn't. React would have served us better.

Every benefit Next.js brings: server-side rendering, API routes in the same repo — we used none of it. We had a separate backend server anyway. We didn't need SSR. We just picked Next.js because it was popular, not because it solved any of our real problems.

When you're building at this scale, you have to think about the data and what the system actually needs before you pick a framework. We should have done that first.

### Responsibility Feels Different When It's Real

There's a version of this work you do as "just another job." Close tickets. Go home. That wasn't this.

Tight deadlines, production issues, a team waiting on clear direction — you either show up for that or you don't. I showed up. And I learned things about what I can handle that I would not have found out any other way. You really don't know what you're meant for until you're actually in it.

### The Infrastructure Knowledge You Can't Learn in a Course

Migrations on prod. Setting up staging environments cleanly. Building automations that cut delivery time by 60–70%. This project taught me practical deployment on Linux in a way nothing else could have. You don't learn this stuff in theory. You learn it when you have no other option, usually at a bad hour.

### What a Lead Actually Does

Most people think leadership is assigning tasks and reviewing PRs. That's maybe a quarter of it.

The real job is removing blockers. I can't count how many calls I jumped on to walk a developer through an implementation or explain why the architecture worked a certain way. Because if I didn't, the work stopped. And the work cannot stop.

Blockers are either technical or they're knowledge gaps. You have to be ready for both. Sometimes the fix is a script. Sometimes it's a call. Sometimes it's documentation you should have written two weeks ago. The job is making sure the work keeps moving no matter what.

- - -

## Where I Made Mistakes

### Redis and the Backend on the Same Server

Early on, I put Redis and the backend on the same server. First principles thinking — it felt like the clean, simple, correct solution at the time.

I underestimated how fast the job queue would grow. The workers, the sheer volume of background processing — it got enormous faster than I expected. I had to move to a separate queue server sooner than planned.

What can I say. An early tech lead learns by falling. There is genuinely no other way to learn this stuff.

- - -

There's a lot more I haven't written here. I'll stop because dumping everything in one post helps nobody. You end up reading a wall of text and retaining none of it.

Build things. Make the mistakes. Fix them. That's the actual curriculum.

- - -

*"أَفَلَمْ يَسِيرُوا فِي الْأَرْضِ فَتَكُونَ لَهُمْ قُلُوبٌ يَعْقِلُونَ بِهَا"*

*"Have they not traveled through the land so that they may have hearts with which to reason?"*

— Surah Al-Hajj (22:46)
