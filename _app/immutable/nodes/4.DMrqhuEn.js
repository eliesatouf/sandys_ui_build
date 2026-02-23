import"../chunks/DsnmJJEf.js";import"../chunks/D6UKSTSE.js";import{o as c}from"../chunks/BZP4blDv.js";import{p,a as g,b as h,f}from"../chunks/BWwUmJhg.js";import{i as m}from"../chunks/DQ1lvrWU.js";import{g as n}from"../chunks/BHaGe27U.js";var u=f('<div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif;" class="svelte-58fznh"><div style="text-align: center;" class="svelte-58fznh"><div style="border: 3px solid #f3f3f3; border-top: 3px solid #3498db; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 20px;" class="svelte-58fznh"></div> <p class="svelte-58fznh">Processing authentication...</p></div></div>');function R(s,a){p(a,!1),c(()=>{l()});async function l(){const e=new URLSearchParams(window.location.search),r=e.get("success"),t=e.get("token");if(console.log("Processing auth from URL params:",{success:r,token:t?"present":"missing"}),r==="true"&&t)try{const o={name:e.get("name")||"",email:e.get("email")||"",id:e.get("id")||"",isAuthenticated:!0,roles:["ROLE_USER"],avatar:e.get("avatar")||null};window.opener&&!window.opener.closed?(console.log("In popup window, sending message to opener"),window.opener.postMessage({type:"GOOGLE_AUTH_SUCCESS",token:t,user:o},window.location.origin),console.log("Message sent"),document.body.innerHTML=`
                        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; text-align: center; padding: 20px;">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2">
                                <path d="M20 6L9 17l-5-5" stroke="green" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h2 style="color: green; margin: 10px 0;">Login Successful!</h2>
                            <p>You can close this window now.</p>
                        </div>
                    `):(console.log("In main window, storing auth data"),localStorage.setItem("token",t),localStorage.setItem("user",JSON.stringify(o)),n("/",{replaceState:!0}))}catch(o){console.error("Auth error:",o),i(o.message)}else e.get("error")?i(e.get("error")):window.opener&&!window.opener.closed?(window.opener.postMessage({type:"GOOGLE_AUTH_ERROR",error:"No authentication data received"},window.location.origin),document.body.innerHTML=`
                    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; text-align: center; padding: 20px;">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2">
                            <circle cx="12" cy="12" r="10" stroke="red"/>
                            <line x1="12" y1="8" x2="12" y2="12" stroke="red"/>
                            <line x1="12" y1="16" x2="12.01" y2="16" stroke="red"/>
                        </svg>
                        <h2 style="color: red; margin: 10px 0;">Authentication Failed</h2>
                        <p>No authentication data received.</p>
                    </div>
                `):n("/login")}function i(e){console.error("Auth error:",e),window.opener&&!window.opener.closed?(window.opener.postMessage({type:"GOOGLE_AUTH_ERROR",error:e},window.location.origin),document.body.innerHTML=`
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; text-align: center; padding: 20px;">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2">
                        <circle cx="12" cy="12" r="10" stroke="red"/>
                        <line x1="12" y1="8" x2="12" y2="12" stroke="red"/>
                        <line x1="12" y1="16" x2="12.01" y2="16" stroke="red"/>
                    </svg>
                    <h2 style="color: red; margin: 10px 0;">Authentication Failed</h2>
                    <p>${e}</p>
                </div>
            `):n(`/login?error=${encodeURIComponent(e)}`)}m();var d=u();g(s,d),h()}export{R as component};
