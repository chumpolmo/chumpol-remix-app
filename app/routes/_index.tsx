function MyIndex() {
  const message1 = () => {
    return "Chumpol Mokarat";
  }

  const message2 = (scode: any) => {
    return "Chumpol Mokarat (" + scode + ")";
  }

  return (
    <>
      <h1>Hi, Web Programming x {message1()}.</h1>
      <h1>Hi, Web Programming x {message2('026799999999-9')}.</h1>
    </>
  );
}

export default MyIndex;

