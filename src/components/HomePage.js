import Menu_18 from './Menu_18';
// import items from '../data';
import { useState, useEffect } from 'react'; //hooks
import Categories_18 from './Categories_18';

const HomePage = () => {
  let [count, setCount] = useState(0); //計算skip的次數
  let [allTours, setAllTours] = useState([]); //所有景點
  let [data, setData] = useState([]); //個別資料陣列
  let url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=${count}&$format=JSON`; //宣告API
  const allCategories = [
    //設定按鈕標籤
    `all`,
    `臺北市`,
    `新北市`,
    `基隆市`,
    `桃園市`,
    `新竹市`,
    `新竹縣`,
    `苗栗縣`,
    `臺中市`,
    `彰化縣`,
    `南投縣`,
    `雲林縣`,
    `嘉義市`,
    `嘉義縣`,
    `臺南市`,
    `高雄市`,
    `屏東縣`,
    `宜蘭縣`,
    `花蓮縣`,
    `臺東縣`,
    `連江縣`,
    `金門縣`,
    `澎湖縣`,
    // console.log('allCategorise', allCategories);
  ];

  const getAllData = async () => {
    const response = await fetch(url); //呼叫API抓下30個資料
    const allData = await response.json(); //30個資料轉成JSON
    setAllTours((allTours = allTours.concat(allData))); //把30個資料存到陣列裡面
    setData(allData);
    // console.log('alldata', allData);
    console.log('allTours', allTours);
  };

  useEffect(() => {
    url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=${count}&$format=JSON`;
    getAllData();
  }, [count]);

  const filterItems = (county) => {
    //資料比對(用縣市名稱比對)
    if (county === 'all') {
      console.log('county', county);
      setData(allTours);
      return;
    }
    //看address的前三個字有沒有跟按鈕一樣
    const newItems = allTours.filter(
      (item) => item.Address.substr(0, 3) === county
    );
    //得出特定縣市的資料加進陣列中
    setData(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>交通部觀光景點</h2>
          <button className='loadMore-btn' onClick={() => setCount(count + 30)}>
            LOAD MORE
          </button>
          <div className='underline'></div>
        </div>
        <Categories_18 categories={allCategories} filterItems={filterItems} />
        <Menu_18 items={data} />
      </section>
      <div id='infinite-scroll-trigger'></div>
    </main>
  );
};

export default HomePage;
