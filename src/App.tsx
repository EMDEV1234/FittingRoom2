import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  try {
    return <RouterProvider router={router} />;
  } catch (error) {
    console.error("Router error:", error);
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Navigation Error</h1>
        <p>There was a problem loading the application.</p>
        <button onClick={() => window.location.reload()}>
          Reload Page
        </button>
      </div>
    );
  }
}

export default App;
