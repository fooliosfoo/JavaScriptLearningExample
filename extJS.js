/* TEMP */

/* this application validates a user's entries for joining
*/
var$~ function(id ) { II the standard$ function
return document.getElementByid(id);}
/* this function gets and validates the user entries
*/
var joinList ~ function( ) {
var emailAddressl ~ $ ( "email_addressl") .value;
var emai1Address2 ~ $ ( "email_address2") .value;
var firstName ~ $ ( "first_name") .value;
var isValid ~ true;
/* validate the first entr
*/
if (emailAddressl ~~ "" ) {
$ ( "email_addressl_error" ) .first Child .nodeValue ~
"This field is required.";
isValid ~ false; /I set valid switch to off
} else {
$("email_addressl_error" ) .firstChild.nodeValue ~
}
/* validate the second entry
*/
