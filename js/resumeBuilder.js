
var name = "Abraham";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Software Engineer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio = {
	"contacts": {
		"mobile":"4421545",
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
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMessage);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace(
		"%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
	bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
	bio.skills[2]);
	/*$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
	bio.skills[3]);*/
	$("#skills").append(formattedSkill);	
}

