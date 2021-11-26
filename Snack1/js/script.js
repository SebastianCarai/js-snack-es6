const bicycles = [
    {
        name: 'Bici Blu',
        weightInKg: 40 
    },
    {
        name: 'Bici Rossa',
        weightInKg: 27 
    },
    {
        name: 'Bici Verde',
        weightInKg: 32 
    },
    {
        name: 'Bici Gialla',
        weightInKg: 43
    }
 ];

const bicycleContainer = document.getElementById('bicycle_container');
let minWeightBicycle = bicycles[0];
for (let i=0; i<bicycles.length; i++){
    // Calculating the minWeight
    if (bicycles[i].weightInKg < minWeightBicycle.weightInKg){
        minWeightBicycle = bicycles[i];
    };

    // Printing the result
    const {name, weightInKg} = minWeightBicycle
    const result = `
    <div>
        La bici più leggera è ${name} con il peso di ${weightInKg} Kg
    </div>
    `;

    bicycleContainer.innerHTML = result;
}
