function MyTest02() {

  const numbersOne = [1, 2, 3];
  const numbersTwo = [4, 5, 6];
  const numbersCombined = [...numbersOne, ...numbersTwo];
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const [one, two, ...rest] = numbers;
  
  const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }

  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};
  
  return (
    <div>
      <h1>Number Lists:</h1>
      <p>
        <strong>Numbers Combined:</strong> {numbersCombined}<br />
        <strong>Number (one):</strong> {one}<br />
        <strong>Number (two):</strong> {two}<br />
        <strong>Number (rest):</strong> {rest}<br />
        <strong>Updated Vehicle:</strong> {JSON.stringify(myUpdatedVehicle)}<br />
      </p>
    </div>
  );
}

export default MyTest02;

