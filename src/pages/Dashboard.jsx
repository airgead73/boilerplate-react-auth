import useFetch from '../hooks/useFetch';
import { BASEURL } from '../constants';
import { Figure } from '../components';

function Dashboard() {

  const { data: products, error, isPending } = useFetch(`${BASEURL}/products?limit=5&sort=desc`);

  return (
    <div>
      <h2>dashboard</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>products loading...</div> }
      <div className="figure-container">
      { products && products.map((product) => (
        <Figure key={product.id} item={product}/>
      ))}
      </div>

    </div>
  )

}

export default Dashboard;
