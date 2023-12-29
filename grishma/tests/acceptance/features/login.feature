Feature: login
 As a admin
 I want to be able to log into my account
 So that I can have access to my files

  Background: 
    Given the admin has browsed to the login page


  Scenario: admin logs in with valid username and valid password
    When admin logs in with username "admin" and password "admin" using webUI
    Then admin should be redirected to the webUI homepage


  Scenario Outline: admin logs in with invalid username and incorrect password
    When admin logs in with username "<username>" and password "<password>" using webUI
    Then admin should see "Wrong credentials" message
    Examples: 
      | username | password |
      | grishma  | rijal    |
      | admin    | rijal    |
      | grishma  | admin    |
      |          | rijal    |
      | grishma  |          |
      |          |          |