# Second Milestone Project by Holly Horwood

[NZ Holiday Helper Website](https://https://nz-holiday-helper.herokuapp.com/)

---

### **Disclaimer:** 
This website was designed for educational purposes only for the Code Institute.  All best endeavours have been made to ensure all content has been obtained legally and all good practice guide lines for web development have been followed.

---

### **Motivation/Purpose**
This is my second milestone project for the Full Stack Software Development course through Code Institute.  The decision to create this site came from a passion for exploring New Zealand's wilderness with family and friends.  I wanted to put together a simple site that gave the user fast access to key camping information like huts and campsites around the country.  I wanted to display each site on a simple easy to follow map so that locations could be identified quickly and the end user could narrow down their search in the shortest amount of time.

---

### **UX** 

**Research:**

 I spoke with travellers staying at three local camping grounds to ask what they thought would be most helpful in an app to assist them with their travel plans.  I also spoke to friends and family as well as hunters that use DOC (Department of Conservation) land regularly.

**Audience:**file:///C:/Users/Holly/Desktop/Code/second-milestone-project/index.htmlfile:///C:/Users/Holly/Desktop/Code/second-milestone-project/index.html

 This site was designed for travellers and the general public looking places to stay within the DOC areas.

**Navigation:**

It is essential that the site is easy to navigate on different sized devices and that it is obvious how to use it. This was designed mobile first and is a single page static site for easy navigation, any external links can be clicked on and will open on a separate page so the user still has the original page open to easily return to. I decided to use relatively neutral colours for the content but with an earthy green to represent nature. 

**Features:**

Each page has an identical header with a logo on the left and I have also included a call to action booking button on the right, so it is always obvious how to book. Each page also has a footer with social links to Facebook, Instagram, twitter and YouTube as well as copyright information. Each page has a centred white header. All call to action/book now buttons link to a modal where the customer can fill out there details, select the service they would like and book a date and time.

Home Page: This page has a simple header for the business and subheadings stating where the business is located and what it does. There is also a quote on the bottom right from Winston Churchill. I have a fixed background image of a small herd of horses running through the woods that is fixed to the background for all pages, however I have removed this for smaller devices as it looked to busy and have replaced it with a simple cleaner grey background.

About: This page gives an overview of the business as well as the two key services offered. There are also two Youtube videos alongside the overview text that show examples of the sport of Working Equitation.

Horses: This page has a carousel with photos and the names of the horses that live on the farm. I have used green again to highlight the carousel navigation on this page.

Trail Rides: This page is before lessons as during my research we found that trekking is the main source of income before lessons. It lists the different trail rides available and each one has its own call to action. At the bottom of the page is another smaller carousel showing photos from past treks as inspiration for customers.

Lessons: This page is very similar to the trail rides page although it doesn’t have a carousel, there is an image on the left of the clinic pricing which also highlights a special deal.

Facilities: This page has another carousel with text explaining what each image is.

Contact: This page has a contact form on the left requesting name, phone number and email as well as a textarea for any message the customer may want to add. There is also a bright green send button. On the right there is an interactive google map and below that the business contact phone number, address and email.

Interaction Design: The site has separate pages and was designed so there was no need to scroll down on larger devices. There is a navigation bar at the top that displays all pages in a logical sequence of how somebody searching the site would likely want to view them and a book now button. Every page that shows a service also has additional call to action buttons that when clicked on will launch a modal where the customer can book a service. The Lessons page also has a link at the bottom of the page to a separate PDF that will open ina a separate tab when clicked on. The Contact page has an interactive google map.

---

#### Technologies Used

-   HTML5
-   CSS3
-   Bootstrap
-   Javascript
-   jQuery
    (https://jquery.com/)


##### Other resources:

-   W3Schools
-   W3C Markup & CSS Validator
-   CSS Matic
-   Google Fonts
-   Google Maps API
-   DOC NZ API
-   MDN

---
Reported offences in South Australia
This is my second milestone project for the Full-Stack software development course through Code Institute. When it came to the decision as to which project option to choose, I liked the idea of making an interactive dashboard. However I just didn't know what dataset to base it all on, so I first played around with different sets that I could find throughout my web searches. On the South Australia Government site there were a lot of data sets avaliable to use, and the most interesting by far was of the reported offences in the state. As I started to combine the data with the dc charts I found the results to be very intriguing and chose to continue my project on this dataset.

UX
I believe there are so many crime shows on TV that it must be a topic that peaks the minds of a lot of people, which is why statistics in crime and more specifically crime in your state would attract a similar audience. For anyone wanting to find the infomation of the type of offences commited, how often and where the offences happened, then the data provided will show that. As a user I would expect to be able to click on a specific segment of a chart and it would display the number of reported offences that have happened.

Objectives
Who are your target audience?
People with an interest in crime statistics.
What is compelling visitors to your site?
To gain knowledge of what offences are committed in this state.
Why is this site different?
It provides interactive charts that allow the user to select specific key details and obtain it's information.
Scope Plane
Features
Suburb selector:
This allows the user to select any suburb in the state where an offence has been committed.

Total offences counter:
The counter will always show the total number of offences committed. It starts with the total number of offences for the whole state and when a user selects a segment of a chart, it will change the number of offences to that selection or combination of selections.

Level 1 offence description:
All the offences have three levels of description. This is a pie chart which shows a level 1 description of offences, which is the number of offences committted against a person or property.

Level 2 offence description:
This is a pie chart which shows a level 2 description of the offences. It is the number of offences committted by:

theft and related offences
acts intended to cause injury
fraud deception and related offences
property damage and environmental
serious criminal trespass
homicide and related offences
other offences against the person
robbery and related offences
Level 3 offence description:
This is a bar chart which shows a level 3 description of the offences, which is the number of offences committted by:

Other theft
Common Assault
Obtain benefit by deception
Other property damage and environmental
SCT - Non Residence
Receive or handle proceeds of crime
Theft from motor vehicle
Theft from shop
Serious Assault resulting in injury
Other homicide and related offences
Serious Assault not resulting in injury
SCT - Residence
Graffiti
Theft/Illegal Use of MV
Dangerous or negligent acts
Property damage by fire or explosion
Abduction, harassment and other offences
Other acts intended to cause injury
Other fraud, deception and related offences
Aggravated robbery
Threatening behaviour
Assault Police
Non-aggravated robbery
Murder
Blackmail and extortion
Top 10:
This is a row chart that features the top ten suburbs of where the specfic offences are commited. Note that if only one suburb is selected then only that suburbs bar will show.

Suburb barchart:
This is a bar graph showing all the suburbs in South Australia where an offence has been reported. The "x" axis is of the different suburbs and the "y" axis is the number of offences reported. The list of suburbs is too big to fit all on one screen, so I included an "x" axis scroll bar because I found it interesting to visually see the different suburbs compared to each other. I also limited the "y" axis to a domain of 800 reported offences because as a suburb, Adelaide would take up most of the chart and leave the other suburbs looking unimpressive. If the cursor is hovered over a bar it displays the number and percent of reported offences. This hopefully makes up for the other suburbs over the 800 domain.

Offence count over time linechart:
The "x" axis is for a time period from July 2017 to March 2018. The "y" axis is the number of offences.

Offence count over time barchart:
This chart is the same as the line chart, except it shows each day with a specific color. If there is any consistency between the day and the amount of offences committed, this will show it. The default view of the chart already shows that most reported offences occur on a Monday. Not to be confused when the actual offence has happened. I think it would be better to say the actual offence happens on a Saturday and Sunday but not reported until the Monday.

Footer:
This contains the infomation as to where the dataset was sourced and a link to the license type that suggests this infomation is free to use. Also there is a github icon that is linked to my github account.

Buttons:
Suburb, timeline and timebar chart buttons: A button was placed inside the heading container of these charts. This button allows the user to hide a chart container, so that another chart container can become closer and easier to compare to the upper charts.

Reset button: This resets all the charts back to their original values.

Hint icon: When hovered over, this displays a text box giving a description of its chart container.

What features can later be included?
A row chart displaying the top ten suburb offences commited in the metropolitan area and a top ten outside the metropolitan area.
Skeleton Plane
Wire frame
+-wireframe

Technologies used
Javascript
Used to build the charts and manipulate the values output by the chart.
Jquery
https://code.jquery.com/jquery-3.3.1.js
https://code.jquery.com/ui/1.12.1/jquery-ui.js
Used so the button/s reset the charts and hides the containers.
D3
https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js
Used to build the charts.
Crossfilter
https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js
Used to filter the data
DC
https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.js
https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.css
Used to build the charts.
Queue
https://cdnjs.cloudflare.com/ajax/libs/queue-async/1.0.7/queue.min.js
Used when loading the data.
BootStrap
https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
The bootstrap grid system to position the containers.
Font Awesome
https://use.fontawesome.com/releases/v5.2.0/css/all.css
The question icon is from the font awesome library.
google fonts
https://fonts.googleapis.com/css?family=Titillium+Web
the font style Titillium Web is used throughout the whole page.
Testing
W3c validator was used to check the html5 and css3 which returned with no errors.

JSHint was used to check the Javascript code which returned no errors.

Everything is device responsive, which was checked in the developer tools.

the project was also tested on my personal mobile that runs chrome.

The project guidelines stated that dc charts are not responsive and are for desktop and large screen viewing. I made the chart containers responsive so they all stacked appropriately to the device being used. Also I made the larger charts overflow hidden on the tablet and mobile versions. That way the user can scroll on the "x" axis to view the charts at an appropriate and readable size. A message for this has been displayed on the initial loading of the charts so it is a bit more obvious to the user.

I originally had a reset button for each graph. For an unknown reason the bar and line graphs wouldn't reset but the pie and row charts would. I didn't feel it was 100% necessary to have a reset button for each chart, so I changed this to just having one for all charts, which was a different code and worked. Reference to the code https://stackoverflow.com/questions/21550270/dc-js-unable-to-redraw-charts

Another problem I encountered was with the reset button and the time graphs. When clicking the reset button, these charts would reset(render) but would filter to the previously zoomed option. After a lot of research and different codes to try and remedy this, nothing was working and because of that I changed the zoom option to the brush option. I would have much prefered the zoom option because it was much easier to see specific results in a less cluttered area.

My testing would involve clicking on an option from each chart making sure all charts would respond to each other. As a user I would first be curious as to what the result would be for the suburb I live in. For example, I picked the suburb I live in and was able to see straight away the number of offences, the type of offences and when those offences were reported. I would then make sure all the charts reset. I would check that each chart question icon when hovered over would display the infomation container. Next, the buttons to hide each of the last three charts were checked and lastly the URL links in the footer were checked.

My testing for each browser is as follows:
Chrome
P = pass F = fail

Selector 1: P
Number counter 2: P
Piechart 3: P
Piechart 4: P
Barchart 5: P
Rowchart 6: P
Barchart 7: P
Linechart 8: P
Barchart 9: P
Question icon: P
container hide/ show buttons: P
reset button: charts 1 - 7: P charts 8 - 9: F Don't reset.
url links / github: P
Edge
P = pass F = fail

Selector 1: P

Number counter 2: P

Piechart 3: P

Piechart 4: P

Barchart 5: P

Rowchart 6: P

Barchart 7: P

Linechart 8: P

Barchart 9: P

Question icon: P

First test: When hovering over the icons on the right side of the screen, the container that appears might randomly turn blue. This fills part of it's parent container blue and also extends the "x" axis scroll bar.

Second test: After an updated version of my project and futher testing, the bug causing the blue container was no longer happening, the "x" axis scroll bar still extends.

container hide/ show buttons: P

reset button: charts: P

url links / github: P

Additional note: The fixed background jumps while scrolling. Through knowledge and research with my last project this is a common bug with Edge.

Opera
P = pass F = fail

Selector 1: P
Number counter 2: P
Piechart 3: P
Piechart 4: P
Barchart 5: P
Rowchart 6: P
Barchart 7: P
Linechart 8: P
Barchart 9: P
Question icon: P
container hide/ show buttons: P
reset button: P
url links / github: P
FireFox
P = pass F = fail

Selector 1: P
Number counter 2: P
Piechart 3: P
Piechart 4: P
Barchart 5: P
Rowchart 6: P
Barchart 7: P
Linechart 8: P
Barchart 9: P
Question icon: P
container hide/ show buttons: P
reset button: P
url links / githubs: P
Safari
Safari wouldn't open Github or Cloud 9 so i had no access to my project.
Credits
Media
The police car background image is from: https://www.flickr.com/photos/appleswitch/3103651077 by Robert Kuykendall

The GitHub image is from: https://pixabay.com/en/logo-icon-github-2582757/

Database
The database for the crime statistics used was obtained from the South Australia Government website licensed under a Creative Commons Attribution 4.0 License. © Copyright 2018

https://creativecommons.org/licenses/by/4.0/legalcode#s3a1
https://creativecommons.org/licenses/by/4.0/
https://data.sa.gov.au/copyright
South Australia Police, Government of South Australia, Crime statistics 2017-18 Q1 - Q3, Sourced on 16 August 2018

https://data.sa.gov.au/data/dataset/860126f7-eeb5-4fbc-be44-069aa0467d11/resource/bf604730-9ec8-44dd-88a3-f024b387e0e4/download/crime-statistics-2017-18-q1-q3.xlsx
I have used this dataset in a csv format and the only changes made were to the headings in line 1
From:
Reported Date	Suburb - Incident	Postcode - Incident	Offence Level 1 Description	Offence Level 2 Description	Offence Level 3 Description	Offence Count
To:
date,SuburbIncident,PostcodeIncident,offenceDescription1,offenceDescription2,offenceDescription3,OffenceCount
Deployment
The project and coding was all done on cloud 9. Everything was committed and pushed to my github repository at https://github.com/brettcutt/sa-offences and has been published on github pages at https://brettcutt.github.io/sa-offences/
Running the code
Clone this repository by first opening a terminal.
In the terminal write "git clone https://github.com/brettcutt/sa-offences.git"
Open the index.html and run the code.
Credits
fellow code institute students
Being able to show my projects on the slack forum and getting advice for small changes e.g: text that only made sense to the desktop mode and not mobile or tablet.

code references
-For a better understanding of the d3 time formats -https://github.com/d3/d3-3.x-api-reference/blob/master/Time-Formatting.md

finding a code for the reset button. javascript:dc.filterAll(); dc.renderAll(); found from https://stackoverflow.com/questions/21550270/dc-js-unable-to-redraw-charts
#### UX

*Research*
I spoke with those in the community involved in outdoor activities such as hunting, hiking and fishing, I also spoke with some tourists staying at a local camping ground to find out what they thought the website should include.  After considering their comments the most important aspect they commonly wanted was a map with easily identifiable markers that you could click on for more info about that particular site. The tourists inparticular wanted something easy to use on a mobile phone and commented that they often are on the road before they decide where they will next be staying so need something mobile friendly. 

*Audience* 
This site was designed for the general New Zealand public and tourists looking for accommodation on protected Department of Conservation land around New Zealand

*Navigation*
It is essential that the website is easy to navigate on different sized devices.  I decided to use relatively neutral colours for the content but with an eye-catching green to represent the element of nature.  The website consists of only one scrolling page.  On desktop view there are additional sidebars offering the user some extra information and links to other sites that could be helpful as well as some images from around New Zealand for inspiration.  

TODO:

##### Balsamic Mockups

![Balsamic mockup](assets/wireframes/nzholidayhelper.bmpr)

---

Install the Heroku CLI
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Create a new Git repository
Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a nz-holiday-helper
Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master
Existing Git repository
For existing repositories, simply add the heroku remote

$ heroku git:remote -a nz-holiday-helper

##### User Story

As a user on the website I want the ability to find accommodation at DOC sites around New Zealand. End user goal: Find a place to stay End business goal: Make finding accommodation easier Acceptance criteria: * Available to anyone travelling or holidaying in New Zealand.

---

Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

Features
In this section, you should go over the different parts of your project, and describe each in a sentence or so.

Existing Features
Feature 1 - allows users X to achieve Y, by having them fill out Z
...
For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

Features Left to Implement
Another feature idea
Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

JQuery
The project uses JQuery to simplify DOM manipulation.
Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Loader - Ajaxload.info
Favicon.io - created favicon on their website, free download.
Flaticon - tent icon for map markers
<div>Icons made by <a href="https://www.flaticon.com/<?=_('authors').'/'?>freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
<div>Icons made by <a href="https://www.flaticon.com/<?=_('authors').'/'?>fjstudio" title="fjstudio">fjstudio</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

Issue: API key returned CORS error.  Contacted developer of API who worked on resolving the issue, once it was fixed from their end they contacted me and I was able to connect without anymore errors.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

Credits
Content
All content written by Holly Horwood.

Media
- DOC Location Map Api - Crown Copyright: Department of Conservation Te Papa Atawhai [2019].
- kea.jpg & cathedralcove.jpg both obtained from Flickers Creative Commons website.
- All other images supplied by Holly Horwood and Ryan Connor from our personal collection.
- Tent Icon by icons8.com
- google maps

Acknowledgements
Thanks to Sebastian Immel my mentor for all of his help and patience.  Thanks also to the team at Code Institute especially Nakita & Haley.

