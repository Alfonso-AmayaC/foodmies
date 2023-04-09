# Foodmies

Foodmies is a pantry manager where you can keep track of what you have, the meals you can create with the food in your pantry and see what you need to re-purchase.

## Incoming features

- Add the ability to plan your meals based on your current pantry
- Show the expired food or items which expiration date has passed
- Show the historical prices of certain items of interest


## How to run this project

This project requires a minimal configuration. Create a .env file at the root of the project './' where it contains the mongodb connection uri. 

**Important: the mongodb cluster should contain a database called "pantry" and a collection called "fruits", if you need a ready-to-go mongodb test URI contact me via my mail: [alfonsocamargo0108@gmail.com](mailto:alfonsocamargo0108@gmail.com)**

Once you have created and added the environment variables file run the next commands:

```console
yarn add # Install dependencies
yarn dev # Start dev server
```
Dependencies and dev dependencies
```json
  "dependencies": {
    "@chakra-ui/icons": "^2.0.17",
    "@chakra-ui/react": "^2.4.9",
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "deepcopy": "^2.1.0",
    "framer-motion": "^9.0.2",
    "mongodb": "^5.2.0",
    "next": "latest",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1"
  },
  "devDependencies": {
    "@types/node": "^12.12.21",
    "@types/react": "^17.0.2",
    "@types/react-dom": "^17.0.1",
    "typescript": "^4.8.3"
  }
```


*This project was created and is maintained by Alfonso-AmayaC*