Feature: Create a new resource
    As a user 
    I want to be able to create a new files and folders
    So that I can organize my files

  Background: 
    Given user logs in as "admin"
    And user has navigated to the homepage

  Scenario: Create a new folder
    When user creates a new folder named "myFolder"
    Then user should be able to see a folder named "myFolder"

  Scenario: Create a new file
    When user creates a new file named "myFile.txt" with content "Hello World"
    Then user should be able to see a file named "myFile.txt" with content "Hello World"

  Scenario: Rename a file
    Given user has created a file named "oldfile.txt" with content "dfghj"
    When user renames a file "oldfile.txt" to "newfile.txt"
    Then user should be able to see file with "newfile.txt" name
