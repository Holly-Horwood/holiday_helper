# Second Milestone Project by Holly Horwood

[NZ Holiday Helper Website](https://nz-holiday-helper-hollycodeinstitute.c9users.io/index.html)

---

#### Disclaimer: 
This website was designed for educational purposes only for the Code Institute.  All best endeavours have been made to ensure all content has been obtained legally and all good practice guide lines for web development have been followed.

---

#### Motivation/Purpose
Exploring New Zealand's wilderness has always been a passion for my family and friends.  I wanted to put together a simple site that gave the user fast access to key camping information like huts and campsites around the country.  I wanted to display each site on a simple easy to follow map so that locations could be identified quickly and the end user could narrow down their search in the shortest amount of time.

#### Technologies Used

-   Bootstrap with Javascript and jQuery
-   HTML5
-   CSS3

##### Other resources:

-   W3Schools
-   W3C Markup & CSS Validator
-   CSS Matic
-   Google Fonts

---

#### UX

*Research*
I spoke with those in the community involved in outdoor activities such as hunting, hiking and fishing, I also spoke with some tourists staying at a local camping ground to find out what they thought the website should include.  After considering their comments the most important aspect they commonly wanted was a map with easily identifiable markers that you could click on for more info about that particular site. The tourists inparticular wanted something easy to use on a mobile phone and commented that they often are on the road before they decide where they will next be staying so need something mobile friendly. 

*Audience* 
This site was designed for the general New Zealand public and tourists looking for affordable accommodation amongst the New Zealand wilderness.  

*Navigation*
It is essential that the website is easy to navigate on different sized devices.  I decided to use relatively neutral colours for the content but with an eye-catching green to represent the element of nature.  The website consists of only one scrolling page.  On desktop view there are additional sidebars offering the user some extra information and links to other sites that could be helpful as well as some images from around New Zealand for inspiration.  

TODO:

*Features:*  
Each page has an identical header with a logo on the left and I have also included a call to action booking button on the right, so it is always obvious how to book.
Each page also has a footer with social links to Facebook, Instagram, twitter and YouTube as well as copyright information.
Each page has a centred white header.
All call to action/book now buttons link to a modal where the customer can fill out there details, select the service they would like and book a date and time.


*Home Page:*
This page has a simple header for the business and subheadings stating where the business is located and what it does.  There is also a quote on the bottom right from Winston Churchill.  I have a fixed background image of a small herd of horses running through the woods that is fixed to the background for all pages, however I have removed this for smaller devices as it looked to busy and have replaced it with a simple cleaner grey background.

*About:*
This page gives an overview of the business as well as the two key services offered.  There are also two Youtube videos alongside the overview text that show examples of the sport of Working Equitation.

*Horses:*
This page has a carousel with photos and the names of the horses that live on the farm.  I have used green again to highlight the carousel navigation on this page.

*Trail Rides:*
This page is before lessons as during my research we found that trekking is the main source of income before lessons.  It lists the different trail rides available and each one has its own call to action.  At the bottom of the page is another smaller carousel showing photos from past treks as inspiration for customers.

*Lessons:*
This page is very similar to the trail rides page although it doesn’t have a carousel, there is an image on the left of the clinic pricing which also highlights a special deal.

*Facilities:*
This page has another carousel with text explaining what each image is.

*Contact:*
This page has a contact form on the left requesting name, phone number and email as well as a textarea for any message the customer may want to add.  There is also a bright green send button.  On the right there is an interactive google map and below that the business contact phone number, address and email.

*Interaction Design:* 
The site has separate pages and was designed so there was no need to scroll down on larger devices.
There is a navigation bar at the top that displays all pages in a logical sequence of how somebody searching the site would likely want to view them and a book now button.
Every page that shows a service also has additional call to action buttons that when clicked on will launch a modal where the customer can book a service.
The Lessons page also has a link at the bottom of the page to a separate PDF that will open ina a separate tab when clicked on.  The Contact page has an interactive google map.

##### Balsamic Mockups

![balsamic mockup1](assets/wireframes/balsamic1.PNG)
![balsamic mockup2](assets/wireframes/balsamic2.PNG)
![balsamic mockup3](assets/wireframes/balsamic3.PNG)
![balsamic mockup4](assets/wireframes/balsamic4.PNG)

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


Favicon.io - created favicon on their website, free download.

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

