async function fetchAPI(query, { variables } = {}) {
  // vložit adreseu, na které běží web + graphql
  const res = await fetch("https://test.eu/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  // při chybě
  const json = await res.json();
  console.log(json);
  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function sendMail(subject, body, mutationId = "contact") {
  const fromAddress = "website form <noreply@test.eu>";
  const toAddress = "info@test.eu";

  const data = await fetchAPI(
    `
		mutation SendEmail($input: SendEmailInput!) {
			sendEmail(input: $input) {
				message
				origin
				sent
			}
		}
	`,
    {
      variables: {
        input: {
          clientMutationId: mutationId,
          from: fromAddress,
          to: toAddress,
          body: body,
          subject: subject,
        },
      },
    },
  );

  return data?.sendEmail;
}

