Feature: Review item component

Scenario: Review item renders properly with test data
  Given some test data
  When I render the ReviewItem component
  Then I expect the Stix ID to be displayed
  