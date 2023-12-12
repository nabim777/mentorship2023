Feature: create a file
As a user
I want to create a file
So I can write my content in it


Scenario: user creates a file
  Given the user has browsed to the login page
  And user has logged in with username "admin" and password "admin"
  When user creates a file "demo.txt" with content "hello World!!!"
  Then user should see the "demo.txt" file