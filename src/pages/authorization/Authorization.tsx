import React, { useState } from 'react';
import { SguSvg } from '../../assets/SguSvg.tsx';
import { NavLink, useNavigate } from 'react-router-dom';
import './Authorization.css';

type User = {
    username: string;
    password: string;
};

export const Authorization: React.FC = () => {
    // @ts-ignore
    const [user, setUser] = useState<User>({ username: '', password: '' });
    // @ts-ignore
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // @ts-ignore
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
        if (name === 'auth-email') {
            setEmail(value);
        } else if (name === 'auth-pass') {
            setPassword(value);
        }
    };

    const handleLogin = () => {
        // Проверяем, что пользователь ввел правильные учетные данные
        if (email === 'admin@mail.ru' && password === 'password') {
            setIsAdmin(true);
            navigate('/deanery');
            console.log('admin');
        } else if (email === 'student@mail.ru' && password === 'password') {
            setIsAdmin(false);
            navigate('/attendance');
            console.log('student');
        } else {
            console.log('Неправильное имя пользователя или пароль', isLoggedIn);
        }
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            event.target.placeholder = '';
        }
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            if (event.target.name === 'auth-email') {
                event.target.placeholder = 'Введите логин';
            } else if (event.target.name === 'auth-pass') {
                event.target.placeholder = 'Введите пароль';
            }
        }
    };

    return (
        <section className="auth-section">
            <SguSvg />
            <p className="auth-head-text">Вход в личный кабинет</p>
            <p className="auth-info-text">
                Введите данные вашей учетной записи
            </p>
            <form className="auth-form" action="#" method="post">
                <label className="auth-text-label">Логин</label>
                <input
                    className="auth-input"
                    type="email"
                    name="auth-email"
                    placeholder="Введите Логин"
                    required
                    value={email}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <label className="auth-text-label">Пароль</label>
                <input
                    className="auth-input"
                    type="password"
                    name="auth-pass"
                    placeholder="Введите Пароль"
                    required
                    value={password}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
            </form>
            <div className="auth-submit">
                <button
                    className="auth-submit-button"
                    type="submit"
                    name="auth-submit"
                    onClick={handleLogin}
                >
                    Войти
                </button>
            </div>
            <NavLink to="/pass-recovery" className="auth-forgot-text">
                Забыли логин или пароль?
            </NavLink>
        </section>
    );
};
