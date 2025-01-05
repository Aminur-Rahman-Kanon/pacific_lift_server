function cronJob (){
    setInterval(() => {
        https.get('https://pacific-lift-server.onrender.com', (res) => {
            console.log('pinging...');
        })
    }, 840000);
}

module.exports = {
    cronJob
}