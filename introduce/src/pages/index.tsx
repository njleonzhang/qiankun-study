import styles from './index.less';
import { MicroAppWithMemoHistory } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>I am introduce, I am in sub project</h1>
    
      <div className='container'>
        <MicroAppWithMemoHistory name="list" url='/'/>
      </div>
    </div>
  );
}
