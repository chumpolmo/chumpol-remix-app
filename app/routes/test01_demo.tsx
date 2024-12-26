function MyTest01() {
  var name = "Chumpol Mokarat";
  var major = "Information Technology";
  let tel = "08xxxxxxxx";
  const position = "Assistant Professor";
  
  return (
    <div>
      <h1>My Profile:</h1>
      <p>
        <strong>Name:</strong> {name}<br />
        <strong>Position:</strong> {position}<br />
        <strong>Major:</strong> {major}<br />
        <strong>Contact:</strong> {tel}<br />
      </p>
    </div>
  );
}
  
export default MyTest01;

