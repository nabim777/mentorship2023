Feature: User Management
As an admin
I want to create new user
So that user can manage the file browser.

  Scenario: Create a new user
    Given the user has browsed to the login page
    And the user has logged in with username "admin" and password "admin" using webUI
    And the user has navigated to the Settings and selected the User Management page
    When user enters on the following data:
      | username | test              |
      | password | test              |
    Then user should be able to see a new user with username "test"