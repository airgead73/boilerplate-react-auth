import useFetch from '../hooks/useFetch';
import { URI_PRODUCTS } from '../constants';

function Dashboard() {

  const { data: products, error, isPending } = useFetch(URI_PRODUCTS);

  console.log(products);

  return (
    <div>
      <h2>dashboard</h2>
    </div>
  );
}

export default Dashboard;
