export const VarDump = ({ children }) => (
  <pre
    style={{
      borderTop: '1px solid lightgray',
      borderBottom: '1px solid lightgray',
      margin: '30px 0',
      padding: '20px 0',
      fontSize: '20px',
    }}
  >
    {JSON.stringify(children, null, 2)}
  </pre>
);
