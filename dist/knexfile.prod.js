"use strict";module.exports={development:{client:"sqlite3",connection:{filename:"./data/budget.db3"},useNullAsDefault:!0,migrations:{directory:"./data/migrations",tableName:"knex_migrations"},seeds:{directory:"./data/seeds"}},production:{client:"pg",connection:{host:"localhost",database:"northwind",user:"luis",password:"guliguli23"},pool:{min:2,max:10},migrations:{directory:"./data/migrations",tableName:"knex_migrations"},seeds:{directory:"./data/seeds"}}};