Feature: Enitiy
    As a user 
    I want to be able to create a new files and folders
    So that I can organize my files

  Background: 
    Given user logs in as "admin"
    And user is navigated to the homepage

  Scenario: Create a new folder
    When user creates a new folder named "my folder"
    Then user should be able to see a folder named "my folder"

  Scenario: Create a new file
    When user creates a new file named "my file" with content "Hello World"
    Then user should be able to see a file named "my file" with content "Hello World"
