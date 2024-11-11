const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348189862145";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348189862145";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_51_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMyxcbiAgICAgICAgNixcbiAgICAgICAgNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODksXG4gICAgICAgIDM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MixcbiAgICAgICAgMjEwLFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAwLFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwenorQXpqeGtrb015SVhUdEVlL0dTTWI5YUJlUEN1UjRUZWY5aVc0emdRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5RXpWV054cVNPR0lDenB4WTBObDN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJkNDlkNGNlLTMyMWEtNDMzZi1iNGY2LWQwNTMyYzgwZmEwMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDcwLFxuICAgICAgMTY0LFxuICAgICAgMTc5LFxuICAgICAgNjEsXG4gICAgICAxNzcsXG4gICAgICA1MixcbiAgICAgIDM1LFxuICAgICAgMTUsXG4gICAgICAzLFxuICAgICAgMjMwLFxuICAgICAgMSxcbiAgICAgIDQ3LFxuICAgICAgMTkyLFxuICAgICAgMTIxLFxuICAgICAgMjEwLFxuICAgICAgMjQ1LFxuICAgICAgMTA1LFxuICAgICAgMTE3LFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDEzLFxuICAgICAgMTg1LFxuICAgICAgNDgsXG4gICAgICA4MCxcbiAgICAgIDIxNyxcbiAgICAgIDczLFxuICAgICAgMjMwLFxuICAgICAgMTAwLFxuICAgICAgMjIsXG4gICAgICAxNzIsXG4gICAgICAxNDEsXG4gICAgICAxNDYsXG4gICAgICAzNyxcbiAgICAgIDExOCxcbiAgICAgIDIyOCxcbiAgICAgIDE4MixcbiAgICAgIDEyOCxcbiAgICAgIDYyLFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUtERlZNNkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDY0OTgxMTM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAwNDE2Mjc3MDc4MDkwOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEhjbHJ3Q0VOT3p5TGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYcTBQVzhxOGhMcG95WExhTmVGcTFWeXlVLzZrWHBZYy9ONW9EcXNOVnpFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJvOUpxQWx2K2hIcDVpMlNlWW0vMm1wN3pYVk50ZnZxN01YejMvbXc0N2lKcmg3ODJZSDV3TnVNMlZZS1dBdFhiL2l4d3RQUVVVN1lFME56bnBqTkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhiVlUwVitXOGhUR3d5YzRsYjNQQmNpSWdkVHJNbTQ4aXU1bllUNVJ2ZVB0ekl1aDhkeVRSUVV5Tis1ekVlb0hCaFU2cTRQdi94T2VLRk13SiszRkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDY0OTgxMTM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTMzNjY2MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "V_Cee",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
