const Login = ()=>{
    return(
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
            backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Login
            <span className="text-blue-500"> ChatApp</span>
            </h1>
            <form>
                <label className="label p-2">
                    <span className="text-base label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered w-full h-10"/>


                <label className="label p-2">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered w-full h-10"/>

                
                <label className="label p-2">
                    <a href="#" className="label-text-alt link link-hover text-sm">Don't have an account</a>
                </label>

                <button className="btn btn-block btn-sm mt-2">Login</button>
            </form>
            </div>
        </div>
    )
};
export default Login;