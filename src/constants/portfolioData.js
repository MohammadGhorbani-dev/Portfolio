import {
  TodoList,
  contactsManager,
  messanger,
  portfolio,
} from "../assets/portfolio-images";

export const data = [
  {
    id: 0,
    title: "Farawin Messenger",
    image: messanger,
    githubLink: "https://github.com/MohammadGhorbani-dev/Farawin-messenger",
    projectLink: "https://mohammadghorbani-dev.github.io/Farawin-messenger/",
    info: "I have created a messaging app using React, and it utilizes the RESTful API framework and the Tailwind CSS library in its design. The messaging app allows users to send and receive messages, as well as perform actions such as message deletion and contact editing. The integration of the RESTful API framework enables communication with a backend server, facilitating the storage and retrieval of messages and contacts. Tailwind CSS provides efficient and easy-to-use styling options for creating a visually appealing user interface. The messaging app offers features such as message deletion, message editing, contact editing, and more.",
  },
  {
    id: 1,
    title: "TodoList",
    image: TodoList,
    githubLink: "https://github.com/MohammadGhorbani-dev/TodoList",
    projectLink: "https://mohammadghorbani-dev.github.io/TodoList/",
    info: "A React-based todo list application designed using the Context API and Tailwind CSS. This app allows users to keep track of their daily tasks and notes. The use of the Context API simplifies state management, enabling seamless sharing of data between components. Tailwind CSS provides a flexible and efficient way to style and design the user interface of the todo list, ensuring a visually appealing and responsive experience. With this app, users can easily add, update, and delete tasks, helping them stay organized and productive.",
  },
  {
    id: 2,
    title: "Contacts Manager",
    image: contactsManager,
    githubLink: "https://github.com/MohammadGhorbani-dev/Contacts-manager",
    projectLink: "https://contact-manager.iran.liara.run/",
    info: "I have developed a contacts manager application using React and incorporated various frameworks and libraries such as Axios, Material-UI, Tailwind CSS, Context API, and React Router DOM. The contacts manager allows users to store and manage their contacts effectively. Axios is used for making HTTP requests to interact with a backend server. Material-UI and Tailwind CSS contribute to the design and styling of the application, providing a visually pleasing and responsive user interface. The Context API ensures seamless data management and sharing between different components. React Router DOM enables navigation and routing within the application.",
  },
  {
    id: 3,
    title: "My Portfolio",
    image: portfolio,
    githubLink: "https://github.com/MohammadGhorbani-dev/Portfolio",
    projectLink: "#",
    info: "I have designed a personal portfolio using React and incorporated the Material-UI framework and Context API library in the development process. The portfolio serves as a showcase of my professional background, skills, and projects. By utilizing React's component-based architecture, I was able to create reusable and modular UI components. The Material-UI framework provided a wide range of pre-designed, customizable UI components, resulting in a visually appealing and consistent user interface. The Context API facilitated efficient data sharing between components and simplified state management.",
  },
];
