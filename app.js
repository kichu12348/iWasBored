const body = document.body;

const lifee =`
<p>Life is a journey, not a destination. Even if the journey is short, just remember your are shorter!</p>
<button class='styledButton' onclick='rickRoll()'>Click!!</button>
`;
//blur background function
const backgrdBlur = (yes) =>{
   if(yes===1){body.style.backdropFilter = 'blur(10px)';}
   else if(yes===0){body.style.backdropFilter = 'blur(0px)';}
}

//homepage stuff on startup
function startup(){
const HomePageP= document.createElement('div');
HomePageP.innerHTML = `<p>Welcome hooman!😀</p>`;
HomePageP.id = 'homepageP';
body.appendChild(HomePageP);
}

startup();

//rick roll function

const rickRoll = () =>{
   window.open('https://youtu.be/xvFZjo5PgG0?si=IlLpzB-71CGrHH5_');
   const id = ['image', 'life', 'about', 'contact', 'homepageP', 'video'];
   for (let i = 0; i < id.length; i++) {
      const element = id[i];
      if (document.getElementById(element)) {
         document.getElementById(element).remove();
      }
   }
}

//image function

const createNode = () => {
   if (document.getElementById('image')) {
      document.getElementById('image').remove();
      startup();
   }
   else{
   const id = ['life', 'about', 'contact', 'homepageP', 'video'];
   for (let i = 0; i < id.length; i++) {
   const element = id[i];
      if (document.getElementById(element)) {
         document.getElementById(element).remove();
         const imageC = document.createElement('img');
         imageC.src = './images/meme.jpg';
         imageC.id = 'image';
         body.appendChild(imageC);
         backgrdBlur(0);
      }
   }
 }
}

//home function

const life =()=>{
     if (document.getElementById('life')) {
        document.getElementById('life').remove();
        startup();
     }
    else{
     const id = ['image', 'about', 'contact', 'homepageP', 'video'];
       for (let i = 0; i < id.length; i++) {
     const element = id[i];
        if (document.getElementById(element)) {
           document.getElementById(element).remove();
           const div = document.createElement('div');
           div.id = 'life';
           div.innerHTML = lifee;
           body.appendChild(div);
           backgrdBlur(0);
        }
      }
   }
    
}

//about function

const about =()=>{
   const hmm = 'I made this because i was BORREEEEDDDDDD!!';
     if (document.getElementById('about')) {
        document.getElementById('about').remove();
        startup(0);
      }

     else{
      const id = ['image', 'life', 'contact', 'homepageP', 'video'];
        for (let i = 0; i < id.length; i++) {
      const element = id[i];
         if (document.getElementById(element)) {
            document.getElementById(element).remove();
            const about = document.createElement('div');
            about.id = 'about';
            about.innerHTML = `<p>${hmm}</p>`
            body.appendChild(about);
            backgrdBlur(0);
         }
       }
    }
}

//contact function
const contact =()=>{
    if(document.getElementById('contact')){
        document.getElementById('contact').remove();
         startup();
         backgrdBlur(0);
      }

    else{
      const id = ['image', 'life', 'about', 'homepageP', 'video'];
        for (let i = 0; i < id.length; i++) {
      const element = id[i];
         if (document.getElementById(element)) {
            document.getElementById(element).remove();
            const contact = document.createElement('div');
            contact.id = 'contact';
            contact.innerHTML = `<img src='./github.svg' class='contactIMG' onclick='rickRoll()'/>`;
            body.appendChild(contact);
            backgrdBlur(1);
         }
       }
    }
}

//horror video function

const video =()=>{
   if(document.getElementById('video')){
      document.getElementById('video').remove();
      document.getElementsByClassName('overlay')[0].remove();
      startup();
      backgrdBlur(0);
    }

  else{
    const id = ['image', 'life', 'about', 'homepageP','contact'];
      for (let i = 0; i < id.length; i++) {
    const element = id[i];
       if (document.getElementById(element)) {
          document.getElementById(element).remove();
          const overlay = document.createElement('div');
          overlay.classList = 'overlay';
          body.appendChild(overlay);
          const video = document.createElement('div');
          const which = Math.floor(Math.random()*2);
          console.log(which);
          video.id = 'video';
          video.innerHTML = `
          <video autoplay loop id="myVideo">
          <source src="./videos/${'video'+which}.mp4" type="video/mp4">
          </video>`;
         body.appendChild(video);
         backgrdBlur(1); 
       }
     }
  }
}

