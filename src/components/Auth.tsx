import { auth, provider} from '../firebase-config.tsx';
import {signInWithPopup} from 'firebase/auth';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Auth = (props) => {
    const {setIsAuth} = props;

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true)
        } catch (error) {
            console.log(error)
        }
        
    }



  return (
    <div className="#">
        <p> Sign In With Google To Continue </p>
        <button onClick={signInWithGoogle}> Sign In With Google</button>
    </div>
  )
}
