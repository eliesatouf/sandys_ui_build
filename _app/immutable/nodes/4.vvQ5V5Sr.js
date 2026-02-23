import"../chunks/DsnmJJEf.js";import"../chunks/D6UKSTSE.js";import{o as p}from"../chunks/BZP4blDv.js";import{p as w,a as g,b as u,f as h}from"../chunks/BWwUmJhg.js";import{i as f}from"../chunks/DQ1lvrWU.js";import{g as i}from"../chunks/DBYPiCv6.js";var m=h('<div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif;" class="svelte-58fznh"><div style="text-align: center;" class="svelte-58fznh"><div style="border: 3px solid #f3f3f3; border-top: 3px solid #3498db; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 20px;" class="svelte-58fznh"></div> <p class="svelte-58fznh">Processing authentication...</p></div></div>');function L(s,l){w(l,!1),p(()=>{a()});async function a(){const e=new URLSearchParams(window.location.search),t=e.get("success"),n=e.get("token");if(console.log("Processing auth from URL params:",{success:t,token:n?"present":"missing"}),t==="true"&&n)try{const o={name:e.get("name")||"",email:e.get("email")||"",id:e.get("id")||"",isAuthenticated:!0,roles:["ROLE_USER"],avatar:e.get("avatar")||null};if(window.opener&&!window.opener.closed){console.log("In popup window, sending message to opener"),window.opener.postMessage({type:"GOOGLE_AUTH_SUCCESS",token:n,user:o},window.location.origin),console.log("Message sent, closing popup");try{window.close(),setTimeout(()=>{window.location.href="about:blank",setTimeout(()=>window.close(),100)},100),setTimeout(()=>{window.opener&&!window.opener.closed&&window.opener.focus()},200)}catch(c){console.log("Close error:",c)}document.body.innerHTML=`
                        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; text-align: center; padding: 20px;">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2">
                                <path d="M20 6L9 17l-5-5" stroke="green" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h2 style="color: green; margin: 10px 0;">Login Successful!</h2>
                            <p>You can close this window now and return to the app.</p>
                            <button onclick="window.close()" style="margin-top: 20px; padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
                                Close Window
                            </button>
                        </div>
                    `}else console.log("In main window, storing auth data"),localStorage.setItem("token",n),localStorage.setItem("user",JSON.stringify(o)),i("/",{replaceState:!0})}catch(o){console.error("Auth error:",o),r(o.message)}else e.get("error")?r(e.get("error")):window.opener&&!window.opener.closed?(window.opener.postMessage({type:"GOOGLE_AUTH_ERROR",error:"No authentication data received"},window.location.origin),document.body.innerHTML=`
                    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; text-align: center; padding: 20px;">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2">
                            <circle cx="12" cy="12" r="10" stroke="red"/>
                            <line x1="12" y1="8" x2="12" y2="12" stroke="red"/>
                            <line x1="12" y1="16" x2="12.01" y2="16" stroke="red"/>
                        </svg>
                        <h2 style="color: red; margin: 10px 0;">Authentication Failed</h2>
                        <p>No authentication data received.</p>
                        <button onclick="window.close()" style="margin-top: 20px; padding: 10px 20px; background: #f44336; color: white; border: none; border-radius: 5px; cursor: pointer;">
                            Close Window
                        </button>
                    </div>
                `,setTimeout(()=>{try{window.close()}catch{}},2e3)):i("/login")}function r(e){console.error("Auth error:",e),window.opener&&!window.opener.closed?(window.opener.postMessage({type:"GOOGLE_AUTH_ERROR",error:e},window.location.origin),document.body.innerHTML=`
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; text-align: center; padding: 20px;">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2">
                        <circle cx="12" cy="12" r="10" stroke="red"/>
                        <line x1="12" y1="8" x2="12" y2="12" stroke="red"/>
                        <line x1="12" y1="16" x2="12.01" y2="16" stroke="red"/>
                    </svg>
                    <h2 style="color: red; margin: 10px 0;">Authentication Failed</h2>
                    <p>${e}</p>
                    <button onclick="window.close()" style="margin-top: 20px; padding: 10px 20px; background: #f44336; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Close Window
                    </button>
                </div>
            `,setTimeout(()=>{try{window.close(),window.location.href="about:blank",setTimeout(()=>window.close(),100)}catch{}},2e3)):i(`/login?error=${encodeURIComponent(e)}`)}f();var d=m();g(s,d),u()}export{L as component};
