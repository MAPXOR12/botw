const { MessageEmbed , Discord , MessageAttachment } = require('discord.js');
const Canvas = require('canvas')
const db = require('pro.db')
module.exports = {
  name:"profile",
  description:"ultrabot profile",
  options : [{
    name : "user",
    description : "user atc",
    type: 6,
    required : false,
  }],

  run: async(client, interaction) => {
    try {
            let user = interaction.options.getUser('user') || interaction.user;

      let ultracash = db.get(`cash_credits_${user.id}`)
      if (ultracash == null) db.set(`cash_credits_${user.id}`, {
          credits: 0,
          userId: interaction.user.id
        });
            let credittt = db.get(`cash_credits_${user.id}`)
     let credit = credittt.credits;
      let rep = db.get(`rep_${user.id}`)
      if(rep == null) rep = 0

      let level = db.get(`level_${user.id}`)
    if(level == null) level = 0

    if(level < 5) level = 0
    if(level > 5 && level <= 10) level = 1
    if(level > 10 && level <= 25) level = 2
    if(level > 25 && level <= 50) level = 3
    if(level > 50 && level <= 80) level = 4
    if(level > 80 && level <= 110) level = 5
    if(level > 110 && level <= 150) level = 6
    if(level > 150 && level <= 200) level = 7
    if(level > 210 && level <= 270) level = 8
    if(level > 270 && level <= 330) level = 9
    if(level > 330 && level <= 395) level = 10
    if(level > 395 && level <= 440) level = 11
    if(level > 440 && level <= 490) level = 12
    if(level > 490 && level <= 550) level = 13
    if(level > 550 && level <= 620) level = 14
    if(level > 620 && level <= 700) level = 15
    if(level > 700 && level <= 780) level = 16
    if(level > 780 && level <= 820) level = 17
    if(level > 820 && level <= 870) level = 18
    if(level > 870 && level <= 920) level = 19
    if(level > 920 && level <= 970) level = 20
    if(level > 970 && level <= 1020) level = 21
    if(level > 1020 && level <= 1080) level = 22
    if(level > 1080 && level <= 1120) level = 23
    if(level > 1120 && level <= 1200) level = 24
    if(level > 1200 && level <= 1280) level = 25
    if(level > 1280 && level <= 1350) level = 26
    if(level > 1350 && level <= 1400) level = 27
    if(level > 1400 && level <= 1420) level = 28
    if(level > 1420 && level <= 1500) level = 29
    if(level > 1500 && level <= 1700) level = 30
    if(level > 1700 && level <= 1900) level = 31
    if(level > 1900 && level <= 2100) level = 32
    if(level > 2100 && level <= 2300) level = 33
    if(level > 2300 && level <= 2500) level = 34
    if(level > 2500 && level <= 3100) level = 35
    if(level > 3100 && level <= 3300) level = 36
    if(level > 3300 && level <= 3500) level = 37
    if(level > 3500 && level <= 3700) level = 38
    if(level > 3700 && level <= 4000) level = 39
    if(level > 4000 && level <= 4500) level = 40
    if(level > 4500 && level <= 5000) level = 41
    if(level > 5000 && level <= 5500) level = 42
    if(level > 5500 && level <= 6000) level = 43
    if(level > 6000 && level <= 6500) level = 44
    if(level > 6500 && level <= 7000) level = 45
    if(level > 7000 && level <= 7500) level = 46
    if(level > 7500 && level <= 8000) level = 47
    if(level > 8000 && level <= 8500) level = 48
    if(level > 8500 && level <= 9000) level = 49
    if(level > 9000 && level <= 9800) level = 50
    if(level > 9800 && level <= 10400) level = 51
    if(level > 10400 && level <= 11000) level = 52
    if(level > 11000 && level <= 11800) level = 53
    if(level > 11800 && level <= 12400) level = 54
    if(level > 12400 && level <= 13000) level = 55
    if(level > 13000 && level <= 13800) level = 56
    if(level > 14400 && level <= 15000) level = 57
    if(level > 15000 && level <= 15800) level = 58
    if(level > 15800 && level <= 16400) level = 59
    if(level > 17000 && level <= 18000) level = 60
    if(level > 18000 && level <= 20000) level = 61
    if(level > 20000 && level <= 22000) level = 62
    if(level > 22000 && level <= 24000) level = 63
    if(level > 24000 && level <= 26000) level = 64
    if(level > 26000 && level <= 28000) level = 65
    if(level > 28000 && level <= 30000) level = 66
    if(level > 30000 && level <= 32000) level = 67
    if(level > 32000 && level <= 34000) level = 68
    if(level > 34000 && level <= 36000) level = 69
    if(level > 36000 && level <= 40000) level = 70
    if(level > 40000 && level <= 45000) level = 71
    if(level > 45000 && level <= 50000) level = 72
    if(level > 50000 && level <= 55000) level = 73
    if(level > 55000 && level <= 60000) level = 74
    if(level > 60000 && level <= 65000) level = 75
    if(level > 65000 && level <= 70000) level = 76
    if(level > 70000 && level <= 75000) level = 77
    if(level > 75000 && level <= 80000) level = 78
    if(level > 80000 && level <= 85000) level = 79
    if(level > 85000 && level <= 90000) level = 80
    if(level > 90000 && level <= 100000) level = 81
    if(level > 100000 && level <= 110000) level = 82
    if(level > 110000 && level <= 120000) level = 83
    if(level > 120000 && level <= 130000) level = 84
    if(level > 130000 && level <= 140000) level = 85
    if(level > 140000 && level <= 150000) level = 86
    if(level > 150000 && level <= 160000) level = 87
    if(level > 160000 && level <= 170000) level = 88
    if(level > 170000 && level <= 180000) level = 89
    if(level > 180000 && level <= 200000) level = 90
    if(level > 200000 && level <= 250000) level = 91
    if(level > 250000 && level <= 300000) level = 92
    if(level > 300000 && level <= 350000) level = 93
    if(level > 350000 && level <= 400000) level = 94
    if(level > 400000 && level <= 450000) level = 95
    if(level > 450000 && level <= 500000) level = 96
    if(level > 500000 && level <= 550000) level = 97
    if(level > 550000 && level <= 600000) level = 98
    if(level > 600000 && level <= 700000) level = 99
    if(level >= 750000) level = 100
            
             const canvasp = Canvas.createCanvas(512, 512); // هنا مقاسات الصوره 
      
    const ctx = canvasp.getContext('2d') // هنا الصوره 2d او 3d الخ
    
    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/1006709908714045461/1011628877426196592/ultrabotprofile.png'); // هنا الخلفيه تحط فيها المسار بتاع الصوره 
    ctx.drawImage(background, 0, 0, canvasp.width, canvasp.height); // هنا ةمقاسات الخلفيه سيبها زي مهي
    const cutie = await Canvas.loadImage('https://cdn.discordapp.com/attachments/1006709908714045461/1011628877426196592/ultrabotprofile.png'); // هنا مسار الصوره
    ctx.drawImage(cutie, 25, 25, 0, 0);       
      ctx.font = "19px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(credit, 33, 425);
      
      ctx.fillStyle = "white";
      ctx.fillText("+"+rep, 33, 285);
      
      ctx.fillStyle = "white";
      ctx.fillText(level, 33, 350);
      
      ctx.font = "25px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(user.tag , 240 , 100);
                 
        
        

              ctx.beginPath();
        ctx.arc(100, 100, 100, 0, 4 * Math.PI);
        ctx.closePath();
        ctx.clip();
        let lllcc = await Canvas.loadImage(user.displayAvatarURL().replace("webp" , "png"));
        ctx.drawImage(lllcc , 26.6 , 25 , 155 , 155)
      
    const attachment = new MessageAttachment(canvasp.toBuffer(), 'image.jpeg'); 
    
        
    interaction.editReply({ files: [attachment]}); 
      
} catch (err) {
      console.log(err)
  }
 }
}