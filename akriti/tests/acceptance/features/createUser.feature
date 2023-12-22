Feature: User Management
As an admin
I want to create new user
So that user can manage the file browser.

  Scenario: Create a new user
    Given the user has browsed to the login page
    And user logs in with username "admin" and password "admin"
    When the user  navigates to the Settings and selects the User Management page
    And user enters on the following data:
      | username | password | Scope | language | adminpermission |
      | Akrity   | admin    |       | yes      |                 |
    
    Then user should be able to create a new user