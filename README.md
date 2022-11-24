# social network api
 
## Description 
An API for a social network that uses a NoSQL database where users can share their thoughts, react to thoughts and have fiends

## Usage
- Application allows to add accounts with usernames and emails.
- Able to create, read, update and delete(CRUD) users.
- Application allows to add friends and show how many friends I have.
- Application allows to create and find reactions and thoughts.
- I am able to delete reactions, thoughts and remove friends.

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list