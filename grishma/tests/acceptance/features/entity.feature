Feature: entity
As a user
I want to create new files and folders
So that I can store my data


Scenario: creates a new file
  Given the user has browsed to the login page
  And the user has logged in with username "admin" and password "admin" using webUI
  When the user creates a new file "demo1.txt" with content "Hello World!!!"
  Then the user should be able to see "demo1.txt" file