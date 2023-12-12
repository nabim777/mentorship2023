Feature: login
As a user
I want to do login
So I can access my profile


Background:
 Given the user has browsed to the login page


Scenario: login with valid username and valid password
  When user logins with username "admin" and password "admin"
  Then user should be directed to the homepage


Scenario Outline: login with invalid username and incorrect password
  When user logins with username "<username>" and password "<password>"
  Then user should see "Wrong credentials" message
  Examples: 
    | username | password  |
    | admin    | passwords |
    | admin    | soni      |
    | soni     | passwords |
    | name     |     12345 |
