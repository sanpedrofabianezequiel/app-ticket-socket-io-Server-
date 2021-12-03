# Deploy Heroku

```
 Allways we need use in the package.json this props
  - "start": "node index.js"
```
- brew --version 
- If we dont' have brew. We will need downland that "Heroku CLI" [enlace en línea](https://devcenter.heroku.com/articles/heroku-cli) 

$ heroku login


- Process [enlace en línea](https://dashboard.heroku.com/apps/san-pedro-socket-react-server/deploy/heroku-git) 
$ cd my-project/
$ git init
$ heroku git:remote -a san-pedro-socket-react-server

$ git add .
$ git commit -am "make it better"
$ git push heroku master


```
    Ver Logs:    - heroku logs -n 1000 --tail
```

 - npm i cors
 - const cors    =  require('cors');
 -  this.app.use( cors());