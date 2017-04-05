function makeStory() {
    // get form values (2 points)
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var adjective4 = document.getElementById('adjective4').value;
    var adjective5 = document.getElementById('adjective5').value;
    var nounplural = document.getElementById('noun1').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var adverb = document.getElementById('adverb').value;
    var partofabody = document.getElementById('part').value;


    // Set title of story. Use at least one form value in the title. (2 points)
    var title = " The " + adjective5 + " Goofy Goober ";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = " There was once a " + adjective1 + " star fish named Patrick and a " + adjective2 + " sponge named Spongebob. They decided one day to go to Goofy Goobers. The Goofy Goobers had many " + nounplural + " Spongebob and Patrick were " + verb1 + adverb + " to the sundae bar. They wanted the sundaes becauase they were so " + adjective3;

    var paragraph2 = " When they walked into the club they saw the hash slinging slasher. They were " + adjective4 + " Their " + partofabody + " jumped up, and " + adverb + " Then they got some triple gooberberry sunrise sundaes. They ordered them till they got a little tipsy ";






    // Display story by putting title & paragraphs into appropriate divs. (3 points)
     document.getElementById('title').innerHTML = title;
     document.getElementById('paragraph1').innerHTML = paragraph1;
     document.getElementById('paragraph2').innerHTML = paragraph2;
      




}
