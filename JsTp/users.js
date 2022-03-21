let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]

  function addRow(){
    var name = document.getElementById("nom").value;
    var prenom = document.getElementById('prenom').value;
    var etat = document.getElementById('etat').value;
    var username = document.getElementById('username').value;
    var datedecreation = document.getElementById('datedecreation').value;
    var matricule = document.getElementById('matricule').value;

    users.push(
       {
        id: Math.random(),
        createdDate: datedecreation,
        status: etat,
        firstName: name,
        lastName : prenom,
        userName: username,
        registrationNumber: matricule,
    }
       );
       console.log(users);
  }



    var mytable = document.getElementById('mytable');
    var del = `	<a href="#deleteEmployeeModal" class="delete" id="del" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
    `;
    for(var i=0;i<=users.length;i++){

        var row = `<tr>
                    <td> ${users[i].id} </td>
                    <td> ${users[i].createdDate} </td>
                    <td> ${users[i].status} </td>
                    <td> ${users[i].firstName} </td>
                    <td> ${users[i].lastName} </td>
                    <td> ${users[i].userName} </td>
                    <td> ${users[i].registrationNumber} </td>
                    <td>${del}</td>
                    </tr>`
                    mytable.innerHTML += row;

      
    }
