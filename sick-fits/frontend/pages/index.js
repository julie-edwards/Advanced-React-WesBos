import react from 'react';
import Link from 'next/link';

const Home = props => (
  <div>
    <p>Hi!</p>
    <Link href="sell">
      <a>Sell</a>
    </Link>
  </div>
)

export default Home;
