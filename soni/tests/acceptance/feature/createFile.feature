Feature: create a file
As a user
I want to create a file
So I can write my content in it

Background:
 Given the user has browsed to the login page


Scenario: user creates a file
  Given user has logged in with username "admin" and password "admin"
  When user creates a file "demo.txt" with content "hello World!!!"
  Then user should see the "demo.txt" file