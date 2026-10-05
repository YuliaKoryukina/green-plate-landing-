const menuData = [
  {
    category: "Vegan",
    name: "Falafel bowl",
    img: "img/falavel.svg",
    text: "Falafel balls, quinoa, cherry tomatoes, cucumber slices, avocado, mixed greens, red cabbage, carrot ribbons, hummus, tahini dressing, lemon wedge, sesame seeds",
    sizes: [
      { name: "Regular", price: 20, kcal: 340 },
      { name: "Large", price: 27, kcal: 450 }
    ],
    extras: [
      { name: "None", price: 0, kcal: 0 },
      { name: "Avocado", price: 3, kcal: 80 },
      { name: "Protein", price: 4, kcal: 90 }
    ]
  },
  {
    category: "Seafood",
    name: "Salmon bowl",
    img: "img/salmon.svg",
    text: "Fresh salmon fillet, steamed rice, avocado slices, cucumber, edamame beans, pickled radish, seaweed (nori) strips, arugula, soy sauce, sesame seeds",
    sizes: [
      { name: "Regular", price: 30, kcal: 420 },
      { name: "Large", price: 38, kcal: 540 }
    ],
    extras: [
      { name: "None", price: 0, kcal: 0 },
      { name: "Avocado", price: 3, kcal: 80 },
      { name: "Protein", price: 4, kcal: 90 }
    ]
  },
  {
    category: "Seafood",
    name: "Salmon bowl",
    img: "img/4.jpeg",
    text: "Salmon, quinoa, asparagus, falafel, avocado, cucumber, cherry tomatoes, mixed greens, red cabbage, carrot ribbons, hummus, tahini dressing, sesame seeds, lemon wedge.",
    sizes: [
      { name: "Regular", price: 40, kcal: 400 },
      { name: "Large", price: 49, kcal: 520 }
    ],
    extras: [
      { name: "None", price: 0, kcal: 0 },
      { name: "Avocado", price: 3, kcal: 80 },
      { name: "Protein", price: 4, kcal: 90 }
    ]
  },
  {
    category: "Vegan",
    name: "Tofu bowl",
    img: "img/3.jpeg",
    text: "Glazed tofu cubes, roasted sweet potatoes and chickpeas, cabbage and cranberry slaw, asparagus spears, sliced radishes, red bell pepper strips, artichoke hearts",
    sizes: [
      { name: "Regular", price: 19, kcal: 300 },
      { name: "Large", price: 26, kcal: 400 }
    ],
    extras: [
      { name: "None", price: 0, kcal: 0 },
      { name: "Avocado", price: 3, kcal: 80 },
      { name: "Protein", price: 4, kcal: 90 }
    ]
  },
  {
    category: "Meat",
    name: "Chicken bowl",
    img: "img/1.jpeg",
    text: "Glazed chicken, quinoa, cucumber slices, shredded cabbage, carrots, seaweed salad, and green onions over white rice.",
    sizes: [
      { name: "Regular", price: 28, kcal: 370 },
      { name: "Large", price: 36, kcal: 490 }
    ],
    extras: [
      { name: "None", price: 0, kcal: 0 },
      { name: "Avocado", price: 3, kcal: 80 },
      { name: "Protein", price: 4, kcal: 90 }
    ]
  },
  {
    category: "Vegan",
    name: "Vegan bowl",
    img: "img/2.jpeg",
    text: "Vegan bowl with roasted beets, creamy avocado, sugar snap peas, quinoa, and chickpeas.",
    sizes: [
      { name: "Regular", price: 20, kcal: 250 },
      { name: "Large", price: 27, kcal: 340 }
    ],
    extras: [
      { name: "None", price: 0, kcal: 0 },
      { name: "Avocado", price: 3, kcal: 80 },
      { name: "Protein", price: 4, kcal: 90 }
    ]
  },
  {
    category: "Seafood",
    name: "Poke bowl",
    img: "img/poke.jpeg",
    text: "Marinated tuna, sushi rice, mango, cucumber, nori, spring onion and spicy soy dressing.",
    sizes: [
      { name: "Regular", price: 32, kcal: 390 },
      { name: "Large", price: 41, kcal: 510 }
    ],
    extras: [
      { name: "None", price: 0, kcal: 0 },
      { name: "Avocado", price: 3, kcal: 80 },
      { name: "Protein", price: 4, kcal: 90 }
    ]
  },
  {
    category: "Seafood",
    name: "Shrimp bowl",
    img: "img/shrimp.jpeg",
    text: "Grilled shrimp, brown rice, avocado, corn, cherry tomatoes, lime and cilantro yogurt.",
    sizes: [
      { name: "Regular", price: 34, kcal: 410 },
      { name: "Large", price: 43, kcal: 530 }
    ],
    extras: [
      { name: "None", price: 0, kcal: 0 },
      { name: "Avocado", price: 3, kcal: 80 },
      { name: "Protein", price: 4, kcal: 90 }
    ]
  },
  {
    category: "Meat",
    name: "Beef bowl",
    img: "img/beef.jpeg",
    text: "Sliced beef, jasmine rice, kimchi, cucumber, spinach, sesame oil and pickled ginger.",
    sizes: [
      { name: "Regular", price: 29, kcal: 450 },
      { name: "Large", price: 37, kcal: 580 }
    ],
    extras: [
      { name: "None", price: 0, kcal: 0 },
      { name: "Avocado", price: 3, kcal: 80 },
      { name: "Protein", price: 4, kcal: 90 }
    ]
  },
  {
    category: "Vegan",
    name: "Avocado bowl",
    img: "img/avocado.jpeg",
    text: "Creamy avocado, quinoa, kale, pumpkin seeds, cherry tomatoes and olive oil.",
    sizes: [
      { name: "Regular", price: 18, kcal: 280 },
      { name: "Large", price: 24, kcal: 370 }
    ],
    extras: [
      { name: "None", price: 0, kcal: 0 },
      { name: "Avocado", price: 3, kcal: 80 },
      { name: "Protein", price: 4, kcal: 90 }
    ]
  }
];
