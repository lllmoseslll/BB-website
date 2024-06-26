
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import {signInStart, signInSuccess, signInFailure} from "../redux/user/userSlice"
import { OAuth } from "../components/OAuth";





const SignIn = () => {
  const [formData, setFormData] = useState({});
  const {loading, error:errorMessage} = useSelector(state => state.user);
  const dispatch =  useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      // return setErrorMessage('Please fill all fields');
      return dispatch(signInFailure("Please fill all fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        // return setErrorMessage(data.message);
        dispatch(signInFailure(data.message));
      }
   
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setLoading(false); 
      dispatch(signInFailure(error.message));
    }

  };

  return (
    <>
    <div className="min-h-screen pt-[75px]">
   
      <div className="flex mb-24 gap-5 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left div */}
        <div className="p-10 flex-1 ">
           <Link to="/" className="flex flex-col justify-center">
          <svg className="w-auto" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M510.615 191.984a86.267 86.267 0 0 1-2.229 8.984c-.289.953-.648 1.906-.97 2.859a91.1 91.1 0 0 1-2.243 5.992c-.399.969-.845 1.898-1.274 2.852a99.824 99.824 0 0 1-3.073 6.117c-.336.641-.68 1.273-1.056 1.914a94.07 94.07 0 0 1-4.707 7.414c-.07.086-.125.195-.195.305-7.701 10.852-17.592 20.289-28.78 27.555l.016.016c-15.363 9.992-33.19 16-51.361 16h-56.63c-8.922 0-17.522 7.156-19.172 16.008l-11.979 63.984v.055l-2.994 15.953c-.954 5.109-2.408 10.094-4.237 14.938-.626 1.656-1.361 3.281-2.08 4.898-.383.844-.72 1.688-1.118 2.516-.681 1.43-1.431 2.812-2.189 4.195-.5.914-1.001 1.844-1.524 2.742a85.71 85.71 0 0 1-2.51 4.055c-.562.883-1.173 1.727-1.743 2.586a87.573 87.573 0 0 1-2.784 3.82c-.625.805-1.259 1.594-1.907 2.383a108.995 108.995 0 0 1-3.159 3.734c-.664.734-1.345 1.438-2.024 2.156-1.165 1.195-2.299 2.438-3.503 3.586-.485.461-1.001.898-1.51 1.359a109.096 109.096 0 0 1-6.302 5.383c-1.36 1.078-2.744 2.188-4.159 3.195-.617.43-1.243.805-1.853 1.234-1.58 1.078-3.175 2.141-4.809 3.125-.899.539-1.799 1.023-2.714 1.539a117.22 117.22 0 0 1-4.237 2.297c-1.04.523-2.08.992-3.128 1.477-1.415.641-2.83 1.289-4.269 1.859-.985.398-1.955.789-2.963 1.148-1.545.578-3.109 1.078-4.668 1.578-.974.289-1.923.609-2.893.883-1.705.484-3.429.859-5.152 1.234-.845.18-1.689.414-2.533.562-1.884.352-3.769.586-5.653.82-.774.094-1.524.234-2.298.305-2.639.25-5.278.398-7.936.398H163.39c-22.334 0-37.092-17.922-32.963-40.008l7.49-39.984v-.016c.34-1.812.84-3.594 1.29-5.383.109-.883.055-1.727.215-2.625l5.981-32C149.548 305.898 170.999 288 193.337 288h32.35c.934 0 1.759.211 2.658.266 1.814-.125 3.628-.266 5.438-.266h24.274c8.929 0 14.832 7.156 13.182 16-1.649 8.828-10.234 16-19.179 16h-56.623c-8.94 0-17.521 7.156-19.175 15.984l-11.974 64.008c-1.654 8.844 4.253 16 13.178 16h56.627c1.11 0 2.224-.109 3.319-.32 25.587-1.688 49.465-22.281 54.204-47.68l11.938-63.836h.016l4.543-24.305c4.207-22.008 25.622-39.859 47.905-39.859 1.415 0 2.689-.234 3.878-.648 1.306.375 2.705.648 4.214.648h56.631c1.11 0 2.221-.109 3.323-.328 25.583-1.68 49.438-22.273 54.199-47.68C483.219 165.492 465.518 144 438.707 144h-24.27c-8.944 0-14.848-7.18-13.182-16.008 1.657-8.844 10.234-16 19.155-16h24.277c44.685 0 74.185 35.828 65.928 79.992zm-177.976 0c8.944 0 14.848 7.18 13.198 16-1.65 8.844-10.251 16.008-19.18 16.008-8.937 0-14.848-7.164-13.19-16.008 1.666-8.82 10.251-16 19.172-16zm39.031-79.187h.016c-5.098 25.82-22.01 48.617-44.105 63.078l.047-.25c-8.147 5.359-16.912 9.742-26.138 12.523-8.257 2.477-16.842 3.836-25.474 3.836h-56.631c-8.921 0-17.502 7.18-19.156 16l-5.997 32.008c-4.898 26.156-21.975 49.312-44.328 63.898a101.807 101.807 0 0 1-24.183 11.609c-.285.086-.555.195-.825.281a90.045 90.045 0 0 1-11.959 2.891c-.79.125-1.579.219-2.369.344-4.039.586-8.116.984-12.209.984H33.656c-22.334 0-37.092-17.922-32.963-40.008l7.486-40c1.654-8.828 10.235-16 19.175-16s14.828 7.172 13.178 16h.02l-5.997 32C32.886 280.82 38.789 288 47.729 288h56.627a16.95 16.95 0 0 0 3.323-.328c24.039-1.578 46.337-19.984 52.925-43.25a24.732 24.732 0 0 0 1.204-4.164c.02-.055.035-.125.055-.18v-.031c0-.023.016-.039.016-.055.344-1.797.809-3.555 1.259-5.328.109-.898.07-1.758.234-2.672l5.997-32.008C173.497 177.898 194.951 160 217.285 160h32.37c.934 0 1.759.211 2.658.266 1.814-.102 3.608-.266 5.422-.266h24.277c1.11 0 2.221-.109 3.315-.32 25.59-1.688 49.445-22.281 54.207-47.688 4.957-26.516-12.745-48.008-39.555-48.008h-56.627c-8.941 0-17.522 7.18-19.176 16.008l-5.958 31.875c0 .055-.035.07-.035.125-4.887 26.156-21.959 49.297-44.312 63.883l.02-.07c-.07.055-.145.109-.215.164.016.016.016.016.035.031-15.368 10.008-33.214 15.984-51.384 15.984H65.701c-1.485 0-2.94.25-4.378.625-1.04-.391-2.244-.625-3.718-.625-22.314 0-37.092-17.883-32.959-39.953l.141-.789c0-.031.02-.055.02-.086 0 .031-.02.055-.02.07l7.346-39.219v-.032l7.486-39.984C43.766 49.906 65.22 32 87.554 32h64.719c8.925 0 14.832 7.156 13.178 15.984-1.649 8.844-10.23 16-19.171 16H89.653c-8.941 0-17.522 7.18-19.175 16.008L58.503 144c-1.649 8.82 4.257 16 13.179 16h56.626c1.11 0 2.225-.109 3.319-.32 25.583-1.688 49.461-22.266 54.203-47.672V111.922h.02l7.467-39.93C197.445 49.906 218.919 32 241.253 32h64.708c44.685 0 74.199 35.805 65.928 79.992-.055.274-.164.539-.219.805zM23.8 156.484l-2.103 11.266c.809-4.359 1.529-8.219 2.103-11.266zm348.714 211.508h24.254c1.118 0 2.229-.109 3.323-.328 25.582-1.688 49.461-22.281 54.198-47.664.759-4.016.829-7.875.579-11.609l.266-.055c-.141-1.375-.156-2.828.125-4.336 1.658-8.844 10.259-16 19.18-16 8.045 0 13.573 5.812 13.409 13.398.32 5.992 0 12.18-1.204 18.602-8.257 44.164-51.182 79.992-95.85 79.992h-24.277c-8.937 0-14.832-7.156-13.174-16 1.649-8.828 10.234-16 19.171-16z" fill="#ff8800" fillRule="evenodd" className="fill-2c2d2d"></path></svg>
          <span className="text-3xl px-6 text-white font-bold">BB Architecture</span>
          <p className="text-white py-4 mt-5 px-6"> BB Architecture you can signin with your email and password or with Google</p>
           </Link>
        </div>
        {/* right div */}
        <div className="text-white mx-8 flex-1">
          <form  className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-bold py-1">Email</label>
              <input className="p-2 rounded-md bg-[#4c7bac]"
              type="email"
              placeholder="Yourname@company.com"
              id="email" onChange={handleChange}/>
            </div>
            <div className="flex flex-col mb-6 ">
              <label htmlFor="" className="font-bold py-1">Password</label>
              <input className="p-2 rounded-md bg-[#4c7bac]"
              type="password" 
              placeholder="**********"
              id="password" onChange={handleChange}/>
            </div>
            <button className="bg-[#ff8828] hover:bg-[#ff6c28]  font-semibold text-white py-2 px-4 border border-[#ff8828] hover:border-transparent rounded" disabled={loading }>
              {
                loading ?(
                  <span>Loading...</span>
                ) : 'Sign in'
              }
              </button>
              <OAuth />
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>You dont have an account?</span>
            <Link to="/sign-up" className=" text-[#ff8828] ">Sign Up</Link>
          </div>
          <div>
            
          </div>
          {
            errorMessage && (
              <alert className="mt-5 text-red-500 text-4xl font-bold p-4">
                {errorMessage}
              </alert>
            )
          }
        </div>
        
      </div>
     
    </div>

    </>
  )
}

export default SignIn;
