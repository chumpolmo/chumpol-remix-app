function MyTest02() {
  const vehicles = ['mustang', 'f-150', 'expedition'];
  // const [car, truck, suv] = vehicles;
  const [car,, suv] = vehicles;

  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  // myVehicle(vehicleOne);
  
  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    return message;
  }
  
  return (
    <div>
      <h1>Car Lists:</h1>
      <p>
        <strong>Car name:</strong> {car}<br />
        <strong>Suv name:</strong> {suv}<br />
        <strong>My Vehicle:</strong> {myVehicle(vehicleOne)}<br />
      </p>
    </div>
  );
}

export default MyTest02;

