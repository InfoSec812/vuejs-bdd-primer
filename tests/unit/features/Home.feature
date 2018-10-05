Feature: Home Page

Scenario: Opening the initial web page
  Given The page is open in a browser
  When I inspect the page
  Then I should see the Home landing page
  And the page should contain a Logo
  And the page should have a sidebar menu
  And the page should have a title bar
  And the title bar should contain the words "My New Application"