import useFetch from '../hooks/useFetch';
import { BASEURL } from '../constants';

function Dashboard() {

  const { data: products, error, isPending } = useFetch(`${BASEURL}/products`);

  return (
    <div>
      <h2>dashboard</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>products loading...</div> }
      { products && products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </div>
  )

}

export default Dashboard;
