Feature: Enitiy
    As a user I want to be able to create a new files and folders
    So that I can organize my files

  Background: 
    Given I am logged in as "admin"
    And I am on the home page

  Scenario: Create a new folder
    When I create a new folder named "my folder"
    Then I should see a folder named "my folder"

  Scenario: Create a new file
    When I create a new file named "my file" with content "Hello World"
    Then I should see a file named "my file" with content "Hello World"
