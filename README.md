<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  GoStack Challenge 01: NodeJS Concepts
</h3>

### Challenge

Build a simple application that stores projects and tasks within.

### Instructions ###
```
yarn install && yarn dev
```
Once yarn is running, all of the request should point to: http://localhost:3001/.

### Description ###
This quick and simple project explores a few basic NodeJS concepts like create, fetch, edit and delete items.
Tools and technology used on this project:

- Javascript ES6
- Node.JS
- Express

### Routes ###
| Method | Path | Params | Body | Description |
| ------ | ------ | ------ | ------ | ------ |
| POST | /projects | - | { id: 1, title: 'New Project' } | Create a project | 
| GET | /projects | - | - | Fetch projects | 
| PUT | /projects/:id | id | { title: 'New Project Name'} | Edit project name | 
| DELETE | /projects/:id | id | - | Delete project | 
| POST | /projects/:id/tasks | id | { title: 'New task' } | Add task to project | 

### Tips ###
I highly recommend using [Insomnia](https://insomnia.rest/) app to play around with the requests in a simple and straight-forward UI.

Thanks for checking this project out! Cheers!

