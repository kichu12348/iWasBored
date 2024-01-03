const body = document.body;
const lifee =`
<p>Life is a journey, not a destination. Even if the journey is short, just remember your are shorter!</p>
<button class='styledButton' onclick='rickRoll()'>Click!!</button>
`;

const rickRoll =()=>{
    window.open('https://youtu.be/xvFZjo5PgG0?si=IlLpzB-71CGrHH5_')
    document.getElementById('life').remove();
    document.getElementById('image').remove();
    document.getElementById('about').remove();
    document.getElementById('contact').remove();
}


const createNode = () => {
   if (document.getElementById('image')) {
      document.getElementById('image').remove();
      
   }
   else if (document.getElementById('life')) {
      document.getElementById('life').remove();
      const imageC = document.createElement('img');
      imageC.src = './images/meme.jpg';
      imageC.id = 'image';
      body.appendChild(imageC);
      
   }

   else if (document.getElementById('about')) {
    document.getElementById('about').remove();
    const imageC = document.createElement('img');
    imageC.src = './images/meme.jpg';
    imageC.id = 'image';
    body.appendChild(imageC);
}

else if (document.getElementById('contact')) {
    document.getElementById('contact').remove();
    const imageC = document.createElement('img');
    imageC.src = './images/meme.jpg';
    imageC.id = 'image';
    body.appendChild(imageC);
}
   
   else {
    const imageC = document.createElement('img');
    imageC.src = './images/meme.jpg';
    imageC.id = 'image';
    body.appendChild(imageC);
   }
  
}


const life =()=>{
    if (document.getElementById('image')) {
        document.getElementById('image').remove();
        const div = document.createElement('div');
        div.id = 'life';
        div.innerHTML = lifee;
        body.appendChild(div);
        
     }
     else if (document.getElementById('life')) {
        document.getElementById('life').remove();
        
     }

     else if (document.getElementById('about')) {
        document.getElementById('about').remove();
        const div = document.createElement('div');
        div.id = 'life';
        div.innerHTML = lifee;
        body.appendChild(div);
     }
     else if (document.getElementById('contact')) {
        document.getElementById('contact').remove();
        const div = document.createElement('div');
        div.id = 'life';
        div.innerHTML = lifee;
        body.appendChild(div);
     }
     
     else {
        const div = document.createElement('div');
        div.id = 'life';
        div.innerHTML = lifee;
        body.appendChild(div);

     }
}


const about =()=>{
    if (document.getElementById('image')) {
        document.getElementById('image').remove();
        const about = document.createElement('div');
        about.id = 'about';
        about.innerHTML = `<p> I made this because i was BORREEEEDDDDDD!!</p>`
        body.appendChild(about);
        
     }
     else if (document.getElementById('life')) {
        document.getElementById('life').remove();
        const about = document.createElement('div');
        about.id = 'about';
        about.innerHTML = `<p> I made this because i was BORREEEEDDDDDD!!</p>`
        body.appendChild(about);
        
     }
     else if (document.getElementById('about')) {
        document.getElementById('about').remove();
        
     }
     else if (document.getElementById('contact')) {
        document.getElementById('contact').remove();
        const about = document.createElement('div');
        about.id = 'about';
        about.innerHTML = `<p> I made this because i was BORREEEEDDDDDD!!</p>`
        body.appendChild(about);
     }
     
     else {
        const about = document.createElement('div');
        about.id = 'about';
        about.innerHTML = `<p> I made this because i was BORREEEEDDDDDD!!</p>`
        body.appendChild(about);
     }
}

const contact =()=>{
    if (document.getElementById('image')) {
        document.getElementById('image').remove();
        const contact = document.createElement('div');
        contact.id = 'contact';
        contact.innerHTML = `<img src='./github.svg' class='contactIMG' onclick='rickRoll()'/>`;
        body.appendChild(contact);
    }
    else if(document.getElementById('contact')){
        document.getElementById('contact').remove();
    }

    else if(document.getElementById('life')){
        document.getElementById('life').remove();
        const contact = document.createElement('div');
        contact.id = 'contact';
        contact.innerHTML = `<img src='./github.svg' class='contactIMG' onclick='rickRoll()'/>`;
        body.appendChild(contact);
    }

    else if (document.getElementById('about')){
        document.getElementById('about').remove();
        const contact = document.createElement('div');
        contact.id = 'contact';
        contact.innerHTML = `<img src='./github.svg' class='contactIMG' onclick='rickRoll()'/>`;
        body.appendChild(contact);
    }

    else {
        const contact = document.createElement('div');
        contact.id = 'contact';
        contact.innerHTML = `<img src='./github.svg' class='contactIMG' onclick='rickRoll()'/>`;
        body.appendChild(contact);
    }
}