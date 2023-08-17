import { BiTrash } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { clearWish, removeFromWish } from '../redux/User';

export default function Wish( {list} ){
  const { wishProductIds } = useSelector(state => state.wish);
  const dispatch = useDispatch();

  const vals = Object.keys(list).map(key => list[key]);
  // let resultWishList = [];
  // vals.forEach(item=>{
  //   item.forEach(item2=>{
  //     wishProductIds.forEach(cpValue=>{
  //       if(item2.id === cpValue){
  //         resultWishList.push(item2);
  //       }
  //     })
  //   })
  // })
  // const resultWishList = vals.reduce((acc,cur)=>{
  //   cur.forEach(item=>{
  //     wishProductIds.forEach(cpValue=>{
  //       if(item.id === cpValue){
  //         acc.unshift(item);
  //       }
  //     })
  //   })
  //   return acc;
  // }, [])
  const resultWishList = vals.reduce((acc,cur)=>{
    cur.forEach(item=>{
      wishProductIds.forEach(cpValue=>{
        if(item.id === cpValue.id){
          item.times = cpValue.times;
          acc.unshift(item);
        }
      })
    })
    return acc.sort((a,b)=>a.times > b.times ? -1 : a.times < b.times ? 1 : 0);
  }, [])
  console.log(wishProductIds);

  return(
    <div id="wishWrap">
      {
        !resultWishList.length < 1 &&
        (<p>
          <button type='button' onClick={()=>dispatch(clearWish())}>비우기</button>
        </p>)
      }
      {
        !resultWishList.length < 1 &&
        (<div id="wishList">
          {resultWishList.map(item=>{return(
            <figure key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <figcaption>
              <dl>
                <dt>{item.name}</dt>
                <dd>
                  <button type="button" onClick={()=>dispatch(removeFromWish(item.id))}><BiTrash /></button>
                </dd>
              </dl>
            </figcaption>
          </figure>
          )
          })}
        </div>)
      }
      {
        wishProductIds.length < 1 &&
        (<footer>
          <div id='empty'>
            <p>
              찜한 컨텐츠가 없습니다
            </p>
          </div>
        </footer>)
      }
    </div>
  )
}

// wishProductIds를 객체를 value로 가진 배열로 만듦
// 해당 객체는 property로 id와 times=new Date().getTime()을 가짐
// resultWishList에는 item.id === cpValue.id 개체가 들어감
// if(item.id === cpValue) cpValue.times는 resultWishList의 value의 property로 새로 들어감
// resultWishList내의 value.times로 sort를 진행!