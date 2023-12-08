Feature: Login
As a user
I want to login into the application
So I can manage my files

  Scenario: user logs in with correct credentials
    Given the user has browsed to the login page
    When user logs in with username as 'admin' and password as 'admin'
    Then user should be navigated to homescreen

  Scenario Outline: user logs in with incorrect credentials
    Given the user has browsed to the login page
    When user logs in with username as "<username>" and password as "<password>"
    Then user should see "<message>" message

    Examples: 
      | username | password | message           |
      | jankari  | admin    | Wrong credentials |
      | admin    | jankari  | Wrong credentials |
      |          | admin    | Wrong credentials |
      | admin    |          | Wrong credentials |
      |          |          | Wrong credentials |
