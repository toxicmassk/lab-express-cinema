![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Express Cinema

<br><br>

## Introduction

![image](https://user-images.githubusercontent.com/23629340/36983687-49a3d64e-2093-11e8-8b86-b11813f0cdba.png)

The goal of this exercise is to learn how to seed the database on your own and to be able to create a cinema web page, where we will display the list of movies. In addition to that, you will create a detail page, where more details will be shown for each movie individually.

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

<br><br>

## Instructions

<br>

### Iteration 0 | Initialize the project

**This lab has the starer code based on the IronLauncher, the Express Generator.**

After forking and cloning the project, you will have install all the dependencies:

```shell
$ npm install
```

Create a '.env' file and add the following data:

```
MONGODB_URI=mongodb://localhost:27017/lab-movies-celebrities
PORT=3000
```

To run the app:

```shell
$  npm run dev
```

Now you are ready to start. 🚀

<br>

### Iteration 1 | Seed the database

First, we need to seed our database. Below you will find an array of objects with info for 8 movies. You should create two files:

- In the root, create a folder `models` and in it add the `movie.js` file for the Movie model.

As you can tell from `movies.json`, every movie has the same properties (_title_, _director_, etc.) so based on the available information, go ahead and create the `Movie` model in the `models/Movie.js` file.

After creating the model, to insert a list of existing movies to the movies collection, run the following script:

```
npm run seed
```

### Iteration 2 | The Home Page

Now when you have all movies in the database, you shall proceed to getting them to be displayed to the user.

We need our home page. Simple and beautiful, you can use the `home.hbs` to create the following home page:

![image](https://user-images.githubusercontent.com/23629340/36986664-acd6af14-209a-11e8-816d-b62417239c53.png)

The `button` should be a link redirecting to the `/movies` route handler. (_You will create this route handler in the following iteration._)

<br>

### Iteration 3 | List the Movies

Proceed to creating the `/movies` route handler. We need to list all the movies we have in our database. You should create a `movies.hbs` file, and display a list of all the movies.
To summarize, in this iteration your goal is to create `/movies` route handler that will render `movies.hbs` view. This view should have all the movie titles and movie images displaying. In addition to this, as displayed on the image below, add the link _See more_ that should point to the each movie details page. (_You will be creating this page in the following iteration._)

![image](https://user-images.githubusercontent.com/23629340/36986832-240fe492-209b-11e8-94de-a7334af41076.png)

<br>

### Iteration 4 | Display Movie Details

Finally, you have to create a view to display the details about each movie. You need a `movie/:id` route handler, where the user can check all the info about each movie, after clicking on the `See More` button shown on the `/movies` view.

![image](https://user-images.githubusercontent.com/23629340/36986933-6f8060b4-209b-11e8-8571-496914f9ae96.png)

<br>

## Bonus: Styling

Our app should be pretty ugly right now if you (correctly) focused on the back-end during this exercise. To be a fully functioning web app, we need to add some styles.

In your layout require bootstrap, and add some very basic styles to make our movies app look "ready" for production.

That's it!

<br>

**Happy coding!** :heart:
