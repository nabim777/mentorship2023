Feature: Create a file
As a user
I want to create new file
So that I can store my data


  Scenario: creates a new text file
    Given the user has browsed to the login page
    And the user has logged in with username "admin123" and password "12345" using webUI
    When the user creates a new file "test.txt" with content "Hello World!!!"
    Then the user should be able to see "test.txt" file
    