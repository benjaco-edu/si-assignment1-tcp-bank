Client is in clinet.js
and server is in server.js

to deposit to the account, call clinet.js <account id> <how mush>
put a - infront of the amount to withdraw

`docker run --rm --name bankserver bslcphbussiness/si-ex1-tcp-bank node server.js`

and

`docker run --rm --link bankserver:bank bslcphbussiness/si-ex1-tcp-bank node client.js 2 54` in a new terminal