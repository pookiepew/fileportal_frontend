import { useEffect } from 'react';

import { websocket } from './utils/websocket';

const App = () => {
  console.log('[App] Render');
  useEffect(() => {
    websocket.connect();
  }, []);

  return <div className='App'></div>;
};

export default App;
