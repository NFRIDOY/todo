import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import useAxios from './../../hooks/useAxios';


export default function Login() {

    const { user, setUser, signInEmailPass, googleSignIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axios = useAxios()

    useEffect(() => {
        // const routeName = location.pathname === '/Login' ? 'Login' : "";

        // document.title = `${routeName}`;
        // console.log(document.title)
    }, [])

    // get Access Token
    // const getToken = () => {
    //     // axios.post('http://localhost:5000/api/v1/jwt', user, {withCredentials: true} )
    //     axios.post('/jwt', user )
    //         .then(res => {
    //             console.log(res.data)
    //             if (res.data?.message) {
    //                 console.log("Success ::> True")
    //                 // toast.success("Success")
    //                 toast.success("Got The Token")
    //             }
    //         })
    // }


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email)
        console.log(password)

        signInEmailPass(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                toast.success("User Login")
                console.log(user)
                // console.log(location.pathname)
                console.log(location?.state)
                // getToken()
                navigate(location?.state ? location?.state : '/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error("User Login Failed")
                console.log(" Error on CreateUser ", errorCode)
                console.log(" Error on CreateUser ", errorMessage)
            });
    }

    const hangleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                setUser(user)
                console.log(user)
                // getToken()
                toast.success("User Login Using Google")
                // console.log(location.pathname)
                console.log(location?.state)
                navigate(location?.state ? location?.state : '/')
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                toast.error("User Login Failed")
                console.log(" Error on CreateUser ", errorCode)
                console.log(" Error on CreateUser ", errorMessage)
            });
    }
    return (
        <div>
            <section className="bg-white w-full text-black">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    {/* <a href="" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                            Flowbite
                    </a> */}
                    <div className="w-full  rounded-lg shadow-2xl  dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        {/* <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800" required="" />
                                        </div> */}
                                        {/* <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div> */}
                                    </div>
                                    {/* <a href="#" className="text-sm font-medium text-primary hover:underline dark:text-primary">Forgot password?</a> */}
                                </div>
                                <button type="submit" className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary-800">Sign in</button>
                                <button type="button" className="w-full  border-green-500 border-2 text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary flex justify-between items-center hover:text-white" onClick={hangleGoogleSignIn}>
                                    <h1 className="">
                                        Google
                                    </h1>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                                    </div>
                                </button>
                                <button type="button" className="w-full  border-green-500 border-2 text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary flex justify-between items-center hover:text-white" onClick={hangleGoogleSignIn}>
                                    <h1 className="">
                                        GitHub
                                    </h1>
                                    <div>
                                        <FaGithub />
                                    </div>
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to={"/Registration"} href="#" className="font-medium text-primary hover:underline dark:text-primary">Registration</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
