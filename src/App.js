import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';

function App() {
  return (
    <div className='App dark:bg-dark'>
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
