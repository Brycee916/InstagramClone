import './LoginPage.css';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import instagramIphoneImage from '../../images/9364675fb26a.svg';
import instagramLogo from '../../images/logoinsta.png';
import FBLogo from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import Signin from '../SigninPage/Signin';
import Signup from '../Signup/Signup';

const LoginPage = () => {

    const [isLogin, setIsLogin] = useState(true);
    
    const handleChangeLoginSignup = () => {
        setIsLogin(!isLogin);
    }

  return (
    <div>
        <Grid container>
            <Grid item xs={3}>
                
            </Grid>
            <Grid item xs={6}>
                <div className="loginpage_main">
                    <div>
                        <img src={instagramIphoneImage} width="454px" alt="Instagram app on mobile"/>
                    </div>
                    <div>
                        <div className='loginpage_rightcomponent'>
                            <img className="loginpage_logo" src={instagramLogo} alt="Instagram"/>
                            <div className="loginpage_signin">

                                {
                                    isLogin ? <Signin /> : <Signup />
                                }
                    
                                <div className='login_or_div'>
                                    <div className='login_divider'></div>
                                    <div className='login_or'>OR</div>
                                    <div className='login_divider'></div>
                                </div>
                                <div className='login_fb_txt'>
                                    <img src={FBLogo} alt='fb logo' width="15px" style={{ "marginRight":"7px"}}/>
                                    Log in with Facebook
                                </div>
                                <div className='login_fogot_pswd_txt'>Forgot Password?</div>
                            </div>
                        </div>

                        <div className='loginpage_signup'>
                        {
                            isLogin ? 
                            <div className='loginpage_signup_txt'>
                                Don't have an account? <span onClick={handleChangeLoginSignup} style={{"fontWeight":"500", "color":"#4cb2f7"}} >Sign up</span>
                            </div>
                            :
                            <div className='loginpage_signup_txt'>
                                Have an account? <span onClick={handleChangeLoginSignup} style={{"fontWeight":"500", "color":"#4cb2f7"}}>Sign in</span>
                            </div>
                        }
                        </div>

                        <div className='loginpage_getapp_txt'>
                            <div style={{"fontSize":"15px"}}>
                                Get the app.
                            </div>
                            <div className='loginpage_apps'>
                                <img className="loginpage_app" src={appstore} alt='appstore' width="136px"/>
                                <img src={playstore} alt='playstore' width="136px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                
            </Grid>
        </Grid>
    </div>
  )
}
export default LoginPage

/*
class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isLogin: true
        }
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage_main">
                            <div>
                                <img src={instagramIphoneImage} width="454px" alt="Instagram app on mobile"/>
                            </div>
                            <div>
                                <div className='loginpage_rightcomponent'>
                                    <img className="loginpage_logo" src={instagramLogo} alt="Instagram"/>
                                    <div className="loginpage_signin">

                                        {

                                        }
                            
                                        <Signin />
                                         <Signup /> 
                                        <div className='login_or_div'>
                                            <div className='login_divider'></div>
                                            <div className='login_or'>OR</div>
                                            <div className='login_divider'></div>
                                        </div>
                                        <div className='login_fb_txt'>
                                            <img src={FBLogo} alt='fb logo' width="15px" style={{ "marginRight":"7px"}}/>
                                            Log in with Facebook
                                        </div>
                                        <div className='login_fogot_pswd_txt'>Forgot Password?</div>
                                    </div>
                                </div>

                                <div className='loginpage_signup'>
                                    <div className='loginpage_signup_txt'>
                                        Don't have an account? <span style={{"fontWeight":"500", "color":"#4cb2f7"}}>Sign up</span>
                                    </div>
                                    <div className='loginpage_signup_txt'>
                                        Have an account? <span style={{"fontWeight":"500", "color":"#4cb2f7"}}>Sign in</span>
                                    </div>
                                </div>

                                <div className='loginpage_getapp_txt'>
                                    <div style={{"fontSize":"15px"}}>
                                        Get the app.
                                    </div>
                                    <div className='loginpage_apps'>
                                        <img className="loginpage_app" src={appstore} alt='appstore' width="136px"/>
                                        <img src={playstore} alt='playstore' width="136px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;
*/