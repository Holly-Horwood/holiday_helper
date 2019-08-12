# Second Milestone Project by Holly Horwood

[NZ Holiday Helper Website](https://nz-holiday-helper-hollycodeinstitute.c9users.io/index.html)

---

#### Disclaimer: 
This website was designed for educational purposes only for the Code Institute.  All best endeavours have been made to ensure all content has been obtained legally and all good practice guide lines for web development have been followed.

---

#### Motivation/Purpose
This is my second milestone project for the Full Stack Software Development course through Code Institute.  The decision to create this site came froma passion for exploring New Zealand's wilderness with family and friends.  I wanted to put together a simple site that gave the user fast access to key camping information like huts and campsites around the country.  I wanted to display each site on a simple easy to follow map so that locations could be identified quickly and the end user could narrow down their search in the shortest amount of time.


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

