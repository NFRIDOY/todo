import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";


export default function Registration() {

  useEffect(() => {
    // const routeName = location.pathname === '/Registration' ? 'Registration' : "";

    // document.title = `${routeName}`;
    // console.log(document.title)
  }, [])

  const { user, setUser, createUserEmailPass, updateUser, logOut } = useAuth()
  const navigate = useNavigate()

  const handleReg = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    // console.log(email)
    // console.log(password)
    // console.log(name)
    // console.log(photoURL)

    createUserEmailPass(email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // console.log("User Creds", user)
        console.log(user)
        setUser(user)

        toast.success("User Created")
        // console.log(user)
        updateUser(name, photoURL)
        // logOut()
        //   .then(() => {
        //     // Sign-out successful.
        //     toast.success("Sign-out successful.")
        //     navigate("/Login")
        //   }).catch((error) => {
        //     // An error happened.
        //     toast.error("Sign-out Failes. Error")
        //     console.log(error)
        //   });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(" Error on CreateUser ", errorCode)
        console.log(" Error on CreateUser ", errorMessage)
        toast.error("User Creation Error")
      });


  }

  return (
    <div>

      <section className="bg-white w-full ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                            Flowbite */}
          </a>
          <div className="w-full  rounded-lg shadow-2xl  border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Registration for your account
              </h1>
              <form className="space-y-4 md:space-y-8 h-80" onSubmit={handleReg}>

                <div className="flex space-x-4">
                  <div className="space-y-8">
                    <div >
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5   " placeholder="name@mail.com" required />
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " required />
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                      <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="name" required />
                    </div>

                    <div>
                      <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900 ">Photo URL</label>
                      <input type="text" name="photoURL" id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="URL" required />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    {/* <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800" required />
                                        </div> */}
                    {/* <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div> */}
                  </div>
                  {/* <a href="#" className="text-sm font-medium text-primary hover:underline dark:text-primary">Forgot password?</a> */}
                </div>
                <button type="submit" className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Registration</button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Have an account? <Link to={"/Login"} href="#" className="font-medium text-primary hover:underline dark:text-primary">Log In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
