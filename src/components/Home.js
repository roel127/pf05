import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

export default function Home( {list} ){
  const drama = list.drama;
  const movie = list.movie;
  const anime = list.animation;
  return(
      <article>
        <section>
          <h2>드라마</h2>
          <div className='swiperWrap'>
            <Swiper
              slidesPerView={2.5}
              spaceBetween={0}
              grabCursor={true}
              modules={[Pagination]}
              pagination={{
                clickable: false,
              }}
              className="mySwiper"
            >
              {drama.map(item=>{return(
                <SwiperSlide key={item.id}>
                  <figure>
                    <img src={item.imageUrl} alt={item.name} />
                    <figcaption>
                      <dl>
                        <dt>{item.name}</dt>
                        <dd>{item.genre}</dd>
                        <dd>
                          <button type='button'><AiOutlineHeart /></button>
                          <button type='button'><AiFillHeart /></button>
                        </dd>
                      </dl>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              )
              })}
            </Swiper>
          </div>
        </section>
        <section>
          <h2>영화</h2>
          <div className='swiperWrap'>
            <Swiper
              slidesPerView={2.5}
              spaceBetween={0}
              grabCursor={true}
              modules={[Pagination]}
              pagination={{
                clickable: false,
              }}
              className="mySwiper"
            >
              {movie.map(item=>{return(
                <SwiperSlide key={item.id}>
                  <figure>
                    <img src={item.imageUrl} alt={item.name} />
                    <figcaption>
                      <dl>
                        <dt>{item.name}</dt>
                        <dd>{item.genre}</dd>
                        <dd>
                          <button type='button'><AiOutlineHeart /></button>
                          <button type='button'><AiFillHeart /></button>
                        </dd>
                      </dl>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              )
              })}
            </Swiper>
          </div>
        </section>
        <section>
          <h2>애니메이션</h2>
          <div className='swiperWrap'>
            <Swiper
              slidesPerView={2.5}
              spaceBetween={0}
              grabCursor={true}
              modules={[Pagination]}
              pagination={{
                clickable: false,
              }}
              className="mySwiper"
            >
              {anime.map(item=>{return(
                <SwiperSlide key={item.id}>
                  <figure>
                    <img src={item.imageUrl} alt={item.name} />
                    <figcaption>
                      <dl>
                        <dt>{item.name}</dt>
                        <dd>{item.genre}</dd>
                        <dd>
                          <button type='button'><AiOutlineHeart /></button>
                          <button type='button'><AiFillHeart /></button>
                        </dd>
                      </dl>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              )
              })}
            </Swiper>
          </div>
        </section>
      </article>
  )
}