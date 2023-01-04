# CoinCatalog

## Catalog of coins

This simple site is a catalog of precious coins. Based on ReactJS (Frontend), NodeJS (Backend) and MySQL (DB). It is the final project for the Algorithmics course for a 4th year student.

## Features

* Coin catalog
* Coin list
* Detailed information about the coin
* Search filter
* Admin panel
* View statistics
* Browsing history
* Сomments


## How to run


The project consists of two parts. Frontend on React and Backend on NodeJS. NodeJS 18 LTS and MySQL must be installed on the device to run the project.

An example shows how to run a project on a Windows laptop.

### 1. Prepare Database 

<br>

Use MySQL Workdench, phpMyAdmin or another way to import "coin_catalog.sql" from "sql" folder.

Make Query "ALTER USER 'database_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';"

Make sure that the database_user has permissions to perform any actions with the "coin_catalog" database

Edit the db.js file in the "service/server" folder by changing mysql.createPool. Change to your connection details.

### 2. Start server 

<br>

Run VSCode by opening the "CoinCatalog" folder and create Terminal.

Run commands:
### `cd service`
### `npm install`
and
### `npm start`

If everything is fine, you will see the following message:

### `Server is running on port 3001`

Open in browser: http://localhost:3001/ and you will see the page. \

### 3. Edit Frontend (if want)

<br>

Run VSCode by opening the "CoinCatalog" folder and create Terminal. \

Run commands: 

### `cd frontend-source`

### `npm install` 

After you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**



## Admin credentials

Login: Sahib \
Password: Sahib278



