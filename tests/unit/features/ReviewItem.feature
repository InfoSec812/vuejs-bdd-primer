Feature: Review item component

Scenario: Review item renders properly with test data
  Given some test data
  When I render the ReviewItem component
  Then I expect the Stix ID to be displayed in the first column
  And I expect a pop-up edit field in the last column

Scenario: Value updated when edited
  Given some test data
  When I render the ReviewItem component
  And I click on the field value
  And I edit the field value
  And I click the Set button
  And an update event will be emitted with the new data
