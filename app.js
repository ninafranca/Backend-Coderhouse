const Contenedor = require('./classes/contenedor')

function init(){
    const contenedor = new Contenedor("objects.txt")

    let responses = []

    responses = [ ...responses, contenedor.save({                                                                                                                                             
      title: 'Escuadra',
      price: "123.45",
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
    })]
    
    responses = [ ...responses, contenedor.save({                                                                                                                                                  
      title: 'Calculadora',
      price: "234.56",
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'
    })]
      
    responses = [ ...responses, contenedor.save({                                                                                                                                           
      title: 'Globo Terráqueo',
      price: "345.67",
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'
    })]

    responses = [ ...responses, contenedor.save({                                                                                                                                           
      title: 'Lapices',
      price: "125.67",
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'
    })]

    console.log('responses', responses)
        
    contenedor.getById("5MK2")
        
    contenedor.getAll()
        
    contenedor.deleteById("ucfF")
        
    contenedor.deleteAll()
}

init()