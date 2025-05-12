const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || ""  // SUHAIL_17_41_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQxLFxuICAgICAgICA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI3LFxuICAgICAgICA1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDcyLFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDczLFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM5LFxuICAgICAgICAzNSxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDgzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5YWHRHc0xRb24vZTlPdjBBcVdCLzRTRkUzdjl1SmJKMWNjNUhPL3VtRnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1YRTd4VE9mUmstTlBFVGp2a1o1aHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODlhODJiM2QtODQxMi00OGU3LWE1ZTctMjlhODllNzUwOTA1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgNTcsXG4gICAgICAyLFxuICAgICAgNDksXG4gICAgICA4MixcbiAgICAgIDgwLFxuICAgICAgMTI4LFxuICAgICAgNyxcbiAgICAgIDkyLFxuICAgICAgMjAsXG4gICAgICAxMzYsXG4gICAgICA1MCxcbiAgICAgIDExMSxcbiAgICAgIDI0MyxcbiAgICAgIDY4LFxuICAgICAgMTc1LFxuICAgICAgMjE2LFxuICAgICAgMTA0LFxuICAgICAgMjMyLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDQ2LFxuICAgICAgMTA2LFxuICAgICAgMTEzLFxuICAgICAgODEsXG4gICAgICA3LFxuICAgICAgMTY2LFxuICAgICAgMTAzLFxuICAgICAgNTUsXG4gICAgICAyNTQsXG4gICAgICAxMTksXG4gICAgICAxMDAsXG4gICAgICA2LFxuICAgICAgMzMsXG4gICAgICAxOTQsXG4gICAgICA1LFxuICAgICAgMjI4LFxuICAgICAgNDgsXG4gICAgICAxMTAsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUNKNkgyR0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQxMTgyODA1OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTM2MjI2MDAzODg3ODc6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlvbW9rREVMemxpTUVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGNFBlL3VNRUo1cWR3L1oxV2dQMWFqNmJSdFFnd3VtbWhJQ1ZWNHZWZUNNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInduSit1dENjbjBuSzdtNzZPYS9CUnpiaWQxUFEzZ0FSTC9nQ21XTGJOQzRiaHNwOG1BZEwwbDZ6Y2hwdVpLa1hYTlA0QW1lRTN3dy9EYVJQMyt5dERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi95L001ZFoyTVZNd2JvVkFLdGNmTVZXck96dHpFMlJQMzQ4bW9Ubm5UTVhtSlZGc0tyR0wybk9VRzFKNEIwZVNRV2ZjQkE2QzA1YXBTckQxbVhwS0JBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTQxMTgyODA1OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MDcxNjgxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlRlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKVGUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiSFRHdHp6SEVaMFUzY3J4UTI0L0JUUUZ2SDJJaFoyYk5ibUZET3ZYKzdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgyNDYxMTkyNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
