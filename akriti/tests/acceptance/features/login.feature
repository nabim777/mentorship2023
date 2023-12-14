Feature: login
As a user
I want to do login to the system
So I can manage the files and folders 

Background: 
    Given the user has browsed to the login page


  Scenario: User Login with correct username and valid password
  When user logs in with username "admin" and password "admin"
  Then user should redirect to the homepage


  Scenario Outline: login with invalid  credendial
    When user logs in with username "<username>" and password "<password>"
    Then user should be able to see the "Wrong credentials" message
    Examples: 
      | username | password |       
      | Akrity   | admin    | 
      | aakrity  | aakrity  |
      | ****     | admin    | 
      | admin    |          |  
      |          | admin    |
