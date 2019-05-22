fetch("https://api.propublica.org/congress/v1/113/senate/members.json",

{method: "GET",
mode:"no-cors",
cache:"default",
 headers: { "X-API-Key": "cYMTdFJS13jzEeSby2onJewefObRpQKCL6NOReqD" }

})

 .then(res => res.json())

 .then(data => {

   congressMembers = data.results[0].members;

   console.log(congressMembers)

   iniciar()

 })
 .catch(err => console.log(err));
