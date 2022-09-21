/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/ex1', 'Ex1Controller.store')
Route.post('/ex2', 'Ex2Controller.store')
Route.post('/ex3', 'Ex3Controller.store')
Route.post('/ex4', 'Ex4Controller.store')
Route.post('/ex5', 'Ex5Controller.store')
Route.post('/ex6', 'Ex6Controller.store')
Route.post('/ex7', 'Ex7Controller.store')
Route.post('/ex8', 'Ex8Controller.store')
