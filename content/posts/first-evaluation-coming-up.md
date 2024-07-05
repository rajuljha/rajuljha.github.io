+++
author = "Rajul Jha"
title = "First phase of GSoC"
date = "2024-07-05"
description = "First phase of GSoC '24 about to end. Mid term evaluation coming up."
tags = [
    "gsoc","evaluation","github","ci"
]
+++

Just as the commencement of monsoon fill the streets of **Aligarh** with water, similarly my
mind is clogged with ideas and heart is filled with emotions. For the past few weeks, I have been working diligently on [`fossology`](https://github.com/fossology/fossology). I am writing this blog to tell you about my experiences working on the project. The highs, the lows, absolute confusion, eating my brains out and getting ideas in the shower, the past few weeks have been filled with all these emotions.

But first things first, let's start at the beginning, the **Community Bonding**

## Community Bonding
The official community bonding period started from 2nd May. However for me, community bonding started a bit late. It was a great experience for me. In one word, I can say that the whole community is `awesome`.
I spent a good part of two weeks busy with End Semester exams. The rest of the time, I spent surfing through the codebase, trying to find my way through it.
I faced a few issues setting up my environment, but tackled my way through it with the help of my mentors. 
Some things that I explored:

```go
- Virtual Machine Setup (UTM)
- SSH Remote Tunneling
```
The community bonding period sailed through as so. The best of the part was yet to come.

---

## Initial Weeks
The **Royal Rumble** began from 27th May, when the contribution period started. At this point I had 
never worked with such a large codebase, so I faced many challenges apart from figuring out the code.
I had to learn the best practices like writing better commit messages, maintaining branches properly and 
working parallelly with others. One thing that improved drastically during this period was my `git` skills.

Then I began with the first major task of my project, which was quite a bit challenging one. I had to
figure out an algorithm to pin point the location of a license finding. I was able to write the 
algorithm and propose the same to the mentors, which seemed to please them. This was the most challenging time for me as I was scared, had a lot of imposter syndrome and did not know whether I will succeed or not. But things changed for the better.

Once, I successfully implemented the line number algorithm and sent out my first PR, the nerves seemed to calm down. I was relaxed and more calm. Then came a boost in productivity.
As the tasks continued, more challenges came and went. Most of them, I tried to tackle on my own. I relied heavily on the inputs of mentors for this part. All in all, the hardest part was over now.
Some of the learnings from the Initial Weeks:

```go
- Unified diff format (UDF)
- Interactive rebasing in Git
- Modular programming
```
With this, few weeks passed, I submitted my project reports on the [gsoc](https://github.com/fossology/gsoc) repo. I started to get more comfortable with my setup and with the community. It was the period of the most learning till now.

---

## Go on a sprint

After a few weeks, I started to enjoy my work quite a lot, the productivity started to increase. At this point, I sent out a few PR's and got some reviews from my mentors, which was the most helpful part. 
I attended regular meetings, swept up a weekly schedule and began documenting my progress daily to keep myself on my toes. I wrapped up some major tasks of my project and began researching on the next parts.
One thing that really motivated me during this time, was the dedication and determination of my mentors and colleagues alike.

As the days started to pass, I began thinking about the mid term evaluation. I was not worried about the result, I was happy with what I was able to learn and achieve in a relatively short span of time, which I had not previously. During my last meeting, I have started working on a Github Action for fossology, which will seamlessly integrate fossology scanners in any CI workflow. I have also been given the task of naming it. :)

Some learnings from this period
```go
- Runners in CI pipelines
- Emulation in Github Actions and how Gitlab does it out of the box
- Creating and hosting custom Github Actions
- The power of git concepts like tagging ang versioning
```

As the days come closer, my anxiety and expectations are increasing day by day. Soon we'll know the results whether we have passed or not, but one thing that I can say for sure is that the past month has been one of the most exciting months of my life!

---

Some *relevant links*
* See my project [here](https://summerofcode.withgoogle.com/programs/2024/projects/by86kI7T)
* See my progress report [here](https://fossology.github.io/gsoc/docs/2024/ci-scanner)
* Checkout UTM [here](https://mac.getutm.app/)
* Learn about SSH Remote Tunneling [here](https://code.visualstudio.com/docs/remote/ssh)
* Read about unified diff format [here](https://www.gnu.org/software/diffutils/manual/html_node/Example-Unified.html)
* Checkout this [thread](https://stackoverflow.com/questions/24455377/git-diff-with-line-numbers-git-log-with-line-numbers) to understand the line number algorithm or checkout this [PR#2754](https://github.com/fossology/fossology/pull/2754)
* Learn about Github Runners [here](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners)
* QEMU is used for cross platform emulation. Check it out [here](https://github.com/docker/setup-qemu-action)
* Learn about python performance testing [here](https://blog.sentry.io/python-performance-testing-a-comprehensive-guide/)
* Docker images, volumes, tags, prunes. All these are [here](https://docs.docker.com/)
* Checkout the [Github](https://docs.github.com/en/rest?apiVersion=2022-11-28) and [Gitlab](https://docs.gitlab.com/ee/api/rest/) REST API docs and endpoints such as `compare` and `repository`
* [Creating](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action) and [publishing](https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace) different types of Github Actions.