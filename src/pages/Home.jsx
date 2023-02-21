import css from "../pages/Home.module.css"

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook App{' '}
        <span role="img" aria-label="Phone icon">
          📖
        </span>
      </h1>
    </div>
  );
}

export default Home;