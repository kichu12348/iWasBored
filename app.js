const body = document.body;

const homE=`
<p>Life is a journey, not a destination. Even if the journey is short, just remember your are shorter!</p>
<button class='styledButton' onclick='rickRoll()'>Click!!</button>
`;

//remove overlay 
const removeOverlay = () =>{
   if(document.getElementById('overlay')){
   document.getElementById('overlay').remove();
   }
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
   const id = ['image', 'life', 'about', 'contact', 'homepageP', 'video', 'overlay'];
   for (let i = 0; i < id.length; i++) {
      const element = id[i];
      if (document.getElementById(element)) {
         document.getElementById(element).remove();
      }
   }
}

//image function

const createIMG = () => {
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
         const imageC = document.createElement('div');
         imageC.innerHTML = '<img src="./images/meme.jpg" class="imageIMG" />';
         imageC.id = 'image';
         body.appendChild(imageC);
         removeOverlay();
      }
   }
 }
}

//home function

const home =()=>{
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
           div.innerHTML = homE;
           body.appendChild(div);
           removeOverlay();
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
            removeOverlay();
         }
       }
    }
}

//contact function
const contact =()=>{
    if(document.getElementById('contact')){
        document.getElementById('contact').remove();
         startup();
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
            removeOverlay();
         }
       }
    }
}

//horror video function

const video =()=>{
   if(document.getElementById('video')){
      document.getElementById('video').remove();
      document.getElementById('overlay').remove();
      startup();
    }

  else{
    const id = ['image', 'life', 'about', 'homepageP','contact'];
      for (let i = 0; i < id.length; i++) {
    const element = id[i];
       if (document.getElementById(element)) {
          document.getElementById(element).remove();
          const overlay = document.createElement('div');
          overlay.id = 'overlay';
          body.appendChild(overlay);
          const video = document.createElement('div');
          const which = Math.floor(Math.random()*5);
          video.id = 'video';
          video.innerHTML = `
          <video autoplay loop preload='auto' id="myVideo">
          <source src="./videos/${'video'+which}.mp4" type="video/mp4">
          </video>`;
         body.appendChild(video); 
       }
     }
  }
}

