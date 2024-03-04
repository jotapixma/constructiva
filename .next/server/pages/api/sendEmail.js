"use strict";(()=>{var e={};e.id=719,e.ids=[719],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8170:(e,t,r)=>{r.r(t),r.d(t,{config:()=>u,default:()=>c,routeModule:()=>p});var o={};r.r(o),r.d(o,{default:()=>d});var a=r(1802),n=r(7153),i=r(6249);let s=require("nodemailer");var l=r.n(s);let d=async(e,t)=>{try{let r=l().createTransport({host:"mail.lvconstructora.cl",port:465,secure:!0,auth:{user:"infomacion@lvconstructora.cl",pass:"lvconstructora18"}}),o={from:"contacto@lvconstructora.cl",to:e.body.to,subject:e.body.subject,text:e.body.message,html:`
      <table style="width: 100%; border-collapse: collapse; display: flex; justify-content: center; align-items: center;text-align: center;">
      <tr>
        <td style="text-align: center;">
          <div style="position: relative; width: 70%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
            <a href="https://lvconstructora.cl/" target="_blank" rel="noopener">
              <img style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://eelwces.stripocdn.email/content/guids/CABINET_a476daa5b0a44fc43d6f19c7f0e5bc1f3e23713aa59ea8a238a4a787c290f509/images/blue_simple_corporate_email_header.png" alt="logo-email" >
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="text-align: center;">
          <div style="width: 70%;">
            <h3 style="margin-top: 2rem;">Has recibido un mensaje de contacto</h3>
            <p style="text-align: justify;"><strong>Nombre:</strong> ${e.body.name}</p>
            <p style="text-align: justify;"><strong>Email:</strong> ${e.body.email}</p>
            <p style="text-align: justify;"><strong>Mensaje:</strong></p>
            <p style="text-align: justify;">${e.body.message}</p>
          </div>
        </td>
      </tr>
    </table>
    
      
      `};await r.sendMail(o),t.status(200).json({message:"Correo enviado con \xe9xito"})}catch(e){console.error("Error al enviar el correo:",e),t.status(500).json({error:"Error al enviar el correo"})}},c=(0,i.l)(o,"default"),u=(0,i.l)(o,"config"),p=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/sendEmail",pathname:"/api/sendEmail",bundlePath:"",filename:""},userland:o})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=8170);module.exports=r})();