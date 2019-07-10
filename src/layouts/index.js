import React from 'react';
import styles from './index.css';
import logo from '../assets/logo.png';

const BasicLayout = props => {
  return (
    <div>
      <div className={styles.header}>

        <div className={styles.about}>
          <a href="/about"><p>关于我们</p></a>
          <a href="/contact"><p>联系我们</p></a>
        </div>

        <div className={styles.header_box}>
          <a href="/"><img src={logo} alt=" 图标" className={styles.logo}/></a>
          <div className={styles.box_txt}>
            <a href={"#"}><span className={styles.wold_one}>登录</span></a>
            <a href={"#"}><span className={styles.wold_two}>注册</span></a>
            <a href={"#"}><span className={styles.wold_one}>商家入驻</span></a>
          </div>
        </div>

      </div>
      {props.children}
    </div>
  );
};

export default BasicLayout;
