Chaining Spotify
14.10.2022
─
Eleni Trachanidou
trachanidou@gmail.com
Github: EleniTr

---

<b>Overview</b>

Applying smart contract logic in music. Nowadays it is common for platforms to host music from artists where the visitor can buy any track they like for their own personal usage. Most of those sites work with either a bank transaction or paypal. However, for this project the goal is to rely on smart contracts in order to collect the payments.

<b>Goals</b>

Create a decentralized spotify where each time a customer gets one song from the playlist provided, in order to use it on his own remix, the site gets paid.
Specifications

<b>Specifications</b>

Front End : Angular , Bootstrap
Back End : Hardhut , Goerli , Metamask , Ethnet

<b>Milestones</b>

1. Create the playlist with 3 different tracks to choose from
   A. Create the view in which the tracks will load</br>
   1. List of tracks
   2. Buy button for the purchase of a track
   3. Login button
      B. Connect a database with the songs names, album icon
2. Create a smart contract for the payment
   A. Create the blockchain payment
   1. Initial Block
   2. Checks about the validity of the block
   3. Way to add to the chain the block
3. Create a message that updates the customer of their purchase
   A. Create an email / or message

   1. Update the customer about the compilation of the payment
   2. Sent a link with the downloadable file
      B. Guide the user to a thank you page

      meta data of the song σε json
      https://docs.openzeppelin.com/contracts/4.x/wizard
      https://nftschool.dev/
      -save data here ipfs.io
      -elegxos an menoun ta arxeia pinata / filecoin

      -apo tin pleura tou dimiourgou to fe

      Poios tha kanei host to service / :
      ERC1155 - ERC721

Να περιγράψω το project απο την πλευρά του πελάτη και αυτου που πουλάει
Γιατι να πουλάει ο αλλος, πρέπει να βγαζει καποιο κερδος επι του προιοντος(ποσοστό), και αυτός που κανει hosting την πλατφορμα να παίρνει κάποιο ποσοστό
με τα erc721 oi gorillas Μπορούν να βάρουν ένα ποσοστό μέσα στο πηγαίο τραγούδι και να παίρνουν σε κάθε επαναπώληση του ενα αντιτιμο

Απλα μπορέι με το ipfs να στέλενι link gia na κατεβάζε.Δεν χρειαζεται email
s

FRONT END

Δημιουργία LOGIN ως αρχική(firebase για λογαριασμούς)

Δημιουργία front για τον πελατη(συνδεση σελίδων)
-ποια τραγουδια βλέπει / πληρωμή
-bar με το login

Δημιουργία front για τον πωλητη(συνδεση σελίδων)
-ποια τραγουδια βλέπει / πληρωμή
-bar με το login
Εχει χώρο να βαλει τα τραγουδια
Εχει χώρο να δει ποιος ον πλήρωσε

Ο πελατης
Λίστα με τραγούδια που θα βλέπει ο χρήστης
Να το βάζει στο καλάθι και να παίρνει το τιτλο ή καποιο διακτριτικό, να τον πετάει να το αγοράσει και να σου δίνει το link για το τραγούδι στην βάση

Smart contracts (ERC721)
Uploading Metadata (IPFS) DONE
NFT Minting Website
Contract Integration in Frontend
Metamask Integration
