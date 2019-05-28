fetch("https://api.propublica.org/congress/v1/113/house/members.json",

		{
			method: "GET",

			headers: { "X-API-Key": "cYMTdFJS13jzEeSby2onJewefObRpQKCL6NOReqD" }

		})

	.then(res => res.json())

	.then(data => {
		var miembrosSinfiltro = data.results[0].members;
		var members = data.results[0].members;
		iniciar(miembrosSinfiltro);
		statistics(members);
	})

	.catch(err => console.log(err));