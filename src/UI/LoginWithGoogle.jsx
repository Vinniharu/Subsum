import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const LoginWithGoogle = () => {
  return (
    <Link className='w-full'>
      <button className='border w-full rounded-xl flex items-center justify-center gap-4 bg-white p-2'>
        <FcGoogle />
        Login with Google
      </button>
    </Link>
  );
}

export default LoginWithGoogle