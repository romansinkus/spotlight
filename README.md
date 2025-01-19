# Spotlight
![gallery](https://github.com/user-attachments/assets/faec626a-6d92-4939-8628-1c4249724eef)


## Inspiration
As students, we’ve all been there—wandering around campus searching for an available study spot, only to waste valuable time and end up frustrated. The same goes for the gym—showing up only to find it overcrowded can be equally demotivating. These challenges inspired us to create Spotlight, a real-time livestream platform designed to make campus life more efficient and less stressful.
## What it does
Spotlight is a real-time campus assistant designed to help students find study spots and check gym availability with ease. Using livestream technology, Spotlight analyzes spaces to identify the number of people present and available seats, providing up-to-date data at a glance.
By saving your course schedule, Spotlight suggests the closest available spaces based on your previous or next class. Spotlight simplifies campus life, saving you time and making your day more productive.
## How we built it
Livepeer streams are displayed via WebRTC. A Flask server manages API calls for real-time processing, which uses a PyTorch object detection model trained on the COCO8 dataset to analyze frames through an HLS-ffmpeg pipeline.

The frontend was built using Next.js and Tailwind CSS.

## Challenges we ran into
- Real-Time Stream Processing
- Back-End Deployment (still local)
- Stream Latency
- Object Detection Model Accuracy
- Routing and Hydration Error issues with Next.js

## Accomplishments that we're proud of
- Object Detection for People Counting!
- Livestream support
- One of our members first hackathon! 

## What we learned
- How to train a pytorch model with a premade dataset, process images and video with model prediction, pipeline creation from HLS to a single frame.

## What's next for Spotlight
We’re expanding Spotlight’s capabilities with noise level analysis. This feature will assess the noisiness of each area, helping students choose study spots that match their preference. Additionally, multistream person count support would benefit Spotlight greatly.
