import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase";
const Login = () => {
    
    const auth = getAuth(app)
    cosnt provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        console.log('google mama is comming');
    };
    return (
        <div>
            <button>Google  login</button>
        </div>
    );
};

export default Login;