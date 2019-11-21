# All in one Vue starter

### TODO : 
- add Vuex starter
- add login / register page

### How to run

#### Dev

Just install dependencies and run as dev:
```bash
    npm i
    npm run dev
```

#### Production

The production environement can either be build directly using :
```bash
    npm run build
```

and then serving the `dist/` directory.

Or using docker :
```bash
    docker build -t medmouine/vue-starter:production .
    docker run -it --rm -p 8080:80 medmouine/vue-starter:production
```

The app will run on `localhost:8080`
    