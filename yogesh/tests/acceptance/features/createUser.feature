Feature: Create User
As an admin
I want to create user
So that I can manage users


  Scenario: Create a user
    Given "admin" has logged in
    And admin has browsed to settings page
    And admin has navigated to "User Management" tab
    When admin creates a new user following details:
      | username               | haker           |
      | password               | passmeword      |
      | scope                  | .               |
      | enableChangingPassword | YES             |
      | permissions            | 0,0,1,1,1,1,0,1 |
      | commands               | git init        |
    Then a user should be able to see "username" user in users table
