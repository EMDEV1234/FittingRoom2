// Simple router for testing
import { createHashRouter } from "react-router-dom";

const TestHome = () => (
  <div style={{ padding: '20px' }}>
    <h1>Test Home Page</h1>
    <p>Router is working!</p>
  </div>
);

export const simpleRouter = createHashRouter([
  {
    path: "/",
    element: <TestHome />,
  },
]);
