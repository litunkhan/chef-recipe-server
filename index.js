const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.get('/',(req,res)=>{
     res.send({
        "chefs": [
          { "id": 1,
            "picture": "https://images.hola.com/us/images/026c-12fb8fbada43-2822ed1eafa6-1000/horizontal-1200/top-chef-season-11.jpg",
            "name": "Carlos Gomez",
            "years_of_experience": 10,
            "num_of_recipes": 30,
            "likes": 8000,
            "cuisine": "Mexican",
            "specialty_dish": "Chiles en nogada",
            "favorite_ingredient": "Mole",
            "cookbook_published": false,
            "awards": ["Best Young Chef 2019"],
            "restaurant_name": "El Sabor de Mexico",
            "city": "Guadalajara",
            "bio":"Carlos Gomez is a celebrated chef hailing from Guadalajara, Mexico.With over 10 years of experience in the culinary industry, he has established himself as a prominent figure in the Mexican cuisine scene. Carlos is particularly renowned for his expertise in preparing Chiles en nogada, a traditional dish from the region. Despite not having published a cookbook "
      
          },
          {  "id": 2,
            "picture": "https://remezcla.com/wp-content/uploads/2023/04/Elena-Reygadas-Profile-Food-1424x1068.jpg",
            "name": "Sofia Rodriguez",
            "years_of_experience": 15,
            "num_of_recipes": 50,
            "likes": 12000,
            "cuisine": "Mexican",
            "specialty_dish": "Tostadas de tinga",
            "favorite_ingredient": "Jalapeño",
            "cookbook_published": true,
            "awards": ["Best Mexican Chef 2020", "Top 100 Chefs Worldwide"],
            "restaurant_name": "La Casa de Sofia",
            "city": "Mexico City",
            "bio":"Sofia Rodriguez is a well-known chef based in Mexico City, Mexico. With over  years of experience in the culinary industry, she has become one of the top Mexican chefs in the world. Sofia has publish diffenent type of book about cooking"
          },
          {  "id": 3,
            "picture": "https://agringoinmexico.files.wordpress.com/2015/01/dsc_0079.jpg",
            "name": "Jorge Martinez",
            "years_of_experience": 20,
            "num_of_recipes": 75,
            "likes": 25000,
            "cuisine": "Mexican",
            "specialty_dish": "Tacos al pastor",
            "favorite_ingredient": "Avocado",
            "cookbook_published": true,
            "awards": ["Best Mexican Chef 2018", "Top 50 Chefs in Mexico"],
            "restaurant_name": "Casa Maria",
            "city": "Mexico City",
            "bio":"Jorge Martinez is a renowned Mexican chef based in Mexico City, with over 20 years of experience in the culinary  He is best Chef"
          },
          {  "id": 4,
            "picture": "https://www.foodandwine.com/thmb/Ja1_v2MefAhiZEo2Ke4wcjeXSyU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chef-gabriela-camara-at-cala-ft-blog1017-851d7a0f513a468199463284a9a1b42b.jpg",
            "name": "Isabella Hernandez",
            "years_of_experience": 8,
            "num_of_recipes": 25,
            "likes": 5000,
            "cuisine": "Mexican",
            "specialty_dish": "Enchiladas verdes",
            "favorite_ingredient": "Cilantro",
            "cookbook_published": false,
            "awards": [],
            "restaurant_name": "Taqueria El Sabor",
            "city": "Tijuana",
            "bio":"asbella Hernandez Mexico City, Mexico. With over 15 years of experience in the culinary industry, she has become one of  the top Mexican chefs in the world. Sofia has published a cookbook, which has been critically acclaimed for its unique and authentic recipes. She is particularly known for her specialty dish, Tostadas de tinga"
          },
          {  "id": 5,
            "picture": "https://d3a005dv9q91mu.cloudfront.net/uploads/2016/03/Frontera-10FEB2016-GALDONES-PHOTOGRAPHY-12-e1458242836944.jpg",
            "name": "Antonio Garcia",
            "years_of_experience": 12,
            "num_of_recipes": 40,
            "likes": 10000,
            "cuisine": "Mexican",
            "specialty_dish": "Cochinita pibil",
            "favorite_ingredient": "Achiote",
            "cookbook_published": true,
            "awards": ["Best Yucatecan Cuisine Chef 2021"],
            "restaurant_name": "Hacienda de Antonio",
            "city": "Merida",
             "bio":"Antonio Garcia is a Maxican chef and cookbook author.he is the fortune book write  including Chef at Home and Chef Michael"
          },
          {  "id": 6,
            "picture": "https://static01.nyt.com/images/2018/11/30/obituaries/30QUINTANA-print1/30QUINTANA1-videoSixteenByNineJumbo1600.jpg",
            "name": "Luisa Hernandez",
            "years_of_experience": 6,
            "num_of_recipes": 20,
            "likes": 4000,
            "cuisine": "Mexican",
            "specialty_dish": "Sopa de tort",
            "cookbook_published": false,
            "awards": [],
            "restaurant_name": "Albasino de Antonio",
             "city": "Merida",
             "Bio":"Luisa Hernandez ossi is an  chef who has worked in some of the most renowned restaurants in Italy and around the world. He is known for his expertise in regional Italian cuisine, particularly the cuisine Luisa has been awarded multiple Michelin stars throughout his career and has been recognized as one of the top Italian chefs in the world. He currently runs his own restaurant, Osteria Luca, which offers a modern interpretation of traditional Tuscan dishes"
        },
         { "id": 7,
         "picture": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_18/1868552/rick-martinez-te-main-220504.jpg",
          "name": "Diego Rodriguez",
         "years_of_experience": 18,
         "num_of_recipes": 60,
         "likes": 15000,
        "cuisine": "Mexican",
        "specialty_dish": "Mole negro",
        "favorite_ingredient": "Chocolate",
        "cookbook_published": true,
         "awards": ["Best Mexican Chef 2022", "Top 10 Chefs in Latin America"],
         "restaurant_name": "El Comal",
          "city": "Oaxaca",
          "bio":"Diego Rodriguez chef who has become known for her innovative and creative approach to traditional Japanese cuisine. She has worked in some of the most respected restaurants in Tokyo and New York, and has been awarded multiple Michelin stars throughout her career. Ayumi's restaurant, Nakamura  offers a unique dining experience that combines traditional Japanese techniques with modern ingredients and flavors"
           
      }
      ]
      })
})
    

app.listen(4000,()=>{
    console.log('server is running 4000')
})