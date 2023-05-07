function getUsers() {
    let requist = new XMLHttpRequest();
    requist.addEventListener('load', render);
    requist.addEventListener('error', errorRender);

    requist.open('GET', 'https://reqres.in/api/users?page=1');
    requist.send();
}

function render() {
    let response = this.responseText;
    let responseData = JSON.parse(response);
    var fragment = document.createDocumentFragment ();
    console.log(responseData);

    responseData.data.forEach (item => {
        let li = document.createElement('li');
        
        let pName = document.createElement('p')
        pName.classList.add('names');
        pName.textContent = item.first_name;

        let img = document.createElement('img');
        img.classList.add('user-img')
        img.setAttribute('alt', item.id);
        img.src = item.avatar;

        fragment.appendChild(li);
        li.appendChild(img);
        li.appendChild(pName);
    });
    
    document.getElementById('ul-api').appendChild(fragment);
}

function errorRender() {
    let pError = document.createElement('p');
    pError.textContent = 'Server Error';

    document.getElementById('api-user-name').appendChild(pError);
}

getUsers();