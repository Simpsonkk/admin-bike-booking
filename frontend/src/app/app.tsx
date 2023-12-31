import {
  Notifications,
  RouterOutlet,
} from '~/bundles/common/components/components.js';
import Footer from '~/bundles/common/components/footer/footer.js';
import Header from '~/bundles/common/components/header/header.js';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <RouterOutlet />
      <Notifications />
      <Footer />
    </>
  );
};

export { App };
