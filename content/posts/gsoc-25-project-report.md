+++
author = "Rajul Jha"
title = "GSoC 2025 Final Project Report"
date = "2025-08-30"
description = "Final Project Report of GSoC '25 @Fossology."
tags = [
    "gsoc", "final-evaluation" ,"atarashi" ,"fossology", "open-source"
]
+++

![Logo](/gsoc-24-project-report/foss-gsoc-logo.png)

# Table of contents
- [Table of contents](#table-of-contents)
  - [About Fossology](#about-fossology)
  - [About Atarashi](#about-atarashi)
  - [Motivation for my project](#motivation-for-my-project)
  - [Keyword Agent: A pre-filtering step](#keyword-agent-a-pre-filtering-step)
  - [Known drawbacks](#known-drawbacks)
  - [My Learnings](#my-learnings)
  - [Acknowledgements](#acknowledgements)
  - [Planning for future](#planning-for-future)


## About Fossology

FOSSology is a long-standing, mature project that provides both a toolkit and a system for license compliance scanning.  
As a toolkit, it exposes multiple scanners (like **nomos**, **ojo**, **copyright**) that can be executed via CLI.  
As a system, it provides a web interface and database backend for scanning large repositories, packages, or directories.  

Over the years, FOSSology has integrated different kinds of license scanners—some rule-based, some keyword-based, and now machine-learning–driven approaches like **Atarashi**.  

## About Atarashi

Atarashi is one of the projects of FOSSology community that works as an independant Python [package](https://pypi.org/project/atarashi/).
It works on information retrieval techniques like TFIDF, Cosine Similarity Damerau Levenshtein distance and 
N-gram distance to detect licenses in source code files.
Atarashi internally implements these algorithms using agents inside of it, like a TFIDF Agent, DLD agent, etc.
Then any file/folder can be scanned by simply running atarashi using any of the above mentioned agents.
It output's the predicted answer after comparing with processed data that has been amalgamated from existing sources like [SPDX sources](https://spdx.org/licenses) and FOSSology's internal [license database](https://raw.githubusercontent.com/fossology/fossology/master/install/db/licenseRef.json).

## Motivation for my project

While Atarashi demonstrates promising performance with an accuracy of around 80%, this project aims to significantly improve both the accuracy and robustness of its predictions.

Traditional scanners like **nomos** and **ojo** are rule-based. They rely on predefined license texts or regular expressions. While accurate for standard license texts, they struggle with:
- Slightly modified licenses (common in practice).
- Large repositories with mixed content.

Atarashi was introduced to fill these gaps by using ML and IR techniques, but this came with a own set of challenges. It needed numerous features and improvements like:
- Large scanning times due to expensive calculations on these files.
- Not integrated into the FOSSology UI and workflows.
- Lacking optimizations in its database usage, leading to slow scans.
- Not making full use of multi-stage detection pipelines to minimize false positives and improve scanning speeds.
- Making use of Nirjas for comment extraction was broken. It needed to be fixed.

The motivation of my project was to tackle these existing issues and provide a neat and scalable solution
for the same.

## Keyword Agent: A pre-filtering step

In order to improve the scanning times, a new agent called Keyword Agent was introduced. It reduces the 
candidate license set before passing it to other similarity-based agents. The idea was to quickly filter if 
a license/related text is explicitly present in the text.

```yaml
acknowledg(e|ement|ements)?
agreement
as[\s-]is
copyright
damages
deriv(e|ed|ation|ative|es|ing)
redistribut(e|ion|able|ing)?|distribut(e|ion|able|ing)?
free software
grant
indemnif(i|y|ied|ication|ying)?
intellectual propert(y|ies)?
[^e]liabilit(y|ies)?
licencs?
mis[- ]?represent
open source
patent
permission
public[\s-]domain
require(s|d|ment|ments)?
same terms
see[\s:-]*(https?://|file://|www.|[A-Za-z0-9._/-]+)
source (and|or)? ?binary
source code
subject to
terms and conditions
warrant(y|ies|ed|ing)?
without (fee|restrict(ion|ed)?|limit(ation|ed)?)
severability clause
```

For example, `redistribut(e|ion|able|ing)?|distribut(e|ion|able|ing)?` this pattern matches words like 
redistribute, distributing, redistributable etc. Since these words directly point to the presence of a 
license, the Keyword Agent marks it as a license possibility and then sends it to the next stage for complete 
scanning. If no license is found, then it eliminates the file there itself, saving crucial time.
On non license text, this makes the agent upto **50%** faster!

<!-- ![Screenshot](/) -->

Other stats:
- Ran the KeywordAgent on NomosTestFiles.
- Achieved ~99.5% accuracy, confirming robustness of regex pattern matching.
- Detected minor edge cases (true negatives) which informed the next steps for keyword expansion.

## Known drawbacks

* The copyright scanner results give some unnecessary information along with the copyright findings, which is a known issue of the copyright scanner. This needs to be fixed in coming future.
* The line number algorithm might struggle to find the line numbers if the diff is not properly formatted or is tampered with. It heavily depends on the diff format.

## My Learnings

* Git was definitely the skill I improved the most during GSoC :)
* I spent a lot of time working with Python, Docker, and CI/CD tools like GitHub Actions, and I feel way more confident in using them now.
* Gained hands-on experience with SBOM generation, package parsing, and the integration of FOSSology scanners, which broadened my technical expertise.
* I learned some valuable lessons on writing clean, maintainable code. I focused on proper formatting, modular programming, and object-oriented techniques.
* I also got to learn about different packaging methods that are industry standards and why following community norms is so important. It’s the little things that make a big difference in how reliable and compatible your software is.
* I spent some time optimizing Docker images and learning how to speed up program execution with practices like concurrency.
* GSoC also helped me improve my documentation game. Writing weekly progress reports, crafting clear commit messages, and keeping a work log became second nature, and it really pays off in keeping everything organized.
* Attending the weekly community meetings and project calls was a big part of my GSoC experience. They really helped me see the bigger picture and kept me motivated. Plus, these calls were great for making sure everyone was on the same page and moving in the right direction. 

## Acknowledgements

I want to express my deepest gratitude to everyone who supported me during my GSoC 2024 journey with FOSSology.

First and foremost, I would like to thank my mentors, [Shaheem Azmal M MD](https://github.com/shaheemazmalmmd), [Gaurav Mishra](https://github.com/GMishx), [Avinal Kumar](https://github.com/avinal) and [Kaushalendra Pratap](https://github.com/Kaushl2208) whose guidance, patience, and expertise were invaluable. Your encouragement and feedback helped me grow both technically and personally, and I’m incredibly grateful for all the time and effort you invested in my project.

A huge thank you to my family for their unwavering support and understanding throughout this journey. Your belief in me kept me motivated, and I couldn’t have done this without you.

Finally, I’d like to extend my thanks to the entire FOSSology community. From the very beginning, you were welcoming and always ready to help. Working with such a friendly and knowledgeable group made this experience truly rewarding, and I’m proud to have contributed to this amazing project.

Thank you all for making GSoC 2024 such a memorable and transformative experience for me.

## Planning for future

* I realize that writing open source code comes with the responsibility to maintain it. And I am more than
happy to do so.
* The next major goal for me is to wrap up the dependency scan part of the project; of which NPM dependencies and PHP dependencies are the one's I am currently working on.
* In the longer run, I plan to keep involved with the community, continue to contribute to open source
and most importantly, continue to learn newer things.
