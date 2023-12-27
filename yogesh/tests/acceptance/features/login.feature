Feature: Login
As a user
I want to login into the application
So I can manage my files

Background:
  Given user has browsed to the login page


Scenario: user logs in with correct credentials
  When user logs in with username as 'admin' and password as 'admin'
  Then user should be navigated to homescreen


Scenario Outline: user logs in with incorrect credentials
  When user logs in with username as "<username>" and password as "<password>"
  Then user should see "Wrong credentials" message
  Examples: 
    | username | password |
    | jankari  | admin    |
    | admin    | jankari  |
    |          | admin    |
    | admin    |          |
    |          |          |
