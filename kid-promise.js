
// const newToy = () => { 
//     new Promise((resolve, reject) => {
        
//     if(parentsHappy){
//         const toy = {
//             brand: 'Lego'
//         }
//         resolve(toy);
//     }else{
//         const reason = new Error('Grade is lower then expected');
//         reject(reason)
//     }
// }).then((goodGrade) => {
//     console.log(goodGrade)
// }).catch((e) => {
//     console.log(e.message);
// })
// }
// newToy();
const parentsPromise = {
    toy: 'Lego'
}
const goodGrade = true;

const newToyAs = async () => {
   try{
       const grade = await console.log(goodGrade);
       const toy = await console.log(parentsPromise.toy);
    }   
    catch(e){
        const bad = new Error('Grade is lower then expected');
        console.log(bad);
}
}
newToyAs()

// const newToyNew = () => { 
//     new Promise((resolve, reject) => {
//         const name = 'Dejan'
//         resolve(name).then((a) => {
//             console.log('new',a)
//         }).then(() => {
//             console.log('Drug')
//         }).then(() => {
//             console.log('dealers')
//         }).then(() => {
//             console.log('Anonymus')
//         }).catch((e) => {
//             reject(new Error('Error'));
//         })
        
//     }) 
// }
// newToyNew();