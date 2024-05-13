import React, { useState } from 'react';
import styles from './greetPage.module.scss';
import Logo from '../../assets/image/logo.png';
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

type PropTypes = {
    title: string;
  };
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const GreetPage: React.FC<PropTypes> = ({ title }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const exit = () => {
        localStorage.clear();
        navigate('/');
    }
    return (<>
       
        <div className={styles.container}>
            <p className={styles.container__greet}>{title}</p>
        <p className={styles.container__title}> Lorby - твой личный репетитор</p>
            <img src={Logo} alt="logo" className={styles.logo} />
            <button
                  onClick={() => setOpen(true)}
            >Выйти</button>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
                <Box sx={style}>
                    <div className={styles.modalContainer}>
                    <h2>Выйти?</h2>
                    <h3>Точно выйти?</h3>                    
                    <button onClick={exit} className={styles.modal_btn}>Да точно</button>
                        <button>нет, остаться</button>
                        </div>
        </Box>
      </Modal>
        </div>
     
      </>   
  )
}

export default GreetPage;