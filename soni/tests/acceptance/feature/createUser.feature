Feature: As an admin
I want to create new user
So I can manage users


  Scenario: create new user
    Given the admin has browsed to the login page
    And the admin has logged in with username "admin" and password "admin"
    When admin browsed to the settings
    And creates user with following details
      | Username          | Soni     |
      | Password          | password |
      | Scope             | filename |
      | Language          | English  |
      | Admin Permissions | yes      |
    Then admin should see "Soni" in Users table.
