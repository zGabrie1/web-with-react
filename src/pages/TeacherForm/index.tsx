import React from 'react';

import PageHeader from '../../components/PageHeader';

import './style.css';
import warningIcon from '../../assets/images/icons/warning.svg'
import Input from '../../components/Input';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas" 
                description="O primeiro passo é preencher esse formulário de inscrção."
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsApp" label="WhatsApp"/>

                </fieldset>
                
                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input name="subject" label="Matéria"/>
                    <Input name="cost" label="Custo por aula"/>

                </fieldset>

                <footer>
                 <p>
                    <img src= { warningIcon } alt="Aviso importante"/> 
                    Importante! <br/>
                    Preencha todos os dados
                 </p>
                 <button type="button">
                     Salvar cadastro
                 </button>
                </footer>
            </main>

        </div>
    )
}

export default TeacherForm;

