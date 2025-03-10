fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
	ip=data.ip;
	agent= navigator.userAgent;
	msg="IP "+ip+"\nUser agent "+agent+"\nDate "+new Date().toLocaleString()+"\nTitle "+document.title+"\nReferrer "+document.referrer+"\n";
	console.log(msg);

	fetch('https://ipwho.is/'+ip)
	.then(response => response.json())
	.then(data => {

	msg2=JSON.stringify(data, null, 2);
	msg=msg+"\n"+msg2;
	
	url='https://api.telegram.org/bot8044232915:AAHZR8OiaCl8wm5HoHR3Y80bFWHWI6PbIi8/sendMessage?chat_id=634841328&text='+encodeURI(msg);
	fetch(url).then(console.log("Done"));

	})
    })
    .catch(error => {
        console.log('Error:', error);
    });
