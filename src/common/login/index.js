import React,{PureComponent} from 'react'
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as registerActionCreators } from '../register/store';
import { BiX } from 'react-icons/bi';
import Logo from '../../statics/googleLogo.png' 
import FadeLoader from "react-spinners/FadeLoader";
import { motion } from 'framer-motion';
import { animateTwo, transitionTwo } from '../../common/animation'
import {
    LoginWrapper,
    LoginBox,
    LoginTitle,
    LoginText,
    AccInput,
    PwdInput,
    SubmitBtn,
    BoxUnderText,
    GoogleLoginBtn,
    GoogleLogo,
    UnderLink,
    LoadingBox
} from './style';
class Login extends PureComponent {
    render(){
        const { loginBoxOpen, failState, error, loading, handleBoxClose, handleLogin, handleGoogleLogin, handleChangeMode } = this.props
            return (
                <>
                {
                    loginBoxOpen ?

                    <LoginWrapper>
                        <motion.div initial='out' animate='in' exit='out' variants={animateTwo} transition={transitionTwo}>
                            <LoginBox>
                                <BiX className='leaveBtn' onClick={ handleBoxClose }/>
                                <LoginTitle>Sign in</LoginTitle>
                                <LoginText failState={failState}>{error}</LoginText>
                                <AccInput placeholder='email' ref={(input)=>{this.account=input}}/>
                                <PwdInput type='password' placeholder='password' ref={(input)=>{this.password=input}}/>
                                <SubmitBtn onClick={()=>{handleLogin(this.account.value,this.password.value)}}>Submit</SubmitBtn>
                                <GoogleLoginBtn onClick={handleGoogleLogin}>
                                    <GoogleLogo src={Logo}/>
                                    Log in with Google
                                </GoogleLoginBtn>
                                <BoxUnderText>
                                    <p>New to The Hours?</p>
                                    <UnderLink onClick={handleChangeMode}>create an account</UnderLink>
                                </BoxUnderText>
                                
                                {
                                    loading ?
                                    <LoadingBox>
                                        <FadeLoader color={"#2A53C1"} size={40}/>
                                    </LoadingBox>
                                    :
                                    null
                                }
                            </LoginBox>
                        </motion.div>
                    </LoginWrapper>

                :
                    null
                }

                </>
            )
        }
}
const mapStateToProps = (state) =>({
    loginBoxOpen:state.getIn(['login', 'loginBoxOpen']),
    failState:state.getIn(['login', 'failState']),
    error:state.getIn(['login', 'error']),
    loading:state.getIn(['login', 'loading'])
});

const mapToDispatchProps = (dispatch) =>({
    handleBoxClose(){
        dispatch(actionCreators.loginBoxCloseAction())
    },
    handleLogin(acc,pwd){
        dispatch(actionCreators.loginAction(acc,pwd))
    },
    handleGoogleLogin(){
        dispatch(actionCreators.googleLoginAction())
    },
    handleChangeMode(){
        dispatch(actionCreators.loginBoxCloseAction())
        dispatch(registerActionCreators.registerBoxOpenAction())
    }
})
export default connect(mapStateToProps,mapToDispatchProps)(Login)
