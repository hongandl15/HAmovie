import { useEffect } from "react";
import React from 'react'

const Comment = (props) => {
    const initFacebookSDK = () => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
        let locale = "vi_VN";
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "",// You App ID
                cookie: true, // enable cookies to allow the server to access
                // the session
                xfbml: true, // parse social plugins on this page
                version: "v2.5" // use version 2.1
            });
        };
        // Load the SDK asynchronously
        (function (d, s, id) {
            console.log(s);
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = `//connect.facebook.net/${locale}/sdk.js`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    };
    useEffect(() => {
        initFacebookSDK();
    }, []);
    return (
        <>
            <div className="comments">
                <h1>COMMENT</h1>
                <div class="fb-comments-embed" data-href={props.link} data-colorscheme="dark" data-width="100%" data-numposts="2"></div>
            </div> 
        </>
    );
}

export default Comment