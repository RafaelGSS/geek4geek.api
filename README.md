# Geek4Geek API

## Sequelize commands

migrations
```
node_modules/.bin/sequelize db:migrate
```

Create models
```
# generate models
node_modules/.bin/sequelize init
node_modules/.bin/sequelize model:create --name User --attributes username:string
node_modules/.bin/sequelize model:create --name Task --attributes title:string
``` 