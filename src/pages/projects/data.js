const myImages = {
  1: require("../../../src/myImages/BudgetAppImg.png"),
  2: require("../../../src/myImages/movieapp.png"),
  3: require("../../../src/myImages/spacetravelapp.png"),
  4: require("../../../src/myImages/todoapp1.png"),
  5: require("../../../src/myImages/awsomebooks.png"),
};

const data = [
  {
    id: 1,
    name: "My Budget App",
    image: myImages[1],
    stack: [
      { name: "Ruby", value: "Ruby" },
      { name: "Ruby on Rails", value: "Ruby on Rails" },
      { name: "CSS", value: "CSS" },
    ],
    description:
      "The project is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what",
    sourceLink: "https://github.com/Alabi12/Budget-App.git",
    demoLink: "https://budget-app-m3yc.onrender.com",
  },
  {
    id: 2,
    name: "My Movie App",
    image: myImages[2],
    stack: [
      { name: "REACT", value: "REACT" },
      { name: "CSS", value: "CSS" },
      { name: "JavaScript", value: "JavaScript" },
    ],
    description:
      "Movie App is about building a mobile web application to check a list of metrics (numeric values) that you will create making use of React and Redux. The application will allow users to search for appropriate choice movie. Application is working with the real live data from API",
    sourceLink: "https://github.com/Alabi12/movie-app",
    demoLink: "https://alabi12.github.io/movie-app/",
  },
  {
    id: 3,
    name: "Space Traveler's Hub",
    image: myImages[3],
    stack: [
      { name: "REACT", value: "REACT" },
      { name: "CSS", value: "CSS" },
      { name: "JavaScript", value: "JavaScript" },
      { name: "Webpack", value: "Webpack" },
    ],
    description:
      "Space Traveler's Hub is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Application is working with the real live data from the SpaceX API.",
    sourceLink: "https://github.com/Alabi12/space-travel",
    demoLink: "https://budget-app-m3yc.onrender.com",
  },
  {
    id: 4,
    name: "My Todo App",
    image: myImages[4],
    stack: [
      { name: "HTML", value: "HTML" },
      { name: "CSS", value: "CSS" },
      { name: "JavaScript", value: "JavaScript" },
      { name: "Webpack", value: "Webpack" },
    ],

    description:
      "This is a simple project that allow the user to develop the Todo List. The data is persisted in the local storage.",
    sourceLink: "https://github.com/Alabi12/To-Do-List",
    demoLink: "https://alabi12.github.io/To-Do-List/dist/",
  },
  {
    id: 5,
    name: "Awesome-Books",
    image: myImages[5],
    stack: [
      { name: "HTML", value: "HTML" },
      { name: "CSS", value: "CSS" },
      { name: "JavaScript", value: "JavaScript" },
    ],
    description:
      "This is a simple project that allow the user to added and/or remove books from a list. The data is persisted in the local storage.",
    sourceLink: "https://github.com/Alabi12/Awesome-Books-ES6",
    demoLink: "https://alabi12.github.io/Awesome-Books-ES6/",
  },
];

export default data;
