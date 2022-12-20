const imgDivs = document.getElementsByClassName("imgDiv");
const h1 = document.getElementsByTagName("h1");
const h6 = document.getElementsByTagName("h6");

// 👇️ Change text color on mouseover
for (const imgDiv of imgDivs) {
    imgDiv.addEventListener('mouseover', function handleMouseOver() {
    imgDiv.style.opacity = "0";
    }
)};

// 👇️ Change text color back on mouseout
for (const imgDiv of imgDivs){
imgDiv.addEventListener('mouseout', function handleMouseOut() {
    imgDiv.style.opacity = "1";
    }
)};

h1[0].addEventListener('mouseover', function handleMouseOver() {
    h1[0].style.color = "green";
});

h1[0].addEventListener('mouseout', function handleMouseOut() {
    h1[0].style.color = "red";
});

h6[0].addEventListener('mouseover', function handleMouseOver() {
    h6[0].style.color = "red";
});

h6[0].addEventListener('mouseout', function handleMouseOut() {
    h6[0].style.color = "green";
});