/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 $(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
   describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
     it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    // Writing test case that all the url fields are defined and those are not empty.
    it('URLs are defined and that the URLs are not empty', function() {
      allFeeds.map((item) => {

        // test case for url to be defined && url not be empty
        expect(item.url).toBeTruthy();
      })
    })


    // Writing test case that all the url fields are defined and those are not empty.
    it('Names are defined and that the Names are not empty', function() {
      allFeeds.map((item) => {

        // test case for name to be defined &&  name not be empty
        expect(item.name).toBeTruthy();
      })
    })
  });


  // test suite named "The menu"
  describe('The menu', function() {

  // test case to check the menu is hidden by default
  it('menu hidden by default', function() {
    expect($('body').hasClass('menu-hidden')).toBe(true);
  });

    // test case for checking menu visibility and disability
    it('menu visibility & disability', function() {

      // for first click menu not to hide
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      
      // for second click menu to hide
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });

  // new test suite named "Initial Entries"
  describe('Initial Entries', function() {

    // Test case for checking the length of the loaded content not to be 0
    beforeEach(function(done) {
      loadFeed(0, done);
    });
    it('after loaded', function() {

      // Here the condition
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });

  // new test suite named "New Feed Selection"
  describe('New Feed Selection', function() {

    // variable declaration for checking old content and the newest
    var first;
    var second;
    beforeEach(function(done) {

      // For loading old data
      loadFeed(0, function() {
        first = $('.feed').html();

        // For loading new data
        loadFeed(1, function() {
          second = $('.feed').html();
          done();
        });
      });

    });

    // Test case to compare new data with old data
    it('new feed different from old feed', function() {

      // Checking old data not be new data.
      expect(second).not.toBe(first);
    });
  });
}());
