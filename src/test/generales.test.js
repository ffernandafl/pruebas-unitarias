
describe ('Probando Jest', () => {
    test ('Prueba de objetos iguales', () => {

        const datos1={
            nombre: 'Fernanda Flores',
            edad: 22
        };

        const datos2 = {
            nombre:'Fernanda Flores',
            edad: 22
        };

        expect (datos1).toEqual(datos2);
    })
})