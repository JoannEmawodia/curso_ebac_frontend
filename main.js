document.addEventListener('DOMContentLoaded', function(){
    const campoDoAvatar = document.querySelector('#avatar');
    const campoDoNome = document.querySelector('#nome');
    const campoProfile = document.querySelector('#profile');
    const campoRepositorio = document.querySelector('#repositorio');
    const campoSeguidores = document.querySelector('#seguidores');
    const campoSeguindo = document.querySelector('#seguindo');
    const botaoLink = document.querySelector('#profile-link');

    fetch('https://api.github.com/users/JoannEmawodia')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        campoDoAvatar.src = json.avatar_url;
        campoDoNome.innerHTML = json.name;
        campoProfile.innerHTML = json.login;
        campoRepositorio.innerHTML = json.public_repos;
        campoSeguidores.innerHTML = json.followers;
        campoSeguindo.innerHTML = json.following;
        botaoLink.href = json.html_url;
    })
})