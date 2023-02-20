import style from "../pages/Home.module.css"

const Home = () => {
  return (
    <div style={style.container}>
      <h1 style={style.title}>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}

export default Home;