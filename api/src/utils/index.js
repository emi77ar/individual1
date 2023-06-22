const cleanApi = infoApi.map(game =>{
    return{
        ID: game.id,
        Nombre: game.name,
        Imagen: game.background_image,
        Plataformas: game.platforms,
        Descripcion: game.description,
        FechaLanzamiento: game.released,
        Rating: game.rating,
        Generos: game.genres
    }
})