import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/68998580?s=460&u=23a7a2ca4aff8addfc06cf1aba0fd018eccccacc&v=4" alt="mão"/>
                        <div>
                            <strong>
                                Professor1
                            </strong>
                            <span>Hardware</span>
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
    );
}

export default TeacherItem;