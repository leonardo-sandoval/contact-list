let Contact = function (name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

let contacts = [];
contacts.push(new Contact("sergio", "quecuentacesar@gmail.com", "255551564"));
contacts.push(new Contact("cesar", "todobiensergio@gmail.com", "4155152515"));


let listaContacto = function () {
    document.getElementById('displayContacts').innerHTML = " ";
    for (let i = 0; i < contacts.length; i++) {
        document.getElementById('displayContacts').innerHTML += '<tr><td id="name' + i + '">' + contacts[i].name + '</td><td id="email' + i + '">' + contacts[i].email + '</td><td id="phone' + i + '">' + contacts[i].phone + '</td><td><button class="btn btn-warning" onclick=actualizar(' + i + ')>actualizar</button></div><button class="btn btn-danger" onclick=eliminarcontacto(' + i + ')>Eliminar</button></td></tr>';
    }
}

let nuevocontacto = function () {
    var name = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;
    var phone = document.getElementById('inputPhone').value;
    var contact = new Contact(name, email, phone);
    contacts.push(contact);
    listaContacto();
}

let eliminarcontacto = function (i) {
    contacts.splice(i, 1);
    listaContacto();
}

let actualizar = function (i) {
    contactId = i;
    document.getElementById("inputName").value = contacts[i].name;
    document.getElementById("inputEmail").value = contacts[i].email;
    document.getElementById("inputPhone").value = contacts[i].phone;
    document.getElementById("submitButtons").innerHTML = 
    '<button id="updateButton"  onclick=submitUpdatedContact(contactId)>ACTUALIZAR</button>';
   
}

let submitUpdatedContact = function (i) {
    contacts[i].name = document.getElementById("inputName").value;
    contacts[i].email = document.getElementById("inputEmail").value;
    contacts[i].phone = document.getElementById("inputPhone").value;

    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPhone").value = "";

    listaContacto();
}


listaContacto();