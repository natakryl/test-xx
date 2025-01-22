
- Laravel 11 
- Breeze scaffolded
- Inertia js
- Vue js
- Tailwind css

## Requirements
- Stable version of [Docker](https://docs.docker.com/engine/install/)
- Compatible version of [Docker Compose](https://docs.docker.com/compose/install/#install-compose)


## For first time only !
- `git clone https://github.com/kfqr/test-xx`
- `cd test-xx`
- `docker compose up -d --build`
- `docker compose exec php bash`
- `composer setup`

## From the second time onwards
- `docker compose up -d`

### Laravel App
- URL: http://localhost

### Development
- To start HMR `docker compose exec yarn dev`  
  > If _http://127.0.0.1:5173/@vite/client_ request failed try reset container...  
  > `rm -f public/hot`  
  > `docker compose down`  
  > `docker compose up -d --build`

### Build
- `docker compose exec php bash`
- stop any vite hmr process 
- `yarn build` without errors
-  http://localhost to see changes

### About Source Code ...
- _resources\views\app.blade.php_  
  base site _html layout_. `@inertia` - [Blade](https://laravel.com/docs/11.x/blade) directive that mounts vuejs application onto the page.
- _resources\js\app.js_ - vuejs application
- _resources\js\Pages_ - vuejs Page components
- _resources\js\Components_ - vuejs reusable components