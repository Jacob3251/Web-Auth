# Popup auth:

- ## Firebase
- ## Facebook
- ## Github

## Firebase: Steps () => {}

- ### Have to run npm install firebase on terminal
- ### before opening the web app have to make a new file named firebase.init.js and it's location will be src/firebase.init.js where we have to put firebaseConfig info that we get when opening the web app on firebase project
- ### Have to declare auth outside the App function in App.js
  _const auth = getAuth(app);_
- ### inside the function have to put provider for google _const provider = new GoogleAuthProvider();_
- ### Have to make onClick method where we have to call signInWithPopup() that takes two parameters which is _auth_ and _provider_ that is created in earlier steps.

## Facebook: Steps () => {}

_All steps are same just have to provide App ID and App Secret_

### Steps:

- vist [developer facebook site](https://developer.facebook.com) and register and create new app.
- In Authenticaion under firebase enable facebook which will ask App ID App Secret and provide a link that will be used later.
- App ID and App Secret will be found on _Settings_ tab under _Basic_
- On the DashBoard tab on the bottom there is Facebook login Card Click on it's settings, then put firebase link on Valid OAuth Redirect URIs box and hit save.

## SignOut funcion for signing out logged user's:

```javascript
const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      setUser({});
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      setUser({});
      console.log(error);
    });
};
```
