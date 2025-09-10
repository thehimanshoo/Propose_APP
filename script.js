var i = 0;
var txt1 =
  "Hi Ammu.....!  << I don’t know how to start this, but today I just want to say something straight from my heart. <<< So please read this slowly and carefully, because every line is for you only...!                                                                           > The first day I saw you < Something inside me said you are different. << I don’t know what it was, but from that moment, you started becoming special for me. << And as days passed, you became closer to me without even trying...! <<                                                                                             > I keep asking myself < Why do your thoughts keep running in my head all the time? << Why does my heart always search for you, even in small things? << Maybe this is what people call love...! <<                                                                                             > Ammu, you don’t even know < How much happiness your smile gives me. << Even your small talks feel so sweet and precious to me. << You have become that person in my life whom I never want to lose...! <<                                                                                             > I am a little nervous < Because these words are not easy for me. << I have never said such feelings to anyone before. << And I am sure I will never say them to anyone else in my life...! <<                                                                                             > I love my parents more than anything in this world < But today, you are the only person whom I love equally with them. << That’s how important you are for me, Ammu...! <<                                                                                             > So here I am < With all my honesty and all my love. << I just want to say these simple words — I Love You Ammu....! | <<                                                                                             > Give me one chance < One chance to prove how true my love is. << I will stand by you in every situation, in happiness and in struggles. << I promise, I will never leave your hand in this life. <<                                                                                             > You are not just a part of my story < You are the whole story itself. << My dream, my strength, my peace, my everything...! <<                                                                                             > So today < I am asking you from my heart... << Will you be mine, not just for today, not just for tomorrow, but for always...? ❤️";

var speed = 150; // typing speed
typeWriter();

function typeWriter() {
  if (i < txt1.length) {
    let delay = speed; // default typing delay

    if (txt1.charAt(i) == "<") {
      document.getElementById("text1").innerHTML += "</br>";
      delay = 600; // pause longer after line break
    } 
    else if (txt1.charAt(i) == ">") {
      document.getElementById("text1").innerHTML = "";
      delay = 800; // pause when clearing
    } 
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
      delay = 1000; // dramatic pause
    } 
    else {
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    }

    i++;
    setTimeout(typeWriter, delay);
  }
}
