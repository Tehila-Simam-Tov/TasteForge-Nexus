export interface Recipe {
    
    recipeName: string,
    img: string,
    description: string,
    level: string,
    timeDuration: string,
    kind: string,

    // components: [
    //     {
    //         name: string,
    //         amount: number
    //     }]
    components: { name: string; amount: number }[]; // Change this line,
    idUser: string
}