---
title: "Thoughts on recent AWS Outage"
description: "Sharing my thoughts from observing recent outage with Amazon Web Services"
date: 2020-12-04
author: "baskarmib"
---

This post is to reflect my thoughts on the recent AWS Outage that we observed during Thanksgiving holiday week. Though the outage did not impact every business, but it did impact a major portion of customers indirectly through cascading effect.

While majority of internet was discussing about the outage, many did share their thoughts on what could be done to sustain business during outage like these situations. As you might be aware the main reason for outage was mainly due to issues introduced in the system by addition of additional capacity for Amazon Kinesis Front End. 

> At 9:39 AM PST, we were able to confirm a root cause, and it turned out this wasn’t driven by memory pressure. Rather, the new capacity had caused all of the servers in the fleet to exceed the maximum number of threads allowed by an operating system configuration. As this limit was being exceeded, cache construction was failing to complete and front-end servers were ending up with useless shard-maps that left them unable to route requests to back-end clusters.

Many were quick to share their thoughts on how this situation could have been avoided from impacting our organization. 

Primary suggestion was to make use of multiple regions while developing applications for the cloud. Having multiple regions will help us sustain outages like the recent outage where the entire US-EAST-1 region was impacted. This approach perfectly works. It is always recommended to maintain an exact working replica of our applications in multiple regions. This way we can activate and start routing traffic to the region which is not impacted.

> What would we do if multiple regions are impacted?

As application architects we always strive to build our systems resilient. Though using multiple regions could have helped us run our business from regional outages, there is always 0.0001% chance that we are still prone to outage impacts when there is a widespread outage at cloud providers.

> Is Multi Cloud an Option to consider?

Many mission critical applications are already considering Multi Cloud as an option in their IT Strategy. Designing application systems using multiple cloud providers helps us choose the best services from each. We may consider running a live instance of our application in one cloud provider and have a replica of applications in another cloud provider.  This raises the next fundamental question on maintenance. 

Each Cloud Provider has their own set of methods for using a service. For example, we can run functions in any cloud provider subject to limitations with languages each provider can support.     

- AWS - Lambda Functions
- Azure - Azure Functions
- Google Cloud - Google Cloud Functions
- IBM Cloud - IBM Cloud Functions

Using robust CI/CD process we can target to run our applications using multiple cloud providers. It is always ideal to consider a logical group and place resources as part of that logical group in one provider. For example - Having the presentation, middleware and database co-located in the same cloud provider helps in less network roundtrips or lags compared to having them separated in different providers. 

We can use different strategies while considering multi cloud providers as below.

- Segregating applications by departments to different cloud providers.
- Segregating applications by environment to different cloud providers.

Every application out there might not need the multi cloud environment model. There is no one formula to use while using multi cloud approach. It needs constant feedback mechanism to tune and adjust based on our experience. 

The first step in achieving multi cloud environment is to consider converting applications to run in containers. Using containers helps us in choosing any cloud provider of choice and it is also faster to restore applications during outages.

> Is Hybrid Cloud an option to consider?

Hybrid Cloud is also best option to choose while planning for business continuity. In Hybrid Cloud we have the flexibility to use our own infrastructure as a backup option when cloud is impacted by outage. Most banking sector applications still follow Hybrid Cloud as their approach due to restrictions around data security and other compliance options. 

During outage in cloud, Hybrid Cloud approach would need efforts from our end to change routes to our applications so that end users are not impacted with changes in addresses which they use while accessing our applications.

> Pro-Active Monitoring?

It is always required to implement Pro-Active Monitoring at our end. With pro-active monitoring we can always take actions quickly to stand up and create new instances of our applications using new regions than regions which we already use. In the current AWS Outage scenario, organizations which had pro-active monitoring were able to address the issue without major impact.

Rather than relying on monitoring information provided within cloud providers, it is best to consider monitoring solutions which are outside the cloud provider. This way monitoring solutions can alert us when there is widespread outage with the cloud providers. 

There were reports that certain users were not able to even access the status health dashboards which are provided by cloud providers during the outage.  

> The irony is that the outage is also affecting the company’s “ability to post updates to the Service Health Dashboard

This has been a learning experience for many, and we should take this as an opportunity to learn and plan for designing solutions which are resilient. 

Feel free to share your thoughts on what can be done to be prepared to situations like these through a tweet tagging me(@baskarmib).

### Related Links

<div class="notification is-info">
<p>
<a href="https://www.bbc.com/news/technology-55087054" target="_blank" rel="noopener noreferrer">https://www.bbc.com/news/technology-55087054</a>
</p>
<p>
<a href="https://www.startribune.com/amazon-cloud-service-outage-affects-companies-from-shipt-to-roku/573196931/" target="_blank" rel="noopener noreferrer">https://www.startribune.com/amazon-cloud-service-outage-affects-companies-from-shipt-to-roku/573196931/</a>
</p>
<p>
<a href="https://www.datacenterdynamics.com/en/news/aws-explains-what-went-wrong-us-east-1/" target="_blank" rel="noopener noreferrer">https://www.datacenterdynamics.com/en/news/aws-explains-what-went-wrong-us-east-1/</a>
</p>
<p>
<a href="https://aws.amazon.com/message/11201/" target="_blank" rel="noopener noreferrer">https://aws.amazon.com/message/11201/</a>
</p>
<p>
<a href="https://techcrunch.com/2020/11/25/amazon-web-services-outage-takes-a-portion-of-the-internet-down-with-it/" target="_blank" rel="noopener noreferrer">https://techcrunch.com/2020/11/25/amazon-web-services-outage-takes-a-portion-of-the-internet-down-with-it/</a>
</p>
</div>

