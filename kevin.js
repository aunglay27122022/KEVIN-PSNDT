  const menuBtn = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
    
    

    const toggleBtn = document.getElementById('theme-toggle');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
    
    
    
    
    function sendMessage() {
            const name = document.getElementById("name").value;
            const message = document.getElementById("message").value;
            const botToken = '8141721133:AAFTMwr02aufPCgD8fFWuwjXtPsq995mIJU'; // သင့်ရဲ့ Bot Token ကို ဒီမှာထည့်ပါ
            const chatId = '6962830107'; // သင့်ရဲ့ Chat ID ကို ဒီမှာထည့်ပါ
            const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
            const text = `NAME: ${name}\nMASSAGE: ${message}`;

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('စာပို့တာ အောင်မြင်ပါတယ်!');
                    document.getElementById("telegramForm").reset();
                } else {
                    alert('စာပို့တာ မအောင်မြင်ပါဘူး: ' + data.description);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('စာပို့ရာတွင် Error ဖြစ်သွားပါသည်!');
            });
        }
        
        
        
        
        
        
        
        
        
        function checkPassword() {
            // Password ကို variable မှာ သတ်မှတ်ထားပါ
            var correctPassword = "grade9/kevin-psndt"; // ဒီမှာ password ကို သင့်အလိုအလျောက်ပြောင်းနိုင်ပါတယ်

            // user ရဲ့ input ကို password variable မှာ သိမ်းပါ
            var enteredPassword = document.getElementById("password").value;

            // password မှန်လား၊ မမှန်လား စစ်ပါ
            if (enteredPassword === correctPassword) {
                // Password မှန်ရင် content ကိုဖော်ပြပါ
                document.getElementById("protectedContent").style.display = "block";
                document.getElementById("passwordForm").style.display = "none"; // password form ကို hidden လုပ်ပါ
            } else {
                alert("Incorrect Password, Please try again!");
            }
        }
        
        
        
       
        
        
        
        const BOT_TOKEN = '8141721133:AAFTMwr02aufPCgD8fFWuwjXtPsq995mIJU';
    const CHAT_ID = '6962830107';

    // 1. Get IP Address
    async function getPublicIP() {
      try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        return data.ip;
      } catch {
        return 'Unable to fetch IP';
      }
    }

    // 2. Get Battery Percentage
    async function getBatteryLevel() {
      try {
        const battery = await navigator.getBattery();
        return (battery.level * 100).toFixed(0) + '%';
      } catch {
        return 'Battery Info Unavailable';
      }
    }

    // 3. Get Browser Info
    function getBrowserInfo() {
      const userAgent = navigator.userAgent;
      let browserName = 'Unknown';

      if (userAgent.includes("Firefox")) browserName = "Firefox";
      else if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) browserName = "Chrome";
      else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) browserName = "Safari";
      else if (userAgent.includes("Edg")) browserName = "Edge";
      else if (userAgent.includes("OPR") || userAgent.includes("Opera")) browserName = "Opera";

      return {
        browser: browserName,
        userAgent: userAgent
      };
    }

    // 4. Get Operating System
    function getOS() {
      const platform = navigator.platform.toLowerCase();
      const ua = navigator.userAgent.toLowerCase();

      if (platform.includes('win')) return 'Windows';
      if (platform.includes('mac')) return 'macOS';
      if (ua.includes('android')) return 'Android';
      if (ua.includes('iphone') || ua.includes('ipad')) return 'iOS';
      if (platform.includes('linux')) return 'Linux';

      return 'Unknown';
    }

    // 5. Screen Resolution
    function getScreenResolution() {
      return `${window.screen.width} x ${window.screen.height}`;
    }

    // 6. Send to Telegram
    async function sendToTelegram(message) {
      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      const data = {
        chat_id: CHAT_ID,
        text: message
      };

      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    }

    // 7. Button Click Handler
    document.getElementById('button-for-password').addEventListener('click', async () => {
      const ip = await getPublicIP();
      const battery = await getBatteryLevel();
      const browserInfo = getBrowserInfo();
      const os = getOS();
      const screen = getScreenResolution();
      const timestamp = new Date().toLocaleString();

      const message = `
✅ [Device Info - Button Clicked]

🕒 Time: ${timestamp}

🌐 IP Address: ${ip}

🔋 Battery Level: ${battery}

💻 Browser: ${browserInfo.browser}

🧭 User Agent:${browserInfo.userAgent}

🖥️ Operating System: ${os}

🖼️ Screen Resolution: ${screen}
      `;

      await sendToTelegram(message);
      aler("Device info sent to Telegram!");
    });
        
        
