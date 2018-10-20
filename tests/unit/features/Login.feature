Function: User login

Scenario: Entering credentials and clicking the login button
  Given An instance of our Login component
  And   A mocked implementation of the login method
  When  I enter a username
  And   I enter a password
  And   I click the login button
  Then  I expect the login handler method to be executed