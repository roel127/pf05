import { BiTrash } from 'react-icons/bi';

export default function Wish( {list} ){
  return(
    <div id="wishWrap">
      <p>
        <button>비우기</button>
      </p>
      <div id="wishList">
        {list.drama.map(item=>{return(
          <figure key={item.id}>
          <img src={item.imageUrl} alt={item.name} />
          <figcaption>
            <dl>
              <dt>{item.name}</dt>
              <dd>
                <button type="button"><BiTrash /></button>
              </dd>
            </dl>
          </figcaption>
        </figure>
        )
        })}
        {list.movie.map(item=>{return(
          <figure key={item.id}>
          <img src={item.imageUrl} alt={item.name} />
          <figcaption>
            <dl>
              <dt>{item.name}</dt>
              <dd>
                <button type="button"><BiTrash /></button>
              </dd>
            </dl>
          </figcaption>
        </figure>
        )
        })}
      </div>
      {/* <footer>
        <div id='empty'>
          <p>
            찜한 컨텐츠가 없습니다
          </p>
        </div>
      </footer> */}
    </div>
  )
}