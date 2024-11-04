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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349134909039";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_34_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICA2NSxcbiAgICAgICAgNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NixcbiAgICAgICAgNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI2LFxuICAgICAgICA5LFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDczLFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMRW9rNkJEalJVaFlUTURqL3hKWHRENDFmUy9EV0F4SERSUzRhaFR4N2c0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwX0lBOU9UYlJhMlRielc5eE9DeHFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjczZTU4MTliLTEzZDctNGE5ZS05ODA2LWNmYmZlNGZjYzQ0ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICA1NCxcbiAgICAgIDE4NixcbiAgICAgIDIwNCxcbiAgICAgIDg4LFxuICAgICAgMjUwLFxuICAgICAgODIsXG4gICAgICA3NyxcbiAgICAgIDEyMCxcbiAgICAgIDIwOCxcbiAgICAgIDMxLFxuICAgICAgODksXG4gICAgICAxOTksXG4gICAgICAxMjksXG4gICAgICAyMyxcbiAgICAgIDI1MSxcbiAgICAgIDE1NSxcbiAgICAgIDE1NSxcbiAgICAgIDE0NSxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAxMjQsXG4gICAgICAwLFxuICAgICAgMTc1LFxuICAgICAgNDcsXG4gICAgICAyMjQsXG4gICAgICAyNCxcbiAgICAgIDExNixcbiAgICAgIDQyLFxuICAgICAgMTQxLFxuICAgICAgNCxcbiAgICAgIDEzMSxcbiAgICAgIDcsXG4gICAgICAxNjIsXG4gICAgICAyMjcsXG4gICAgICAxOTgsXG4gICAgICA5NSxcbiAgICAgIDgwLFxuICAgICAgMTA5LFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlBRTEFGN1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjkwMzY3NDk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFyaW5vbGFcIixcbiAgICBcImxpZFwiOiBcIjE4NjgyMjk1NzI2MDgyNToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01LdzNzc0NFTDdmcExrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMjV1YjJJYm1nUW5nMXJmTEhIdHFaK0tuQVp1RzRJUmVuYkN2dUMrWC9BRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxbkUzQTZQaHlRT1FWdjk0SVF6R1UrdVFMZnEyaXdHN216eDZmNXYyY1c1RzErcjQ0b2tYRHhXWCtjS3UrT0lvbzhBVGxYSDQ5Y1JPRHhCaGRBT2hDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLR3hNRFVEYjFXV1VkQVpFdXIwR3VlL3k5SjVsSjFweVZQWTVSQUp1R3E4Mk01RVc2Mnd6alVVbGw5aVVCUk8zWG9aVXcraWlMMGY2TDBhQnY1YlpBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY5MDM2NzQ5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3NTI0NTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMWVhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxZWC5qc29uIjogIntcImtleURhdGFcIjpcIlNnTUJVcm5wMXBtUlg1NUlIZUhaOE1EenFpWFIwdTlCREZkWXRFVHNtbHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1NzAzNjE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA3NTE1NDg1MzVcIn0iCn0="  // PUT your SESSION_ID 


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
