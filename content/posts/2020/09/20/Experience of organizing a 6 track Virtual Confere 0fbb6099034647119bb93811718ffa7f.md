---
title: "Experience of organizing a 6 track Virtual Conference"
description: "This post explains my experience and learnings from organizing JavaScript and Friends Conferenc e 2020"
date: 2020-09-20
author: "baskarmib"
---
This post is to share my experience from organizing and running a 6 track virtual conference all from the comfort of my home office.  

Earlier this year, I organized a single track virtual conference using Zoom. It was a live conference. Some learning from there helped me in organizing the workshop day at JavaScript and Friends. 

But what about the actual conference day on Aug-14? 

We had to manage and run a 6 track virtual conference. So here I am going to cover all those behind the scenes planning and execution which helped in organizing the conference.

## Plan

This is the second year for JavaScript and Friends Annual Conference.  We all miss the in-person meetings, hallway interactions, sponsor booth visits and most importantly the swags that we can have from our sponsor booth visits etc. It is all together a different experience.  We took the decision to go virtual before announcing our first set of speakers who responded to our CFP (Call for Presentations).  

It was clear by the time around May-15 that we cannot risk conducting an in-person event and that we should go virtual. We decided to go with the same number of tracks as an in-person conference and ended up organizing a 6 track virtual conference. The primary reason we did not want to disappoint our speakers who submitted for speaking at the conference.

## Problems to Solve

When we decided to go virtual we had the following problems with us to solve. 

> How do we go virtual?

> How do we create or encourage the hallway interactions in a virtual world?

> How do we deliver our workshops virtually?

These were the primary questions which we had to solve to conduct the conference. So here is my experience on what we did to execute and deliver the conference virtually.

## Execution

### How do we go virtual?

The conference organizing team, did not have the required experience to run a complete virtual conference as this is our second year. It was all a complete learning experience for me to bring this conference virtual along with our team. We decided to have the talks recorded by our speakers and have them delivered to us. 

Since we are a community conference, we wanted to choose the platform to deliver the conference based on our community inputs. We polled our followers on Twitter and LinkedIn and the community has voted to choose "YouTube" as the preferred platform to watch the talks.

https://twitter.com/JSFriendsConf/status/1263913677780127744

The primary reason to choose a recorded talk was to make sure that we will be able to stream the talks to YouTube with less manpower and we did not want to take chances with the bandwidth issues on the day of the conference. We had few speakers joining us in different time zone and it would have been either late or too early for them to deliver the conference talks live. 

