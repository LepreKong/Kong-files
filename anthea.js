const userName = prompt("Enter your name:");

document.body.style.margin = "0";
document.body.style.fontFamily = "Arial";
document.body.style.backgroundColor = "#ffeef5";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

// Main container
const container = document.createElement("div");
container.style.textAlign = "center";

// Welcome text
const title = document.createElement("h1");
title.innerText = `Hello, ${userName || "Friend"}!`;
title.style.color = "#ff4f8b";

// Envelope button
const envelope = document.createElement("button");
envelope.innerHTML = "✉ Open Envelope";
envelope.style.padding = "20px 40px";
envelope.style.fontSize = "24px";
envelope.style.border = "none";
envelope.style.borderRadius = "15px";
envelope.style.cursor = "pointer";
envelope.style.backgroundColor = "#ff80ab";
envelope.style.color = "white";

// Letter popup
const letter = document.createElement("div");
letter.style.display = "none";
letter.style.position = "fixed";
letter.style.top = "50%";
letter.style.left = "50%";
letter.style.transform = "translate(-50%, -50%)";
letter.style.backgroundColor = "white";
letter.style.padding = "30px";
letter.style.borderRadius = "20px";
letter.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
letter.style.width = "400px";

// HTML letter content
letter.innerHTML = `
    <h2>Dear ${userName || "Friend"},</h2>
    <p>Happy Mothers day.</p>
    <p>Happy mothers day to the woman that has always been there for me through my ups and downs
    through the toughest times,mommy was always there for me, but not only for me, but the entire house
    We love and appreciate you so much
    
    I love you mommy and have a blessed Mother's Day.</p>
    <br>
    <p>Love,<br>your beautiful first daughter Ashlee❤️</p>
`;
    
  
;

// Open envelope action
envelope.onclick = () => {
    letter.style.display = "block";
};

// Add elements
container.appendChild(title);
container.appendChild(envelope);

document.body.appendChild(container);
document.body.appendChild(letter);