$(function(){
  
  const data = [
  'If you fall asleep now, you will dream. If you study now, you will live your dream', 
  'When you think it’s too late, the truth is, it’s still early',
  'The pain of studying is only temporary. But the pain of not knowing — ignorance — is forever',
  'Studying is not about time. It’s about effort',
  'Life is not all about studying. But if you can’t even conquer this little part of life, then what else can you possibly do?',
  'It’s those who are earlier than the others, those who put in more effort, who can enjoy the feeling of success',
  'Not everyone can truly succeed in everything. But success only comes with self-management and determination',
  'If you don’t walk today, you’ll have to run tomorrow',
  'People who invest in the future are realists',
  'When today is over, it will never come back'
];
 
  $("body").click(function (e) {
    let bgColor = "#" + e.pageX + e.pageY;
    let i=0;
     while(bgColor.length <7){
        bgColor +=i;
        i++;
      } 
      bgColor = bgColor.slice(0, 7);
     $("body").css("background-color", bgColor);
      $("body").html(function(){
       let rand = Math.floor(Math.random() * data.length);
       return data[rand]; 
      });
   
  });
  
})

