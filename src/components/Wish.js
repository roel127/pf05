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
  const resultWishList = vals.reduce((acc,cur)=>{
    cur.forEach(item=>{
      wishProductIds.forEach(cpValue=>{
        if(item.id === cpValue){
          acc.push(item);
        }
      })
    })
    return acc;
  },[])

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