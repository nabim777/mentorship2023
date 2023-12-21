Feature: As an admin
I want to create new user
So I can manage users

 
Scenario: create new user
Given the user has browsed to the login page
And user has logged in with username "admin" and password "admin"
When admin browsed to the setting 
And creates user with following details
      |Username    |   Soni     |     
      |Password    |   password |          
      |Scope       |   filename |     
Then admin should see Soni in Users table.            
