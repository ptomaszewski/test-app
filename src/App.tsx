import Donate from './components/donate/Donate';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <Header />

      <div className="flex bg-[#F4F8FA] flex-grow w-full justify-center">
        <Modal>
          <Donate />
        </Modal>
      </div>
    </div>
  );
}

export default App;
