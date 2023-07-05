
const DateTime = () => {
    let currentDateTime = new Date();

    let date = currentDateTime.getDate();
    let month = currentDateTime.getMonth();
    let year = currentDateTime.getFullYear();

    let hour = currentDateTime.getHours();
    let minutes = currentDateTime.getMinutes();

    let amOrPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12;
    hour = hour ? hour : 12;

    let dates = date.toString().padStart(2, '0') + '/' + month.toString().padStart(2, '0') + '/' + year.toString().padStart(2, '0')
    let time = hour.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ' ' + amOrPm

    let dateAndTime = dates +' '+time

    return dateAndTime
}

console.log(DateTime())



