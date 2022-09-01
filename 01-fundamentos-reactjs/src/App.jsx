import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return(
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
            author="Pedro Costa"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet natus, adipisci exercitationem, unde facilis enim error temporibus repudiandae sunt laborum commodi! Atque voluptatem impedit possimus, voluptas et repellat minima libero."/>

        </main>
      </div>
      </div>
  )
}