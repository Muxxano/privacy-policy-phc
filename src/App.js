import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Privacy Policy</h2>
        <section id="privacy-policy-content">
          <p>
            This application does NOT collect any form of user information and
            is intended for use by adults who are at least 18 years old.
          </p>
          <p>
            The purpose of this application is just to organize and provide
            public information of medical professionals as guidance to
            individuals who wish to seek professional help.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
