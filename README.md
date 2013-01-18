lc_example
==========

this example demonstrates how attempting to access many documents (with large total memory size) quickly leads to a crash.

0. open index.html
1. add 9001 documents, twice (watch the JS console as this happens)
2. now you have 18002 documents
3. open the chrome task manager and **keep on eye on how much memory the tab is using**
4. reload the page (the script does a recount at the start)
5. ???
6. crash!
