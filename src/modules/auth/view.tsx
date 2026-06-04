import { Typography, Button, Input } from '#/components';
import { PatternFormat } from 'react-number-format';
import styles from './view.module.css';

export const AuthView = () => {
  return (
    <section className={styles.container}>
      <Typography tag='h1' variant='title'>
        LogIn
      </Typography>
      <Typography tag='p' variant='subtitle'>
        Enter your phone number to enter
        <br />
        your account
      </Typography>

      <Input placeholder='Numbers' format='+38 (0##) ### ## ##' component={PatternFormat} />

      <Button variant='contained'>Enter</Button>
    </section>
  );
};
