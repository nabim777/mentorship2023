Feature: Update password
As a user
I want to update my password
So I can login with new password

Scenario: user changed password with correct format
Given the user has signed up 
And the user has logged in
When user has entered new password with correct format
Then user should be able to login with new updated password


Scenario: user entered different password on new_password and confirm_password fields
Given the user has signed up 
And user has already logged in
When user has entered new_password in incorrect format
Then user should be able to know the password doesnt match