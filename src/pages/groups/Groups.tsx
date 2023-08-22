// @ts-ignore
import React from 'react';
import { ModalGroup } from '../../components/modal-group/ModalGroup';
import { Table } from '../../components/tables/table/Table';
import { ButtonTable } from '../../components/tables/button-table/ButtonTable';
import './Groups.css';

export const Groups = () => {
    const data = [
        {
            name: '20-ПИ',
            profile: 'Прикладная Информатика',
            department: 'ИТиМ',
            email: '20-pi@university.edu',
            login: 'gruppa20pi',
            password: '20pipipi',
        },
        {
            name: '20-ПИ',
            profile: 'Прикладная Информатика',
            department: 'ИТиМ',
            email: '20-pi@university.edu',
            login: 'gruppa20pi',
            password: '20pipipi',
        },
        {
            name: '20-ПИ',
            profile: 'Прикладная Информатика',
            department: 'ИТиМ',
            email: '20-pi@university.edu',
            login: 'gruppa20pi',
            password: '20pipipi',
        },
        {
            name: '20-ПИ',
            profile: 'Прикладная Информатика',
            department: 'ИТиМ',
            email: '20-pi@university.edu',
            login: 'gruppa20pi',
            password: '20pipipi',
        },
        {
            name: '20-ПИ',
            profile: 'Прикладная Информатика',
            department: 'ИТиМ',
            email: '20-pi@university.edu',
            login: 'gruppa20pi',
            password: '20pipipi',
        },
        {
            name: '20-ПИ',
            profile: 'Прикладная Информатика',
            department: 'ИТиМ',
            email: '20-pi@university.edu',
            login: 'gruppa20pi',
            password: '20pipipi',
        },
        {
            name: '20-ПИ',
            profile: 'Прикладная Информатика',
            department: 'ИТиМ',
            email: '20-pi@university.edu',
            login: 'gruppa20pi',
            password: '20pipipi',
        },
        {
            name: '20-ПИ',
            profile: 'Прикладная Информатика',
            department: 'ИТиМ',
            email: '20-pi@university.edu',
            login: 'gruppa20pi',
            password: '20pipipi',
        },
        {
            name: '20-ПИ',
            profile: 'Прикладная Информатика',
            department: 'ИТиМ',
            email: '20-pi@university.edu',
            login: 'gruppa20pi',
            password: '20pipipi',
        },
    ];

    return (
        <div>
            <div className="groups-title">
                <p>Группы</p>
            </div>
            <ModalGroup />
            <Table data={data} user="group" />
            <ButtonTable />
        </div>
    );
};
