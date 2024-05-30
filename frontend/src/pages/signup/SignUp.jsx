import GenderCheckbox from "./GenderCheckbox.jsx"

const SignUp = () => {
    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
        bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">SignUp
                <span className="text-blue-500"> ChatApp</span>
            </h1>
            <form>
                <label className="label p-2">
                    <span className="text-base label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Sereen Alhajjar" className="input input-bordered w-full h-10" />

                <label className="label p-2">
                    <span className="text-base label-text"> Email </span>
                </label>
                <input type="text" placeholder="sereen.alhajjar@gmail.com" className="input input-bordered w-full h-10" />

                <label className="label p-2">
                    <span className="text-base label-text"> Password </span>
                </label>
                <input type="text" placeholder="" className="input input-bordered w-full h-10" />


                <label className="label p-2">
                    <span className="text-base label-text">Confirm Password </span>
                </label>
                <input type="text" placeholder="" className="input input-bordered w-full h-10" />

                <GenderCheckbox />

                <label className="label p-2">
                    <a href="#" className="label-text-alt link link-hover text-sm">Already have an account?</a>
                </label>
                <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
            </form>

        </div>

    </div>
};
export default SignUp;