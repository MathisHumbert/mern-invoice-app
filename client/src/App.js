import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomeInvoicePage,
  InvoicePage,
  RegisterPage,
  ProtectedRoute,
  LandingPage,
  SharedLayout,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Routes */}
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomeInvoicePage />} />
          <Route path='/invoice/:id' element={<InvoicePage />} />
        </Route>
        {/* Landing and Login/Register Routes */}
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/landing' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
