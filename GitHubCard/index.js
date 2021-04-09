/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";


const profiles = document.querySelector(".cards");
const followersArray = ["https://api.github.com/users/seyeonigbinde",
"https://api.github.com/users/tetondan",
"https://api.github.com/users/dustinmyers",
"https://api.github.com/users/justsml",
"https://api.github.com/users/luishrd",
"https://api.github.com/users/bigknell"];

followersArray.forEach((gitName) => {
            axios.get(gitName)
            .then((res) => {
              const newCard = profileMaker(res.data);
              profiles.appendChild(newCard);
              console.log(newCard);
          
          })
          .catch((err) => {
            console.log(err);
          });
        })
      
// 

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


     
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


function profileMaker(profileObj){
    const profileDiv = document.createElement("div");
    const userImage = document.createElement("img");
    const userInfo = document.createElement("div");
    const userHeader = document.createElement("h3");
    const userName = document.createElement("p");
    const userLocation = document.createElement("p");
    const userProfile = document.createElement("p");
    const userTag = document.createElement("a");
    const userFollower = document.createElement("p");
    const userFollowing = document.createElement("p");
    const userBio = document.createElement("p");

      profileDiv.appendChild(userImage);
      profileDiv.appendChild(userInfo);
      userInfo.appendChild(userHeader);
      userInfo.appendChild(userName);
      userInfo.appendChild(userLocation);
      userInfo.appendChild(userProfile);
      userInfo.appendChild(userFollower);
      userInfo.appendChild(userFollowing);
      userInfo.appendChild(userBio);
      userProfile.appendChild(userTag);


        profileDiv.classList.add("card");
        userInfo.classList.add("card-info");
        userHeader.classList.add("name");
        userName.classList.add("username");

          userImage.src = profileObj.avatar_url
          userHeader.textContent = profileObj.name
          userName.textContent = profileObj.login
          userLocation.textContent =`Location: ${profileObj.location}`
          userProfile.textContent = `Profile: ${profileObj.html_url}` 
          userFollower.textContent = `Followers: ${profileObj.followers}`
          userFollowing.textContent = `Following:  ${profileObj.following}`
          userBio.textContent = `Bio: ${profileObj.bio}`
          userTag.textContent = `GitHub Profile`
          userTag.setAttribute("href", profileObj.html_url)
         

return profileDiv;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
