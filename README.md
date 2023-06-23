# SERVER BACK-END PER OSPEDALE
Ci sono 2 parti distinte:
- una pubblica, visibile a tutti gli utenti che navigano sul sito;
- una privata, visibile solo a chi è autenticato e gestendo le pagine visibili a seconda dei
ruoli (***medici*** o ***infermieri/admin*** – ***pazienti/user***).

## PROGETTO DAL PUNTO DI VISTA BACK-END
Il ***back-end*** in questa situazione deve riusice ***impeccabilmente*** a restituire tutto in necessario alle richieste del ***front-end***, oltre a costruire un ***API REST***
per gli ***admin*** dell'ospedale, dove possono gestire tutti i pazienti tramite ***GET POST PUT DELETE***.

## LE AUTENTICAZIONI
Le ***autenticazioni*** sono delle semplici request al ***front-end*** che rimanda poi sarver i dati ideologicamente in questa forma:
<code>{ "username": foobar, "password": cripta("foobar") }</code>

Quindi il back-end si troverà a gestire un username in chiaro e una ***password già criprata***.
Dopo il back-end ricripterà nuovamente la password e la salverà in ***database*** (nel nostro caso ***mysql***)

## LE ROTTE DA CREARE
Essendo un progetto abbastanza formoso, è meglio fare un re-cap delle rotte che il ***front-end*** possa servire al ***client***:
 - /Home: la ***home*** è la pagina ***principale***, la quale è composta da: 
    -- presentazione dello studio;
    -- presentazione medici con immagine profilo e specializzazione;
    -- mappa della posizione dello studio (valutare Google Maps o OpenMaps);
    -- descrizione dei servizi offerti (visite, analisi ecc.)
 - /Visite: composta da un ***presentazione dello studio***;
-- menù a tendina con vari tipi di visite che possono essere fatte dai medici dello studio.
-- Ogni voce rimanda a una pagina di dettaglio dove si spiega in maniera dettagliata di che visita si tratta, quale sia il medico specializzato in quella visita
-- un pulsante per eventualmente effettuare la prenotazione //che fa loggare l'utente.
 - /orari: per ogni medico devono comparire i giorni della settimana con le fasce orarie disponibili;
 - /contatti: ***inserire i dati generali dello studio*** (name, posizione, numero fisso, email di segreteria) e poi ***per ogni medico*** devono comparire i ***dati della p. iva, email e numero di telefono***
 - /login: non credo servano spiegazioni
 - /register: anche qui autoesplicativo
 ### REQUESTS AL BACK-END
 Le request al back-end arriveranno da parte delle seguenti rotte:
  - /login: 
  --***requestForm***:
  <code>{ "username": "foobar", "password": cripta("foobar") }</code>
  --***responseForm***:
  Prima avviene un controllo di esistenza delle credenziali, dopo si verifica se l'email è confemata e se tutto è andato a buon fine restituisce: <code>{"Token": "JWT"}</code>
  altrimenti la risposta sarà: <code>{}</code>
  quindi il front-end avrà un codice del tipo:
  <code>if(typeof rispostaDelBackEnd.token != "undefined"){
    send(rispostaDelBackEnd.token)
  }
  return "Credenziali sbagliate oppute email non confermata, ricontrolla tutto e riprova."</code>
  - /register
  --***requestForm***:
  <code>{"name":"foobar","surname":"foobar","username":"foobar","email":"foobar","number":"foobar", "password": criptato("foobar"),"doctor":"foobar"}</code>
  --***responseForm***:
    Se l'email e il doctor sono validi: <code>{"isValidForm": "1"}</code> //quindi è stato caricato sul database di pazienti, ed è in attesa di conferma tramite email (quindi accede makeId(64) a una porta differente)
  quando il client visita l'url, il back-end conferma l'email, cambiando il dato nel field:inConfirmed.
  altimenti:<code>{"isValidForm": "0"}</code> 

 ## LE ROTTE AUTENTICATE
 SUPER-ADMIN
 - /personaleStudio: gestione dati dei medici/personale dello studio
 DOCTOR
 - /prenotazioni: pagina di gestione delle prenotazioni per le visite e calendario per visualizzazione degli appuntamenti (valutare se mettere api Google calendar)
 - /pazienti: gestione dati e schede mediche dei pazienti
 SEGRETERIA
 - /prenotazioni: pagina di gestione delle prenotazioni per le visite e calendario per visualizzazione degli appuntamenti (valutare se mettere api Google calendar)
 USER
 - /prenotazioni: calendario con gli appuntamenti
 ### REQUEST AL BACK-END
 Il SUPER-ADMIN e i dottori e la segreteria avranno dei token "segreti" associati ad ogni account 

 <code>req.body.user: makeId(64);
 if(req.body.user is in decript(adminUsers)){
    fai1();
 }else if(req.body.user in decript(docUsers)){
    fai2();
 }else if(req.body.user in decript(segUsers)){
    fai3();
 }else{
    fai4();
 }</code>

 - /personaleStudio: a questa rotta può accedere solamente il SUPER-ADMIN, in questa pagina l'admin può tramite il front mandare:
 --***requestsForms***:per ogni azione nel body dovrà assere presente un "tokenAmm" per veriificare chi sta mandando le richieste.
--GET-<code>{"tokenAmm":"foo"}</code>
--GET-<code>{"doctorName":"foo","tokenAmm":"foo"}</code>
--PUT-<code>{"doctorName":"foo","tokenAmm":"foo"}</code> che risponde lo status dell'azione
--PUSH-<code>{"doctorName":"foo","doctorSurname":"foo","doctorEmail":"foo","doctorUsername":"foo","number":"foo","days":"foo","workTime":"H-H","tokenAmm": "foo"}</code> dove il back-end prende il name, lo carica sul database, con affianco un makeId(64) criptato

 - /pazienti: a questa rotta possono accederci solamente i dottori
--***requestsForms***:per ogni azione nel body dovrà assere presente un "tokenAmm" per veriificare chi sta mandando le richieste.
--GET-<code>{"tokenAmm":"foo"}</code>
--GET-<code>{"patientUsername":"foo","tokenAmm":"foo"}</code>
--PUT-<code>{"patientUsername":"foo","toChange":"il campo","data":"foobar","tokenAmm":"foo"}</code>

 - /prenotazioni: a questa rotta possono accedervi sia i dottori che la segreteria
--***requestsForms***:per ogni azione nel body dovrà assere presente un "tokenAmm" per veriificare chi sta mandando le richieste.
--GET-<code>{"tokenAmm":"foo"}</code>
--GET-<code>{"patientUsername":"foo","tokenAmm":"foo"}</code>
--PUT-<code>{"patientUsername":"foo","doctorName":"foo","description":"foobar","data":"GG MM AA H:M","tokenAmm":"foo"}</code>
--POST-<code>{"patientUsername":"foo","toChange":"il campo","data":"foobar","tokenAmm":"foo"}</code>