import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './components/data';

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        // image={item.image}
        // rating={item.rating}
        // reviewCount={item.reviewCount}
        // country={item.country}
        // title={item.title}
        // city={item.city}
        // openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cards}</section>
    </div>
  );
}

export default App;
