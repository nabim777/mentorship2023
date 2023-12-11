Feature: login
As a user
I want to do login
So I can access my profile


  Scenario: login with valid username and valid password
    Given the user has browsed to the login page
    When user logins with username "admin" and password "admin"
    Then user should redirect to the homepage


  Scenario Outline: login with invalid username and incorrect password
    Given the user has browsed to the login page
    When user logins with username "<username>" and password "<password>"
    Then user should see "Wrong credentials" message
    Examples: 
      | username | password |
      | grishma  | rijal    |
      | admin    | rijal    |
      | grishma  | admin    |
      |          | rijal    |
      | grishma  |          |
      |          |          |