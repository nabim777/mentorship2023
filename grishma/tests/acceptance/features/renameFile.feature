Feature: rename file
 As a user
 I want to rename a file
 So that I can give proper name to a file


Scenario: user renames a file
  Given the user has browsed to the login page
  And the user has logged in with username "admin" and password "admin" using webUI
  And the user has created a new file "test.txt" with content "This is me testing the rename feature."
  When the user renames a file "test.txt" to "hello.txt"
  Then the user should be able to see "hello.txt" file