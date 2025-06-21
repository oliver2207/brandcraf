

// import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AnimationProvider } from '../components/animations/AnimationsProvider';

import NavHeaders from '../components/shared/NavHeders';
import Footer from '../components/shared/Footers';


function Layouts() {
  // const { pathname } = useLocation();

  return (

    <div className="bg-black/95 text-white">
      <AnimationProvider>
        <div className="flex min-h-screen flex-col">
          <NavHeaders />
          <main className='container my-8 flex-1  '>
            <Outlet />
          </main>
          <Footer />
        </div>
      </AnimationProvider>
    </div>


  );
}

export default Layouts
