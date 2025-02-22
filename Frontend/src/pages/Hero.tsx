import { motion } from 'framer-motion';
import { RxDotsHorizontal } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();
    const GtoHome = () => {
        navigate('/home');
    };

    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className='bg-[#0b0b0b] overflow-hidden pl-[6vw] flex flex-col justify-between gap-[7vh] pt-[6vh]  text-[#fff] w-[100vw] h-full'>
            <div className='align-left text-left flex flex-col justify-left gap-[2vh] w-[80vw]'>
                <motion.p variants={textVariant} initial="hidden" whileInView="visible" className='text-bold text-6xl font-bold w-[70vw]'>
                    <img src='ACHIEVE.png' alt='ACHIEVE' />
                </motion.p>
                <motion.p variants={textVariant} initial="hidden" whileInView="visible" className='text-outline font-bold w-[50vw]'>
                    <img src='PEAK.png' alt='PEAK' />
                </motion.p>
                <motion.p variants={textVariant} initial="hidden" whileInView="visible" className='text-bold font-bold w-[50vw]'>
                    <img src='ALAK.png' alt='ALAK' />
                </motion.p>
            </div>
            
            <motion.div variants={textVariant} initial="hidden" whileInView="visible" className='pr-[4vw] w-[80vw]'>
                <p className='text-xl'>
                    "Alak Hostel is more than just a place to stay—it's a community where friendships grow, memories are made, and every day is an experience. From late-night conversations to shared celebrations, Alak offers a home-like atmosphere that fosters camaraderie, comfort, and unforgettable moments."
                </p>
            </motion.div>
            
            <div className='w-[100vw] pb-[5vh] pr-[10vw] flex flex-row align-middle items-end justify-between'>
                <motion.div variants={textVariant} initial="hidden" whileInView="visible" className='w-[] text-3xl text-[#706b6b]'>
                    <RxDotsHorizontal />
                </motion.div>
                <motion.button
                    onClick={GtoHome}
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    className='px-[3vw] text-[#000] text-xl py-[1vh] rounded-xl bg-[#fff]'
                >
                    LessGo
                </motion.button>
            </div>
        </div>
    );
};

export default Hero;
