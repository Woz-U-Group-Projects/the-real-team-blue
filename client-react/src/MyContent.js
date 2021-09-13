import React, { createContext,Component } from "react";
import axios from 'axios'
export const MyContext = createContext();

// Define the base URL
const Axios = axios.create({
    baseURL: 'http://localhost:3001/employee',
});

class MyContextProvider extends Component{
    constructor(){
        super();
        this.isLoggedIn();
    }

    // Root State
    state = {
        showLogin:true,
        isAuth:false,
        theUser:null,
    }
    
    // Toggle between Login & Signup page
    toggleNav = () => {
        const showLogin = !this.state.showLogin;
        this.setState({
            ...this.state,
            showLogin
        })
    }

    // On Click the Log out button
    logoutUser = () => {
       axios.post('logout')
        //localStorage.removeItem('loginToken');
        //this.setState({
           // ...this.state,
           // isAuth:false
        //})
    }

    signupUser = async (user) => {

        // Sending the user registration request
        const signup = await Axios.post('signup',{
            username: user.Username,
            firstName: user.FirstName,
            lastName: user.LastName,
            email: user.Email,
            password: user.Password,
            admin: user.Admin
        });

        return signup.data;
    }


    loginUser = async (user) => {

        // Sending the user Login request
        const login = await Axios.post('login',{
            username: user.Username,
            password: user.Password,

        });
         return login.data;
    }

    // Checking user logged in or not
    isLoggedIn = async () => {
        const token = localStorage.getItem('jwt');

        // If inside the local-storage has the JWT token
        if(token){

            //Adding JWT token to axios default header
            Axios.defaults.headers.common['Authorization'] = 'bearer '+ token;

            // Fetching the user information
            const {data} = await Axios.get('/');

            // If user information is successfully received
            if(data.success && data.user){
                this.setState({
                    ...this.state,
                    isAuth:true,
                    theUser:data.user
                });
            }

        }
    }

    render(){
        const contextValue = {
            rootState:this.state,
            toggleNav:this.toggleNav,
            isLoggedIn:this.isLoggedIn,
            signupUser:this.signupUser,
            loginUser:this.loginUser,
            logoutUser:this.logoutUser
        }
        return(
            <MyContext.Provider value={contextValue}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

export default MyContextProvider;
