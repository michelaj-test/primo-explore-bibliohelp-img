/*
 * adding icon "ask the librarian" at the bottom of the page
 *(here prmViewOnlineAfter for test)
 * mjm2022
 */
 
app.component('prmSilentLoginAfter', {
    bindings: { },
    template: `<div class="bibliohelp-tab">
	<a title="Ask the librarian" href="https://unimi.libanswers.com/">BiblioHELP
	<img src="/primo-explore/custom/NORTH/img/bibliohelp.png"></a></div>`
});

