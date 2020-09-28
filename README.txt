REACT + NODEJS Приложение с Нуля в 1 ролике
MERN:
-MongoDB
-Express
-React
-NodeJS

0. Install node.js from https://nodejs.org/en/

1.1 Create new folder of project
$ mkdir magazine

1.1.1 jup to the project folder
$ cd magazine

1.2 Node initialization in the project folder
$ npm init

1.3.1 Install the packages
$ npm install express mongoose

1.3.2 Install the development packages
$ npm install -D nodemon concurrently

1.4 Update scripts in package.json
 "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js"
  }

1.5 Start Development Server
$ npm run server

1.6 Configure Node.js 
$ npm i config
$ mkdir config
$ vi config/default.json
$ vi config/prpduction.json

1.7 MongoDB.com
Projects-> New Project -> NameYour Projecft -> Add Members and Set Permission -> Create Project ->Build Cluster(Free)-> Azure->Region->Create Cluster->Wait->CONNECT->
Add Your Current IP Address-> Create User and password:Illya, tl123
->Choose Connection Method->Connect your application
Copy connection string to your application
default.json
"mongoUri":"mongodb+srv://Illya:<password>@cluster0.ojcyu.mongodb.net/<dbname>?retryWrites=true&w=majority"
Replace <password> and <dbname>

1.8 Bcrypt
$ npm i bcryptjs

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email: email, password: hashedPassword });

1.9 Express Validator
$ npm i express-validator

1.10 JSON Web Token
$ npm i jsonwebtoken

2.0 React App
npx create-react-app client

2.0.1 Delete folder node_modules and git
$ cd client
$ rm -rf node_modules
$ rm -rf .git

2.0.2 Delete App.css App.test.js logo.svg

2.1 Install Librery-Install the dependencies in the local node_modules folder
$ cd client
$ npm i

2.2 Start FrontEnd and Backend together
magazine/package.json
  "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
    "client": "npm run start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
....
....
  "devDependencies": {
    "concurrently": "^5.3.0",
    "nodemon": "^2.0.4"
  }

2.2.1 From Server Directory start server
$ cd ..
$ npm run dev

3.0 Stily Library Materializecss.com
$ cd client
$ npm install materialize-css@next

4.0 React Router
$ cd client
$ npm i react-router-dom
59:20
1:17:56
1:29:13

5.0
/client/package.json
"proxy":"https://localhost:5000"

1:47:01

2:21:47
6.0 Short id
$npm i shortid

2:55:11
