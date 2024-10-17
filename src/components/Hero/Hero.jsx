import './Hero.css';
import focal from './../../assets/image/Group1.png'
import { Link } from 'react-router-dom';
import focal2 from './../../assets/image/focalXaa2.png'

export default function Hero() {
      return (
            <section className='Hero'>
                  <nav className='NavBar'>
                        <img src={focal} alt="" />
                        <h2 style={{ marginLeft: '-25px' }}>Learn .. And Have Fun</h2>
                        <img src={focal2} alt="" />
                  </nav>
                  <div className='Content'>
                        <div className='ph1'></div>
                        <div className='ph2'></div>
                  </div>
                  <div className='ppp'>
                        <h1>.اكتب فصلاً جديداً في قصة نجاحك</h1>
                        <p className='descrip'>
                              ،أكاديمية التدريب التابعة لشركة فوكال اكس .X academy مرحباً بكم في
                              <br />
                                نحن هنا نؤمن بكم وبقدراتكم، أنتم لستم فقط متدربين
                              <span>
                                    .بل شركاء نجاح مستقبلين
                              </span>
                        </p>
                        <p className='descrip1'>
                              .X academy مرحباً بكم في
                              <br />
                              ،أكاديمية التدريب التابعة لشركة فوكال اكس
                              <br />
                              نحن هنا نؤمن بكم وبقدراتكم، أنتم لستم فقط متدربين
                              <span>
                                    .بل شركاء نجاح مستقبلين
                              </span>
                        </p>
                        <button>
                              <Link style={{zIndex:'123123'}} to={'/Form'}>
                                    توقيع العقد الإلكتروني
                              </Link>
                        </button>

                        <div className='counts'>
                              <div>
                                    <p>5+</p>
                                    <span>دفعات تدريب</span>
                              </div>
                              <div>
                                    <p>24+</p>
                                    <span>مدرب</span>
                              </div>
                              <div>
                                    <p>3000+</p>
                                    <span>متدرب</span>
                              </div>
                        </div>
                  </div>
            </section>
      )
}