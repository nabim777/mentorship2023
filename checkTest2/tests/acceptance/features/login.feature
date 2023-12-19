Feature: login
As a user
I want to be able to log into my account
So that I can have access to my files


  Background: 
    Given the user has browsed to the login page


  Scenario: login with valid username and valid password
    When user logs in with username "admin" and password "admin" using webUI
    Then user should be redirected to the webUI homepage


  Scenario Outline: login with invalid username and incorrect password
    When user logs in with username "<username>" and password "<password>" using webUI
    Then user should see "Wrong credentials" message
    Examples: 
      | username | password |
      | grishma  | rijal    |
      | admin    | rijal    |
      | grishma  | admin    |
      |          | rijal    |
      | grishma  |          |
      |          |          |