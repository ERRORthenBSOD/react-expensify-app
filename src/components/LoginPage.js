import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle , startLoginFacebook} from '../actions/auth';

export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Расходы</h1>

            <p>Расчитайте Ваши расходы</p>
            <button className="button" onClick={startLoginGoogle}>Вход с помощью аккаунта Google</button>
            <button className="button button__facebook" onClick={startLoginFacebook}>Вход с помощью аккаунта Facebook</button>
        </div>
    </div>
);

window.fbAsyncInit = function() {
    FB.init({
        appId      : '1498355503626455',
        xfbml      : true,
        version    : 'v2.12'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id){
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
