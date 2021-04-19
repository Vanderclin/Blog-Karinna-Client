var firebaseConfig = {
	apiKey: "AIzaSyA0xOmYC-T8rrcyRgf3MabB0BgRDOuDACg",
	authDomain: "megalibrary-5cafb.firebaseapp.com",
	databaseURL: "https://megalibrary-5cafb.firebaseio.com",
	projectId: "megalibrary-5cafb",
	storageBucket: "megalibrary-5cafb.appspot.com",
	messagingSenderId: "86739228796",
	appId: "1:86739228796:web:e70b4a83f163d4135151f9",
	measurementId: "G-K07Z821C5T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		var displayName = user.displayName;
		var email = user.email;
		var emailVerified = user.emailVerified;
		var photoURL = user.photoURL;
		var isAnonymous = user.isAnonymous;
		var uid = user.uid;
		var providerData = user.providerData;
		
		document.getElementById('modal_display_email').innerText = email;
		
		var name = document.getElementById('display_name');
		var m_name = document.getElementById('modal_display_name');
		var avatar = document.getElementById('display_avatar');
		var m_avatar = document.getElementById('modal_display_avatar');
		var m_checked = document.getElementById('modal_display_checked');
		
		if (photoURL === null) {
			avatar.src = "../assets/icons/user_avatar.png";
			m_avatar.src = "../assets/icons/user_avatar.png";
		} else {
			avatar.src = photoURL;
			m_avatar.src = photoURL;
		}
		if (displayName === null) {
			$("#modal_update_profile").modal("show");
			name.innerText = "Unknow";
			m_name.innerText = "Unknow";
		}
		else {
			name.innerText = displayName;
			m_name.innerText = displayName;
		}
		if (email === false) {
			m_checked.src = "../assets/icons/user_unverified.png";
		}
		else {
			m_checked.src = "../assets/icons/user_verified.png";
		}
		
		

	} else {
		window.location.replace('/');
	}
});

$("#button_signout").click(function () {
	firebase.auth().signOut().then(function () {
		// Sign-out successful.
		window.location.reload();
	}).catch(function (error) {
		// An error happened.
	});
});

$("#button_update_name").click(function () {
	var photo =  document.getElementById('input_photo').value;
	var name = document.getElementById('input_username').value;
	var user = firebase.auth().currentUser;
	
	user.updateProfile({
		displayName: username
		// photoURL: "https://example.com/jane-q-user/profile.jpg"
		}).then(function() {
			window.location.reload();
		}).catch(function(error) {
			// An error happened.
	});
});
