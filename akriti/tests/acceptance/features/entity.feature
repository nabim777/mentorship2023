Feature: entity
As a user
I want to create files and folders
So I can manage the files and folders

#   Scenario: User Login with correct username and valid password
#     When user logs in with username "admin" and password "admin"
#     Then user should redirect to the homepage


    Scenario: user create a file
    Given the user has browsed to the login page 
    And user logged in with username "admin123" and password "12345"
    When user creates a file "demo.txt" with content "hello world !!"
    Then user should see the "demo.txt" file