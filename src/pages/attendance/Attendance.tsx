// @ts-ignore
import React from 'react';
import { Header } from '../../components/header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { AttendanceTable } from '../../components/tables/attendance-table/AttendanceTable';
import './Attendance.css';

export const Attendance = () => {
    const data = [
        {
            name: 'Веретнов Александр Вадимович',
            day1: 'н',
            day2: 'н',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: 'н',
            day21: '',
            day22: 'н',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: 'н',
            day28: '',
            day29: 'н',
            day30: 'н',
            day31: 'н',
        },
        {
            name: 'Чукаев Константин Евгеньевич',
            day1: 'н',
            day2: 'н',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: 'н',
            day21: '',
            day22: 'н',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: 'н',
            day28: '',
            day29: 'н',
            day30: 'н',
            day31: 'н',
        },
        {
            name: 'Иванов Иван Иванович',
            day1: 'н',
            day2: 'н',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: 'н',
            day21: '',
            day22: 'н',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: 'н',
            day28: '',
            day29: 'н',
            day30: 'н',
            day31: 'н',
        },
        {
            name: 'Петров Петр Петрович',
            day1: 'н',
            day2: 'н',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: 'н',
            day21: '',
            day22: 'н',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: 'н',
            day28: '',
            day29: 'н',
            day30: 'н',
            day31: 'н',
        },
        {
            name: 'Сидорова Анна Ивановна',
            day1: 'н',
            day2: 'н',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: 'н',
            day21: '',
            day22: 'н',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: 'н',
            day28: '',
            day29: 'н',
            day30: 'н',
            day31: 'н',
        },
        {
            name: 'Козлов Дмитрий Александрович',
            day1: 'н',
            day2: 'н',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: 'н',
            day21: '',
            day22: 'н',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: 'н',
            day28: '',
            day29: 'н',
            day30: 'н',
            day31: 'н',
        },
        {
            name: 'Смирнова Елена Владимировна',
            day1: 'н',
            day2: 'н',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: 'н',
            day21: '',
            day22: 'н',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: 'н',
            day28: '',
            day29: 'н',
            day30: 'н',
            day31: 'н',
        },
        {
            name: 'Васильев Алексей Сергеевич',
            day1: 'н',
            day2: 'н',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: 'н',
            day21: '',
            day22: 'н',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: 'н',
            day28: '',
            day29: 'н',
            day30: 'н',
            day31: 'н',
        },
        {
            name: 'Николаева Ольга Игоревна',
            day1: 'н',
            day2: 'н',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: 'н',
            day21: '',
            day22: 'н',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: 'н',
            day28: '',
            day29: 'н',
            day30: 'н',
            day31: 'н',
        },
        {
            name: 'Иванова Анастасия Викторовна',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: '',
            day6: '',
            day7: 'н',
            day8: '',
            day9: '',
            day10: 'н',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: '',
            day21: '',
            day22: '',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: '',
            day28: 'н',
            day29: '',
            day30: '',
            day31: 'н',
        },
        {
            name: 'Петрова Екатерина Алексеевна',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: '',
            day6: '',
            day7: 'н',
            day8: '',
            day9: '',
            day10: 'н',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: '',
            day21: '',
            day22: '',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: '',
            day28: 'н',
            day29: '',
            day30: '',
            day31: 'н',
        },
        {
            name: 'Сидоров Игорь Владимирович',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: '',
            day6: '',
            day7: 'н',
            day8: '',
            day9: '',
            day10: 'н',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: '',
            day21: '',
            day22: '',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: '',
            day28: 'н',
            day29: '',
            day30: '',
            day31: 'н',
        },
        {
            name: 'Козлова Алена Дмитриевна',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: '',
            day6: '',
            day7: 'н',
            day8: '',
            day9: '',
            day10: 'н',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: '',
            day21: '',
            day22: '',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: '',
            day28: 'н',
            day29: '',
            day30: '',
            day31: 'н',
        },
        {
            name: 'Смирнов Илья Алексеевич',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: 'н',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: 'н',
            day12: '',
            day13: 'н',
            day14: '',
            day15: '',
            day16: 'н',
            day17: 'н',
            day18: 'н',
            day19: '',
            day20: '',
            day21: '',
            day22: 'н',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: 'н',
            day27: '',
            day28: '',
            day29: 'н',
            day30: '',
            day31: '',
        },
        {
            name: 'Васильева Анна Сергеевна',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: 'н',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: 'н',
            day12: '',
            day13: 'н',
            day14: '',
            day15: '',
            day16: 'н',
            day17: 'н',
            day18: 'н',
            day19: '',
            day20: '',
            day21: '',
            day22: 'н',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: 'н',
            day27: '',
            day28: '',
            day29: 'н',
            day30: '',
            day31: '',
        },
        {
            name: 'Николаев Игорь Игоревич',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: 'н',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: 'н',
            day12: '',
            day13: 'н',
            day14: '',
            day15: '',
            day16: 'н',
            day17: 'н',
            day18: 'н',
            day19: '',
            day20: '',
            day21: '',
            day22: 'н',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: 'н',
            day27: '',
            day28: '',
            day29: 'н',
            day30: '',
            day31: '',
        },
        {
            name: 'Иванова Алина Викторовна',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: 'н',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: 'н',
            day12: '',
            day13: 'н',
            day14: '',
            day15: '',
            day16: 'н',
            day17: 'н',
            day18: 'н',
            day19: '',
            day20: '',
            day21: '',
            day22: 'н',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: 'н',
            day27: '',
            day28: '',
            day29: 'н',
            day30: '',
            day31: '',
        },
        {
            name: 'Петров Игорь Александрович',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: 'н',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: 'н',
            day12: '',
            day13: 'н',
            day14: '',
            day15: '',
            day16: 'н',
            day17: 'н',
            day18: 'н',
            day19: '',
            day20: '',
            day21: '',
            day22: 'н',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: 'н',
            day27: '',
            day28: '',
            day29: 'н',
            day30: '',
            day31: '',
        },
        {
            name: 'Сидорова Елена Владимировна',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: 'н',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: 'н',
            day12: '',
            day13: 'н',
            day14: '',
            day15: '',
            day16: 'н',
            day17: 'н',
            day18: 'н',
            day19: '',
            day20: '',
            day21: '',
            day22: 'н',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: 'н',
            day27: '',
            day28: '',
            day29: 'н',
            day30: '',
            day31: '',
        },
        {
            name: 'Козлов Илья Алексеевич',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: 'н',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: 'н',
            day12: '',
            day13: 'н',
            day14: '',
            day15: '',
            day16: 'н',
            day17: 'н',
            day18: 'н',
            day19: '',
            day20: '',
            day21: '',
            day22: 'н',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: 'н',
            day27: '',
            day28: '',
            day29: 'н',
            day30: '',
            day31: '',
        },
        {
            name: 'Иванова Мария Александровна',
            day21: '',
            day22: 'н',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: '',
            day27: '',
            day28: '',
            day29: 'н',
            day30: 'н',
        },
        {
            name: 'Петров Иван Петрович',
            day21: 'н',
            day22: '',
            day23: '',
            day24: 'н',
            day25: '',
            day26: 'н',
            day27: '',
            day28: 'н',
            day29: '',
            day30: '',
        },
        {
            name: 'Сидорова Екатерина Ивановна',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: 'н',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: 'н',
            day12: '',
            day13: 'н',
            day14: '',
            day15: '',
            day16: 'н',
            day17: 'н',
            day18: 'н',
            day19: '',
            day20: '',
            day21: '',
            day22: 'н',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: 'н',
            day27: '',
            day28: '',
            day29: 'н',
            day30: '',
            day31: '',
        },
        {
            name: 'Козлов Иван Александрович',
            day21: 'н',
            day22: '',
            day23: '',
            day24: 'н',
            day25: '',
            day26: 'н',
            day27: '',
            day28: 'н',
            day29: '',
            day30: '',
        },
        {
            name: 'Смирнова Анна Владимировна',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: 'н',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: 'н',
            day12: '',
            day13: 'н',
            day14: '',
            day15: '',
            day16: 'н',
            day17: 'н',
            day18: 'н',
            day19: '',
            day20: '',
            day21: '',
            day22: 'н',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: 'н',
            day27: '',
            day28: '',
            day29: 'н',
            day30: '',
            day31: '',
        },
        {
            name: 'Васильев Иван Сергеевич',
            day21: 'н',
            day22: '',
            day23: '',
            day24: 'н',
            day25: '',
            day26: 'н',
            day27: '',
            day28: 'н',
            day29: '',
            day30: '',
        },
        {
            name: 'Николаева Ольга Ивановна',
            day21: '',
            day22: '',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: '',
            day27: 'н',
            day28: '',
            day29: '',
            day30: 'н',
        },
        {
            name: 'Иванов Игорь Александрович',
            day1: 'н',
            day2: 'н',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: 'н',
            day21: '',
            day22: 'н',
            day23: '',
            day24: 'н',
            day25: 'н',
            day26: '',
            day27: 'н',
            day28: '',
            day29: 'н',
            day30: 'н',
            day31: 'н',
        },
        {
            name: 'Петрова Анна Петровна',
            day1: '',
            day2: '',
            day3: 'н',
            day4: '',
            day5: 'н',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: 'н',
            day12: '',
            day13: 'н',
            day14: '',
            day15: '',
            day16: 'н',
            day17: 'н',
            day18: 'н',
            day19: '',
            day20: '',
            day21: '',
            day22: 'н',
            day23: 'н',
            day24: '',
            day25: 'н',
            day26: 'н',
            day27: '',
            day28: '',
            day29: 'н',
            day30: '',
            day31: '',
        },
        {
            name: 'Сидоров Игорь Иванович',
        },
    ]; // данные с бд, потом добавить фетч или аксиос

    return (
        <div>
            <Header />
            <Outlet />
            <div className="students-title">
                <p>Посещаемость</p>
            </div>
            <AttendanceTable data={data} user="attendance" />
        </div>
    );
};
