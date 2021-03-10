const getProduct = async (id) => {
  await new Promise((resolve) => setTimeout(() => resolve(), 800));

  const response = await fetch(`api/products/${id}`);
  return await response.json();
};

const Product = () => {
  return (
    <section>
      <h2
        style={{
          margin: 0,
          fontSize: '38px',
        }}
      >
        product name
      </h2>
      <p style={{ maxWidth: '600px', fontSize: '24px' }}>product description</p>
      <p style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '40px' }}>
        &euro; 0
      </p>
    </section>
  );
};

export default Product;
