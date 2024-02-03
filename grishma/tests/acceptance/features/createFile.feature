Feature: create file
 As a admin
 I want to create new files
 So that I can store my data


Scenario: admin creates a new file
  Given the admin has navigated to the login page
  And the admin has logged in with username "admin" and password "admin" using webUI
  When the admin creates a new file "demo.txt" with content "Hello World!!!"
  Then the admin should be able to see "demo.txt" file