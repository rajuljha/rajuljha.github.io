+++
author = "Rajul Jha"
title = "How API's shape our daily life."
date = "2023-05-04"
description = "How API's shape our daily life."
tags = [
    "API","programming","Daily life","interface"
]
+++

All of you must have used a music streaming app, say Spotify, at least once in your life. Have you ever wondered how are we able to control the music according to our needs with just the click of buttons? How is the play/pause button directly able to turn the music on/off ? Is the hardware (i.e speakers) directly controlled by the buttons?

In order to understand API’s, firstly we must understand interfaces. We are surrounded by interfaces in our day to day life and use them on a daily basis subconsciously. All of you must have seen a radio or even used one yourself.

![Screenshot](/api-shape-daily-life/api-daily-life.png)

It has all these buttons for playing/stopping, changing the network, changing the volume, an antenna to catch the signals, or maybe even a record button. We all know how to use them. We can control what and how we listen to just by using the interface that has been provided to us by the makers of the radio. We don’t need to worry about how the radio does that. For example, we use the volume button to vary the volume but we don’t need to know how the volume is being varied, what technologies or components are being used by the radio to achieve that. The volume button is part of an interface that is provided and meant to be used by humans for their needs.

Similarly, our mobile phones have messaging interface for sending messages, calling interface for calling etc. Musical instruments like the keyboard and piano have keys laid out which is also an interface for playing different sounds. These are some of the interfaces designed to be used by humans, thus called User Interfaces.

So, what is an API? API’s or Application Programming Interfaces are similar to User Interfaces. On one hand, User interfaces are designed to be used by humans, while the API’s are designed to be used by machines. It can be like a smartphone accessing the web(like the google cloud server) or it can be two servers talking to each other. They are like contracts between the provider of the API and the consumer of the API.

Consider Legos, only legos of specific shapes and sizes can fit together. In other words, there is a contract between the provider and the consumer of the legos to connect only the legos of specific shapes and sizes, to make something meaningful with them.

![Screenshot](/api-shape-daily-life/api-daily-life-2.png)

One powerful thing about API’s is that they separate the concerns of the provider and the consumer. For example, if we are building the backend and the frontend in different programming languages and the backend fetches some information from the database and exposes that information to the frontend via an endpoint in it’s API, the frontend doesn’t need to care about how the backend is fetching the information as long as it gets the desired information.

Under the hood, an API can be powered by anything it likes and as long as the contract is maintained, the consumer need not worry about any of the concerns of the provider. Also, the provider does not care what the consumer does with the information.

API’s are everywhere. Contracts are everywhere. In fact, the human race has evolved around contracts. Languages are like a contract which define how we communicate with each other. Money is like a contract to exchange goods and services. So, to answer how API’s shape our daily lives, just remember, online payment via Paypal is governed by API’s, weather reports, text messaging, food delivery, video chatting, music streaming, everything is governed by API’s. From tinder.com to divorce.com , everything is happening because of API’s.

References -
* [Programmable Web’s API playlist.](https://www.youtube.com/playlist?list=PLcgRuP1JhcBP8Kh0MC53GH_pxqfOhTVLa)
* [APIs for Beginners 2023 — How to use an API](https://www.youtube.com/watch?v=WXsD0ZgxjRw)