I have been following few conferences and events which were streamed live and took inspirations from friends and suggestions from [Henk Boelman](https://twitter.com/hboelman), [Kristian](https://twitter.com/signalnerve) and [Maarten Balliauw](https://twitter.com/maartenballiauw). Henk had shared his experience streaming conferences live for Global AI Community. Henk also managed few technical aspects for Juneteenth Conf.  I reached out to Henk with questions which I had on my end and it was decided to use OBS or StreamLabs to live stream as most of our talks are pre-recorded. 

Streaming recorded talks is easier compared to streaming all the talks live. We did have few sections of the conference delivered live like the Keynote, Panel Discussion, Interview with Jerry from Rentor Mentor, GraphQL talk by Ashley and Stressful side of tech by Crux Conception. These talks were delivered live using Zoom and live streamed through our YouTube Channel. The reason behind using Zoom to live stream was based on my experience running our monthly meetups for JavaScript and Friends and running DotNet Open Source Days a single track conference using Zoom.  

> Check out the Inspirations section for links to content from Henk and Maarten Balliauw.

### Choose a Cloud Provider for Streaming

When it comes to streaming, we had to decide whether we use our home bandwidth or go with streaming the talks using a Cloud Provider. Maarten Balliauw shared his experience in his blogs using Azure as the Cloud Provider.  My initial plan was to use Azure, but I was not able to find the GPU Powered Virtual Machines which Maarten used for their streams. This is where, I wanted to explore the choice used by ByteConf team managed by Kristian (@signalnerve). Based on Kristian suggestions,  I decided to use PaperSpace for our conference day streaming. Though Kristian had few issues during ByteConf with PaperSpace, we were fortunate that we did not have any issues during the conference day with PaperSpace. 

We ended up using 6 Virtual machines one for each track in [PaperSpace](https://www.paperspace.com/) using below configurations. 

> Operating System: Windows 10 (Server 2019) - Licensed
> Subscription Type: Pro hourly
> Subscription Cost: $5/month + $0.32/hour per Machine

With Paperspace, we can either connect to the machine using our browser window from the Control Panel Console. I ended up creating a separate user accounts to connect to the machines using Remote Desktop.

We installed StreamLabs OBS and used StreamLabs Custom Streaming Setup. After uploading the required videos and other images, music which are needed for the stream, it was no brainier effort to create scenes with required talk videos and videos from our sponsors. 

> To make sure that we don't face copyright claims with background music, we ended up using the music from YouTube- Audio Library which are free to use.

### Setting YouTube Live Events Page and Descriptions

In order to stream to YouTube, we ended up creating 6 Live Stream events in YouTube. Thanks to [Chris Sauer](https://twitter.com/csauer) who gave me pointers on creating multiple tracks in YouTube based on his experience from CouchCon. 

We need to make sure that the stream key for each event is unique.  These stream keys were used in StreamLabs OBS on each virtual machine. I initially ended up having same stream key for all tracks and later figured this on the day of conference while streaming our Keynote. If you had noticed you would have seen the Keynote on two tracks, while originally it was planned to be shown on Track One. This is my first lesson learnt on the day of conference streaming.

![Youtube](./streamkeys.jpg)

While we had time between our Keynote and regular track sessions, I made sure to update the stream keys for all events and configured the stream keys in StreamLabs OBS. This was the reason for the delay in few talks which did not start on time in Track 1, 3 ,4, 5, 6.

Now that we managed to start the talks in each tracks, we started facing audio quality issues with the stream after few minutes of the stream. This is because, I had StreamLabs OBS to Monitor Output. Using Monitor Output we can test if our stream audio is working fine. But it is necessary that we need to make the Monitor Off when we go live with YouTube.  I managed to figure this out and change the configurations accordingly in all 6 machines. This is the reason for talks on Track 1, 3, 4, 5, 6 which faced the audio quality issues during 9 AM talk.  This is my second lesson learnt on the day of conference streaming.  

![StreamLabs](./monitoroff.jpg)

Though I ended up testing the streams prior to the actual conference, it seems like the audio issues started appearing after few minutes of the stream and did not appear during the test streams. It was good that, I was able to figure this out and make sure that the remaining conference is not impacted. 

In order to make it easy for attendees, we updated the schedule in each tracks YouTube Event description and included links to other tracks in each of them. This way it helped attendees to navigate to each tracks with out leaving YouTube to change tracks. 

### Tech behind Live talks

We used Zoom and inbuilt live streaming option from Zoom to stream our Keynote talks, Panel Discussions, Talk by Jerry from Rentor Mentor, Talk by Crux Conception , Talk by Ashley. This is based on our experience from live streaming our monthly meetup talks. Before going live on YouTube from Zoom, we made sure to stop the stream in StreamLabs OBS in the corresponding virtual machine. 

### How do we create or encourage the hallway interactions in a virtual world?

We all miss the hallway conversations and interactions that we usually get at conferences. It is believed that major networking takes places through these hallway conversations. Many attend conferences to increase their network and interact with people. Bringing this experience in a virtual world is usually challenging. 

We already use Slack for our internal conversations and during our first year of the conference, we used Slack as our conference messaging platform. We decided to use the same for 2020 and this time we had to make some changes to the channels.  

We changed our profile names with (Organizing Team) and (Volunteers) so that attendees and speakers would be aware about the team who is involved with the conference and it would be easier to reach out to us. We created channels dedicated to speakers,  which in a way served as our Speaker Lounge. We also used the channel to share updates with our speakers.  We created a channel for hallway conversations and encouraged attendees to interact with peer attendees virtually.  

We created channels specific to each conference track and had our speakers available in YouTube chat as well as the corresponding channel in Slack. It is not possible by speakers to send website urls or additional resource urls in YouTube chat. Any websites which speakers wished to share with attendees they were able to share the same through our Slack channels. In a way Slack also helped in keeping the follow up conversations after the talks.

We created channel for gathering feedback from attendees. This way attendees were able to inform us about the technical issues which we faced during the start of the stream. Attendees were also able to give us and speakers feedback on the spot during the conference. 

> Getting feedbacks from attendees in real time during the event is a great experience for speakers and organizers.

We created channels for each sponsor and encouraged attendees to visit each sponsor. The original plan was to create a Zoom room for each sponsor, but later we figured that we might not be able to generate the required traffic to Zoom room. We ended up creating sponsor booth in Slack. 

In a way this tweet from my friend - Matt Groves helped me in getting a perspective over sponsor booths in virtual world. 

https://twitter.com/mgroves/status/1280574904946040834

Though the rest of the developer community has started to use Discord, we decided to stay with Slack, since we already have a Standard Plan through our Non Profit organization.  We encouraged attendees to interact in corresponding channels based on tracks, hallway and random channels. 

### How do we deliver our workshops virtually?

We did not have major issues with workshops. We delivered workshops through Zoom and had our speakers and attendees join the same live. The workshops were recorded using Zoom and the recordings were later shared to our attendees for consumption after the event.  We would need to purchase as many number of hosts in Zoom based on the number of parallel workshops. If there are 2 workshops running in parallel then we would need 2 hosts one for each workshop.

## Inspirations

[https://www.henkboelman.com/articles/online-meetups-with-obs-and-skype/](https://www.henkboelman.com/articles/online-meetups-with-obs-and-skype/)

[https://blog.maartenballiauw.be/post/2020/04/02/streaming-a-community-event-on-youtube-sharing-the-technologies-and-learnings-from-virtual-azure-community-day.html](https://blog.maartenballiauw.be/post/2020/04/02/streaming-a-community-event-on-youtube-sharing-the-technologies-and-learnings-from-virtual-azure-community-day.html)

[https://dev.to/tessamero/series-you-re-doing-virtual-events-wrong-advice-from-the-community-attendee-experience-2p02](https://dev.to/tessamero/series-you-re-doing-virtual-events-wrong-advice-from-the-community-attendee-experience-2p02)

In the end all went well and we were able to pull of the event. Though we faced initial hiccups, at the end we were able to resolve them soon and pull through the end. This was a great learning experience, and I am sure this would help me and you in delivering future events with less hassles. Though this article did not go in to the specifics of setting up StreamLabs, I am always to share my experiences with you if you need more information on setting up StreamLabs. I thank all friends and volunteers who supported me during the conference day. Special thanks to [Michael Jolley](https://twitter.com/baldbeardbuild) for desigining and sharing the stream layover design. Thanks to all authors under Inspirations which helped me in executing the conference successfully.

