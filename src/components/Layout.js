import Link from 'next/link';

export const Layout = ({ children }) => {
  return (
    <main
      style={{
        fontSize: '30px',
        margin: '20px',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1 style={{ margin: 0, marginBottom: '10px', fontSize: '52px' }}>
        a generic webshop
      </h1>
      <nav style={{ marginBottom: '40px', fontSize: '18px' }}>
        <Link href="/">products</Link>
      </nav>
      {children}
    </main>
  );
};
