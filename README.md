# IQVIA Hackathon Project

* App Link: https://hcliqvia.netlify.app/

## Designed, developed and made by : 
Aditya Mishra
Rohit Garg
Dhruv Nagpal

## Github Link:
https://github.com/rohitgarg025/iqvia-hackathon

## Webapp Link:
https://hcliqvia.netlify.app/
## Inspiration
During COVID-19 spikes, a lot of healthcare providers are converted to dedicated centres for infectious disease care. While this was necessary to flatten the curve, it means patients requiring regular treatments such as those on chemotherapy, diabetic persons requiring insulin injections, people on dialysis, fractures, cardiac arrests etc. lose access to healthcare organisations. These people have a hard time finding a hospital that would treat them because they might be dedicated care centres. 

We propose creating an application that provides details of HCPs that are NOT dedicated care centres, so that patients can reach there faster and directly, and save time in the process. IQVIA provides an up-to-date database of over 21 million healthcare providers, and it serves as the perfect database to fill this need for people worldwide.

## What it does
HealthAPPy is a single tap solution to find healthcare providers near you. It uses the IQVIA HCL database to search for speciality healthcare providers near you so that in a critical emergency situation, a patient can quickly get in touch with medical professionals. It is also built on the web, letting it be truly universal and cross-platform, as well as lightweight and OS independent. This would mean a lot for the next billion, who are also the ones to whom our app would be the most useful.

## How we built it
The frontend for the application was rendered using TailwindCSS, and upon this, we configured the search functionality by implementing the HCLSDK's prebuilt UI. We used Microsoft Forms to collect feedback from our users, and we also use Google's Single Sign-on API to implement a sign-in functionality to the app.

## Challenges we ran into
We ran into challenges when we tried to integrate specialisations into the app. We also ran into difficulties when we tried to sort the search results into various categories by specialtyType, but it seems that would be sorted if we were to use a premium version of the database. That would allow us to integrate additional functionality of sorting hospitals, medical camps, public and private healthcare centres, clinics from one another. 

## Accomplishments that we're proud of
We are proud of how lightweight we were able to make our solution, as it means it works quickly and on any device with a browser - smartphone or not. We are also proud that we were able to get this done by working with each other remotely during this pandemic.

## What we learned
We learned how to work with the IQVIA HealthCareLocator SDK. We also learned about MS PowerApps in our attempts to build a portal app to enrol more doctors. We also learned how to work remotely. We learned how to use new tools for remote work, like VS Code's Live Share features, ngrok for localhost port forwarding, GitHub for collaboration, and how to integrate APIs with the software. We also learned a lot about utilities like yarn as we understood the HCL SDK in our attempts to utilize it.

## What's next for HealthAPPy
We want to add preferential listings for doctors based on reviews. We also want to integrate a feature that lets us sort by type of health care provider, so that it is easier for patients to search for solutions such as dialysis facilities or lab test providers. These features would be provided to subscribed users, and are currently in development.

