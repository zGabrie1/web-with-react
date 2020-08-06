import React from 'react';


import './styles.css'
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os Proffys disponíveis" >
               <form action="" id="search-teachers">
                   <div className="input-block">
                       <label htmlFor="subject">Matéria</label>
                       <input type="text" id="subject"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="week-day">Dia da semana</label>
                       <input type="text" id="week-day"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="time">Hora</label>
                       <input type="text" id="time"/>
                   </div>
               </form>
           </PageHeader>

           <main>
               <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/68998580?s=460&u=23a7a2ca4aff8addfc06cf1aba0fd018eccccacc&v=4" alt="mão"/>
                        <div>
                            <strong>
                                Professor1
                            </strong>
                            <span>Filosofia</span>
                        </div>
                    </header>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br/><br/>
                        Illo, soluta. Quia aliquid dicta suscipit dolorem hic quidem,
                    </p>
                    <footer>
                        <p>
                            preço/hora
                            <strong>R$20,00</strong>
                        </p>
                        <button type="button" >
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
               </article>
           </main>
        </div>
    )
}

export default TeacherList;