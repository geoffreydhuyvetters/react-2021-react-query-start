import Link from 'next/link';

const getProducts = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 800));

  const response = await fetch(`api/products`);
  return await response.json();
};

const Index = () => {
  return (
    <section>
      <h2
        style={{
          margin: 0,
          fontSize: '38px',
        }}
      >
        products
      </h2>
      <ul style={{ padding: 0 }}>
        <li style={{ listStyleType: 'none' }} key={367876}>
          <Link href={`/product/367876`}>product name</Link>
        </li>
      </ul>
    </section>
  );
};

export default Index;
