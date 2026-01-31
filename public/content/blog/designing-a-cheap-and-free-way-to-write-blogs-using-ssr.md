---
title: Designing A Cheap and Free way to write blogs using SSR
date: 2026-01-21T02:24:00.000+05:30
author: Osaf Ali Sayed
tags:
  - blog
  - systemdesign
  - ""
---
You might be reading this blog on my personal blog site, which is also my portfolio. I write all my blogs about things I am building and things that I learn along the way on my freelancing journey.

In this article, I am diving deep into the architecture and implementation details of my blog.

# Requirements

The main requirement for my blog site was I wanted to keep everything free. So I stayed away from storage solutions like EC2 buckets and everything. Everything has to be stored on my local repository. so that it is easier for migration

I should be able to track the views on my blogs to ensure what kind of reach they are bringing in.

# System Design

![System Architecture Diagram](/uploads/blog-system-architecture-diagram.png "System Architecture Diagram")

The first thing I needed to figure out was how will my writing flow work? meaning how will I be writing my blogs? what CMS will I use etc. Many of CMS that we can use are paid and those which are not feels like you will be locked in it. My main constraints were I usually write my notes and everything in markdown format. Once you get used to it you use it everywhere so I need something that let's me write markdown content. For this purpose I chose Decap CMS you can run its instance locally and don't really need a separate backend if you are writing the blogs locally and pushing them to production.

Ofcourse as I scale I want the luxury to be able to write my blogs from anywhere. Decap CMS is really minimalistic and gets the job done for me.

As I do not want to pay any money, I could have went for supabase or any other database that provides free storage in their free plans. But storing a markdown article in a relational database was not making any sense to me. I am not getting any benefits from that atleast right now were I am not tracking likes and everything.

Now that we can write the blogs locally, what we need is a way to render them during build time. The goal here is to have a template that can render markdown files at a specific path in my case */blog/[slug]*.

Turns out it is really to achieve this, we can render markdown file contents using a library called **remark**.  

For highlighting code and everything, I used **rehype-highlight**.

Now here comes the use of Static Site Generation, we basically build every blog during the build and serve it to the user. This reduces the load on the server and also the site load time like crazy.



