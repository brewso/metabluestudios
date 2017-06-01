var data = '%data%';
var $header = $('#header');

var bio = {
    "name": "Eric Brousseau",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "612-807-0079",
        "email": "ebrousseau23@gmail.com",
        "github": "https://github.com/brewso",
        "location": "Minneapolis, MN"
    },
    "welcomeMessage": "Hey there! Welcome to my online resume! Enjoy!",
    "skills": [
        "Object Oriented Programming", "JavaScript", "HTML", "CSS"
    ],
    "bioPic": "http://i359.photobucket.com/albums/oo37/brewso523/myprofile_zpsans2udbc.jpg"
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $header.prepend(formattedRole);
    
    var formattedName = HTMLheaderName.replace(data, bio.name);
    $header.prepend(formattedName);
	
    var formattedMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $header.append(formattedMessage);

    var formattedPic = HTMLbioPic.replace(data, bio.bioPic);
    $header.append(formattedPic);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
	
	if (bio.skills.length > 0) {
    $header.append(HTMLskillsStart);
    
    for(i=0; i < bio.skills.length; i++){
    var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
    $header.append(formattedSkill);
	};
    };
};
bio.display();

var work = {
    "jobs": [{
        "employer": "Zerorez",
        "dates": "Sep. 2011 - present",
        "location": "St. lous park, MN",
        "title": "Lead Technician",
        "description": "Worked independently with minimal supervision, Arriving at jobs on time, " +
		               "Finishing jobs in a timely manner, Ensuring the clients are satisfied with " +
		               "the work that has been done, Customer service survey sent to every client, " +
					   "consistently scored above 8/10, Working with the client through every step when " +
					   "needed, Documenting all issues that arise at the job, Taking thorough notes on " +
					   "the details of every job, Including both successful and unsuccessful steps taken"
    },
	{
        "employer": "Pink Moon Hallow",
        "dates": "Sep. 2000 - jan. 2002",
        "location": "Shakopee, MN",
        "title": "Cashier",
        "description": "Worked independently with minimal supervision, Arriving at jobs on time, " +
		               "Finishing jobs in a timely manner, Ensuring the clients are satisfied with " +
		               "the work that has been done, Customer service survey sent to every client, " +
					   "consistently scored above 8/10, Working with the client through every step when " +
					   "needed, Documenting all issues that arise at the job, Taking thorough notes on " +
					   "the details of every job, Including both successful and unsuccessful steps taken"
    }],
};

work.display = function() {
    for (i=0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);

        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);

        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();


var education = {
    "schools": [{
        "name": "South SR. High",
        "degree": "High School Diploma",
        "major": ["Liberal Arts"],
        "dates": 2010,
        "location": "Minneapolis, MN",
		"url" : "www.south.mpls.mn.edu"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Nanodegree",
        "url": "www.udacity.com",
        "dates": 2016
    }]
};

education.display = function() {
    for (i=0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace(data, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace(data, education.schools[i].major);

        $(".education-entry:last").append(formattedName,formattedDegree,formattedDates,formattedLocation,formattedMajor);
      /*  $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);   */
    }
    $("#education").append(HTMLonlineClasses);
    for (i=0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
        var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
        var schoolTitle = formattedTitle + formattedSchool;
        var formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
        var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[i].url);

        $(".education-entry:last").append(schoolTitle);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedURL);
    }
};
education.display();


var projects = {
    "projects": [{
        "title": "www.electricsmokecompany.com",
        "dates": 2015,
        "description": "Website for a small business in Eagan",
        "images": [
            "http://www.electricsmokecompany.com/images/esclogo2.jpg"
        ]
    }]
};

projects.display = function() {
    for (i=0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);


        if (projects.projects[i].images.length > 0) {
            for (image in projects.projects[i].images) {
                var formattedImage = HTMLprojectImage.replace(data, projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

function locationizer(work_obj) {
    var formattedLocations = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        formattedLocations.push(newLocation)
    }
    return formattedLocations;
};
$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});