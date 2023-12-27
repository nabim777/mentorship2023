Feature: rename file
 As a admin
 I want to rename a file
 So that I can give proper name to a file


Scenario: admin renames a file
  Given the admin has browsed to the login page
  And the admin has logged in with username "admin" and password "admin" using webUI
  And the admin has created a new file "test.txt" with content "This is me testing the rename feature."
  When the admin renames a file "test.txt" to "hello.txt"
  Then the admin should be able to see "hello.txt" file