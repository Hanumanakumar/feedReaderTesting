# feedReaderTest project.

The goal is to test the feedReader code by using jasmine framework with jQuery and DOM elements using few test cases. We need to write test cases for modules. Udacity given a sample test case in feedreader.js (RSS Feed). 

##Running this app in your PC.

1. Cloned this repository with *git clone* command

2. Opened terminal and changed directory to my project folder.

3. Installed **web-server** for chrome ( *200 OK* ) extension in the chrome browser.

4. Launched the installed extension. And also opened the project folder with that extension. I got a link from then and clicked on that to run the application.

5. We can run directly in browser but we can't check the accebility and performance of the application without server. 


## I did the following steps to run the application.  

1. Observed the file structure. And I found that there was a new folder named **Jasmine**. And opened that folder in that I observed spec folder with **feedReader.js** file.

2. I observed the initial function **describe** and implemented remaining functions based on that one.

3. Wrote first test case for url fields( *defined & not to be empty* ). Observed allFeeds[] array from app.js which was located in js folder.

4. Wrote first test case for name fields( *defined & not to be empty* ). Observed allFeeds[] array from app.js which was located in js folder. 

5. Wrote test sute for menu. In that
    + Wrote test case to check that the '*.menu-hidden*' is activated by default.
    + Wrote test case to check that if we click on the menu bar the '*.menu-hidden*' have to be false.
    + Wrote test case to check that if we click on the menu bar again (twice) the '*.menu-hidden*' have to be true.

6. Wrote a test case that checking the entries not be 0 after loading.

7. After loading the content the old data is different from newly loaded content by using two seperate variables (first and second).
    + The * loadFedd(0, function()) * function loads the initial entries for detection.
    + The * loadFeed(1, function()) * function loads the new entries for detection.

8. Ckecked accebility by using lighthouse tool. And changed background color for color contrast.