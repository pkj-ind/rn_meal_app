import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTV3s4FbYs8863iN9LbwgpXXKKV1z73nSL7sg&usqp=CAU'),
  new Category('c2', 'Quick & Easy', '#f54242','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyRWkss9HGXU8wIwYesxGjK6owuJZicfl3aA&usqp=CAU'),
  new Category('c3', 'Indian', '#b9ffb0','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSUe548fxjFDeYSeOETahEePYuUfE6zDedxw&usqp=CAU'),
  new Category('c4', 'German', '#f5d142','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFZddWf8gsb7jbrbGCJIDdZuVgCqwJgi9mtQ&usqp=CAU'),
  new Category('c5', 'Light & Lovely', '#368dff','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3QkV0EYgQonc7cVfQEU8ZedseZWSTNqh1fA&usqp=CAU'),
  new Category('c8', 'Bakery', '#f5a442','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS63xLV5saNM48q9Zp4NIQ0JpO4j0lat5KQiQ&usqp=CAU'),
  new Category('c6', 'Desserts', '#41d95d','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnYjD6mXyIjNuwBBWvTzy6W2wWo9QgANwizQ&usqp=CAU'),
  new Category('c7', 'Breakfast', '#9eecff','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg-LD64M3T-wcN2SpT_nDVjyGHGdIhqWup3w&usqp=CAU'), 
  new Category('c9', 'French', '#ffc7ff','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTMGpks8sWlOBBxB4rgo-5J0XQZuisvF4PJg&usqp=CAU'),
  new Category('c10', 'Summer', '#47fced','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFk601_xNI8cFrWp3q1PYhgb5gK-70g9HS4w&usqp=CAU')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true,
    "https://www.youtube.com/watch?v=ErEy38dcCVg"
  ),

  new Meal(
    'm2',
    ['c2','c3','c7'],
    'Okra Fry',
    'affordable',
    'simple',
    'https://i.imgur.com/Rk2R2SH.jpeg',
    20,
    [
      '500 gm tender okra (Bhindi)',
      '1 small chopped onion',
      '2 cloves of garlic (optional)',
      '1 tbsp of coking oil',
      '1/2 tsp cumin seeds',
      'Salt as per taste',
      '1 Green chilli (Optional)',
      '1/2 tsp turmeric powder (optional)',
      '1 tsp garam masala (optional)'
    ],
    [
      'Wash tender okra and keep on kitchen towel or wipe out extra water.',
      'Okra should and chopping knife should be dry to avoid stickiness',
      'Chop okra into 1/2 inch (approx) pieces',
      'Take a pan and heat 2 spoons of Ghee/oil. Once hot add cumin seeds and fry for 20-30 seconds',
      'Add chopped onion, garlic and chilli and fry until onion turns slight brown.',
      'Add chopped okra and fry on medium flame for 5-7 minutes without covering it.',
      'Add turmeric, spices and keep cooking on medium flame with covering it for 5 minutes',
      'Add salt and fry for further 2-3 minutes without covering it.',
      'Serve with Roti/Bread'
    ],
    true,
    true,
    true,
    true,
    ""
  ),

  new Meal(
    'm3',
    ['c8'],
    'Aata Ginger Cookies',
    'affordable',
    'simple',
    'https://i.imgur.com/ngVqfK7.jpeg',
    45,
    [
      '2 cups of Aata (Wheat flour)',
      '3/4 cup Powder Sugar',
      '2 inch of Grated Ginger',
      '4/5 cup of Melted Butter at room temp',
      '1 tsp of Baking powder',
      '1/3 tsp of Baking soda',
      '1 pinch of salt in case of unsalted Butter',
      '3-5 tbsp of Milk'
    ],
    [
      'Take a big mixing bowl and add all dry ingedients and mix it very well',
      'For melting the butter, you can heat butter for 30 seconds in oven',
      'Add grated ginger in melted butter and stir it well',
      'Pour 3/4th of melted butter in mixing bowl and mix with hand very well',
      'Add remaining butter and combine them well',
      'Add 3 tbsp of milk and combine it well to make dough but do not knead them like bread/Roti/Pizza dough',
      'In case your dough became sticky, keep it in freeze for 10 minutes',
      'Now flatten with patting hand or  roll out slightly thick with roller',
      'use cookies cutter to cut them in desired shape and shift them to baking try',
      'Bake them 15-18 minutes on 180 degree celsius in preheated depends',
      'You can bake in 2 slots if your oven is small but baking time will be almost same',
      'Once cookies turn slightly golden or edges trun light brown, take out the try and allow it to cool',
      'You can keep sauteing for additional few minutes for crispiness',
      'To avoid stickiness do not add salt in the begining and dont cook putting lid for longer.'
    ],
    false,
    false,
    true,
    false,
    ""
  ),

  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false,
    ""
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    false,
    true,
    ""
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    false,
    ""
  ),

  new Meal(
    'm7',
    ['c7'],
    'Pancakes',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    false,
    false,
    ""
  ),

  new Meal(
    'm8',
    ['c3'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice',
    ],
    true,
    false,
    false,
    true,
    "https://www.youtube.com/watch?v=a03U45jFxOI"
  ),

  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ],
    true,
    false,
    true,
    false,
    "https://www.youtube.com/watch?v=XbO_qCNea3A"
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
    true,
    true,
    true,
    true,
    ""
  ),
  new Meal(
    'm11',
    ['c7', 'c3'],
    'Indian Samosa',
    'affordable',
    'hard',
	'https://img-global.cpcdn.com/recipes/3f403ae3427de60a/1200x630cq70/photo.jpg',
    60,
    [
'1 cup plain flour (maida/All Purpose Flour)',
'2 tbsp. warm oil',
'water to knead dough',
'2 potatoes large boiled, peeled, mashed',
'1 onion finely chopped',
'50 gram green peas',
'2 green chillies crushed',
'1/2 tsp. ginger crushed',
'1/2 tsp. garlic crushed',
'1 tbsp. coriander finely chopped',
'1/2 lemon juice extracted',
'1/2 tsp. turmeric powder',
'1/2 tsp. garam masala',
'1/2 tsp. coriander seeds crushed',
'1 tsp. red chilli powder',
'salt to taste',
'oil to deep fry'
    ],
    [
'For dough: Make well in the flour.',
'Add oil, salt and little water.Mix well till crumbly.',
'Add more water little by little, kneading into soft pliable dough.',
'Cover with moist cloth, keep aside for 15-20 minutes.',
'Beat dough on worksurface and knead again. Re-cover.',
'For filling: Heat 3 tbsp. oil, add ginger, green chilli, garlic, coriander seeds.',
'Stir fry for a minute, add onion and green peas, saute till light brown.',
'Add coriander, lemon, turmeric, salt, red chilli, garam masala.',
'Stir fry for 2 minutes, add potatoes. Stir further 2 minutes.',
'Cool. Keep aside.',
'Make a thin 5" diam. round with some dough.',
'Cut into two halves. Run a moist finger along diameter.',
'Join and press together to make a cone.',
'Place a tbsp. of filling in the cone and seal third side as above.',
'Make five to six. Put in hot oil, deep fry on low to medium till light brown.',
'Do not fry on high, or the samosas will turn out oily and soggy.',
'Drain on rack or kitchen paper.',
'Serve hot with green and tamarind chutneys (refer chutneys), or tomato sauce.'
    ],
    false,
    true,
	  true,
    false,
    ""
  ),
  new Meal(
    'm12',
    ['c3'],
    'Malai Methi Mutter',
    'affordable',
    'Hard',
	'https://www.yummyfoodrecipes.in/resources/picture/org/Matar-Malai.jpg',
    60,
    [
      '2 bowls of Fresh Methi(Fenugreek)',
      '100 gm Green Peas or Frozen green peas',
      '2 Medium size chopped onions',
      '2 Tomatoes or 3/4 bowl tomato puree',
      '1/2 bowl broken cashews',
      '1 or 2 green chilli as per taste',
      '1 bowl Full cream Milk',
      '1/2 bowl water',
      '2 tbsp. Ghee or cooking oil',
      '1 tsp Jeera (Cumin Seeds)',
      '1 Inch Ginger',
      '6-8 medium size garlic cloves',
      'Salt to taste',
      '2 green cardamom',
      '1 Tej-Patta (Bay leaf)',
      '2 Inch cinnamon stick',
      '1 tsp of Garam Masala Powder.',
      '1/2 tsp Kasthoori Methi (Optional)',
      '1/2 tsp Red Chilli powder (Optional)',
      '1/2 tsp Black pepper powder (Optional)',
      '1 tsp turmeric powder(Optional)'
    ],
    [
'Wash Methi(Fenugreek) stems and remove its leaves, make leaves dust free by washing couple of times.',
'Heat water in a pan and boil Methi leaves 3-4 minutes, drain the water and keep it aside in a bowl.',
'Boil green peas along with Methi leaves if you are not using frozen Green Peas. In case of frozen peas, please keep in water for 5 minutes.',
'Boil(Optional) Tomatoes, Onions, Garlic and Ginger for 4-5 minutes and let it come to room temperature.',
'Make paste of Onions, Garlic, Ginger and green chilli.',
'Peel the tomatoes if you are not using tomato puree.',
'Make paste of Cashews and tomatoes. ',
'Take a pan and heat 2 spoons of Ghee/oil. Once hot add cumin seeds, Bay leaf, cinnamon stick and cardamom and wait till the cumin seeds turns brown.',
'Add Onions-Garlic-Ginger-Chilli paste and fry for 3-4 minutes.',
'Add Cashews and Tomatoes paste and fry for 2-3 minutes on medium flame.',
'Add salt as per taste, garam masala powder and cook for 2-3 minutes.',
'You can add other optional ingredients like Chilli powder, Kashtooti Methi and Black pepper powder too.',
'Add half bowl water and once start boiling add Peas and Methi leaves and cook for 3-4 minutes on low/medium flame.',
'Now add 1 bowl of regular Full cream milk and cook for 3-4 minutes on Medium flame.',
'Once it start boiling stop the Gas-Stove.',
'Malai Methi Mutter is ready to be served with Parathas, Puri, Bread or Naan.'
    ],
    false,
    false,
   	true,
    false,
    ""
  ),
  new Meal(
    'm12',
    ['c2'],
    'Toast Hawaii',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false,
    ""
  ),
];
