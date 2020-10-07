const arrayPosts = []

function novoPost(){
    const novoPost = {
        titulo: document.getElementById("titulo-post").value,
        autor: document.getElementById("autor-post").value,
        conteudo: document.getElementById("conteudo-post").value,
        imagem: document.getElementById("imagem-post").value
    }

    if (novoPost.titulo === ""){
        window.alert("Coloque um título para seu post!")
    }

    if (novoPost.autor === ""){
        window.alert("Coloque o autor do seu post!")
    }

    if (novoPost.conteudo === ""){
        window.alert("É necessário colocar um conteúdo válido!")
    }

    if (novoPost.imagem === ""){
        document.getElementById("imagem-post").value = ""
    } else if (!novoPost.imagem.includes("http")){
        window.alert("Coloque o endereço de uma imagem válido!")
        document.getElementById("imagem-post").value = ""
    }

    if (novoPost.titulo !== "" && novoPost.autor !== "" && novoPost.conteudo !== ""){
        arrayPosts.push(novoPost)
        document.getElementById("titulo-post").value = ""
        document.getElementById("autor-post").value = ""
        document.getElementById("conteudo-post").value = ""
        document.getElementById("imagem-post").value = ""
    }

    posts()
}

function posts(){
    
    let i = arrayPosts.length-1
    
    const titulo = arrayPosts[i].titulo
    const autor = arrayPosts[i].autor
    const conteudo = arrayPosts[i].conteudo
    const imagem = arrayPosts[i].imagem
    
    const containerDePosts = document.getElementById("container-de-posts")

    containerDePosts.innerHTML += `<h2>${titulo}</h2>`
    containerDePosts.innerHTML += `<h3>${autor}</h3>`
    containerDePosts.innerHTML += `<p>${conteudo}</p>`
    containerDePosts.innerHTML += `<img src="${imagem}" class="img-post">`
}