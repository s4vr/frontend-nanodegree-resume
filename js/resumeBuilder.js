var name = "Abraham";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Software Engineer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio = {
	"contacts": {
		"mobile":"442154854",
		"email": "s4vr@outlook.com",
		"github": "s4vr",
		"twitter": "@_abrahamsc",
		"location": "Querétaro, México"
	},
	"welcomeMessage": "fghjklmknsk fgdskjf hoh khnuhoij jl",
	"skills": [
		"awesome", "programming", "JS"
	],
	"bioPic": "images/fry.jpg"
};
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
//var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMessage);

//$("#topContacts").append(formattedSkills);


