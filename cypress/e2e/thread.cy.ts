// import { deleteThread } from "@/lib/actions/thread.actions";

// describe("creates a thread", () => {
//   const USERNAME = "detin68260";
//   it("passes", () => {
//     cy.visit("/", { failOnStatusCode: false });
//     cy.get('[id="identifier-field"]').type(USERNAME);
//     cy.get('[data-localization-key="formButtonPrimary"]').click();

//     cy.get('[id="password-field"]').type(USERNAME);
//     cy.get('[data-localization-key="formButtonPrimary"]').click();
//     cy.url().should("eq", `${Cypress.config().baseUrl}/`);

//     cy.get('[id="Create Thread"]').click();
//     cy.url().should("eq", `${Cypress.config().baseUrl}/create-thread`);

//     cy.get('[id=":r0:-form-item"]').type("thread comment");
//     cy.get('button[type="submit"]').click();

//     cy.get('[id="article-section"]')
//       .find("article")
//       .first()
//       .invoke("attr", "id")
//       .then(async (articleId) => {
//         if (articleId === undefined) {
//           cy.log("Error: Article ID is undefined");
//           return;
//         }
//         await deleteThread(articleId, "/");
//       });
//   });
// });
