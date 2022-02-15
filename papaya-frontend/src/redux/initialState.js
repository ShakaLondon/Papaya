const initialState = {
  appState: {
    sideMenu: false,
    error: false,
    loading: false,
    colorChange: false,
  },
  user: {
    _id: "",
    name: "",
    surname: "",
    username: "",
    email: "",
    avatar: "",
    jobTitle: "",
    website: "",
    role: "",
    phoneNumber: "",
    businessID: {},
    reviews: [],
    isLoggedIn: false,
    userFound: false,
  },
};

export default initialState;
