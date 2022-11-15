# Project Title
User Management Project

## Demo link:
Access my project at [Heroku](https://rocky-lowlands-16280.herokuapp.com/)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)

## About The App
[User Management Project] is an app that displays user data, allows for sorting, creating, and directions to address supplied by the user through Google Maps.

## Screenshots

![alt text](https://github.com/brookelkennison/user-management-project/blob/main/image.jpg?raw=true)

## Technologies
I used `Create React App`, `JsDoc`, `TailwindCSS`, and `Heroku`.

## Setup
- download or clone the repository
- run `npm install`
- run `npm start`

## Approach
I used react hooks to handle state and events. I used a parent component called Users which held all of my main state and functions for handing user data. I then passed this down to the child components and created a copy of the data to manipalate which I used to update the main state of the data. I used Tailwind CSS for all of my styling, which I quickly came to love and enjoy working with. I also used JsDoc for creating documentation and keeping data types consistent across multiple components. 

### Things I would like to add in the future
- Form Validation
- Address Validation
- Loading
