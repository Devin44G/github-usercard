/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

console.log(axios.get('https://api.github.com/users/Devin44G'));

// axios.get('https://api.github.com/users/Devin44G') <-- CALLING MY CARD, USING MY DATA
//       .then(obj => gitHubCard(obj.data));

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
      'tetondan',
      'dustinmyers',
      'justsml',
      'luishrd',
      'bigknell'
    ];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

function gitHubCard(res) {
// CREATING ELEMENTS
  const CARD = document.createElement('div');
        const USER_IMG = document.createElement('img');
        const CARD_INFO = document.createElement('div');
              const NAME = document.createElement('h3');
              const USERNAME = document.createElement('p');
              const LOCATION = document.createElement('p');
              const PROFILE = document.createElement('p');
                    const PROF_LINK = document.createElement('a');
              const FOLLOWERS = document.createElement('p');
              const FOLLOWING = document.createElement('p');
              const BIO = document.createElement('p');

// ADDING CLASSES
  CARD.classList.add('card');
  CARD_INFO.classList.add('card-info');
  NAME.classList.add('name');
  USERNAME.classList.add('username');

// APPENDING ELEMENTS
  CARD.append(USER_IMG);
  CARD.append(CARD_INFO);
  CARD_INFO.append(NAME);
  CARD_INFO.append(USERNAME);
  CARD_INFO.append(LOCATION);
  CARD_INFO.append(PROFILE);
  CARD_INFO.append(FOLLOWERS);
  CARD_INFO.append(FOLLOWING);
  CARD_INFO.append(BIO);
  PROFILE.append(PROF_LINK);

// PASSING DATA
  USER_IMG.src = res.avatar_url;
  NAME.textContent = res.name;
  USERNAME.textContent = res.login;
  LOCATION.textContent = res.location;
  PROF_LINK.href = res.html_url;
  PROF_LINK.setAttribute('target', '_blank');
  PROF_LINK.textContent = 'Go to profile';
  FOLLOWERS.textContent = 'Followers: ' + res.followers;
  FOLLOWING.textContent = 'Following: ' + res.following;
  BIO.textContent = res.bio;

// GETTING CARDS FROM HTML AND APPENDING CREATED CARD DIV TO IT
  const CARDS = document.querySelector('.cards');
        CARDS.append(CARD);
}

// followersArray.map( follower => {
//   axios.get('https://api.github.com/users/' + follower).then(obj => gitHubCard(obj.data)); <-- CALLING "FOLLOWERS'" CARDS, USING THEIR DATA
// });

axios.get('https://api.github.com/users/Devin44G')    // <-- CALLING BOTH MY AND "FOLLOWERS'" CARDS AT ONCE...
      .then(obj => gitHubCard(obj.data))
      .then(followersArray.map( follower => {
        axios.get('https://api.github.com/users/' + follower)
              .then(obj => gitHubCard(obj.data));
            })
        );

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
