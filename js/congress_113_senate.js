fetch("https://api.propublica.org/congress/v1/113/senate/members.json",

		{
			method: "GET",

			headers: { "X-API-Key": "cYMTdFJS13jzEeSby2onJewefObRpQKCL6NOReqD" }

		})

	.then(res => res.json())

	.then(data => {
		app.members = data.results[0].members;
		iniciar();
			})

	

	.catch(err => console.log(err));