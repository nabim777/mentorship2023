Feature: create user
 As a admin
 I want to create new users
 So that I can explore the filebrowser


  Scenario: admin creates a new user
    Given the user has browsed to the login page
    And the user has logged in with username "admin" and password "admin" using webUI
    And the admin has been redirected to the settings page
    And the admin has been redirected to the user management page
    When admin creates a new user with following attributes
      | username          | user    |
      | password          | user    |
      | scope             | .       |
      | language          | English |
      | admin permissions | yes     |
    Then admin should be able to see "<username>" in username column
