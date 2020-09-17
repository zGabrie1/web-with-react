import React, { FormEvent, useState } from 'react';


import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList() {

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDday] = useState('');
    const [time, setTime] = useState('');

    function searchTeachers(e: FormEvent) {
        e.preventDefault
    }

    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os Proffys disponíveis" >
               <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={e => {setSubject(e.target.value)}}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia ' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Física', label: 'Física'},
                            { value: 'Geografia', label: 'Geografia'},
                            { value: 'História', label: 'História'},
                            { value: 'Inglês', label: 'Inglês'},
                            { value: 'Educação física', label: 'Educação física'},
                            { value: 'Química', label: 'Química'},
                            { value: 'Português', label: 'Português'}
                        ]}
                    />
                   <Select 
                        name="week_day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={e => {setWeekDday(e.target.value)}}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda' },
                            { value: '2', label: 'Terça' },
                            { value: '3', label: 'Quarta' },
                            { value: '4', label: 'Quinta'},
                            { value: '5', label: 'Sexta'},
                            { value: '6', label: 'Sábado'}
                        ]}
                    />
                   <Input type="time" 
                        name="time"  
                        label="Hora"
                        value={time}
                        onChange={e => {setTime(e.target.value)}}
                    />
               </form>
           </PageHeader>

           <main>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
           </main>
        </div>
    )
}

export default TeacherList;